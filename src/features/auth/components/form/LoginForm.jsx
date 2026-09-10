import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

import FormField from "../../../../components/form/FormField"
import Input from "../../../../components/form/Input"
import PasswordInput from "../../../../components/form/PasswordInput"
import Button from "../../../../components/ui/Button"

const LoginForm = ({ onSubmit, loading = false, validationRules }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        try {
            await onSubmit({
                email: formData.email,
                password: formData.password,
            })
        } catch (error) {
            /////////////////////////////////////////////////////////
            // Backend validation / authentication errors

            if (error?.statusCode === 400 || error?.statusCode === 401) {
                setError("root", {
                    type: "server",
                    message: "Invalid credentials.",
                })

                return
            }

            /////////////////////////////////////////////////////////
            // General / unexpected error

            setError("root", {
                type: "server",
                message:
                    error?.message || "Unable to sign in. Please try again.",
            })
        }
    }

    ///////////////////////////////////////////////////////////////
    // Loading

    const isFormLoading = loading || isSubmitting

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
            className="
                w-full
                space-y-4
                sm:space-y-5
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
                htmlFor="login-email"
                error={errors.email?.message}
                required
            >
                <Input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    error={Boolean(errors.email)}
                    aria-describedby={
                        errors.email ? "login-email-error" : undefined
                    }
                    {...register("email", validationRules.email)}
                />
            </FormField>

            {/* Password */}

            <FormField
                label="Password"
                htmlFor="login-password"
                error={errors.password?.message}
                required
            >
                <PasswordInput
                    id="login-password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    error={Boolean(errors.password)}
                    aria-describedby={
                        errors.password ? "login-password-error" : undefined
                    }
                    {...register("password", validationRules.password)}
                />
            </FormField>

            {/* Forgot password */}

            <div className="flex justify-end">
                <Link
                    to="/auth/forgot-password"
                    className="
                        w-full
                        font-body
                        text-xs
                        font-medium
                        text-text-secondary
                        transition
                        hover:text-text-primary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent-primary/30
                        sm:text-sm
                    "
                >
                    Forgot password?
                </Link>
            </div>

            {/* Submit */}

            <Button type="submit" loading={isFormLoading} className="w-full">
                Log In
            </Button>
        </form>
    )
}

export default LoginForm
