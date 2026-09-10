import { useNavigate, useParams } from "react-router-dom"

import ResetPasswordForm from "../components/form/ResetPasswordForm"

import useAuthManagement from "../hooks/useAuthManagement"
import { resetPasswordValidationRules } from "../authValidation"

const ResetPasswordPage = () => {
    const navigate = useNavigate()
    const { token } = useParams()

    const { userResetPassword, isResetPasswordLoading } = useAuthManagement()

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async (formData) => {
        await userResetPassword({
            token,
            data: formData,
        })

        navigate("/auth/login", {
            replace: true,
        })
    }

    ///////////////////////////////////////////////////////////////
    // Render

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
                {/* Page Header */}

                <div
                    className="
                        mb-8
                        text-center
                    "
                >
                    <h1
                        className="
                            font-accent
                            text-2xl
                            font-semibold
                            tracking-tight
                            text-text-primary

                            sm:text-3xl
                        "
                    >
                        Reset your password
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
                        Create a new password for your Pathwise account.
                    </p>
                </div>

                {/* Reset Password Card */}

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
                    <ResetPasswordForm
                        onSubmit={handleSubmit}
                        loading={isResetPasswordLoading}
                        validationRules={resetPasswordValidationRules}
                    />
                </section>
            </div>
        </main>
    )
}

export default ResetPasswordPage
