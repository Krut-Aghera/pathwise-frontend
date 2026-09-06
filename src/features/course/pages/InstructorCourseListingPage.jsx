import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import useCourse from "../hooks/useCourse.js"

import InstructorCoursesHeader from "../components/course-management/InstructorCoursesHeader.jsx"
import InstructorCourseGrid from "../components/course-management/InstructorCourseGrid.jsx"
import InstructorCourseEmpty from "../components/course-management/InstructorCourseEmpty.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorCourseListingPage = () => {
    const navigate = useNavigate()

    const {
        fetchInstructorCourses,
        instructorCourses: courses,
        isInstructorCoursesLoading: isLoading,
        isInstructorCoursesError: isError,
        instructorCoursesError: error,
    } = useCourse()

    // Fetch course list
    useEffect(() => {
        fetchInstructorCourses()
    }, [])

    // Create course
    const handleCreateCourse = () => {
        navigate("/instructor/courses/create")
    }

    // Retry
    const handleRetry = () => {
        fetchInstructorCourses()
    }

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
                <ErrorState message={errorMessage} onRetry={handleRetry} />
            </main>
        )
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
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

export default InstructorCourseListingPage
