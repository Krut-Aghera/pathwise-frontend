import { Link } from "react-router-dom"

import pathwise_main_logo from "../../../assets/pathwise_main_logo.png"
import ForgotPasswordForm from "../components/ForgotPasswordForm.jsx"

const ForgotPasswordPage = () => {
    return (
        <main
            className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-background-base
            px-4
            py-8
            sm:px-6
        "
        >
            <div
                className="
                w-full
                max-w-md
            "
            >
                {/* Logo / Brand */}

                <div
                    className="
                    mb-8
                    text-center
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
                            alt="Pathwise"
                            className="w-40 sm:w-44"
                        />
                    </Link>

                    <h1
                        className="
                        mt-5
                        font-accent
                        text-2xl
                        font-semibold
                        tracking-tight
                        text-text-primary
                        sm:text-3xl
                    "
                    >
                        Forgot your password?
                    </h1>

                    <p
                        className="
                        mx-auto
                        mt-2
                        max-w-sm
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    "
                    >
                        Enter your email address and we'll send you a link to
                        reset your password.
                    </p>
                </div>

                {/* Forgot Password Card */}

                <section
                    className="
                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface
                    p-5
                    shadow-lg
                    sm:p-7
                "
                >
                    <ForgotPasswordForm />
                </section>

                {/* Back to Login */}

                <p
                    className="
                    mt-6
                    text-center
                    font-body
                    text-sm
                    text-text-secondary
                "
                >
                    Remember your password?{" "}
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

                {/* Security Notice */}

                <p
                    className="
                    mx-auto
                    mt-5
                    max-w-sm
                    text-center
                    font-body
                    text-xs
                    leading-5
                    text-text-muted
                "
                >
                    For your security, we'll only send a password reset link if
                    the request can be processed for this account.
                </p>
            </div>
        </main>
    )
}

export default ForgotPasswordPage
