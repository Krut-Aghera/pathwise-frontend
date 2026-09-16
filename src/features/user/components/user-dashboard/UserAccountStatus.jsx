import UserEmailVerificationCard from "./UserEmailVerificationCard"
import UserInstructorAccessCard from "./UserInstructorAccessCard"

const UserAccountStatus = ({
    onRequestEmailVerification,
    isRequestEmailVerificationLoading,
    emailVerificationError,
    isEmailVerificationSent,
    onDismissEmailVerificationError,
}) => {
    return (
        <section
            className="
                min-w-0
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            <div className="px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p
                            className="
                                font-body
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-accent-secondary
                            "
                        >
                            Account status
                        </p>

                        <h2
                            className="
                                mt-1
                                font-accent
                                text-base
                                font-semibold
                                tracking-tight
                                text-text-primary

                                sm:text-lg
                            "
                        >
                            Keep your account ready
                        </h2>
                    </div>
                </div>

                <div className="mt-4 space-y-3">
                    <UserEmailVerificationCard
                        onRequestEmailVerification={onRequestEmailVerification}
                        isRequestEmailVerificationLoading={
                            isRequestEmailVerificationLoading
                        }
                        emailVerificationError={emailVerificationError}
                        isEmailVerificationSent={isEmailVerificationSent}
                        onDismissEmailVerificationError={
                            onDismissEmailVerificationError
                        }
                    />

                    <UserInstructorAccessCard />
                </div>
            </div>
        </section>
    )
}

export default UserAccountStatus
