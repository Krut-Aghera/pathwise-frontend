import {
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useRemoveCourseMutation,
} from "../courseApi.js"

const useCourseManagement = () => {
    const [
        createCourseMutation,
        {
            isLoading: isCreating,
            isSuccess: isCreateSuccess,
            isError: isCreateError,
            error: createError,
            reset: resetCreate,
        },
    ] = useCreateCourseMutation()

    const [
        updateCourseMutation,
        {
            isLoading: isUpdating,
            isSuccess: isUpdateSuccess,
            isError: isUpdateError,
            error: updateError,
            reset: resetUpdate,
        },
    ] = useUpdateCourseMutation()

    const [
        removeCourseMutation,
        {
            isLoading: isRemoving,
            isSuccess: isRemoveSuccess,
            isError: isRemoveError,
            error: removeError,
            reset: resetRemove,
        },
    ] = useRemoveCourseMutation()

    // Create course
    const createCourse = async (courseData) => {
        try {
            const result = await createCourseMutation(courseData).unwrap()

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

    // Update course
    const updateCourse = async (courseId, courseData) => {
        try {
            const result = await updateCourseMutation({
                courseId,
                courseData,
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

    // Remove course
    const removeCourse = async (courseId) => {
        try {
            const result = await removeCourseMutation(courseId).unwrap()

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
        createCourse,
        updateCourse,
        removeCourse,

        isCreating,
        isUpdating,
        isRemoving,

        isLoading: isCreating || isUpdating || isRemoving,

        isCreateSuccess,
        isUpdateSuccess,
        isRemoveSuccess,

        isCreateError,
        isUpdateError,
        isRemoveError,

        createError,
        updateError,
        removeError,

        resetCreate,
        resetUpdate,
        resetRemove,
    }
}

export default useCourseManagement
