import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import useCourse from "../hooks/useCourse.js"
import useCourseThumbnail from "../hooks/useCourseThumbnail.js"

import { courseThumbnailValidationRules } from "../courseValidations.js"

import ErrorState from "../../../components/ui/ErrorState.jsx"
import CourseThumbnailUpdateForm from "../components/forms/CourseThumbnailUpdateForm.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const CourseThumbnailUpdatePage = () => {
    const navigate = useNavigate()
    const { courseId } = useParams()

    // Course
    const {
        fetchInstructorCourse,
        instructorCourse: course,
        isInstructorCourseLoading: isLoading,
        isInstructorCourseError: isError,
        instructorCourseError: error,
    } = useCourse()

    // Course thumbnail
    const { updateCourseThumbnail, isUpdatingThumbnail } = useCourseThumbnail()

    // Fetch course
    useEffect(() => {
        if (!courseId) {
            return
        }

        fetchInstructorCourse(courseId)
    }, [courseId, fetchInstructorCourse])

    // Validation rules
    const validationRules = courseThumbnailValidationRules

    // Submit
    const handleSubmit = async (thumbnail) => {
        const result = await updateCourseThumbnail(courseId, thumbnail)

        if (!result.success) {
            return
        }

        navigate(`/instructor/courses/${courseId}/manage`)
    }

    // Cancel
    const handleCancel = () => {
        navigate(`/instructor/courses/${course._id}/edit`)
    }

    // Course loading error
    if (isError) {
        return (
            <main
                className="
                mx-auto
                w-full
                max-w-4xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                <ErrorState
                    title="Unable to load course"
                    message={
                        error?.data?.message ||
                        error?.message ||
                        "Unable to load course."
                    }
                />
            </main>
        )
    }

    // Course loading
    if (isLoading) {
        return (
            <main
                className="
                mx-auto
                w-full
                max-w-4xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                <div className="font-body text-sm text-text-secondary">
                    Loading course...
                </div>
            </main>
        )
    }

    // Course not found
    if (!course) {
        return (
            <main
                className="
                mx-auto
                w-full
                max-w-4xl

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
                    message="The course you're trying to update could not be found."
                />
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
            max-w-4xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        "
        >
            {/* Header */}

            <header className="mb-8">
                <h1
                    className="
                    font-accent
                    text-2xl
                    font-semibold
                    text-text-primary

                    sm:text-3xl
                "
                >
                    Update Course Thumbnail
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
                    Replace the thumbnail displayed for your course.
                </p>
            </header>

            {/* Form */}

            <CourseThumbnailUpdateForm
                courseId={courseId}
                currentThumbnail={course.thumbnail?.url}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                loading={isUpdatingThumbnail}
                validationRules={validationRules}
            />
        </main>
    )
}

export default CourseThumbnailUpdatePage
