import DashboardSideVisual from "../components/DashboardSideVisual.jsx"
import DashboardHeader from "../components/DashboardHeader"
import UserProfileSummary from "../components/UserProfileSummary"
import EmailVerificationCard from "../components/EmailVerificationCard"
import InstructorAccessCard from "../components/InstructorAccessCard"
import DeactivateAccountCard from "../components/DeactivateAccountCard"
import DashboardCourseCard from "../../course/components/DashboardCourseCard"
import { dashboardCourses, dashboardUser } from "../../../data/userDashboardData.js"


const UserDashboardPage = () => {

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-background-base">

            <div className="
                mx-auto
                flex
                w-full
                max-w-7xl
                flex-col
                gap-8
                px-4
                py-8

                sm:px-6
                sm:py-10

                lg:flex-row
                lg:px-8
            ">

                {/* Sidebar */}
                <DashboardSideVisual />

                {/* Main */}
                <div className="min-w-0 flex-1">

                    <div className="space-y-6">

                        {/* Header */}
                        <DashboardHeader />


                        {/* Profile */}
                        <UserProfileSummary />


                        {/* Email */}
                        <EmailVerificationCard />


                        {/* Instructor */}

                        {!dashboardUser.instructor && (
                            <InstructorAccessCard />
                        )}


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
                                        font-medium
                                        uppercase
                                        tracking-wider
                                        text-accent-primary
                                    ">
                                        Your courses
                                    </p>

                                    <h2 className="
                                        mt-1
                                        font-accent
                                        text-xl
                                        font-bold
                                        text-text-primary
                                    ">
                                        Continue learning
                                    </h2>
                                </div>
                            </div>


                            {dashboardCourses.length > 0 ? (
                                <div className="
                                    grid
                                    grid-cols-1
                                    gap-4
                                    xl:grid-cols-2
                                ">
                                    {dashboardCourses.map(
                                        (course) => (
                                            <DashboardCourseCard
                                                key={course.id}
                                                course={course}
                                            />
                                        )
                                    )}

                                </div>

                            ) : (
                                <div className="
                                    rounded-xl
                                    border
                                    border-border-subtle
                                    bg-background-surface
                                    p-8
                                    text-center
                                ">
                                    <p className="
                                        font-body
                                        text-sm
                                        text-text-secondary
                                    ">
                                        You haven't enrolled in
                                        any courses yet.
                                    </p>
                                </div>
                            )}

                        </section>


                        {/* Danger zone */}
                        <section className="pt-4">
                            <div className="mb-4">

                                <p className="
                                    font-body
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-wider
                                    text-status-danger
                                ">
                                    Account
                                </p>

                            </div>

                            <DeactivateAccountCard />
                        </section>

                    </div>

                </div>

            </div>

        </div>
    )
}


export default UserDashboardPage