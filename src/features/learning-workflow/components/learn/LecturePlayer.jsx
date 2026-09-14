import { useCallback, useEffect, useRef, useState } from "react"

import VideoPlayer from "../../../../components/video/VideoPlayer"

const PROGRESS_SAVE_INTERVAL = 10000

const LecturePlayer = ({
    courseId,
    lecture,
    selectedLecture,
    progress,
    isLoading = false,
    isReady = false,
    onProgressUpdated,
    onLectureCompleted,
}) => {
    /*
     * ============================================================
     * Video.js player
     * ============================================================
     */

    const playerRef = useRef(null)

    /*
     * Tracks whether Video.js has actually created and exposed
     * the player instance through onReady.
     */

    const [isPlayerReady, setIsPlayerReady] = useState(false)

    /*
     * ============================================================
     * Latest callback refs
     * ============================================================
     *
     * Progress updates cause React state changes in useProgress.
     *
     * Keep the latest callbacks in refs so those state changes
     * do not force the Video.js event listeners to be recreated.
     */

    const onProgressUpdatedRef = useRef(onProgressUpdated)

    const onLectureCompletedRef = useRef(onLectureCompleted)

    useEffect(() => {
        onProgressUpdatedRef.current = onProgressUpdated

        onLectureCompletedRef.current = onLectureCompleted
    }, [onProgressUpdated, onLectureCompleted])

    /*
     * ============================================================
     * Latest progress ref
     * ============================================================
     *
     * `progress` changes after every successful PATCH.
     *
     * We need access to the latest progress when a lecture changes,
     * but we must NOT make the lecture initialization effect depend
     * directly on `progress`.
     *
     * Otherwise every PATCH would cause that effect to run again.
     */

    const progressRef = useRef(progress)

    useEffect(() => {
        progressRef.current = progress
    }, [progress])

    /*
     * ============================================================
     * Current lecture
     * ============================================================
     */

    const currentLectureIdRef = useRef(null)

    /*
     * ============================================================
     * Local playback progress
     * ============================================================
     *
     * These refs are the source of truth while the video is
     * playing.
     *
     * They must NOT be reset whenever React receives a new
     * progress object after a PATCH.
     */

    const lastPositionRef = useRef(0)

    const watchedDurationRef = useRef(0)

    const lastSavedPositionRef = useRef(0)

    /*
     * ============================================================
     * Progress interval
     * ============================================================
     */

    const progressSaveIntervalRef = useRef(null)

    /*
     * ============================================================
     * Completion protection
     * ============================================================
     */

    const completingLectureIdRef = useRef(null)

    const completedLectureIdRef = useRef(null)

    /*
     * ============================================================
     * Find saved progress for selected lecture
     * ============================================================
     *
     * IMPORTANT:
     *
     * This callback reads progress from progressRef instead of
     * depending directly on the React `progress` object.
     *
     * Therefore its identity only changes when the selected
     * lecture changes.
     */

    const getLectureProgress = useCallback(() => {
        const lectureId = selectedLecture?._id

        if (!lectureId) {
            return null
        }

        return (
            progressRef.current?.lectures?.find((item) => {
                const progressLectureId = item?.lecture?._id ?? item?.lecture

                return progressLectureId?.toString() === lectureId?.toString()
            }) ?? null
        )
    }, [selectedLecture?._id])

    /*
     * ============================================================
     * Save current playback progress
     * ============================================================
     */

    const saveProgress = useCallback(
        async ({ force = false } = {}) => {
            const player = playerRef.current

            const lectureId = currentLectureIdRef.current

            if (!player || !courseId || !lectureId) {
                return
            }

            /*
             * Make sure this player still belongs to the currently
             * selected lecture.
             */

            if (selectedLecture?._id !== lectureId) {
                return
            }

            const currentTime = player.currentTime()

            const duration = player.duration()

            if (
                !Number.isFinite(currentTime) ||
                !Number.isFinite(duration) ||
                duration <= 0
            ) {
                return
            }

            const watchedDuration = Math.max(
                watchedDurationRef.current,
                currentTime
            )

            /*
             * Avoid unnecessary PATCH requests during the normal
             * 10-second interval.
             *
             * Pause / ended / unmount can force a save.
             */

            if (
                !force &&
                Math.abs(currentTime - lastSavedPositionRef.current) < 1
            ) {
                return
            }

            lastPositionRef.current = currentTime

            watchedDurationRef.current = watchedDuration

            /*
             * Update this before awaiting the API request.
             *
             * This prevents another interval from deciding that
             * the same position still needs to be saved.
             */

            lastSavedPositionRef.current = currentTime

            await onProgressUpdatedRef.current?.({
                courseId,
                lectureId,
                lastPosition: currentTime,
                watchedDuration,
            })
        },
        [courseId, selectedLecture?._id]
    )

    /*
     * ============================================================
     * Start progress interval
     * ============================================================
     */

    const startProgressInterval = useCallback(() => {
        if (progressSaveIntervalRef.current) {
            return
        }

        progressSaveIntervalRef.current = setInterval(() => {
            /*
             * Only save while the video is actually playing.
             *
             * Pause has its own immediate save handler.
             */

            const player = playerRef.current

            if (!player || player.paused()) {
                return
            }

            saveProgress()
        }, PROGRESS_SAVE_INTERVAL)
    }, [saveProgress])

    /*
     * ============================================================
     * Stop progress interval
     * ============================================================
     */

    const stopProgressInterval = useCallback(() => {
        if (progressSaveIntervalRef.current) {
            clearInterval(progressSaveIntervalRef.current)

            progressSaveIntervalRef.current = null
        }
    }, [])

    /*
     * ============================================================
     * Initialize local state for selected lecture
     * ============================================================
     *
     * IMPORTANT:
     *
     * This effect must NOT depend on the React `progress` object.
     *
     * A successful PATCH changes `progress`, but that must NOT
     * reset the player or remove the event listeners.
     *
     * `getLectureProgress()` reads the latest progress through
     * `progressRef`.
     */

    useEffect(() => {
        const lectureId = selectedLecture?._id ?? null

        currentLectureIdRef.current = lectureId

        const currentLectureProgress = getLectureProgress()

        const savedPosition = currentLectureProgress?.lastPosition ?? 0

        const savedWatchedDuration =
            currentLectureProgress?.watchedDuration ?? 0

        lastPositionRef.current = savedPosition

        watchedDurationRef.current = savedWatchedDuration

        lastSavedPositionRef.current = savedPosition

        completingLectureIdRef.current = null

        completedLectureIdRef.current = currentLectureProgress?.isCompleted
            ? lectureId
            : null

        /*
         * A new lecture gets a new Video.js instance.
         *
         * The new player is not ready until VideoPlayer calls
         * onReady, so reset the player-ready state here.
         */

        setIsPlayerReady(false)

        /*
         * Stop the previous lecture's timer.
         */

        stopProgressInterval()
    }, [selectedLecture?._id, getLectureProgress, stopProgressInterval])

    /*
     * ============================================================
     * Attach Video.js learning events
     * ============================================================
     */

    useEffect(() => {
        const player = playerRef.current

        if (!isPlayerReady || !player || !selectedLecture?._id) {
            return
        }

        /*
         * --------------------------------------------------------
         * play
         * --------------------------------------------------------
         */

        const handlePlay = () => {
            startProgressInterval()
        }

        /*
         * --------------------------------------------------------
         * pause
         * --------------------------------------------------------
         */

        const handlePause = () => {
            stopProgressInterval()

            saveProgress({
                force: true,
            })
        }

        /*
         * --------------------------------------------------------
         * timeupdate
         * --------------------------------------------------------
         *
         * Only update local refs.
         *
         * The actual backend PATCH happens from the 10-second
         * interval.
         */

        const handleTimeUpdate = () => {
            const currentTime = player.currentTime()

            const duration = player.duration()

            if (
                !Number.isFinite(currentTime) ||
                !Number.isFinite(duration) ||
                duration <= 0
            ) {
                return
            }

            lastPositionRef.current = currentTime

            watchedDurationRef.current = Math.max(
                watchedDurationRef.current,
                currentTime
            )
        }

        /*
         * --------------------------------------------------------
         * ended
         * --------------------------------------------------------
         *
         * 1. Save final progress.
         * 2. Mark lecture completed.
         */

        const handleEnded = async () => {
            stopProgressInterval()

            await saveProgress({
                force: true,
            })

            const lectureId = currentLectureIdRef.current

            if (!lectureId) {
                return
            }

            /*
             * Already completed.
             */

            if (completedLectureIdRef.current === lectureId) {
                return
            }

            /*
             * Completion request already running.
             */

            if (completingLectureIdRef.current === lectureId) {
                return
            }

            completingLectureIdRef.current = lectureId

            try {
                const result = await onLectureCompletedRef.current?.({
                    courseId,
                    lectureId,
                })

                if (result?.success) {
                    completedLectureIdRef.current = lectureId
                }
            } finally {
                completingLectureIdRef.current = null
            }
        }

        player.on("play", handlePlay)

        player.on("pause", handlePause)

        player.on("timeupdate", handleTimeUpdate)

        player.on("ended", handleEnded)

        /*
         * If the player is already playing when the handlers are
         * attached, start the interval immediately.
         */

        if (!player.paused()) {
            startProgressInterval()
        }

        return () => {
            player.off("play", handlePlay)

            player.off("pause", handlePause)

            player.off("timeupdate", handleTimeUpdate)

            player.off("ended", handleEnded)

            stopProgressInterval()
        }
    }, [
        isPlayerReady,
        selectedLecture?._id,
        courseId,
        saveProgress,
        startProgressInterval,
        stopProgressInterval,
    ])

    /*
     * ============================================================
     * Video.js ready
     * ============================================================
     */

    const handleReady = useCallback(
        (player) => {
            playerRef.current = player

            /*
             * Tell React that the actual Video.js instance is now
             * available.
             */

            setIsPlayerReady(true)

            const lectureId = selectedLecture?._id

            if (!lectureId) {
                return
            }

            const currentLectureProgress = getLectureProgress()

            const savedPosition = currentLectureProgress?.lastPosition ?? 0

            /*
             * Restore the saved position once video metadata is
             * available.
             */

            const restorePosition = () => {
                /*
                 * Do not restore if the player was changed to
                 * another lecture.
                 */

                if (currentLectureIdRef.current !== lectureId) {
                    return
                }

                const duration = player.duration()

                if (!Number.isFinite(duration) || duration <= 0) {
                    return
                }

                if (!Number.isFinite(savedPosition) || savedPosition <= 0) {
                    return
                }

                const safePosition = Math.min(
                    savedPosition,
                    Math.max(duration - 0.5, 0)
                )

                player.currentTime(safePosition)

                lastPositionRef.current = safePosition

                lastSavedPositionRef.current = safePosition
            }

            /*
             * Video.js already has metadata.
             */

            if (player.readyState() >= 1) {
                restorePosition()

                return
            }

            /*
             * Otherwise wait until metadata is available.
             */

            player.one("loadedmetadata", restorePosition)
        },
        [selectedLecture?._id, getLectureProgress]
    )

    /*
     * ============================================================
     * Save latest progress on unmount
     * ============================================================
     *
     * This is best effort.
     *
     * Periodic, pause and ended saves are the primary mechanisms.
     */

    useEffect(() => {
        return () => {
            const player = playerRef.current

            const lectureId = currentLectureIdRef.current

            if (player && lectureId && courseId) {
                const currentTime = player.currentTime()

                const duration = player.duration()

                if (
                    Number.isFinite(currentTime) &&
                    Number.isFinite(duration) &&
                    duration > 0
                ) {
                    onProgressUpdatedRef.current?.({
                        courseId,
                        lectureId,
                        lastPosition: currentTime,
                        watchedDuration: Math.max(
                            watchedDurationRef.current,
                            currentTime
                        ),
                    })
                }
            }

            stopProgressInterval()

            playerRef.current = null
        }
    }, [courseId, stopProgressInterval])

    /*
     * ============================================================
     * UI states
     * ============================================================ */

    if (isLoading) {
        return (
            <div
                className="
                relative
                flex
               aspect-video
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                shadow-[0_16px_40px_rgba(0,0,0,0.22)]
                "
            >
                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_45%)]
                    "
                />

                <div className="relative text-center">
                    <div
                        className="
                            mx-auto
                            h-9
                            w-9
                            animate-spin
                            rounded-full
                            border-2
                            border-background-elevated
                            border-t-accent-primary
                        "
                    />

                    <p
                        className="
                            mt-5
                            font-body
                            text-xs
                            font-medium
                            tracking-wide
                            text-text-secondary
                        "
                    >
                        Preparing lecture...
                    </p>
                </div>
            </div>
        )
    }

    if (!isReady || !lecture?.video?.url) {
        return (
            <div
                className="
                relative
                flex
                aspect-video
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                "
            >
                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.07),transparent_42%)]
                    "
                />

                <div className="relative text-center">
                    <div
                        className="
                            mx-auto
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-border-subtle
                            bg-background-elevated
                            shadow-lg
                            shadow-black/10
                        "
                    >
                        <span
                            className="
                                h-2
                                w-2
                                rounded-full
                                bg-accent-primary
                                shadow-[0_0_14px_rgba(99,102,241,0.7)]
                            "
                        />
                    </div>

                    <p
                        className="
                            mt-5
                            font-body
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                    >
                        Select a lecture
                    </p>

                    <p
                        className="
                            mt-1.5
                            font-body
                            text-xs
                            text-text-muted
                        "
                    >
                        Your lesson will appear here.
                    </p>
                </div>
            </div>
        )
    }

    const video = lecture.video

    return (
        <div
            className="
            aspect-video
            w-full
            overflow-hidden
            rounded-xl
            border
            border-border-subtle
            bg-black
            shadow-[0_16px_40px_rgba(0,0,0,0.28)]

            "
        >
            <VideoPlayer
                key={lecture._id}
                src={video.url}
                type={video.format}
                poster={video.thumbnailUrl}
                controls
                autoplay={false}
                preload="metadata"
                onReady={handleReady}
            />
        </div>
    )
}

export default LecturePlayer
