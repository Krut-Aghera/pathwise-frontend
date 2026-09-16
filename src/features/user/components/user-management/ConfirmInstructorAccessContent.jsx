import { GraduationCap, ShieldAlert } from "lucide-react"
import Button from "../../../../components/ui/Button"

const ConfirmInstructorAccessContent = ({
    hasToken,
    loading = false,
    onSubmit,
    error = "",
    onDismissError,
}) => {
    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = (event) => {
        event.preventDefault()

        if (loading) {
            return
        }

        onSubmit()
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-primary/20 bg-accent-primary/10 text-accent-primary">
                {hasToken ? (
                    <GraduationCap size={27} strokeWidth={1.8} />
                ) : (
                    <ShieldAlert size={26} strokeWidth={1.8} />
                )}
            </div>

            <div className="mt-6 text-center">
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-primary">
                    Instructor access
                </p>

                <h1 className="mt-2 font-accent text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                    Confirm instructor access
                </h1>

                <p className="mx-auto mt-3 max-w-sm font-body text-sm leading-6 text-text-secondary">
                    Confirm your request to become an instructor on Pathwise.
                    Once confirmed, your account will receive instructor access.
                </p>
            </div>

            {!hasToken && (
                <div
                    role="alert"
                    className="mt-6 rounded-lg border border-status-danger/30 bg-status-danger/5 px-4 py-3"
                >
                    <p className="font-body text-sm font-medium text-status-danger">
                        Invalid instructor access link
                    </p>

                    <p className="mt-1 font-body text-xs leading-5 text-text-secondary">
                        This link is invalid because no instructor access token
                        was provided.
                    </p>
                </div>
            )}

            {hasToken && error && (
                <div
                    role="alert"
                    className="mt-6 rounded-lg border border-status-danger/30 bg-status-danger/5 px-4 py-3"
                >
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <p className="font-body text-sm font-medium text-status-danger">
                                Confirmation failed
                            </p>

                            <p className="mt-1 font-body text-xs leading-5 text-text-secondary">
                                {error}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onDismissError}
                            className="shrink-0 font-body text-xs font-medium text-text-muted transition hover:text-text-primary focus:outline-none"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            )}

            {hasToken && (
                <div className="mt-7">
                    <Button
                        type="submit"
                        loading={loading}
                        disabled={loading}
                        className="w-full border border-status-success bg-status-success text-background-base shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-status-success focus-visible:ring-offset-2"
                    >
                        Confirm instructor access
                    </Button>
                </div>
            )}

            <div className="mt-7 border-t border-border-subtle pt-5 text-center">
                <p className="font-body text-[11px] leading-5 text-text-muted">
                    This confirmation link can only be used once.
                </p>
            </div>
        </form>
    )
}

export default ConfirmInstructorAccessContent
