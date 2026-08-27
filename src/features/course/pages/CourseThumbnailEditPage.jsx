import { useNavigate, useParams } from "react-router-dom"

import {
    useFetchInstructorCourseQuery,
} from "../courseApi.js"

import {
    courseThumbnailValidationRules,
} from "../courseValidations.js"

import CourseThumbnailEditForm
    from "../components/forms/CourseThumbnailEditForm.jsx"

import InstructorCourseLoadingSkeleton
    from "../components/course-manage/InstructorCourseLoadingSkeleton"

import InstructorCourseError
    from "../components/course-manage/InstructorCourseError"


const CourseThumbnailEditPage = () => {

    const navigate = useNavigate()

    const { courseId } = useParams()


    ///////////////////////////////////////////////////////////////
    // Fetch course

    const {
        data,
        isLoading,
    } = useFetchInstructorCourseQuery(courseId)


    ///////////////////////////////////////////////////////////////
    // Course

    const course = data?.data


    ///////////////////////////////////////////////////////////////
    // Validation rules

    const validationRules =
        courseThumbnailValidationRules


    ///////////////////////////////////////////////////////////////
    // Success

    const handleSuccess = () => {

        navigate(
            "/instructor/courses"
        )

    }


    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {

        navigate(
            `/instructor/courses/${course.slug}/edit`
        )

    }


    ///////////////////////////////////////////////////////////////
    // Loading

    if (isLoading) {

        return (
            <main className="
                mx-auto
                w-full
                max-w-4xl

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
    // Course not found

    if (!course) {

        return (
            <main className="
                mx-auto
                w-full
                max-w-4xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <InstructorCourseError
                    title="Course not found"
                    message="The course you're trying to update could not be found."
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <main className="
            mx-auto
            w-full
            max-w-4xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        ">

            {/* Header */}

            <header className="mb-8">

                <h1 className="
                    font-accent
                    text-2xl
                    font-semibold
                    text-text-primary

                    sm:text-3xl
                ">
                    Update Course Thumbnail
                </h1>

                <p className="
                    mt-2
                    max-w-2xl
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">
                    Replace the thumbnail displayed for your course.
                </p>

            </header>


            {/* Form */}

            <CourseThumbnailEditForm
                courseId={courseId}
                currentThumbnail={course.thumbnail?.url}
                onSuccess={handleSuccess}
                onCancel={handleCancel}
                validationRules={validationRules}
            />

        </main>
    )
}


export default CourseThumbnailEditPage