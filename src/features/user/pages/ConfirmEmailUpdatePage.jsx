import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import ConfirmEmailUpdateContent from "../components/user-management/ConfirmEmailUpdateContent"
import useUser from "../hooks/useUser"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const ConfirmEmailUpdatePage = () => {
    const { token } = useParams()
    const navigate = useNavigate()

    const { confirmEmailChange, isConfirmingEmailChange } = useUser()

    const [confirmationError, setConfirmationError] = useState("")

    ///////////////////////////////////////////////////////////////
    // Confirm email change

    const handleConfirmEmailChange = async () => {
        if (!token || isConfirmingEmailChange) {
            return
        }

        setConfirmationError("")

        try {
            await confirmEmailChange(token)

            navigate("/auth/login", {
                replace: true,
            })
        } catch (error) {
            setConfirmationError(
                error?.message ||
                    "Unable to change your email. Please try again."
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
                    <ConfirmEmailUpdateContent
                        hasToken={Boolean(token)}
                        loading={isConfirmingEmailChange}
                        onSubmit={handleConfirmEmailChange}
                        error={confirmationError}
                        onDismissError={() => setConfirmationError("")}
                    />
                </div>
            </section>
        </div>
    )
}

export default ConfirmEmailUpdatePage
