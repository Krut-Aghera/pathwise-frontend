import {
    usePublishSectionMutation,
    useSaveSectionAsDraftMutation,
} from "../sectionApi"

const useSectionState = () => {
    const [
        publishSection,
        {
            isLoading: isPublishing,
            isSuccess: isPublishSuccess,
            isError: isPublishError,
            error: publishError,
            reset: resetPublish,
        },
    ] = usePublishSectionMutation()

    const [
        saveSectionAsDraft,
        {
            isLoading: isSavingDraft,
            isSuccess: isDraftSuccess,
            isError: isDraftError,
            error: draftError,
            reset: resetDraft,
        },
    ] = useSaveSectionAsDraftMutation()

    const handlePublish = async (sectionId) => {
        try {
            const result = await publishSection(sectionId).unwrap()

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

    const handleSaveAsDraft = async (sectionId) => {
        try {
            const result = await saveSectionAsDraft(sectionId).unwrap()

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
        publishSection: handlePublish,
        saveSectionAsDraft: handleSaveAsDraft,

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

export default useSectionState
