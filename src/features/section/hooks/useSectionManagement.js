import {
    useCreateSectionMutation,
    useUpdateSectionMutation,
    useRemoveSectionMutation,
    useReorderSectionsMutation,
} from "../sectionApi"

const useSectionManagement = () => {
    const [
        createSectionMutation,
        {
            isLoading: isCreating,
            isSuccess: isCreateSuccess,
            isError: isCreateError,
            error: createError,
            reset: resetCreate,
        },
    ] = useCreateSectionMutation()

    const [
        updateSectionMutation,
        {
            isLoading: isUpdating,
            isSuccess: isUpdateSuccess,
            isError: isUpdateError,
            error: updateError,
            reset: resetUpdate,
        },
    ] = useUpdateSectionMutation()

    const [
        removeSectionMutation,
        {
            isLoading: isRemoving,
            isSuccess: isRemoveSuccess,
            isError: isRemoveError,
            error: removeError,
            reset: resetRemove,
        },
    ] = useRemoveSectionMutation()

    const [
        reorderSectionsMutation,
        {
            isLoading: isReordering,
            isSuccess: isReorderSuccess,
            isError: isReorderError,
            error: reorderError,
            reset: resetReorder,
        },
    ] = useReorderSectionsMutation()

    const createSection = async (courseId, sectionData) => {
        try {
            const result = await createSectionMutation({
                courseId,
                sectionData,
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

    const updateSection = async (sectionId, sectionData, courseId) => {
        try {
            const result = await updateSectionMutation({
                sectionId,
                sectionData,
                courseId,
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

    const removeSection = async (sectionId, courseId) => {
        try {
            const result = await removeSectionMutation({
                sectionId,
                courseId,
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

    const reorderSections = async (courseId, sections) => {
        try {
            const result = await reorderSectionsMutation({
                courseId,
                sections,
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

    return {
        createSection,
        updateSection,
        removeSection,
        reorderSections,

        isCreating,
        isUpdating,
        isRemoving,
        isReordering,

        isLoading: isCreating || isUpdating || isRemoving || isReordering,

        isCreateSuccess,
        isUpdateSuccess,
        isRemoveSuccess,
        isReorderSuccess,

        isCreateError,
        isUpdateError,
        isRemoveError,
        isReorderError,

        createError,
        updateError,
        removeError,
        reorderError,

        resetCreate,
        resetUpdate,
        resetRemove,
        resetReorder,
    }
}

export default useSectionManagement
