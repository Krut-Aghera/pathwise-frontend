import { Link, useNavigate } from "react-router-dom"

import pathwise_main_logo from "../../../assets/pathwise_main_logo.png"
import LoginForm from "../components/LoginForm"
import useSession from "../hooks/useSession"


const LoginPage = () => {

    const navigate = useNavigate()

    const {
        userLogin,
        isLoginLoading,
    } = useSession()


    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async (credentials) => {

        await userLogin(
            credentials
        )

        ///////////////////////////////////////////////////////////
        // Success

        navigate("/")
    }


    return (
        <main className="
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
        ">

            <div className="
                flex
                h-full
                w-full
                max-w-md
                flex-col
                justify-center
            ">

                {/* Logo / Brand */}

                <div className="
                    mb-4
                    text-center
                    sm:mb-5
                ">

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


                    <h1 className="
                        mt-3
                        font-accent
                        text-xl
                        font-semibold
                        tracking-tight
                        text-text-primary
                        sm:text-2xl
                    ">
                        Welcome back
                    </h1>


                    <p className="
                        mx-auto
                        mt-1
                        max-w-sm
                        font-body
                        text-xs
                        leading-5
                        text-text-secondary
                        sm:text-sm
                    ">
                        Log in to continue your learning journey.
                    </p>

                </div>


                {/* Login Card */}

                <section className="
                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface
                    p-4
                    shadow-lg
                    sm:p-6
                ">
                    <LoginForm
                        onSubmit={handleSubmit}
                        loading={isLoginLoading}
                    />
                </section>


                {/* Signup Link */}

                <p className="
                    mt-3
                    text-center
                    font-body
                    text-xs
                    text-text-secondary
                    sm:mt-4
                    sm:text-sm
                ">
                    Don't have an account?{" "}

                    <Link
                        to="/auth/signup"
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
                        Create account
                    </Link>
                </p>


                {/* Security Notice */}

                <p className="
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
                ">
                    Your session is securely managed by Pathwise.
                </p>

            </div>

        </main>
    )
}


export default LoginPage
