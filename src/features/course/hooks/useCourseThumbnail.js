import { useUpdateCourseThumbnailMutation } from "../courseApi.js"

const useCourseThumbnail = () => {
    const [
        updateCourseThumbnailMutation,
        {
            isLoading: isUpdatingThumbnail,
            isSuccess: isUpdateThumbnailSuccess,
            isError: isUpdateThumbnailError,
            error: updateThumbnailError,
            reset: resetUpdateThumbnail,
        },
    ] = useUpdateCourseThumbnailMutation()

    // Update course thumbnail

    const updateCourseThumbnail = async (courseId, thumbnail) => {
        try {
            const result = await updateCourseThumbnailMutation({
                courseId,
                thumbnail,
            }).unwrap()

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

    ///////////////////////////////////////////////////////////////
    // Return

    return {
        updateCourseThumbnail,

        isUpdatingThumbnail,
        isLoading: isUpdatingThumbnail,

        isUpdateThumbnailSuccess,

        isUpdateThumbnailError,
        updateThumbnailError,

        resetUpdateThumbnail,
    }
}

export default useCourseThumbnail
