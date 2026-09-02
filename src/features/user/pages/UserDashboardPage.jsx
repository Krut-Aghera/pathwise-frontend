import UserDashboardHeader from "../components/user-dashboard/UserDashboardHeader"
import UserLearningOverview from "../components/user-dashboard/UserLearningOverview"
import UserAccountStatus from "../components/user-dashboard/UserAccountStatus"
import UserProfileSummary from "../components/user-dashboard/UserProfileSummary"
import UserAccountManagement from "../components/user-dashboard/UserAccountManagement"

const UserDashboardPage = () => {
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
                w-full
                max-w-7xl
                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                {/* Header */}

                <UserDashboardHeader />

                {/* Dashboard content */}

                <div
                    className="
                    mt-6
                    space-y-8

                    lg:mt-8
                    lg:space-y-10
                "
                >
                    {/* Learning overview */}

                    <UserLearningOverview />

                    {/* Account status */}

                    <UserAccountStatus />

                    {/* Profile */}

                    <UserProfileSummary />

                    {/* Account management */}

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
                                Account
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
                                Manage your account
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
                                Update your personal information and security
                                settings.
                            </p>
                        </div>

                        <UserAccountManagement />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default UserDashboardPage
