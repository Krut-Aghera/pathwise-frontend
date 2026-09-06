import { useNavigate, useParams } from "react-router-dom"

import { lectureValidationRules } from "../lectureValidations.js"
import useLecture from "../hooks/useLecture.js"
import useLectureManagement from "../hooks/useLectureManagement.js"

import LectureUpdateForm from "../components/form/LectureUpdateForm.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const LectureUpdatePage = () => {
    const navigate = useNavigate()
    const { courseId, sectionId, lectureId } = useParams()

    // Fetch lecture
    const {
        lecture,

        isLectureLoading,
        isLectureError,
        lectureError,

        refetchLecture,
    } = useLecture({
        lectureId,
    })

    // Lecture management
    const { updateLecture, isUpdating } = useLectureManagement()

    // Validation rules
    const validationRules = lectureValidationRules

    // Error helper
    const getErrorMessage = (error, fallback) => {
        return error?.errors?.[0]?.message || error?.message || fallback
    }

    // Submit
    const handleSubmit = async (lectureData) => {
        if (!lectureId) {
            throw new Error("Lecture ID is required to update a lecture.")
        }

        if (!sectionId) {
            throw new Error("Section ID is required to update a lecture.")
        }

        const result = await updateLecture(lectureId, lectureData, sectionId)

        if (!result.success) {
            throw result.error
        }

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${result?.data._id}/manage` ||
                -1
        )
    }

    // Cancel
    const handleCancel = () => {
        navigate(-1)
    }

    // Loading
    if (isLectureLoading) {
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
                <div
                    className="
                    animate-pulse
                    space-y-8
                "
                >
                    <div className="space-y-3">
                        <div
                            className="
                            h-8
                            w-48
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            h-4
                            w-full
                            max-w-2xl
                            rounded
                            bg-background-elevated
                        "
                        />
                    </div>

                    <div
                        className="
                        h-125
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface
                    "
                    />
                </div>
            </main>
        )
    }

    // Error state
    if (isLectureError || !lecture) {
        const message = isLectureError
            ? getErrorMessage(lectureError, "Unable to load this lecture.")
            : "The lecture you're trying to edit could not be found."

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
                    title="Unable to load lecture"
                    message={message}
                    onRetry={refetchLecture}
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
                    Edit Lecture
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
                    Update the lecture information and keep its content details
                    up to date.
                </p>
            </header>

            {/* Lecture Form */}

            <LectureUpdateForm
                lecture={lecture}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                loading={isUpdating}
                validationRules={validationRules}
            />
        </main>
    )
}

export default LectureUpdatePage
