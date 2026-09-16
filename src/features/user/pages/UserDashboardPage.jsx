import { useState } from "react"
import { useNavigate } from "react-router-dom"

import UserLearningOverview from "../components/user-dashboard/UserLearningOverview"
import UserAccountStatus from "../components/user-dashboard/UserAccountStatus"
import UserProfileSummary from "../components/user-dashboard/UserProfileSummary"
import UserAccountManagement from "../components/user-dashboard/UserAccountManagement"

import useAuthManagement from "../../auth/hooks/useAuthManagement"
import useSession from "../../auth/hooks/useSession"

const UserDashboardPage = () => {
    const { userRequestEmailVerification, isRequestEmailVerificationLoading } =
        useAuthManagement()

    const { userLogout, isLogoutLoading } = useSession()

    const [emailVerificationError, setEmailVerificationError] = useState("")
    const [isEmailVerificationSent, setIsEmailVerificationSent] =
        useState(false)

    const navigate = useNavigate()

    const handleRequestEmailVerification = async () => {
        if (isRequestEmailVerificationLoading) {
            return
        }

        setEmailVerificationError("")

        try {
            await userRequestEmailVerification()

            setIsEmailVerificationSent(true)
        } catch (error) {
            setEmailVerificationError(
                error?.message ||
                    "Unable to send the verification email. Please try again."
            )
        }
    }

    const handleLogout = async () => {
        if (isLogoutLoading) {
            return
        }

        await userLogout()
    }

    const handleChangePassword = () => {
        navigate("/auth/change-password")
    }

    const handleUpdateUsername = () => {
        navigate("/user/update-username")
    }

    const handleUpdateEmail = () => {
        navigate("/user/update-email")
    }

    const handleAccountDeactivation = () => {
        navigate("/user/account/deactive")
    }

    return (
        <main
            className="
                min-h-[calc(100vh-4rem)]
                bg-background-base
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-7xl
                    flex-col
                    px-4
                    py-5

                    sm:px-6
                    sm:py-6

                    lg:min-h-[calc(100vh-4rem)]
                    lg:px-8
                    lg:py-7
                "
            >
                {/* Profile */}
                <UserProfileSummary />

                {/* Learning + Account Status */}
                <div
                    className="
                        mt-5
                        grid
                        min-w-0
                        grid-cols-1
                        gap-5

                        lg:mt-6
                        lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.8fr)]
                        lg:gap-6
                    "
                >
                    <UserLearningOverview />

                    <UserAccountStatus
                        onRequestEmailVerification={
                            handleRequestEmailVerification
                        }
                        isRequestEmailVerificationLoading={
                            isRequestEmailVerificationLoading
                        }
                        emailVerificationError={emailVerificationError}
                        isEmailVerificationSent={isEmailVerificationSent}
                        onDismissEmailVerificationError={() =>
                            setEmailVerificationError("")
                        }
                    />
                </div>

                {/* Account Management */}
                <section className="mt-5 lg:mt-6">
                    <div className="mb-3 flex items-end justify-between gap-4">
                        <div>
                            <p
                                className="
                                    font-body
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-accent-primary
                                "
                            >
                                Account
                            </p>

                            <h2
                                className="
                                    mt-1
                                    font-accent
                                    text-lg
                                    font-semibold
                                    tracking-tight
                                    text-text-primary
                                "
                            >
                                Account management
                            </h2>
                        </div>

                        <p
                            className="
                                hidden
                                max-w-sm
                                text-right
                                font-body
                                text-xs
                                leading-5
                                text-text-secondary

                                sm:block
                            "
                        >
                            Manage your profile, security, and session.
                        </p>
                    </div>

                    <UserAccountManagement
                        onLogout={handleLogout}
                        isLogoutLoading={isLogoutLoading}
                        onChangePassword={handleChangePassword}
                        onUpdateUsername={handleUpdateUsername}
                        onUpdateEmail={handleUpdateEmail}
                        onAccountDectivation={handleAccountDeactivation}
                    />
                </section>
            </div>
        </main>
    )
}

export default UserDashboardPage
