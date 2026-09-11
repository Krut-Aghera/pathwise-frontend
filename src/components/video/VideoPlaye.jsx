import { useEffect, useRef } from "react"

import videojs from "video.js"

import "video.js/dist/video-js.css"

import formatDuration from "../../utils/format-media-duration"

const DEFAULT_PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]

const DEFAULT_SKIP_SECONDS = 5

const VideoPlayer = ({
    src,
    type,
    poster = "",
    controls = true,
    autoplay = false,
    muted = false,
    loop = false,
    preload = "metadata",
    playbackRates = DEFAULT_PLAYBACK_RATES,
    skipSeconds = DEFAULT_SKIP_SECONDS,
    onReady,
    onDurationChange,
    onLoadStart,
    onLoadedMetadata,
    onError,
    className = "",
}) => {
    const videoElementRef = useRef(null)
    const playerRef = useRef(null)

    /*
     * Keep the latest callbacks without recreating
     * the Video.js player.
     */
    const callbacksRef = useRef({
        onReady,
        onDurationChange,
        onLoadStart,
        onLoadedMetadata,
        onError,
    })

    useEffect(() => {
        callbacksRef.current = {
            onReady,
            onDurationChange,
            onLoadStart,
            onLoadedMetadata,
            onError,
        }
    }, [onReady, onDurationChange, onLoadStart, onLoadedMetadata, onError])

    /*
     * Initialize Video.js once.
     */
    useEffect(() => {
        if (!videoElementRef.current || playerRef.current) {
            return
        }

        const player = videojs(videoElementRef.current, {
            controls,
            autoplay,
            muted,
            loop,

            responsive: true,
            fluid: true,

            preload,

            playbackRates,

            /*
             * We handle keyboard shortcuts ourselves.
             *
             * Space     -> Play / Pause
             * F         -> Fullscreen
             * Left      -> Skip backward
             * Right     -> Skip forward
             */
            userActions: {
                hotkeys: false,
            },

            controlBar: {
                children: [
                    "playToggle",
                    "currentTimeDurationDisplay",
                    "progressControl",
                    "volumePanel",
                    "playbackRateMenuButton",
                    "pictureInPictureToggle",
                    "fullscreenToggle",
                ],
            },

            sources: buildSource(src, type),
        })

        playerRef.current = player

        /*
         * Make the Video.js player keyboard focusable.
         */
        player.el().setAttribute("tabindex", "0")

        /*
         * ========================================================
         * Keyboard Controls
         * ========================================================
         *
         * Space       -> Play / Pause
         * ArrowLeft   -> Skip backward
         * ArrowRight  -> Skip forward
         * F           -> Toggle fullscreen
         */
        const handleKeyDown = (event) => {
            const target = event.target

            /*
             * Don't interfere with keyboard input when the user
             * is typing inside an input, textarea, select, etc.
             */
            if (
                target instanceof HTMLInputElement ||
                target instanceof HTMLTextAreaElement ||
                target instanceof HTMLSelectElement ||
                target?.isContentEditable
            ) {
                return
            }

            switch (event.key) {
                /*
                 * ==================================================
                 * Space -> Play / Pause
                 * ==================================================
                 */
                case " ":
                case "Spacebar": {
                    event.preventDefault()

                    if (player.paused()) {
                        const playPromise = player.play()

                        /*
                         * Some browsers return a Promise from play().
                         * Catch autoplay/policy rejection so it doesn't
                         * create an unhandled Promise rejection.
                         */
                        if (playPromise?.catch) {
                            playPromise.catch(() => {})
                        }
                    } else {
                        player.pause()
                    }

                    break
                }

                /*
                 * ==================================================
                 * Arrow Right -> Skip Forward
                 * ==================================================
                 */
                case "ArrowRight": {
                    event.preventDefault()

                    const currentTime = player.currentTime()
                    const duration = player.duration()

                    if (
                        Number.isFinite(currentTime) &&
                        Number.isFinite(duration)
                    ) {
                        const nextTime = Math.min(
                            currentTime + skipSeconds,
                            duration
                        )

                        player.currentTime(nextTime)
                    }

                    break
                }

                /*
                 * ==================================================
                 * Arrow Left -> Skip Backward
                 * ==================================================
                 */
                case "ArrowLeft": {
                    event.preventDefault()

                    const currentTime = player.currentTime()

                    if (Number.isFinite(currentTime)) {
                        const nextTime = Math.max(currentTime - skipSeconds, 0)

                        player.currentTime(nextTime)
                    }

                    break
                }

                /*
                 * ==================================================
                 * F -> Toggle Fullscreen
                 * ==================================================
                 */
                case "f":
                case "F": {
                    event.preventDefault()

                    if (player.isFullscreen()) {
                        player.exitFullscreen()
                    } else {
                        player.requestFullscreen()
                    }

                    break
                }

                default:
                    break
            }
        }

        player.el().addEventListener("keydown", handleKeyDown)

        /*
         * ========================================================
         * Video.js Events
         * ========================================================
         */

        const handleReady = () => {
            callbacksRef.current.onReady?.(player)
        }

        const handleLoadStart = () => {
            callbacksRef.current.onLoadStart?.()
        }

        const handleLoadedMetadata = () => {
            const duration = getValidDuration(player)

            callbacksRef.current.onLoadedMetadata?.({
                duration,
            })

            if (duration !== null) {
                callbacksRef.current.onDurationChange?.(duration)
            }
        }

        const handleDurationChange = () => {
            const duration = getValidDuration(player)

            if (duration !== null) {
                callbacksRef.current.onDurationChange?.(duration)
            }
        }

        const handleError = () => {
            callbacksRef.current.onError?.(player.error())
        }

        player.ready(handleReady)

        player.on("loadstart", handleLoadStart)
        player.on("loadedmetadata", handleLoadedMetadata)
        player.on("durationchange", handleDurationChange)
        player.on("error", handleError)

        /*
         * ========================================================
         * Cleanup
         * ========================================================
         */
        return () => {
            player.el().removeEventListener("keydown", handleKeyDown)

            player.off("loadstart", handleLoadStart)
            player.off("loadedmetadata", handleLoadedMetadata)
            player.off("durationchange", handleDurationChange)
            player.off("error", handleError)

            if (!player.isDisposed()) {
                player.dispose()
            }

            playerRef.current = null
        }
    }, [])

    /*
     * ============================================================
     * Update source when src/type changes.
     * ============================================================
     */
    useEffect(() => {
        const player = playerRef.current

        if (!player) {
            return
        }

        if (!src) {
            player.reset()
            return
        }

        const nextSource = buildSource(src, type)
        const currentSource = player.currentSource()

        if (
            currentSource?.src === nextSource[0]?.src &&
            currentSource?.type === nextSource[0]?.type
        ) {
            return
        }

        player.src(nextSource)
    }, [src, type])

    /*
     * ============================================================
     * Update poster.
     * ============================================================
     */
    useEffect(() => {
        const player = playerRef.current

        if (!player) {
            return
        }

        player.poster(poster || "")
    }, [poster])

    /*
     * ============================================================
     * Update autoplay.
     * ============================================================
     */
    useEffect(() => {
        const player = playerRef.current

        if (!player) {
            return
        }

        player.autoplay(autoplay)
    }, [autoplay])

    /*
     * ============================================================
     * Update muted.
     * ============================================================
     */
    useEffect(() => {
        const player = playerRef.current

        if (!player) {
            return
        }

        player.muted(muted)
    }, [muted])

    /*
     * ============================================================
     * Update loop.
     * ============================================================
     */
    useEffect(() => {
        const player = playerRef.current

        if (!player) {
            return
        }

        player.loop(loop)
    }, [loop])

    return (
        <div className={`video-player w-full ${className}`}>
            <div data-vjs-player>
                <video
                    ref={videoElementRef}
                    className="video-js vjs-big-play-centered"
                    playsInline
                />
            </div>
        </div>
    )
}

