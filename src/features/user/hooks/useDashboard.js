import { useCallback } from "react"

import {
    useLazyFetchInstructorDashboardQuery,
    useLazyFetchStudentDashboardQuery,
    useLazyFetchAdminDashboardQuery,
} from "../dashboardApi.js"

const useDashboard = () => {
    // Instructor dashboard
    const [
        fetchInstructorDashboardQuery,
        {
            data: instructorDashboardResponse,
            isLoading: isInstructorDashboardLoading,
            isFetching: isInstructorDashboardFetching,
            isSuccess: isInstructorDashboardSuccess,
            isError: isInstructorDashboardError,
            error: instructorDashboardError,
            reset: resetInstructorDashboard,
        },
    ] = useLazyFetchInstructorDashboardQuery()

    // Student dashboard
    const [
        fetchStudentDashboardQuery,
        {
            data: studentDashboardResponse,
            isLoading: isStudentDashboardLoading,
            isFetching: isStudentDashboardFetching,
            isSuccess: isStudentDashboardSuccess,
            isError: isStudentDashboardError,
            error: studentDashboardError,
            reset: resetStudentDashboard,
        },
    ] = useLazyFetchStudentDashboardQuery()

    // Admin dashboard
    const [
        fetchAdminDashboardQuery,
        {
            data: adminDashboardResponse,
            isLoading: isAdminDashboardLoading,
            isFetching: isAdminDashboardFetching,
            isSuccess: isAdminDashboardSuccess,
            isError: isAdminDashboardError,
            error: adminDashboardError,
            reset: resetAdminDashboard,
        },
    ] = useLazyFetchAdminDashboardQuery()

    ///////////////////////////////////////////////////////////////
    // Fetch instructor dashboard

    const fetchInstructorDashboard = useCallback(
        async (instructorId) => {
            try {
                const result =
                    await fetchInstructorDashboardQuery(
                        instructorId
                    ).unwrap()

                return {
                    success: true,
                    data: result,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [fetchInstructorDashboardQuery]
    )

    ///////////////////////////////////////////////////////////////
    // Fetch student dashboard

    const fetchStudentDashboard = useCallback(
        async (studentId) => {
            try {
                const result =
                    await fetchStudentDashboardQuery(studentId).unwrap()

                return {
                    success: true,
                    data: result,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [fetchStudentDashboardQuery]
    )

    ///////////////////////////////////////////////////////////////
    // Fetch admin dashboard

    const fetchAdminDashboard = useCallback(
        async (adminId) => {
            try {
                const result =
                    await fetchAdminDashboardQuery(adminId).unwrap()

                return {
                    success: true,
                    data: result,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [fetchAdminDashboardQuery]
    )

    ///////////////////////////////////////////////////////////////
    // Data

    const instructorDashboard =
        instructorDashboardResponse?.data ??
        instructorDashboardResponse ??
        null

    const studentDashboard =
        studentDashboardResponse?.data ??
        studentDashboardResponse ??
        null

    const adminDashboard =
        adminDashboardResponse?.data ??
        adminDashboardResponse ??
        null

    ///////////////////////////////////////////////////////////////
    // Overall state

    const isLoading =
        isInstructorDashboardLoading ||
        isStudentDashboardLoading ||
        isAdminDashboardLoading

    const isFetching =
        isInstructorDashboardFetching ||
        isStudentDashboardFetching ||
        isAdminDashboardFetching

    return {
        // Instructor dashboard
        fetchInstructorDashboard,
        instructorDashboard,

        isInstructorDashboardLoading,
        isInstructorDashboardFetching,
        isInstructorDashboardSuccess,

        isInstructorDashboardError,
        instructorDashboardError,

        resetInstructorDashboard,

        // Student dashboard
        fetchStudentDashboard,
        studentDashboard,

        isStudentDashboardLoading,
        isStudentDashboardFetching,
        isStudentDashboardSuccess,

        isStudentDashboardError,
        studentDashboardError,

        resetStudentDashboard,

        // Admin dashboard
        fetchAdminDashboard,
        adminDashboard,

        isAdminDashboardLoading,
        isAdminDashboardFetching,
        isAdminDashboardSuccess,

        isAdminDashboardError,
        adminDashboardError,

        resetAdminDashboard,

        // Overall state
        isLoading,
        isFetching,
    }
}

export default useDashboard