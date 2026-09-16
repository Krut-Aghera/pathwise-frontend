import { CheckCircle2, Mail, ShieldCheck } from "lucide-react"

import useSession from "../../../auth/hooks/useSession"
import Button from "../../../../components/ui/Button"
import ActionError from "../../../../components/ui/ActionError"

const UserEmailVerificationCard = ({
    onRequestEmailVerification,
    isRequestEmailVerificationLoading,
    emailVerificationError,
    isEmailVerificationSent,
    onDismissEmailVerificationError,
}) => {
    const { user } = useSession()

    const isVerified = user?.isEmailVerified

    if (isVerified) {
        return (
            <div
                className="
                    rounded-xl
                    border
                    border-status-success/20
                    bg-status-success/5
                    p-3.5
                "
            >
                <div className="flex items-center gap-3">
                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-status-success/10
                            text-status-success
                        "
                    >
                        <CheckCircle2 size={18} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                            <p
                                className="
                                    font-body
                                    text-sm
                                    font-medium
                                    text-text-primary
                                "
                            >
                                Email verified
                            </p>

                            <span
                                className="
                                    rounded-full
                                    bg-status-success/10
                                    px-2
                                    py-0.5
                                    font-body
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                    text-status-success
                                "
                            >
                                Verified
                            </span>
                        </div>

                        <p
                            className="
                                mt-0.5
                                font-body
                                text-[11px]
                                leading-4
                                text-text-secondary
                            "
                        >
                            Your account email is verified.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            className="
                rounded-xl
                border
                border-status-warning/20
                bg-status-warning/5
                p-3.5
            "
        >
            <div className="flex items-start gap-3">
                <div
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-status-warning/10
                        text-status-warning
                    "
                >
                    {isEmailVerificationSent ? (
                        <ShieldCheck size={18} strokeWidth={1.8} />
                    ) : (
                        <Mail size={18} strokeWidth={1.8} />
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                        "
                    >
                        <p
                            className="
                                font-body
                                text-sm
                                font-medium
                                text-text-primary
                            "
                        >
                            {isEmailVerificationSent
                                ? "Verification email sent"
                                : "Verify your email"}
                        </p>

                        <span
                            className="
                                rounded-full
                                bg-status-warning/10
                                px-2
                                py-0.5
                                font-body
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-status-warning
                            "
                        >
                            Action needed
                        </span>
                    </div>

                    <p
                        className="
                            mt-0.5
                            font-body
                            text-[11px]
                            leading-4
                            text-text-secondary
                        "
                    >
                        {isEmailVerificationSent
                            ? "Check your inbox and follow the verification link."
                            : "Verify your email to unlock account actions."}
                    </p>

                    {!isEmailVerificationSent && (
                        <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            className="mt-3"
                            loading={isRequestEmailVerificationLoading}
                            disabled={isRequestEmailVerificationLoading}
                            onClick={onRequestEmailVerification}
                        >
                            Send verification email
                        </Button>
                    )}

                    {emailVerificationError && (
                        <div className="mt-2">
                            <ActionError
                                message={emailVerificationError}
                                onDismiss={onDismissEmailVerificationError}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserEmailVerificationCard
