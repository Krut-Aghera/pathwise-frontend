import { useState } from "react"
import { useForm } from "react-hook-form"

import FormField from "../../../components/form/FormField"
import Input from "../../../components/form/Input"
import Button from "../../../components/ui/Button"

import {
    forgotPasswordValidationRules,
} from "../authValidation"
// import { requestPasswordReset } from "../authService"


const ForgotPasswordForm = () => {

    const {
        register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({
        defaultValues: {
            email: "",
        },
    })

    const [passwordResponse, setPasswordResponse] = useState(null)

    const onSubmit = async (formData) => {

        try {

            // const response = await requestPasswordReset({
            //     email: formData.email,
            // })

            setPasswordResponse(response.message)
            // toast

            // We can show a success state here later.
            // For now, the request completes successfully.

        } catch (error) {

            if (error.statusCode === 400) {
                setError("email", {
                    type: "server",
                    message: error.message,
                })

                return
            }

            setError("root", {
                type: "server",
                message:
                    error.message ||
                    "Unable to process your request. Please try again.",
            })
        }
    }


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
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
                        errors.email
                            ? "forgot-password-email-error"
                            : undefined
                    }
                    {...register(
                        "email",
                        forgotPasswordValidationRules.email
                    )}
                />
            </FormField>

            {/* Response */}

            {
                passwordResponse &&

                <p
                    className="
                        rounded-md
                        border
                        border-status-success/30
                        bg-status-success/5
                        font-body
                        font-medium
                        px-3
                        py-2.5
                        text-sm
                        leading-5
                        text-status-success
                        "
                >
                    {passwordResponse}
                </p>
            }

            {/* Submit */}

            <Button
                type="submit"
                loading={isSubmitting}
                className="w-full"
            >
                Send Reset Link
            </Button>

        </form>
    )
}


export default ForgotPasswordForm