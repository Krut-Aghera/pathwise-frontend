import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import ConfirmInstructorAccessContent from "../components/user-management/ConfirmInstructorAccessContent.jsx"
import useUser from "../hooks/useUser.js"

const ConfirmInstructorAccessPage = () => {
    const { token } = useParams()
    const navigate = useNavigate()

    const { confirmInstructorAccess, isConfirmingInstructorAccess } = useUser()

    const [confirmationError, setConfirmationError] = useState("")

    ///////////////////////////////////////////////////////////////
    // Confirm

    const handleConfirmInstructorAccess = async () => {
        if (!token || isConfirmingInstructorAccess) {
            return
        }

        setConfirmationError("")

        try {
            await confirmInstructorAccess(token)

            navigate("/dashboard", {
                replace: true,
            })
        } catch (error) {
            setConfirmationError(
                error.errors[0].message ||
                    "Unable to confirm instructor access. Please try again."
            )
        }
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <div className="flex w-full items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
            <section className="relative w-full max-w-md shrink-0 overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-5 shadow-lg sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent-primary/5 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-accent-secondary/5 blur-3xl" />

                <div className="relative">
                    <ConfirmInstructorAccessContent
                        hasToken={Boolean(token)}
                        loading={isConfirmingInstructorAccess}
                        onSubmit={handleConfirmInstructorAccess}
                        error={confirmationError}
                        onDismissError={() => setConfirmationError("")}
                    />
                </div>
            </section>
        </div>
    )
}

export default ConfirmInstructorAccessPage
