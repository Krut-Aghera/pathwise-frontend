import { useCallback, useState } from "react"

import {
    useLazyFetchCourseProgressQuery,
    useInitializeLectureProgressMutation,
    useUpdateLectureProgressMutation,
    useCompleteLectureProgressMutation,
} from "../progressApi.js"

const useProgress = () => {
    ///////////////////////////////////////////////////////////////
    // Fetch course progress

    const [
        fetchCourseProgressQuery,
        {
            isLoading: isProgressLoading,
            isFetching: isProgressFetching,
            isSuccess: isProgressSuccess,
            isError: isProgressError,
            error: progressError,
            reset: resetProgressQuery,
        },
    ] = useLazyFetchCourseProgressQuery()

    ///////////////////////////////////////////////////////////////
    // Initialize lecture progress

    const [
        initializeLectureProgressMutation,
        {
            isLoading: isInitializingLecture,
            isSuccess: isInitializeLectureSuccess,
            isError: isInitializeLectureError,
            error: initializeLectureError,
            reset: resetInitializeLecture,
        },
    ] = useInitializeLectureProgressMutation()

    ///////////////////////////////////////////////////////////////
    // Update lecture progress

    const [
        updateLectureProgressMutation,
        {
            isLoading: isUpdatingProgress,
            isSuccess: isUpdateProgressSuccess,
            isError: isUpdateProgressError,
            error: updateProgressError,
            reset: resetUpdateProgress,
        },
    ] = useUpdateLectureProgressMutation()

    ///////////////////////////////////////////////////////////////
    // Complete lecture progress

    const [
        completeLectureProgressMutation,
        {
            isLoading: isCompletingLecture,
            isSuccess: isCompleteLectureSuccess,
            isError: isCompleteLectureError,
            error: completeLectureError,
            reset: resetCompleteLecture,
        },
    ] = useCompleteLectureProgressMutation()

    ///////////////////////////////////////////////////////////////
    // Local progress state

    const [progress, setProgress] = useState(null)

    const [progressMeta, setProgressMeta] = useState(null)

    ///////////////////////////////////////////////////////////////
    // Sync progress response

    const syncProgress = useCallback((response) => {
        setProgress(response?.data ?? null)

        setProgressMeta(response?.meta?.calculated ?? null)
    }, [])

    ///////////////////////////////////////////////////////////////
    // Fetch course progress

    const fetchCourseProgress = useCallback(
        async (courseId) => {
            if (!courseId) {
                return {
                    success: false,
                    error: new Error("Course ID is required."),
                }
            }

            try {
                const response =
                    await fetchCourseProgressQuery(courseId).unwrap()

                syncProgress(response)

                return {
                    success: true,
                    data: response.data,
                    meta: response.meta?.calculated ?? null,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [fetchCourseProgressQuery, syncProgress]
    )

    ///////////////////////////////////////////////////////////////
    // Initialize lecture progress

    const initializeLectureProgress = useCallback(
        async ({ courseId, lectureId }) => {
            if (!courseId || !lectureId) {
                return {
                    success: false,
                    error: new Error("Course ID and lecture ID are required."),
                }
            }

            try {
                const response = await initializeLectureProgressMutation({
                    courseId,
                    lectureId,
                }).unwrap()

                syncProgress(response)

                return {
                    success: true,
                    data: response.data,
                    meta: response.meta?.calculated ?? null,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [initializeLectureProgressMutation, syncProgress]
    )

    ///////////////////////////////////////////////////////////////
    // Update lecture progress

    const updateLectureProgress = useCallback(
        async ({ courseId, lectureId, lastPosition, watchedDuration }) => {
            if (!courseId || !lectureId) {
                return {
                    success: false,
                    error: new Error("Course ID and lecture ID are required."),
                }
            }

            try {
                const response = await updateLectureProgressMutation({
                    courseId,
                    lectureId,
                    lastPosition,
                    watchedDuration,
                }).unwrap()

                syncProgress(response)

                return {
                    success: true,
                    data: response.data,
                    meta: response.meta?.calculated ?? null,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [updateLectureProgressMutation, syncProgress]
    )

    ///////////////////////////////////////////////////////////////
    // Complete lecture progress

    const completeLectureProgress = useCallback(
        async ({ courseId, lectureId }) => {
            if (!courseId || !lectureId) {
                return {
                    success: false,
                    error: new Error("Course ID and lecture ID are required."),
                }
            }

            try {
                const response = await completeLectureProgressMutation({
                    courseId,
                    lectureId,
                }).unwrap()

                syncProgress(response)

                return {
                    success: true,
                    data: response.data,
                    meta: response.meta?.calculated ?? null,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [completeLectureProgressMutation, syncProgress]
    )

    ///////////////////////////////////////////////////////////////
    // Reset

    const reset = useCallback(() => {
        setProgress(null)
        setProgressMeta(null)

        resetProgressQuery()
        resetInitializeLecture()
        resetUpdateProgress()
        resetCompleteLecture()
    }, [
        resetProgressQuery,
        resetInitializeLecture,
        resetUpdateProgress,
        resetCompleteLecture,
    ])

    ///////////////////////////////////////////////////////////////
    // Overall loading state

    const isLoading =
        isProgressLoading ||
        isInitializingLecture ||
        isUpdatingProgress ||
        isCompletingLecture

    ///////////////////////////////////////////////////////////////

    return {
        ///////////////////////////////////////////////////////////
        // Data

        progress,
        progressMeta,

        ///////////////////////////////////////////////////////////
        // Actions

        fetchCourseProgress,
        initializeLectureProgress,
        updateLectureProgress,
        completeLectureProgress,
        reset,

        ///////////////////////////////////////////////////////////
        // Overall state

        isLoading,

        ///////////////////////////////////////////////////////////
        // Fetch progress state

        isProgressLoading,
        isProgressFetching,
        isProgressSuccess,
        isProgressError,
        progressError,

        ///////////////////////////////////////////////////////////
        // Initialize lecture state

        isInitializingLecture,
        isInitializeLectureSuccess,
        isInitializeLectureError,
        initializeLectureError,

        ///////////////////////////////////////////////////////////
        // Update progress state

        isUpdatingProgress,
        isUpdateProgressSuccess,
        isUpdateProgressError,
        updateProgressError,

        ///////////////////////////////////////////////////////////
        // Complete lecture state

        isCompletingLecture,
        isCompleteLectureSuccess,
        isCompleteLectureError,
        completeLectureError,
    }
}

export default useProgress
