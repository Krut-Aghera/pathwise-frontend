import { useForm } from "react-hook-form"

import FormField from "../../../../components/form/FormField"
import PasswordInput from "../../../../components/form/PasswordInput"
import Button from "../../../../components/ui/Button"

const ResetPasswordForm = ({ onSubmit, loading = false, validationRules }) => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    })

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        clearErrors("root")

        try {
            await onSubmit({
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword,
            })
        } catch (error) {
            /////////////////////////////////////////////////////////
            // Backend validation / password errors

            if (error?.statusCode === 400) {
                setError("root", {
                    type: "server",
                    message: error?.message,
                })

                return
            }

            /////////////////////////////////////////////////////////
            // Invalid / expired reset token

            if (error?.statusCode === 401) {
                setError("root", {
                    type: "server",
                    message:
                        error?.message ||
                        "This password reset link is invalid or has expired.",
                })

                return
            }

            /////////////////////////////////////////////////////////
            // Deactivated account

            if (error?.statusCode === 403) {
                setError("root", {
                    type: "server",
                    message:
                        error?.message ||
                        "Your account is currently deactivated.",
                })

                return
            }

            /////////////////////////////////////////////////////////
            // General / unexpected error

            setError("root", {
                type: "server",
                message:
                    error?.message ||
                    "Unable to reset your password. Please try again.",
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

            {/* New password */}

            <FormField
                label="New password"
                htmlFor="reset-password-new"
                error={errors.newPassword?.message}
                required
            >
                <PasswordInput
                    id="reset-password-new"
                    autoComplete="new-password"
                    placeholder="Enter your new password"
                    error={Boolean(errors.newPassword)}
                    aria-describedby={
                        errors.newPassword
                            ? "reset-password-new-error"
                            : undefined
                    }
                    {...register("newPassword", validationRules.newPassword)}
                />
            </FormField>

            {/* Confirm password */}

            <FormField
                label="Confirm password"
                htmlFor="reset-password-confirm"
                error={errors.confirmPassword?.message}
                required
            >
                <PasswordInput
                    id="reset-password-confirm"
                    autoComplete="new-password"
                    placeholder="Confirm your new password"
                    error={Boolean(errors.confirmPassword)}
                    aria-describedby={
                        errors.confirmPassword
                            ? "reset-password-confirm-error"
                            : undefined
                    }
                    {...register(
                        "confirmPassword",
                        validationRules.confirmPassword
                    )}
                />
            </FormField>

            {/* Submit */}

            <Button
                type="submit"
                loading={isFormLoading}
                disabled={isFormLoading}
                className="w-full"
            >
                Reset Password
            </Button>
        </form>
    )
}

export default ResetPasswordForm
