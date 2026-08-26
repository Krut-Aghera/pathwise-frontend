import {
    useFetchInstructorCoursesQuery,
} from "../courseApi.js"

import InstructorCoursesHeader from "../components/course-manage/InstructorCoursesHeader.jsx"
import InstructorCourseGrid from "../components/course-manage/InstructorCourseGrid.jsx"
import InstructorCourseEmpty from "../components/course-manage/InstructorCourseEmpty.jsx"
import InstructorCourseError from "../components/course-manage/InstructorCourseError.jsx"
import InstructorCourseLoadingSkeleton from "../components/course-manage/InstructorCourseLoadingSkeleton.jsx"


const InstructorCoursesPage = () => {

    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
    } = useFetchInstructorCoursesQuery()


    ///////////////////////////////////////////////////////////////
    // Loading

    if (isLoading) {

        return (
            <main className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

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
            <main className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <InstructorCourseError
                    message={errorMessage}
                    onRetry={refetch}
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Courses

    const courses = data?.data || []


    ///////////////////////////////////////////////////////////////
    // Success

    return (
        <main className="
            mx-auto
            w-full
            max-w-7xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        ">

            {/* Header */}

            <InstructorCoursesHeader
                courseCount={courses.length}
            />


            {/* Content */}

            {courses.length === 0 ? (

                <InstructorCourseEmpty />

            ) : (

                <InstructorCourseGrid
                    courses={courses}
                />

            )}

        </main>
    )
}


export default InstructorCoursesPage