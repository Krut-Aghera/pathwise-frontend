import { MailCheck, ShieldAlert } from "lucide-react"

import ActionError from "../../../../components/ui/ActionError"
import Button from "../../../../components/ui/Button"

const VerifyEmailContent = ({
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
                    Account verification
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
                    Verify your email
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
                    Confirm your email address to activate your account and
                    access all Pathwise features.
                </p>
            </div>

            {/* Invalid Token */}

            {!hasToken && (
                <ActionError
                    open
                    title="Invalid verification link"
                    message="This verification link is invalid because no verification token was provided."
                    dismissible={false}
                    scrollIntoView={false}
                />
            )}

            {/* Verification Error */}

            {hasToken && (
                <ActionError
                    open={Boolean(error)}
                    title="Verification failed"
                    message={error}
                    onDismiss={onDismissError}
                />
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
                        Confirm email
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
                    This verification link expires after 24 hours.
                </p>
            </div>
        </form>
    )
}

export default VerifyEmailContent