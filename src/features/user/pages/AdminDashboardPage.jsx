import { useEffect } from "react"

import AdminDashboardHeader from "../components/admin-dashboard/AdminDashboardHeader"
import AdminStats from "../components/admin-dashboard/AdminStats"
import AdminWorkspace from "../components/admin-dashboard/AdminWorkspace"
import AdminRemovedCourses from "../components/admin-dashboard/AdminRemovedCourses"

import useDashboard from "../../user/hooks/useDashboard.js"
import useSession from "../../auth/hooks/useSession.js"

import ErrorState from "../../../components/ui/ErrorState.jsx"
import formatINR from "../../../utils/format-currency.js"


const AdminDashboardPage = () => {
    const { user } = useSession()

    const {
        fetchAdminDashboard,
        adminDashboard,
        isAdminDashboardLoading,
        isAdminDashboardError,
        adminDashboardError,
    } = useDashboard()

    useEffect(() => {
        if (!user?._id) {
            return
        }

        fetchAdminDashboard(user._id)
    }, [user?._id, fetchAdminDashboard])

    if (isAdminDashboardError) {
        const errorMessage =
            adminDashboardError?.errors?.[0]?.message ||
            adminDashboardError?.message ||
            "Unable to load the admin dashboard."

        const handleRetry = () => {
            if (user?._id) {
                fetchAdminDashboard(user._id)
            }
        }

        return (
            <main className="min-h-[calc(100vh-4rem)] bg-background-base">
                <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
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

    const dashboardStats = {
        totalCourses: adminDashboard?.totalCourses ?? 0,
        totalInstructors: adminDashboard?.totalInstructors ?? 0,
        totalStudents: adminDashboard?.totalStudents ?? 0,
        totalEnrollments: adminDashboard?.totalEnrollments ?? 0,
        totalRevenue: formatINR(adminDashboard?.totalRevenue ?? 0),
        totalRemovedCourses:
            adminDashboard?.totalRemovedCourses ?? 0,
    }

    const instructors = adminDashboard?.instructors ?? []
    const students = adminDashboard?.students ?? []
    const courses = adminDashboard?.courses ?? []
    const publishedCourses = adminDashboard?.publishedCourses ?? []
    const draftCourses = adminDashboard?.draftCourses ?? []
    const removedCourses = adminDashboard?.removedCourses ?? []

    return (
        <main className="min-h-[calc(100vh-4rem)] bg-background-base">
            <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-5 sm:px-6 sm:py-6 lg:min-h-[calc(100vh-4rem)] lg:px-8 lg:py-7">
                <AdminDashboardHeader />

                <section className="mt-5 lg:mt-6">
                    <div className="mb-3 flex items-end justify-between gap-4">
                        <div>
                            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-primary">
                                Overview
                            </p>

                            <h2 className="mt-1 font-accent text-lg font-semibold tracking-tight text-text-primary">
                                Platform overview
                            </h2>
                        </div>

                        <p className="hidden max-w-sm text-right font-body text-xs leading-5 text-text-secondary sm:block">
                            A quick look at your learners, instructors, courses,
                            and platform revenue.
                        </p>
                    </div>

                    <AdminStats
                        stats={dashboardStats}
                        isLoading={isAdminDashboardLoading}
                    />
                </section>

                <section className="mt-5 lg:mt-6">
                    <AdminWorkspace
                        instructors={instructors}
                        students={students}
                        courses={courses}
                        publishedCourses={publishedCourses}
                        draftCourses={draftCourses}
                        isLoading={isAdminDashboardLoading}
                    />
                </section>

                {!isAdminDashboardLoading && removedCourses.length > 0 && (
                    <section className="mt-5 lg:mt-6">
                        <AdminRemovedCourses courses={removedCourses} />
                    </section>
                )}
            </div>
        </main>
    )
}

export default AdminDashboardPage