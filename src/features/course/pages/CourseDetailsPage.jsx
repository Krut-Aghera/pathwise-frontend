import { useParams } from "react-router-dom"

import {
    useFetchCurrentCourseQuery,
} from "../courseApi.js"

import CourseHeader from "../components/CourseHeader"
import CourseStatistics from "../components/CourseStatistics"
import CourseCurriculum from "../components/CourseCurriculum"
import CourseEnrollmentCard from "../components/CourseEnrollmentCard"
import CourseLoadingSkeleton from "../components/CourseLoadingSkeleton"
import CourseState from "../components/CourseState"


const CourseDetailsPage = () => {

    const { courseId } = useParams()


    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
    } = useFetchCurrentCourseQuery(courseId)



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
                <CourseLoadingSkeleton />
            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Error

    if (isError) {

        const errorMessage =
            error?.errors?.[0]?.message ||
            error?.message ||
            "Unable to load the course."

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
                <CourseState
                    type="error"
                    title="Unable to load the course"
                    message={errorMessage}
                    onRetry={refetch}
                />
            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // No course

    const course = data?.data

    if (!course) {
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
                <CourseState
                    title="Course not found"
                    message="The course you're looking for could not be found."
                />
            </main>
        )
    }


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

            {/* Course Header */}

            <CourseHeader
                course={course}
            />


            {/* Course Statistics */}

            <section className="mt-5">
                <CourseStatistics
                    course={course}
                />
            </section>


            {/* Main Content */}

            <div className="
                mt-6

                grid
                grid-cols-1
                gap-6

                lg:grid-cols-[minmax(0,1fr)_360px]
                lg:items-start
            ">

                {/* Left Content */}

                <div className="
                    min-w-0
                ">

                    <CourseCurriculum
                        course={course}
                    />

                </div>


                {/* Right Content */}

                <div className="
                    min-w-0

                    lg:sticky
                    lg:top-24
                ">

                    <CourseEnrollmentCard
                        price={course.price}
                        isEnrolled={course.isEnrolled}
                    />

                </div>

            </div>

        </main>
    )
}


export default CourseDetailsPage