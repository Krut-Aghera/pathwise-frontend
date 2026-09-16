import { useState } from "react"
import { useForm } from "react-hook-form"

import Input from "../../../../components/form/Input"
import PasswordInput from "../../../../components/form/PasswordInput"
import FormActions from "../../../../components/form/FormActions"
import FormField from "../../../../components/form/FormField"

const EmailUpdateForm = ({
    onSubmit,
    onCancel,
    loading = false,
    validationRules,
}) => {
    const [successMessage, setSuccessMessage] = useState("")

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            password: "",
            newEmail: "",
        },
    })

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        setSuccessMessage("")

        try {
            const response = await onSubmit({
                password: formData.password,
                newEmail: formData.newEmail,
            })

            setSuccessMessage(
                response?.message ||
                    "Email verification link sent successfully."
            )
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
            // Bad request without field errors

            if (error?.statusCode === 400) {
                setError("newEmail", {
                    type: "server",
                    message:
                        error?.message ||
                        "Unable to change to this email address.",
                })

                return
            }

            /////////////////////////////////////////////////////////
            // Incorrect password

            if (error?.statusCode === 401) {
                setError("password", {
                    type: "server",
                    message: error?.message || "Current password is incorrect.",
                })

                return
            }

            /////////////////////////////////////////////////////////
            // Email already exists

            if (error?.statusCode === 409) {
                setError("newEmail", {
                    type: "server",
                    message: error?.message || "This email is already in use.",
                })

                return
            }

            /////////////////////////////////////////////////////////
            // General / unexpected error

            setError("root", {
                type: "server",
                message:
                    error?.message ||
                    "Unable to change your email. Please try again.",
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
            className="
                w-full
                space-y-5
            "
        >
            {/* Success response */}

            {successMessage && (
                <div
                    role="status"
                    className="
                        rounded-md
                        border
                        border-status-success/30
                        bg-status-success/5
                        px-3
                        py-2.5
                        font-body
                        text-sm
                        leading-5
                        text-status-success
                    "
                >
                    {successMessage}
                </div>
            )}

            {/* General server error */}

            {errors.root?.message && (
                <div
                    role="alert"
                    className="
                        rounded-md
                        border
                        border-status-danger/30
                        bg-status-danger/5
                        px-3
                        py-2.5
                        font-body
                        text-sm
                        leading-5
                        text-status-danger
                    "
                >
                    {errors.root.message}
                </div>
            )}

            {/* New email */}

            <FormField
                label="New email"
                htmlFor="email-change-new"
                error={errors.newEmail?.message}
                required
            >
                <Input
                    id="email-change-new"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your new email"
                    error={Boolean(errors.newEmail)}
                    aria-describedby={
                        errors.newEmail ? "email-change-new-error" : undefined
                    }
                    {...register("newEmail", validationRules.newEmail)}
                />
            </FormField>

            {/* Current password */}

            <FormField
                label="Current password"
                htmlFor="email-change-password"
                error={errors.password?.message}
                required
            >
                <PasswordInput
                    id="email-change-password"
                    autoComplete="current-password"
                    placeholder="Enter your current password"
                    error={Boolean(errors.password)}
                    aria-describedby={
                        errors.password
                            ? "email-change-password-error"
                            : undefined
                    }
                    {...register("password", validationRules.password)}
                />
            </FormField>

            {/* Actions */}

            <FormActions
                onCancel={onCancel}
                loading={isFormLoading}
                submitLabel="Change Email"
            />
        </form>
    )
}

export default EmailUpdateForm
