import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import useAuthManagement from "../hooks/useAuthManagement"

import VerifyEmailContent from "../components/auth-management/VerifyEmailContent"

const VerifyEmailPage = () => {
    const { token } = useParams()
    const navigate = useNavigate()

    const { userConfirmEmailVerification, isConfirmEmailVerificationLoading } =
        useAuthManagement()

    const [verificationError, setVerificationError] = useState("")

    ///////////////////////////////////////////////////////////////
    // Confirm email

    const handleConfirmVerification = async () => {
        if (!token || isConfirmEmailVerificationLoading) {
            return
        }

        setVerificationError("")

        try {
            await userConfirmEmailVerification(token)

            navigate("/dashboard", {
                replace: true,
            })
        } catch (error) {
            setVerificationError(
                error?.message ||
                    "Unable to verify your email. Please try again."
            )
        }
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <div
            className="
                flex
                w-full
                items-center
                justify-center
                px-4
                py-6

                sm:px-6
                sm:py-8
            "
        >
            <section
                className="
                    relative
                    w-full
                    max-w-md
                    shrink-0
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border-subtle
                    bg-background-surface
                    p-5
                    shadow-lg
                    sm:p-8
                "
            >
                {/* Decorative Background */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-16
                        -top-16
                        h-36
                        w-36
                        rounded-full
                        bg-accent-primary/5
                        blur-3xl
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-16
                        -left-16
                        h-36
                        w-36
                        rounded-full
                        bg-accent-secondary/5
                        blur-3xl
                    "
                />

                <div className="relative">
                    <VerifyEmailContent
                        hasToken={Boolean(token)}
                        loading={isConfirmEmailVerificationLoading}
                        onSubmit={handleConfirmVerification}
                        error={verificationError}
                        onDismissError={() => setVerificationError("")}
                    />
                </div>
            </section>
        </div>
    )
}

export default VerifyEmailPage
