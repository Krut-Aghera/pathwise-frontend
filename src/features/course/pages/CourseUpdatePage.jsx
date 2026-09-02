import { useNavigate, useParams } from "react-router-dom"
import { Image } from "lucide-react"

import {
    useFetchInstructorCourseQuery,
    useUpdateCourseMutation,
} from "../courseApi.js"

import Button from "../../../components/ui/Button.jsx"
import CourseUpdateLoadingSkeleton from "../components/skeletons/CourseUpdateLoadingSkeleton.jsx"

import { courseValidationRules } from "../courseValidations.js"
import CourseUpdateForm from "../components/forms/CourseUpdateForm.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"

const CourseUpdatePage = () => {
    const navigate = useNavigate()
    const { courseId } = useParams()

    ///////////////////////////////////////////////////////////////
    // Fetch course

    const { data, isLoading } = useFetchInstructorCourseQuery(courseId)

    ///////////////////////////////////////////////////////////////
    // Update course

    const [updateCourse, { isLoading: isUpdating }] = useUpdateCourseMutation()

    ///////////////////////////////////////////////////////////////
    // Course

    const course = data?.data

    ///////////////////////////////////////////////////////////////
    // Validation rules

    const validationRules = courseValidationRules

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async (formData) => {
        await updateCourse({
            courseId,
            courseData: formData,
        }).unwrap()

        ///////////////////////////////////////////////////////////
        // Success

        navigate("/instructor/courses")
    }

    ///////////////////////////////////////////////////////////////
    // Change thumbnail

    const handleChangeThumbnail = () => {
        navigate(`/instructor/courses/${course._id}/thumbnail`)
    }

    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {
        navigate(`/instructor/courses/${course._id}`)
    }

    ///////////////////////////////////////////////////////////////
    // Loading

    if (isLoading) {
        return (
            <main
                className="
                mx-auto
                w-full
                max-w-5xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                <CourseUpdateLoadingSkeleton />
            </main>
        )
    }

    ///////////////////////////////////////////////////////////////
    // Course not found

    if (!course) {
        return (
            <main
                className="
                mx-auto
                w-full
                max-w-5xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                <ErrorState
                    title="Course not found"
                    message="The course you're trying to edit could not be found."
                />
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
            max-w-5xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        "
        >
            {/* Page Header */}

            <header
                className="
                mb-8

                flex
                flex-col
                gap-4

                sm:flex-row
                sm:items-end
                sm:justify-between
            "
            >
                <div>
                    <h1
                        className="
                        font-accent
                        text-2xl
                        font-semibold
                        text-text-primary

                        sm:text-3xl
                    "
                    >
                        Edit Course
                    </h1>

                    <p
                        className="
                        mt-2
                        max-w-2xl
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    "
                    >
                        Update your course information and keep your course
                        details up to date.
                    </p>
                </div>

                {/* Change Thumbnail */}

                <Button
                    type="button"
                    onClick={handleChangeThumbnail}
                    className="
                        w-full

                        border
                        border-accent-primary
                        bg-accent-primary
                        text-text-primary

                        shadow-sm

                        transition-all
                        duration-200

                        hover:opacity-90
                        hover:shadow-md

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-accent-primary
                        focus-visible:ring-offset-2

                        sm:w-auto
                    "
                >
                    <Image size={16} />
                    Change Thumbnail
                </Button>
            </header>

            {/* Course Form */}

            <CourseUpdateForm
                course={course}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                loading={isUpdating}
                validationRules={validationRules}
            />
        </main>
    )
}

export default CourseUpdatePage
