import DashboardSideVisual from "../components/user-dashboard/DashboardSideVisual.jsx"

import InstructorDashboardHeader from "../components/instructor-dashboard/InstructorDashboardHeader"
import InstructorStats from "../components/instructor-dashboard/InstructorStats"
import InstructorCoursePerformance from "../components/instructor-dashboard/InstructorCoursePerformance"
import InstructorDraftCourses from "../components/instructor-dashboard/InstructorDraftCourses"
import InstructorDeletedCourses from "../components/instructor-dashboard/InstructorDeletedCourses"
import InstructorQuickActions from "../components/instructor-dashboard/InstructorQuickActions"
import {
    instructorDashboardStats,
    instructorPublishedCourses,
    instructorDraftCourses,
    instructorDeletedCourses,
} from "../../../data/instructorDashboardData.js"


const InstructorDashboardPage = () => {

    return (
        <div className="
            min-h-[calc(100vh-4rem)]
            bg-background-base
        ">

            <div className="
                mx-auto
                flex
                w-full
                max-w-7xl
                flex-row

                gap-4

                px-3
                py-6

                sm:gap-6
                sm:px-6
                sm:py-8

                lg:gap-8
                lg:px-8
            ">

                {/* Sidebar visual */}

                <DashboardSideVisual />


                {/* Main */}

                <main className="
                    min-w-0
                    flex-1
                ">

                    <div className="space-y-8">

                        {/* Header */}

                        <InstructorDashboardHeader />


                        {/* Statistics */}

                        <InstructorStats
                            stats={instructorDashboardStats}
                        />


                        {/* Course workspace */}

                        <InstructorQuickActions />


                        {/* Published courses */}

                        <InstructorCoursePerformance
                            courses={instructorPublishedCourses}
                        />


                        {/* Draft courses */}

                        {instructorDraftCourses.length > 0 && (
                            <InstructorDraftCourses
                                courses={instructorDraftCourses}
                            />
                        )}


                        {/* Deleted courses */}

                        {instructorDeletedCourses.length > 0 && (
                            <InstructorDeletedCourses
                                courses={instructorDeletedCourses}
                            />
                        )}

                    </div>

                </main>

            </div>

        </div>
    )
}


export default InstructorDashboardPage