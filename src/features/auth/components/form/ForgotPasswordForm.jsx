import { useState } from "react"
import { useForm } from "react-hook-form"

import FormField from "../../../../components/form/FormField"
import Input from "../../../../components/form/Input"
import Button from "../../../../components/ui/Button"

const ForgotPasswordForm = ({ onSubmit, loading = false, validationRules }) => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: "",
        },
    })

    const [passwordResponse, setPasswordResponse] = useState("")

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        setPasswordResponse("")
        clearErrors("root")

        try {
            const response = await onSubmit({
                email: formData.email,
            })

            setPasswordResponse(
                response?.message ||
                    "If the account exists, a password reset link has been sent to your email."
            )
        } catch (error) {
            /////////////////////////////////////////////////////////
            // Backend validation / email error

            if (error?.statusCode === 400) {
                setError("email", {
                    type: "server",
                    message: error?.message,
                })

                return
            }

            /////////////////////////////////////////////////////////
            // General / unexpected error

            setError("root", {
                type: "server",
                message:
                    error?.message ||
                    "Unable to process your request. Please try again.",
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

            {/* Email */}

            <FormField
                label="Email"
                htmlFor="forgot-password-email"
                error={errors.email?.message}
                required
            >
                <Input
                    id="forgot-password-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    error={Boolean(errors.email)}
                    aria-describedby={
                        errors.email ? "forgot-password-email-error" : undefined
                    }
                    {...register("email", validationRules.email)}
                />
            </FormField>

            {/* Response */}

            {passwordResponse && (
                <p
                    className="
                        rounded-md
                        border
                        border-status-success/30
                        bg-status-success/5
                        px-3
                        py-2.5
                        font-body
                        text-sm
                        font-medium
                        leading-5
                        text-status-success
                    "
                >
                    {passwordResponse}
                </p>
            )}

            {/* Submit */}

            <Button
                type="submit"
                loading={isFormLoading}
                disabled={isFormLoading}
                className="w-full"
            >
                Send Reset Link
            </Button>
        </form>
    )
}

export default ForgotPasswordForm