/*
 * ================================================================
 * Current Time / Duration
 * ================================================================
 *
 * Displays:
 *
 *     02:15 / 35:00
 *
 * Position:
 *
 *     [Play] [02:15 / 35:00] [========== Progress ==========]
 *
 * ================================================================
 */

const Component = videojs.getComponent("Component")

class CurrentTimeDurationDisplay extends Component {
    constructor(player, options) {
        super(player, options)

        this.update = this.update.bind(this)

        player.on("timeupdate", this.update)
        player.on("loadedmetadata", this.update)
        player.on("durationchange", this.update)
        player.on("seeking", this.update)
        player.on("seeked", this.update)
    }

    createEl() {
        const element = videojs.dom.createEl("div", {
            className: "vjs-current-time-duration",
        })

        element.setAttribute("aria-label", "Current time and duration")

        return element
    }

    update() {
        const player = this.player()

        const currentTime = player.currentTime()
        const duration = player.duration()

        const formattedCurrentTime = Number.isFinite(currentTime)
            ? formatDuration(currentTime)
            : "0:00"

        const formattedDuration = Number.isFinite(duration)
            ? formatDuration(duration)
            : "0:00"

        this.el().textContent = `${formattedCurrentTime} / ${formattedDuration}`
    }

    dispose() {
        const player = this.player()

        player.off("timeupdate", this.update)
        player.off("loadedmetadata", this.update)
        player.off("durationchange", this.update)
        player.off("seeking", this.update)
        player.off("seeked", this.update)

        super.dispose()
    }
}

/*
 * Register the component only once.
 */
if (!videojs.getComponent("CurrentTimeDurationDisplay")) {
    videojs.registerComponent(
        "CurrentTimeDurationDisplay",
        CurrentTimeDurationDisplay
    )
}

/*
 * ================================================================
 * Helpers
 * ================================================================
 */

const getValidDuration = (player) => {
    const duration = player.duration()

    if (
        typeof duration !== "number" ||
        !Number.isFinite(duration) ||
        duration <= 0
    ) {
        return null
    }

    return duration
}

const buildSource = (src, type) => {
    if (!src) {
        return []
    }

    return [
        {
            src,
            type: type || getVideoMimeType(src),
        },
    ]
}

const getVideoMimeType = (src) => {
    if (!src) {
        return "video/mp4"
    }

    const cleanSrc = src.split("?")[0].toLowerCase()

    if (cleanSrc.endsWith(".mp4")) {
        return "video/mp4"
    }

    if (cleanSrc.endsWith(".webm")) {
        return "video/webm"
    }

    if (cleanSrc.endsWith(".mov") || cleanSrc.endsWith(".qt")) {
        return "video/quicktime"
    }

    if (cleanSrc.endsWith(".m3u8")) {
        return "application/x-mpegURL"
    }

    /*
     * Cloudinary URLs frequently don't contain
     * the actual file extension.
     */
    return "video/mp4"
}

export default VideoPlayer
