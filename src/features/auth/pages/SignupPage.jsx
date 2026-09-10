import { Link, useNavigate } from "react-router-dom"

import pathwise_main_logo from "../../../assets/pathwise_main_logo.png"
import useSession from "../hooks/useSession"
import SignupForm from "../components/form/SignupForm"
import { signupValidationRules } from "../authValidation"

const SignupPage = () => {
    const { userSignup, isSignupLoading } = useSession()
    const navigate = useNavigate()

    // Submit
    const handleSubmit = async (formData) => {
        await userSignup(formData)

        navigate("/")
    }

    return (
        <main
            className="
            flex
            h-screen
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-background-base
            px-4
            py-4
            sm:px-6
            sm:py-6
        "
        >
            <div
                className="
                flex
                h-full
                w-full
                max-w-md
                flex-col
                justify-center
            "
            >
                {/* Logo / Brand */}

                <div
                    className="
                    mb-4
                    text-center
                    sm:mb-5
                "
                >
                    <Link
                        to="/"
                        aria-label="Pathwise home"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-md
                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/30
                        "
                    >
                        <img
                            src={pathwise_main_logo}
                            alt="Pathwise logo"
                            className="
                                w-36
                                sm:w-40
                            "
                        />
                    </Link>

                    <h1
                        className="
                        mt-3
                        font-accent
                        text-xl
                        font-semibold
                        tracking-tight
                        text-text-primary
                        sm:text-2xl
                    "
                    >
                        Create your account
                    </h1>

                    <p
                        className="
                        mx-auto
                        mt-1
                        max-w-sm
                        font-body
                        text-xs
                        leading-5
                        text-text-secondary
                        sm:text-sm
                    "
                    >
                        Join Pathwise and start learning at your own pace.
                    </p>
                </div>

                {/* Signup Card */}

                <section
                    className="
                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface
                    p-4
                    shadow-lg
                    sm:p-6
                "
                >
                    <SignupForm
                        onSubmit={handleSubmit}
                        loading={isSignupLoading}
                        validationRules={signupValidationRules}
                    />
                </section>

                {/* Login Link */}

                <p
                    className="
                    mt-3
                    text-center
                    font-body
                    text-xs
                    text-text-secondary
                    sm:mt-4
                    sm:text-sm
                "
                >
                    Already have an account?{" "}
                    <Link
                        to="/auth/login"
                        className="
                            font-medium
                            text-accent-primary
                            transition
                            hover:opacity-80
                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/30
                            focus:ring-offset-2
                            focus:ring-offset-background-base
                        "
                    >
                        Log in
                    </Link>
                </p>

                {/* Verification Notice */}

                <p
                    className="
                    mx-auto
                    mt-2
                    max-w-sm
                    text-center
                    font-body
                    text-[11px]
                    leading-4
                    text-text-muted
                    sm:mt-3
                    sm:text-xs
                    sm:leading-5
                "
                >
                    After creating your account, we'll send a verification link
                    to your email address.
                </p>
            </div>
        </main>
    )
}

export default SignupPage
