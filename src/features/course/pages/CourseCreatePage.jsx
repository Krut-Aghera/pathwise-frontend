import { useNavigate } from "react-router-dom"

import CourseCreateForm from "../components/forms/CourseCreateForm.jsx"
import { useCreateCourseMutation } from "../courseApi.js"

import {
    courseValidationRules,
    courseThumbnailValidationRules,
} from "../courseValidations.js"

const CourseCreatePage = () => {
    const navigate = useNavigate()

    const [createCourse, { isLoading }] = useCreateCourseMutation()

    ///////////////////////////////////////////////////////////////
    // Validation rules

    const validationRules = {
        ...courseValidationRules,

        thumbnail: courseThumbnailValidationRules,
    }

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async (multipartFormData) => {
        await createCourse(multipartFormData).unwrap()

        ///////////////////////////////////////////////////////////
        // Success

        navigate("/instructor/courses")
    }

    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {
        navigate("/instructor/dashboard")
    }

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
                    Create Course
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
                    Create a new course and share your knowledge with students.
                </p>
            </header>

            {/* Form */}

            <CourseCreateForm
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                loading={isLoading}
                validationRules={validationRules}
            />
        </main>
    )
}

export default CourseCreatePage
