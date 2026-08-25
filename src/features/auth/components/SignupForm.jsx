import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

import FormField from "../../../components/form/FormField"
import Input from "../../../components/form/Input"
import PasswordInput from "../../../components/form/PasswordInput"
import Button from "../../../components/ui/Button.jsx"

import {
    signupValidationRules,
} from "../validations/authValidation.js"
import { setAuthSession } from "../state/authSlice.js"
import { signup } from "../services/authService.js"

const SignupForm = () => {

    const dispatch = useDispatch()

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
            username: "",
            email: "",
            password: "",
        },
    })


    const onSubmit = async (formData) => {

        try {

            const response = await signup({
                username: formData.username,
                email: formData.email,
                password: formData.password,
            })

            dispatch(setAuthSession(response.data))

        } catch (error) {

            if (error.statusCode === 409) {
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
                    "Unable to create your account. Please try again.",
            })
        }
    }


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
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


            {/* Username */}

            <FormField
                label="Username"
                htmlFor="signup-username"
                error={errors.username?.message}
                required
            >
                <Input
                    id="signup-username"
                    type="text"
                    autoComplete="username"
                    placeholder="Enter your username"
                    error={Boolean(errors.username)}
                    aria-describedby={
                        errors.username
                            ? "signup-username-error"
                            : undefined
                    }
                    {...register(
                        "username",
                        signupValidationRules.username
                    )}
                />
            </FormField>


            {/* Email */}

            <FormField
                label="Email"
                htmlFor="signup-email"
                error={errors.email?.message}
                required
            >
                <Input
                    id="signup-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    error={Boolean(errors.email)}
                    aria-describedby={
                        errors.email
                            ? "signup-email-error"
                            : undefined
                    }
                    {...register(
                        "email",
                        signupValidationRules.email
                    )}
                />
            </FormField>


            {/* Password */}

            <FormField
                label="Password"
                htmlFor="signup-password"
                error={errors.password?.message}
                required
            >
                <PasswordInput
                    id="signup-password"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    error={Boolean(errors.password)}
                    aria-describedby={
                        errors.password
                            ? "signup-password-error"
                            : undefined
                    }
                    {...register(
                        "password",
                        signupValidationRules.password
                    )}
                />
            </FormField>


            {/* Submit */}

            <Button
                type="submit"
                loading={isSubmitting}
                className="w-full mt-1.5 mb.3 py-2"
            >
                Create Account
            </Button>

        </form>
    )
}


export default SignupForm