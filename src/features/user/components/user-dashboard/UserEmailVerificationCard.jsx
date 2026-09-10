import { CheckCircle2, Mail, ShieldAlert } from "lucide-react"

import useSession from "../../../auth/hooks/useSession"

import ActionError from "../../../../components/ui/ActionError"
import Button from "../../../../components/ui/Button"

const UserEmailVerificationCard = ({
    onRequestEmailVerification,
    isRequestEmailVerificationLoading,
    emailVerificationError,
    isEmailVerificationSent,
    onDismissEmailVerificationError,
}) => {
    const { user } = useSession()

    if (user?.isEmailVerified) {
        return (
            <section
                className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-status-success/20
                bg-background-surface
                p-5
                "
            >
                <div
                    className="
                    pointer-events-none
                    absolute
                    -right-6
                    -top-6
                    h-24
                    w-24
                    rounded-full
                    bg-status-success/5
                    blur-2xl
                    "
                />

                <div
                    className="
                    relative
                    flex
                    items-start
                    gap-4
                    "
                >
                    <div
                        className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-status-success/20
                        bg-status-success/10
                        text-status-success
                        "
                    >
                        <CheckCircle2 size={20} strokeWidth={1.9} />
                    </div>

                    <div className="min-w-0">
                        <div
                            className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            "
                        >
                            <h3
                                className="
                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary
                                "
                            >
                                Email verified
                            </h3>

                            <span
                                className="
                                rounded-full
                                bg-status-success/10
                                px-2
                                py-0.5
                                font-body
                                text-[10px]
                                font-medium
                                text-status-success
                                "
                            >
                                Verified
                            </span>
                        </div>

                        <p
                            className="
                            mt-1.5
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                            "
                        >
                            Your email address is verified and your account is
                            fully active.
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section
            className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-status-warning/20
            bg-background-surface
            p-5
            "
        >
            <div
                className="
                pointer-events-none
                absolute
                -right-6
                -top-6
                h-28
                w-28
                rounded-full
                bg-status-warning/5
                blur-3xl
                "
            />

            <div
                className="
                relative
                flex
                flex-col
                gap-5
                "
            >
                <div
                    className="
                    flex
                    items-start
                    gap-4
                    "
                >
                    <div
                        className="
                        relative
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-status-warning/20
                        bg-status-warning/10
                        text-status-warning
                        "
                    >
                        <span
                            className={`
                                absolute
                                inset-0
                                rounded-xl
                                bg-status-warning/10
                                ${isEmailVerificationSent ? "" : "animate-ping"}
                            `}
                        />

                        <Mail
                            size={20}
                            strokeWidth={1.9}
                            className="relative z-10"
                        />
                    </div>

                    <div className="min-w-0">
                        <div
                            className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            "
                        >
                            <h3
                                className="
                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary
                                "
                            >
                                {isEmailVerificationSent
                                    ? "Verification email sent"
                                    : "Verify your email"}
                            </h3>

                            <span
                                className="
                                rounded-full
                                bg-status-warning/10
                                px-2
                                py-0.5
                                font-body
                                text-[10px]
                                font-medium
                                text-status-warning
                                "
                            >
                                {isEmailVerificationSent
                                    ? "Check your inbox"
                                    : "Action required"}
                            </span>
                        </div>

                        <p
                            className="
                            mt-1.5
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                            "
                        >
                            {isEmailVerificationSent
                                ? "We sent a verification link to your email address. Open the email and click the link to continue."
                                : "Verify your email to unlock all Pathwise features and keep your account secure."}
                        </p>
                    </div>
                </div>

                <Button
                    type="button"
                    loading={isRequestEmailVerificationLoading}
                    onClick={onRequestEmailVerification}
                    className="
                        w-full
                        bg-status-warning
                        text-background-base
                        hover:opacity-90

                        sm:w-auto
                        sm:self-end
                    "
                >
                    <Mail size={15} />

                    {isEmailVerificationSent ? "Resend email" : "Verify email"}
                </Button>

                <ActionError
                    open={Boolean(emailVerificationError)}
                    title="Unable to send email"
                    message={emailVerificationError}
                    onDismiss={onDismissEmailVerificationError}
                />
            </div>
        </section>
    )
}

export default UserEmailVerificationCard
