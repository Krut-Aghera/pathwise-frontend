import {
    usePublishCourseMutation,
    useSaveCourseAsDraftMutation,
} from "../courseApi.js"

const useCourseState = () => {
    const [
        publishCourseMutation,
        {
            isLoading: isPublishing,
            isSuccess: isPublishSuccess,
            isError: isPublishError,
            error: publishError,
            reset: resetPublish,
        },
    ] = usePublishCourseMutation()

    const [
        saveCourseAsDraftMutation,
        {
            isLoading: isSavingDraft,
            isSuccess: isDraftSuccess,
            isError: isDraftError,
            error: draftError,
            reset: resetDraft,
        },
    ] = useSaveCourseAsDraftMutation()

    // Publish course
    const publishCourse = async (courseId) => {
        try {
            const result = await publishCourseMutation(courseId).unwrap()

            return {
                success: true,
                data: result,
            }
        } catch (error) {
            return {
                success: false,
                error,
            }
        }
    }

    // Save course as draft
    const saveCourseAsDraft = async (courseId) => {
        try {
            const result = await saveCourseAsDraftMutation(courseId).unwrap()

            return {
                success: true,
                data: result,
            }
        } catch (error) {
            return {
                success: false,
                error,
            }
        }
    }

    return {
        publishCourse,
        saveCourseAsDraft,

        isPublishing,
        isSavingDraft,

        isLoading: isPublishing || isSavingDraft,

        isPublishSuccess,
        isDraftSuccess,

        isPublishError,
        isDraftError,

        publishError,
        draftError,

        resetPublish,
        resetDraft,
    }
}

export default useCourseState
