import {
    useLazyFetchCoursesQuery,
    useLazyFetchCurrentCourseQuery,
    useLazyFetchInstructorCoursesQuery,
    useLazyFetchInstructorCourseQuery,
} from "../courseApi.js"

const useCourse = () => {
    // Public courses
    const [
        fetchCoursesQuery,
        {
            data: coursesResponse,
            isLoading: isCoursesLoading,
            isFetching: isCoursesFetching,
            isSuccess: isCoursesSuccess,
            isError: isCoursesError,
            error: coursesError,
            reset: resetCourses,
        },
    ] = useLazyFetchCoursesQuery()

    // Public current course
    const [
        fetchCurrentCourseQuery,
        {
            data: currentCourseResponse,
            isLoading: isCurrentCourseLoading,
            isFetching: isCurrentCourseFetching,
            isSuccess: isCurrentCourseSuccess,
            isError: isCurrentCourseError,
            error: currentCourseError,
            reset: resetCurrentCourse,
        },
    ] = useLazyFetchCurrentCourseQuery()

    // Instructor courses
    const [
        fetchInstructorCoursesQuery,
        {
            data: instructorCoursesResponse,
            isLoading: isInstructorCoursesLoading,
            isFetching: isInstructorCoursesFetching,
            isSuccess: isInstructorCoursesSuccess,
            isError: isInstructorCoursesError,
            error: instructorCoursesError,
            reset: resetInstructorCourses,
        },
    ] = useLazyFetchInstructorCoursesQuery()

    // Instructor current course
    const [
        fetchInstructorCourseQuery,
        {
            data: instructorCourseResponse,
            isLoading: isInstructorCourseLoading,
            isFetching: isInstructorCourseFetching,
            isSuccess: isInstructorCourseSuccess,
            isError: isInstructorCourseError,
            error: instructorCourseError,
            reset: resetInstructorCourse,
        },
    ] = useLazyFetchInstructorCourseQuery()

    ///////////////////////////////////////////////////////////////
    // Fetch public courses

    const fetchCourses = async (query = {}) => {
        try {
            const result = await fetchCoursesQuery(query).unwrap()

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
    // Fetch public current course

    const fetchCurrentCourse = async (courseId) => {
        try {
            const result = await fetchCurrentCourseQuery(courseId).unwrap()

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
    // Fetch instructor courses

    const fetchInstructorCourses = async (query = {}) => {
        try {
            const result = await fetchInstructorCoursesQuery(query).unwrap()

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
    // Fetch instructor current course

    const fetchInstructorCourse = async (courseId) => {
        try {
            const result = await fetchInstructorCourseQuery(courseId).unwrap()

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
    // Data

    const courses = coursesResponse?.data ?? coursesResponse ?? []

    const currentCourse =
        currentCourseResponse?.data ?? currentCourseResponse ?? null

    const instructorCourses =
        instructorCoursesResponse?.data ?? instructorCoursesResponse ?? []

    const instructorCourse =
        instructorCourseResponse?.data ?? instructorCourseResponse ?? null

    ///////////////////////////////////////////////////////////////
    // Loading

    const isLoading =
        isCoursesLoading ||
        isCurrentCourseLoading ||
        isInstructorCoursesLoading ||
        isInstructorCourseLoading

    const isFetching =
        isCoursesFetching ||
        isCurrentCourseFetching ||
        isInstructorCoursesFetching ||
        isInstructorCourseFetching

    return {
        // Public courses
        fetchCourses,
        courses,

        isCoursesLoading,
        isCoursesFetching,
        isCoursesSuccess,
        isCoursesError,
        coursesError,

        resetCourses,

        // Public current course
        fetchCurrentCourse,
        currentCourse,

        isCurrentCourseLoading,
        isCurrentCourseFetching,
        isCurrentCourseSuccess,
        isCurrentCourseError,
        currentCourseError,

        resetCurrentCourse,

        // Instructor courses
        fetchInstructorCourses,
        instructorCourses,

        isInstructorCoursesLoading,
        isInstructorCoursesFetching,
        isInstructorCoursesSuccess,
        isInstructorCoursesError,
        instructorCoursesError,

        resetInstructorCourses,

        // Instructor current course
        fetchInstructorCourse,
        instructorCourse,

        isInstructorCourseLoading,
        isInstructorCourseFetching,
        isInstructorCourseSuccess,
        isInstructorCourseError,
        instructorCourseError,

        resetInstructorCourse,

        // Overall state
        isLoading,
        isFetching,
    }
}

export default useCourse
