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
        <section>
            <div
                className="
                mb-4
                flex
                flex-col
                gap-1
                "
            >
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
                    Account status
                </p>

                <h2
                    className="
                    font-accent
                    text-xl
                    font-semibold
                    tracking-tight
                    text-text-primary
                    "
                >
                    Keep your account ready
                </h2>

                <p
                    className="
                    max-w-2xl
                    font-body
                    text-xs
                    leading-5
                    text-text-secondary
                    "
                >
                    Review your account security and access status.
                </p>
            </div>

            <div
                className="
                grid
                grid-cols-1
                gap-4

                lg:grid-cols-2
                "
            >
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
        </section>
    )
}

export default UserAccountStatus
