import { useState } from "react"
import { GraduationCap } from "lucide-react"

import FormActions from "../../../../components/form/FormActions"

const InstructorAccessForm = ({ onSubmit, onCancel, loading = false }) => {
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (loading) {
            return
        }

        setSuccessMessage("")
        setErrorMessage("")

        try {
            const response = await onSubmit()

            setSuccessMessage(
                response?.message ||
                    "Instructor access confirmation link has been sent to your email."
            )
        } catch (error) {
            setErrorMessage(
                error?.message ||
                    "Unable to request instructor access. Please try again."
            )
        }
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-primary/20 bg-accent-primary/10 text-accent-primary">
                    <GraduationCap size={27} strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 font-accent text-lg font-semibold text-text-primary">
                    Request instructor access
                </h2>

                <p className="mt-2 font-body text-sm leading-6 text-text-secondary">
                    We will send a confirmation link to your verified email
                    address. Confirming the link will give your account
                    instructor access.
                </p>
            </div>

            <div className="rounded-lg border border-border-subtle bg-background-elevated/50 px-4 py-4">
                <p className="font-body text-sm font-medium text-text-primary">
                    What happens next?
                </p>

                <div className="mt-3 space-y-3">
                    <div className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 font-body text-xs font-semibold text-accent-primary">
                            1
                        </span>

                        <p className="font-body text-sm leading-6 text-text-secondary">
                            Request instructor access from your account.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 font-body text-xs font-semibold text-accent-primary">
                            2
                        </span>

                        <p className="font-body text-sm leading-6 text-text-secondary">
                            Open the confirmation link sent to your verified
                            email.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 font-body text-xs font-semibold text-accent-primary">
                            3
                        </span>

                        <p className="font-body text-sm leading-6 text-text-secondary">
                            Confirm the request to receive instructor access.
                        </p>
                    </div>
                </div>
            </div>

            {successMessage && (
                <div
                    role="status"
                    className="rounded-lg border border-status-success/30 bg-status-success/5 px-4 py-3"
                >
                    <p className="font-body text-sm font-medium text-status-success">
                        Request sent
                    </p>

                    <p className="mt-1 font-body text-xs leading-5 text-text-secondary">
                        {successMessage}
                    </p>
                </div>
            )}

            {errorMessage && (
                <div
                    role="alert"
                    className="rounded-lg border border-status-danger/30 bg-status-danger/5 px-4 py-3"
                >
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <p className="font-body text-sm font-medium text-status-danger">
                                Request failed
                            </p>

                            <p className="mt-1 font-body text-xs leading-5 text-text-secondary">
                                {errorMessage}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setErrorMessage("")}
                            className="shrink-0 font-body text-xs font-medium text-text-muted transition hover:text-text-primary focus:outline-none"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            )}

            <FormActions
                onCancel={onCancel}
                loading={loading}
                submitLabel="Request instructor access"
                submitClassName="
                    border-accent-primary
                    bg-accent-primary
                    text-text-primary

                    focus-visible:ring-accent-primary
                "
            />
        </form>
    )
}

export default InstructorAccessForm
