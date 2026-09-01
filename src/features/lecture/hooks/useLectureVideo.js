
import {
    useUploadLectureVideoMutation,
    useRemoveLectureVideoMutation,
} from "../lectureApi"


const useLectureVideo = () => {

    ///////////////////////////////////////////////////////////////
    // Upload video

    const [
        uploadLectureVideoMutation,
        {
            isLoading: isUploading,
            isSuccess: isUploadSuccess,
            isError: isUploadError,
            error: uploadError,
            reset: resetUpload,
        },
    ] = useUploadLectureVideoMutation()


    ///////////////////////////////////////////////////////////////
    // Remove video

    const [
        removeLectureVideoMutation,
        {
            isLoading: isRemoving,
            isSuccess: isRemoveSuccess,
            isError: isRemoveError,
            error: removeError,
            reset: resetRemove,
        },
    ] = useRemoveLectureVideoMutation()


    ///////////////////////////////////////////////////////////////
    // Upload video

    const uploadLectureVideo = async (
        lectureId,
        video,
        sectionId
    ) => {

        try {

            const result =
                await uploadLectureVideoMutation({

                    lectureId,

                    video,

                    sectionId,

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
    // Remove video

    const removeLectureVideo = async (
        lectureId,
        sectionId
    ) => {

        try {

            const result =
                await removeLectureVideoMutation({

                    lectureId,

                    sectionId,

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
    // Reset upload

    const resetUploadState = () => {

        resetUpload()

    }


    ///////////////////////////////////////////////////////////////
    // Return

    return {

        uploadLectureVideo,
        removeLectureVideo,

        isUploading,
        isRemoving,

        isLoading:
            isUploading ||
            isRemoving,

        isUploadSuccess,
        isRemoveSuccess,

        isUploadError,
        isRemoveError,

        uploadError,
        removeError,

        resetUpload:
            resetUploadState,

        resetRemove,

    }

}


export default useLectureVideo