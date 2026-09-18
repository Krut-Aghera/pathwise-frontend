import { useEffect } from "react"

import InstructorDashboardHeader from "../components/instructor-dashboard/InstructorDashboardHeader"
import InstructorStats from "../components/instructor-dashboard/InstructorStats"
import InstructorWorkspace from "../components/instructor-dashboard/InstructorWorkspace"
import InstructorDeletedCourses from "../components/instructor-dashboard/InstructorDeletedCourses"

import useCourse from "../../course/hooks/useCourse.js"
import useDashboard from "../../user/hooks/useDashboard.js"
import useSession from "../../auth/hooks/useSession.js"

import ErrorState from "../../../components/ui/ErrorState.jsx"
import formatINR from "../../../utils/format-currency.js"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorDashboardPage = () => {
    const { user } = useSession()

    const {
        fetchInstructorDashboard,
        instructorDashboard,
        isInstructorDashboardLoading,
        isInstructorDashboardError,
        instructorDashboardError,
    } = useDashboard()

    const {
        fetchInstructorCourses,
        instructorCourses: courses = [],
        isInstructorCoursesLoading: isCoursesLoading,
        isInstructorCoursesError: isCoursesError,
        instructorCoursesError: coursesError,

        fetchRemovedCourses,
        removedCourses = [],
        isRemovedCoursesLoading,
        isRemovedCoursesError,
        removedCoursesError,
    } = useCourse()

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Fetch instructor dashboard

    useEffect(() => {
        if (!user?._id) {
            return
        }

        fetchInstructorDashboard(user._id)
    }, [user?._id, fetchInstructorDashboard])

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Fetch instructor courses

    useEffect(() => {
        fetchInstructorCourses()
    }, [])

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Fetch removed courses

    useEffect(() => {
        fetchRemovedCourses()
    }, [])

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Error state

    if (isInstructorDashboardError || isCoursesError || isRemovedCoursesError) {
        const error =
            instructorDashboardError || coursesError || removedCoursesError

        const errorMessage =
            error?.errors?.[0]?.message ||
            error?.message ||
            "Unable to load your dashboard."

        const handleRetry = () => {
            if (isInstructorDashboardError && user?._id) {
                fetchInstructorDashboard(user._id)
            }

            if (isCoursesError) {
                fetchInstructorCourses()
            }

            if (isRemovedCoursesError) {
                fetchRemovedCourses()
            }
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
                        min-h-[calc(100vh-4rem)]
                        w-full
                        max-w-7xl
                        items-center
                        justify-center
                        px-4
                        py-6

                        sm:px-6

                        lg:px-8
                    "
                >
                    <div className="w-full max-w-xl">
                        <ErrorState
                            message={errorMessage}
                            onRetry={handleRetry}
                        />
                    </div>
                </div>
            </main>
        )
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Derived course lists

    const draftCourses = courses.filter(
        (course) => course?.status?.toUpperCase() === "DRAFT"
    )

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Dashboard statistics

    const dashboardStats = {
        totalPublishedCourses: instructorDashboard?.totalPublishedCourses ?? 0,

        totalDraftCourses: instructorDashboard?.totalDraftCourses ?? 0,

        totalDeletedCourses: instructorDashboard?.totalDeletedCourses ?? 0,

        totalEnrollments: instructorDashboard?.totalEnrollments ?? 0,

        totalRevenue: formatINR(instructorDashboard?.totalRevenue ?? 0),
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Render

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
                {/* Instructor profile / workspace header */}

                <InstructorDashboardHeader />

                {/* Instructor overview */}

                <section className="mt-5 lg:mt-6">
                    <div
                        className="
                            mb-3
                            flex
                            items-end
                            justify-between
                            gap-4
                        "
                    >
                        <div>
                            <p
                                className="
                                    font-body
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-accent-secondary
                                "
                            >
                                Overview
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
                                Instructor overview
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
                            A quick look at your courses, learners, and
                            earnings.
                        </p>
                    </div>

                    <InstructorStats
                        stats={dashboardStats}
                        isLoading={isInstructorDashboardLoading}
                    />
                </section>

                {/* Course workspace */}

                <section className="mt-5 lg:mt-6">
                    <InstructorWorkspace
                        draftCourses={draftCourses}
                        allCourses={courses}
                        isLoading={isCoursesLoading}
                    />
                </section>

                {/* Deleted courses */}

                {!isRemovedCoursesLoading && removedCourses.length > 0 && (
                    <section className="mt-5 lg:mt-6">
                        <InstructorDeletedCourses courses={removedCourses} />
                    </section>
                )}
            </div>
        </main>
    )
}

export default InstructorDashboardPage
