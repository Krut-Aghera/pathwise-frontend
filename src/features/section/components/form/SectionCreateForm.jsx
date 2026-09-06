import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

import FormField from "../../../../components/form/FormField.jsx"
import Input from "../../../../components/form/Input.jsx"
import FormActions from "../../../../components/form/FormActions.jsx"

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const SectionCreateForm = ({
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
            title: "",
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

        const sectionData = {
            title: formData.title.trim(),
        }

        // Send to page
        try {
            await onSubmit(sectionData)
        } catch (error) {
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
                    "Unable to create section. Please try again.",
            })
        }
    }

    // Loadin
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

            {/* Section Information */}

            <section
                className="
                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface

                    p-5

                    sm:p-6
                "
            >
                {/* Section Header */}

                <div className="mb-6">
                    <h2
                        className="
                            font-accent
                            text-lg
                            font-semibold
                            text-text-primary
                        "
                    >
                        Section Information
                    </h2>

                    <p
                        className="
                            mt-1

                            font-body
                            text-sm
                            leading-5
                            text-text-secondary
                        "
                    >
                        Give this section a clear title that describes the
                        lectures it will contain.
                    </p>
                </div>

                {/* Fields */}

                <div className="space-y-5">
                    {/* Title */}

                    <FormField
                        label="Section Title"
                        htmlFor="section-title"
                        error={errors.title?.message}
                        required
                    >
                        <Input
                            id="section-title"
                            type="text"
                            autoComplete="off"
                            placeholder="Enter your section title"
                            error={Boolean(errors.title)}
                            aria-describedby={
                                errors.title ? "section-title-error" : undefined
                            }
                            disabled={isFormLoading}
                            {...register("title", validationRules.title)}
                        />
                    </FormField>
                </div>
            </section>

            {/* Actions */}

            <FormActions
                loading={isFormLoading}
                onCancel={onCancel}
                submitLabel="Create Section"
            />
        </form>
    )
}

export default SectionCreateForm
