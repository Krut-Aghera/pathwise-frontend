import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useParams } from "react-router-dom"

import ErrorState from "../../../components/ui/ErrorState"

import useCourse from "../../course/hooks/useCourse"
import useEnrollment from "../../enrollment-workflow/hooks/useEnrollment"
import useLecture from "../../lecture/hooks/useLecture"
import useProgress from "../hooks/useProgress"

import LearningHeader from "../components/learn/LearningHeader"
import LearningSidebar from "../components/learn/LearningSidebar"
import LearningContent from "../components/learn/LearningContent"

const LearningPage = () => {
    const { courseId } = useParams()

    /*
     * ============================================================
     * Course
     * ============================================================
     */

    const {
        currentCourse,
        fetchCurrentCourse,
        isCurrentCourseLoading,
        isCurrentCourseFetching,
        isCurrentCourseSuccess,
        isCurrentCourseError,
        currentCourseError,
    } = useCourse()

    /*
     * ============================================================
     * Enrollment
     * ============================================================
     */

    const {
        isEnrolled,
        isLoading: isEnrollmentLoading,
        isFetching: isEnrollmentFetching,
        isSuccess: isEnrollmentSuccess,
        isError: isEnrollmentError,
        error: enrollmentError,
        refetch: refetchEnrollments,
    } = useEnrollment()

    /*
     * ============================================================
     * Progress
     * ============================================================
     */

    const {
        progress,
        progressMeta,

        fetchCourseProgress,
        initializeLectureProgress,
        updateLectureProgress,
        completeLectureProgress,

        isProgressLoading,
        isProgressFetching,
        isProgressSuccess,
        isProgressError,
        progressError,

        isInitializingLecture,
    } = useProgress()

    /*
     * ============================================================
     * Learning state
     * ============================================================
     */

    const [selectedLectureId, setSelectedLectureId] = useState(null)

    const [initializedLectureId, setInitializedLectureId] = useState(null)

    const [lectureInitializationError, setLectureInitializationError] =
        useState(null)

    /*
     * ============================================================
     * Initialization guard
     * ============================================================
     *
     * Prevents duplicate initialization requests for the same
     * lecture during the current page lifecycle.
     */

    const initializingLectureIdRef = useRef(null)

    /*
     * ============================================================
     * Private student lecture
     * ============================================================
     */

    const {
        studentLecture,

        isStudentLectureLoading,
        isStudentLectureFetching,
        isStudentLectureSuccess,

        isStudentLectureError,
        studentLectureError,

        refetchStudentLecture,
    } = useLecture({
        studentLectureId: initializedLectureId,
    })

    /*
     * ============================================================
     * Derived course data
     * ============================================================
     */

    const sections = useMemo(
        () => currentCourse?.sections ?? [],
        [currentCourse]
    )

    const publishedLectures = useMemo(
        () => sections.flatMap((section) => section.lectures ?? []),
        [sections]
    )

    const selectedLecture = useMemo(
        () =>
            publishedLectures.find(
                (lecture) => lecture._id === selectedLectureId
            ) ?? null,
        [publishedLectures, selectedLectureId]
    )

    /*
     * ============================================================
     * Enrollment state
     * ============================================================
     */

    const enrolled = useMemo(() => {
        if (!courseId || !isEnrollmentSuccess) {
            return null
        }

        return isEnrolled(courseId)
    }, [courseId, isEnrollmentSuccess, isEnrolled])

    /*
     * ============================================================
     * Initial course/progress fetch
     * ============================================================
     */

    useEffect(() => {
        if (!courseId || !isEnrollmentSuccess || !enrolled) {
            return
        }

        fetchCurrentCourse(courseId)
        fetchCourseProgress(courseId)
    }, [
        courseId,
        isEnrollmentSuccess,
        enrolled,
        fetchCurrentCourse,
        fetchCourseProgress,
    ])

    /*
     * ============================================================
     * Select initial lecture
     * ============================================================
     */

    useEffect(() => {
        if (
            !isCurrentCourseSuccess ||
            !isProgressSuccess ||
            selectedLectureId ||
            publishedLectures.length === 0
        ) {
            return
        }

        const lastAccessedLectureId =
            progress?.lastAccessedLecture?._id ?? progress?.lastAccessedLecture

        const lastAccessedLecture = lastAccessedLectureId
            ? publishedLectures.find(
                  (lecture) => lecture._id === lastAccessedLectureId
              )
            : null

        const initialLecture = lastAccessedLecture ?? publishedLectures[0]

        setSelectedLectureId(initialLecture._id)
    }, [
        isCurrentCourseSuccess,
        isProgressSuccess,
        selectedLectureId,
        publishedLectures,
        progress,
    ])

    /*
     * ============================================================
     * Initialize selected lecture
     * ============================================================
     */

    useEffect(() => {
        if (
            !courseId ||
            !selectedLectureId ||
            initializedLectureId === selectedLectureId
        ) {
            return
        }

        /*
         * A request for this exact lecture is already in flight.
         */
        if (initializingLectureIdRef.current === selectedLectureId) {
            return
        }

        /*
         * Another lecture is currently being initialized.
         */
        if (
            initializingLectureIdRef.current &&
            initializingLectureIdRef.current !== selectedLectureId
        ) {
            return
        }

        let cancelled = false

        initializingLectureIdRef.current = selectedLectureId

        setLectureInitializationError(null)

        const initialize = async () => {
            const result = await initializeLectureProgress({
                courseId,
                lectureId: selectedLectureId,
            })

            if (cancelled) {
                return
            }

            /*
             * Only clear the guard if this is still the request
             * represented by the ref.
             */
            if (initializingLectureIdRef.current === selectedLectureId) {
                initializingLectureIdRef.current = null
            }

            if (result.success) {
                setInitializedLectureId(selectedLectureId)

                return
            }

            setLectureInitializationError(result.error)
        }

        initialize()

        return () => {
            cancelled = true

            /*
             * Do not clear the ref here.
             *
             * The request may still be in flight and clearing it
             * could allow another effect execution to create a
             * duplicate POST.
             */
        }
    }, [
        courseId,
        selectedLectureId,
        initializedLectureId,
        initializeLectureProgress,
    ])

    /*
     * ============================================================
     * Lecture selection
     * ============================================================
     */

    const handleLectureSelect = useCallback(
        (lectureId) => {
            if (!lectureId) {
                return
            }

            /*
             * Already initialized lecture.
             */
            if (lectureId === initializedLectureId) {
                setSelectedLectureId(lectureId)

                return
            }

            /*
             * New lecture becomes the current intent.
             */
            initializingLectureIdRef.current = null

            setLectureInitializationError(null)

            setSelectedLectureId(lectureId)

            setInitializedLectureId(null)
        },
        [initializedLectureId]
    )

    /*
     * ============================================================
     * Progress update handler
     * ============================================================
     */

    const handleProgressUpdated = useCallback(
        async ({
            courseId: progressCourseId,
            lectureId,
            lastPosition,
            watchedDuration,
        }) => {
            return updateLectureProgress({
                courseId: progressCourseId,
                lectureId,
                lastPosition,
                watchedDuration,
            })
        },
        [updateLectureProgress]
    )

    /*
     * ============================================================
     * Lecture completion handler
     * ============================================================
     */

    const handleLectureCompleted = useCallback(
        async ({ courseId: completionCourseId, lectureId }) => {
            return completeLectureProgress({
                courseId: completionCourseId,
                lectureId,
            })
        },
        [completeLectureProgress]
    )

    /*
     * ============================================================
     * Retry
     * ============================================================
     */

    const handleRetry = useCallback(() => {
        if (!courseId) {
            return
        }

        refetchEnrollments()

        if (enrolled) {
            fetchCurrentCourse(courseId)
            fetchCourseProgress(courseId)
        }
    }, [
        courseId,
        enrolled,
        refetchEnrollments,
        fetchCurrentCourse,
        fetchCourseProgress,
    ])

    /*
     * ============================================================
     * Initial loading
     * ============================================================
     */

    const isInitialLoading =
        isEnrollmentLoading ||
        isEnrollmentFetching ||
        (isEnrollmentSuccess &&
            enrolled &&
            (isCurrentCourseLoading ||
                isCurrentCourseFetching ||
                isProgressLoading ||
                isProgressFetching))

    /*
     * ============================================================
     * Errors
     * ============================================================
     */

    if (isEnrollmentError) {
        return (
            <ErrorState
                title="Unable to verify enrollment"
                message={
                    enrollmentError?.message ??
                    "We couldn't verify your enrollment. Please try again."
                }
                onRetry={handleRetry}
            />
        )
    }

    if (isEnrollmentSuccess && !enrolled) {
        return (
            <ErrorState
                title="Course access unavailable"
                message="You are not enrolled in this course."
            />
        )
    }

    if (isCurrentCourseError) {
        return (
            <ErrorState
                title="Unable to load course"
                message={
                    currentCourseError?.message ??
                    "We couldn't load this course. Please try again."
                }
                onRetry={handleRetry}
            />
        )
    }

    if (isProgressError) {
        return (
            <ErrorState
                title="Unable to load your progress"
                message={
                    progressError?.message ??
                    "We couldn't load your course progress."
                }
                onRetry={handleRetry}
            />
        )
    }

    /*
     * ============================================================
     * Initial loading UI
     * ============================================================
     */

    if (isInitialLoading || !isCurrentCourseSuccess || !isProgressSuccess) {
        return (
            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-background-base
                "
            >
                <div className="text-center">
                    <div
                        className="
                            mx-auto
                            h-8
                            w-8
                            animate-spin
                            rounded-full
                            border-2
                            border-border-subtle
                            border-t-accent-primary
                        "
                    />

                    <p
                        className="
                            mt-4
                            font-body
                            text-sm
                            text-text-secondary
                        "
                    >
                        Loading course...
                    </p>
                </div>
            </div>
        )
    }

    /*
     * ============================================================
     * Empty curriculum
     * ============================================================
     */

    if (publishedLectures.length === 0) {
        return (
            <ErrorState
                title="No lectures available"
                message="This course does not have any published lectures yet."
            />
        )
    }

    /*
     * ============================================================
     * Private lecture error
     * ============================================================
     */

    if (initializedLectureId && isStudentLectureError) {
        return (
            <ErrorState
                title="Unable to load lecture"
                message={
                    studentLectureError?.message ??
                    "We couldn't load this lecture. Please try again."
                }
                onRetry={refetchStudentLecture}
            />
        )
    }

    /*
     * ============================================================
     * Lecture initialization error
     * ============================================================
     */

    if (lectureInitializationError) {
        return (
            <ErrorState
                title="Unable to start lecture"
                message={
                    lectureInitializationError?.message ??
                    "We couldn't start this lecture. Please try again."
                }
                onRetry={() => {
                    setLectureInitializationError(null)

                    setInitializedLectureId(null)

                    initializingLectureIdRef.current = null
                }}
            />
        )
    }

    /*
     * ============================================================
     * Learning UI
     * ============================================================
     */

    return (
        <div
            className="
                flex
                h-screen
                flex-col
                overflow-hidden
                bg-background-base
                text-text-primary
            "
        >
            <LearningHeader
                course={currentCourse}
                progressMeta={progressMeta}
            />

            <main
                className="
        flex
        min-h-0
        flex-1
        flex-col
        overflow-hidden
        lg:flex-row
    "
            >
                <LearningSidebar
                    sections={sections}
                    selectedLectureId={selectedLectureId}
                    progress={progress}
                    progressMeta={progressMeta}
                    onLectureSelect={handleLectureSelect}
                />

                <LearningContent
                    courseId={courseId}
                    lecture={studentLecture}
                    selectedLecture={selectedLecture}
                    progress={progress}
                    progressMeta={progressMeta}
                    isLoading={
                        isInitializingLecture ||
                        isStudentLectureLoading ||
                        isStudentLectureFetching
                    }
                    isReady={isStudentLectureSuccess}
                    onProgressUpdated={handleProgressUpdated}
                    onLectureCompleted={handleLectureCompleted}
                />
            </main>
        </div>
    )
}

export default LearningPage
