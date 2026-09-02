import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

import LectureBasicInformation from "../form-children/LectureBasicInformation"
import FormActions from "../../../../components/form/FormActions"

const LectureCreateForm = ({
    onSubmit,
    onCancel,
    loading = false,
    validationRules,
}) => {
    const globalErrorRef = useRef(null)

    ///////////////////////////////////////////////////////////////
    // Form

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            title: "",
            description: "",
            isPreviewFree: false,
        },

        mode: "onBlur",

        shouldFocusError: true,
    })

    ///////////////////////////////////////////////////////////////
    // Global error scroll

    useEffect(() => {
        if (!errors.root?.message) {
            return
        }

        requestAnimationFrame(() => {
            globalErrorRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })

            globalErrorRef.current?.focus()
        })
    }, [errors.root?.message])

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        clearErrors("root")

        const lectureData = {
            title: formData.title,

            description: formData.description,

            isPreviewFree: formData.isPreviewFree,
        }

        ///////////////////////////////////////////////////////////
        // Send to page

        try {
            await onSubmit(lectureData)
        } catch (error) {
            /////////////////////////////////////////////////////////
            // Backend validation errors

            if (error?.statusCode === 400 && Array.isArray(error?.errors)) {
                error.errors.forEach(({ field, message }) => {
                    if (!field) {
                        return
                    }

                    setError(field, {
                        type: "server",
                        message,
                    })
                })

                return
            }

            /////////////////////////////////////////////////////////
            // General server error

            setError("root", {
                type: "server",

                message:
                    error?.message ||
                    "Unable to create lecture. Please try again.",
            })
        }
    }

    ///////////////////////////////////////////////////////////////
    // Loading

    const isFormLoading = loading || isSubmitting

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
            className="space-y-6"
        >
            {/* Global server error */}

            {errors.root?.message && (
                <div
                    ref={globalErrorRef}
                    role="alert"
                    tabIndex={-1}
                    className="
                        scroll-mt-6

                        rounded-lg
                        border
                        border-status-danger/30
                        bg-status-danger/10
                        px-4
                        py-3

                        font-body
                        text-sm
                        leading-5
                        text-status-danger

                        focus:outline-none
                        focus:ring-2
                        focus:ring-status-danger/20
                    "
                >
                    {errors.root.message}
                </div>
            )}

            {/* Basic Information */}

            <LectureBasicInformation
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Actions */}

            <FormActions
                onCancel={onCancel}
                loading={isFormLoading}
                submitLabel="Create Lecture"
            />
        </form>
    )
}

export default LectureCreateForm
