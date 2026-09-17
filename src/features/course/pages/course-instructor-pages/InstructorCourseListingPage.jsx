import { useLocation, useNavigate } from "react-router-dom"

import InstructorCoursesHeader from "../../components/course-management/InstructorCoursesHeader.jsx"
import InstructorCourseGrid from "../../components/course-management/InstructorCourseGrid.jsx"
import InstructorCourseEmpty from "../../components/course-management/InstructorCourseEmpty.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorCourseListingPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const courses = location.state?.courses || []

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Create course

    const handleCreateCourse = () => {
        navigate("/instructor/courses/create")
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
