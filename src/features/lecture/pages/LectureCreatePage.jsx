import { useNavigate, useParams } from "react-router-dom"

import useLectureManagement from "../hooks/useLectureManagement.js"
import { lectureValidationRules } from "../lectureValidations.js"
import LectureCreateForm from "../components/form/LectureCreateForm.jsx"

const LectureCreatePage = () => {
    const navigate = useNavigate()

    const { sectionId } = useParams()

    ///////////////////////////////////////////////////////////////
    // Lecture management

    const { createLecture, isCreating } = useLectureManagement()

    ///////////////////////////////////////////////////////////////
    // Validation rules

    const validationRules = lectureValidationRules

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async (lectureData) => {
        if (!sectionId) {
            throw new Error("Section ID is required to create a lecture.")
        }

        const result = await createLecture(sectionId, lectureData)

        if (!result.success) {
            throw result.error
        }

        ///////////////////////////////////////////////////////////
        // Success

        navigate(-1)
    }

    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {
        navigate(-1)
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
                    Create Lecture
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
                    Add a new lecture to this section. You can upload the
                    lecture video separately after creating the lecture.
                </p>
            </header>

            {/* Lecture Form */}

            <LectureCreateForm
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                loading={isCreating}
                validationRules={validationRules}
            />
        </main>
    )
}

export default LectureCreatePage
