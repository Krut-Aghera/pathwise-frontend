import { useNavigate } from "react-router-dom"

import { useFetchInstructorCoursesQuery } from "../courseApi.js"

import InstructorCoursesHeader from "../components/course-manage/InstructorCoursesHeader.jsx"
import InstructorCourseGrid from "../components/course-manage/InstructorCourseGrid.jsx"
import InstructorCourseEmpty from "../components/course-manage/InstructorCourseEmpty.jsx"
import InstructorCourseLoadingSkeleton from "../components/course-manage/InstructorCourseLoadingSkeleton.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"

const InstructorCoursesPage = () => {
    const navigate = useNavigate()

    ///////////////////////////////////////////////////////////////
    // Course list

    const { data, isLoading, isError, error, refetch } =
        useFetchInstructorCoursesQuery()

    ///////////////////////////////////////////////////////////////
    // Courses

    const courses = data?.data || []

    ///////////////////////////////////////////////////////////////
    // Create course

    const handleCreateCourse = () => {
        navigate("/instructor/courses/create")
    }

    ///////////////////////////////////////////////////////////////
    // Loading

    if (isLoading) {
        return (
            <main
                className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                <InstructorCourseLoadingSkeleton />
            </main>
        )
    }

    ///////////////////////////////////////////////////////////////
    // Error

    if (isError) {
        const errorMessage =
            error?.errors?.[0]?.message ||
            error?.message ||
            "Unable to load your courses."

        return (
            <main
                className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                <ErrorState message={errorMessage} onRetry={refetch} />
            </main>
        )
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <main
            className="
            mx-auto
            w-full
            max-w-7xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        "
        >
            {/* Header */}

            <InstructorCoursesHeader
                courseCount={courses.length}
                onCreateCourse={handleCreateCourse}
            />

            {/* Content */}

            {courses.length === 0 ? (
                <InstructorCourseEmpty />
            ) : (
                <InstructorCourseGrid courses={courses} />
            )}
        </main>
    )
}

export default InstructorCoursesPage
