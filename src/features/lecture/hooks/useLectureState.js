import {
    usePublishLectureMutation,
    useSaveLectureAsDraftMutation,
} from "../lectureApi"


const useLectureState = () => {

    ///////////////////////////////////////////////////////////////
    // Publish lecture

    const [
        publishLectureMutation,
        {
            isLoading: isPublishing,
            isSuccess: isPublishSuccess,
            isError: isPublishError,
            error: publishError,
            reset: resetPublish,
        },
    ] = usePublishLectureMutation()


    ///////////////////////////////////////////////////////////////
    // Save lecture as draft

    const [
        saveLectureAsDraftMutation,
        {
            isLoading: isSavingDraft,
            isSuccess: isDraftSuccess,
            isError: isDraftError,
            error: draftError,
            reset: resetDraft,
        },
    ] = useSaveLectureAsDraftMutation()


    ///////////////////////////////////////////////////////////////
    // Publish

    const publishLecture = async (lectureId) => {
        try {
            const result =
                await publishLectureMutation(lectureId).unwrap()

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
    // Save as draft

    const saveLectureAsDraft = async (lectureId) => {
        try {
            const result =
                await saveLectureAsDraftMutation(lectureId).unwrap()

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
        publishLecture,
        saveLectureAsDraft,

        isPublishing,
        isSavingDraft,

        isLoading:
            isPublishing ||
            isSavingDraft,

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


export default useLectureState