import { MailCheck, ShieldAlert } from "lucide-react"
import Button from "../../../../components/ui/Button"

const ConfirmEmailUpdateContent = ({
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
        onSubmit()
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <form
            onSubmit={handleSubmit}
            className="
                w-full
            "
        >
            {/* Icon */}

            <div
                className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-accent-primary/20
                    bg-accent-primary/10
                    text-accent-primary
                "
            >
                {hasToken ? (
                    <MailCheck size={26} strokeWidth={1.8} />
                ) : (
                    <ShieldAlert size={26} strokeWidth={1.8} />
                )}
            </div>

            {/* Header */}

            <div className="mt-6 text-center">
                <p
                    className="
                        font-body
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-accent-primary
                    "
                >
                    Email change
                </p>

                <h1
                    className="
                        mt-2
                        font-accent
                        text-2xl
                        font-semibold
                        tracking-tight
                        text-text-primary

                        sm:text-3xl
                    "
                >
                    Confirm your new email
                </h1>

                <p
                    className="
                        mx-auto
                        mt-3
                        max-w-sm
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    "
                >
                    Confirm the email address change for your Pathwise account.
                    This will update your account email and sign you out.
                </p>
            </div>

            {/* Invalid Token */}

            {!hasToken && (
                <div
                    role="alert"
                    className="
                        mt-6
                        rounded-lg
                        border
                        border-status-danger/30
                        bg-status-danger/5
                        px-4
                        py-3
                    "
                >
                    <p
                        className="
                            font-body
                            text-sm
                            font-medium
                            text-status-danger
                        "
                    >
                        Invalid email change link
                    </p>

                    <p
                        className="
                            mt-1
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                        "
                    >
                        This link is invalid because no email change token was
                        provided.
                    </p>
                </div>
            )}

            {/* Confirmation Error */}

            {hasToken && error && (
                <div
                    role="alert"
                    className="
                        mt-6
                        rounded-lg
                        border
                        border-status-danger/30
                        bg-status-danger/5
                        px-4
                        py-3
                    "
                >
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <p
                                className="
                                    font-body
                                    text-sm
                                    font-medium
                                    text-status-danger
                                "
                            >
                                Email change failed
                            </p>

                            <p
                                className="
                                    mt-1
                                    font-body
                                    text-xs
                                    leading-5
                                    text-text-secondary
                                "
                            >
                                {error}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onDismissError}
                            className="
                                shrink-0
                                font-body
                                text-xs
                                font-medium
                                text-text-muted
                                transition
                                hover:text-text-primary
                                focus:outline-none
                            "
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            )}

            {/* Action */}

            {hasToken && (
                <div className="mt-7">
                    <Button
                        type="submit"
                        loading={loading}
                        disabled={loading}
                        className="
                            w-full
                            border
                            border-status-success
                            bg-status-success
                            text-background-base
                            shadow-sm
                            transition-all
                            duration-200
                            hover:opacity-90
                            hover:shadow-md
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-status-success
                            focus-visible:ring-offset-2
                        "
                    >
                        Confirm email change
                    </Button>
                </div>
            )}

            {/* Footer */}

            <div
                className="
                    mt-7
                    border-t
                    border-border-subtle
                    pt-5
                    text-center
                "
            >
                <p
                    className="
                        font-body
                        text-[11px]
                        leading-5
                        text-text-muted
                    "
                >
                    This confirmation link can only be used once.
                </p>
            </div>
        </form>
    )
}

export default ConfirmEmailUpdateContent
