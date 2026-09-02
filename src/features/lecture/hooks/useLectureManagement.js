import {
    useCreateLectureMutation,
    useUpdateLectureMutation,
    useRemoveLectureMutation,
    useReorderLecturesMutation,
} from "../lectureApi"

const useLectureManagement = () => {
    ///////////////////////////////////////////////////////////////
    // Create

    const [
        createLectureMutation,
        {
            isLoading: isCreating,
            isSuccess: isCreateSuccess,
            isError: isCreateError,
            error: createError,
            reset: resetCreate,
        },
    ] = useCreateLectureMutation()

    ///////////////////////////////////////////////////////////////
    // Update

    const [
        updateLectureMutation,
        {
            isLoading: isUpdating,
            isSuccess: isUpdateSuccess,
            isError: isUpdateError,
            error: updateError,
            reset: resetUpdate,
        },
    ] = useUpdateLectureMutation()

    ///////////////////////////////////////////////////////////////
    // Remove

    const [
        removeLectureMutation,
        {
            isLoading: isRemoving,
            isSuccess: isRemoveSuccess,
            isError: isRemoveError,
            error: removeError,
            reset: resetRemove,
        },
    ] = useRemoveLectureMutation()

    ///////////////////////////////////////////////////////////////
    // Reorder

    const [
        reorderLecturesMutation,
        {
            isLoading: isReordering,
            isSuccess: isReorderSuccess,
            isError: isReorderError,
            error: reorderError,
            reset: resetReorder,
        },
    ] = useReorderLecturesMutation()

    ///////////////////////////////////////////////////////////////
    // Create lecture

    const createLecture = async (sectionId, lectureData) => {
        try {
            const result = await createLectureMutation({
                sectionId,
                lectureData,
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
    // Update lecture

    const updateLecture = async (lectureId, lectureData, sectionId) => {
        try {
            const result = await updateLectureMutation({
                lectureId,
                lectureData,
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
    // Remove lecture

    const removeLecture = async (lectureId, sectionId) => {
        try {
            const result = await removeLectureMutation({
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
    // Reorder lectures

    const reorderLectures = async (sectionId, lectures) => {
        try {
            const result = await reorderLecturesMutation({
                sectionId,
                lectures,
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
        createLecture,
        updateLecture,
        removeLecture,
        reorderLectures,

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

export default useLectureManagement
