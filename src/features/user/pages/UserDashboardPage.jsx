import DashboardHeader from "../components/user-dashboard/DashboardHeader"
import UserProfileSummary from "../components/user-dashboard/UserProfileSummary"
import EmailVerificationCard from "../components/user-dashboard/EmailVerificationCard"
import InstructorAccessCard from "../components/user-dashboard/InstructorAccessCard"
import AccountManagement from "../components/user-dashboard/AccountManagement"
import DashboardCourseCard from "../../course/components/DashboardCourseCard"

import { dashboardCourses } from "../../../data/userDashboardData"


const UserDashboardPage = () => {

    return (
        <main className="
            min-h-[calc(100vh-4rem)]
            bg-background-base
        ">

            <div className="
                mx-auto
                w-full
                max-w-6xl
                px-4
                py-8

                sm:px-6
                sm:py-10

                lg:px-8
                lg:py-12
            ">

                {/* Header */}

                <DashboardHeader />


                {/* Dashboard content */}

                <div className="
                    mt-8
                    space-y-8

                    lg:mt-10
                    lg:space-y-10
                ">


                    {/* Personal information */}

                    <UserProfileSummary />


                    {/* Account status */}

                    <section>

                        <div className="
                            mb-4
                            flex
                            items-end
                            justify-between
                        ">

                            <div>
                                <p className="
                                    font-body
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.16em]
                                    text-accent-primary
                                ">
                                    Account status
                                </p>

                                <h2 className="
                                    mt-1.5
                                    font-accent
                                    text-lg
                                    font-semibold
                                    text-text-primary

                                    sm:text-xl
                                ">
                                    Keep your account ready
                                </h2>
                            </div>

                        </div>


                        <div className="
                            grid
                            grid-cols-1
                            gap-4

                            lg:grid-cols-2
                        ">

                            <EmailVerificationCard />

                            <InstructorAccessCard />

                        </div>

                    </section>


                    {/* Learning */}

                    <section>

                        <div className="
                            mb-4
                            flex
                            items-end
                            justify-between
                            gap-4
                        ">

                            <div>

                                <p className="
                                    font-body
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.16em]
                                    text-accent-primary
                                ">
                                    Your learning
                                </p>

                                <h2 className="
                                    mt-1.5
                                    font-accent
                                    text-lg
                                    font-semibold
                                    text-text-primary

                                    sm:text-xl
                                ">
                                    Continue learning
                                </h2>

                            </div>


                            {dashboardCourses.length > 0 && (
                                <span className="
                                    hidden
                                    font-body
                                    text-xs
                                    text-text-muted

                                    sm:block
                                ">
                                    {dashboardCourses.length} enrolled
                                </span>
                            )}

                        </div>


                        {dashboardCourses.length > 0 ? (

                            <div className="
                                grid
                                grid-cols-1
                                gap-4

                                xl:grid-cols-2
                            ">

                                {dashboardCourses.map((course) => (
                                    <DashboardCourseCard
                                        key={course.id}
                                        course={course}
                                    />
                                ))}

                            </div>

                        ) : (

                            <div className="
                                rounded-2xl
                                border
                                border-border-subtle
                                bg-background-surface
                                px-6
                                py-12
                                text-center
                            ">

                                <p className="
                                    font-accent
                                    text-sm
                                    font-medium
                                    text-text-primary
                                ">
                                    No courses yet
                                </p>

                                <p className="
                                    mt-1.5
                                    font-body
                                    text-xs
                                    text-text-secondary
                                ">
                                    Enroll in a course to start your
                                    learning journey.
                                </p>

                            </div>

                        )}

                    </section>


                    {/* Account management */}

                    <section>

                        <div className="mb-4">

                            <p className="
                                font-body
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-accent-primary
                            ">
                                Account
                            </p>

                            <h2 className="
                                mt-1.5
                                font-accent
                                text-lg
                                font-semibold
                                text-text-primary

                                sm:text-xl
                            ">
                                Manage your account
                            </h2>

                        </div>


                        <AccountManagement />

                    </section>

                </div>

            </div>

        </main>
    )
}


export default UserDashboardPage