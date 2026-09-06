import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

import FormActions from "../../../../components/form/FormActions.jsx"
import CourseFormThumbnailUpload from "../form-children/CourseFormThumbnailUpload.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const CourseThumbnailUpdateForm = ({
    currentThumbnail,
    onSubmit,
    onCancel,
    loading = false,
    validationRules,
}) => {
    const globalErrorRef = useRef(null)

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            thumbnail: null,
        },
        mode: "onBlur",
        shouldFocusError: true,
    })

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

    // Submit
    const handleFormSubmit = async (formData) => {
        clearErrors("root")

        const thumbnailFile = formData.thumbnail?.[0]

        if (!thumbnailFile) {
            return
        }

        const result = await onSubmit(thumbnailFile)

        if (result?.success) {
            return
        }

        const error = result?.error

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

        // General server error
        setError("root", {
            type: "server",
            message:
                error?.message ||
                "Unable to update course thumbnail. Please try again.",
        })
    }

    // Loading
    const isFormLoading = loading || isSubmitting

    /////////////////////////////////////////////////////////////////////////////////////////////////
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

            {/* Thumbnail */}

            <CourseFormThumbnailUpload
                register={register}
                errors={errors}
                currentThumbnail={currentThumbnail}
                validationRules={validationRules}
            />

            {/* Actions */}

            <FormActions
                loading={isFormLoading}
                onCancel={onCancel}
                submitLabel="Update Thumbnail"
            />
        </form>
    )
}

export default CourseThumbnailUpdateForm
