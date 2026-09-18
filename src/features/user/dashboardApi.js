import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const dashboardApi = createApi({
    reducerPath: "dashboardApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/dashboard",
    }),

    tagTypes: ["Dashboard"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Instructor dashboard

        // GET /dashboard/instructors/:instructorId
        fetchInstructorDashboard: builder.query({
            query: (instructorId) => ({
                url: `/instructors/${instructorId}`,
                method: "GET",
            }),

            providesTags: (result, error, instructorId) => [
                {
                    type: "Dashboard",
                    id: `INSTRUCTOR-${instructorId}`,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Student dashboard

        // GET /dashboard/students/:studentId
        fetchStudentDashboard: builder.query({
            query: (studentId) => ({
                url: `/students/${studentId}`,
                method: "GET",
            }),

            providesTags: (result, error, studentId) => [
                {
                    type: "Dashboard",
                    id: `STUDENT-${studentId}`,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Admin dashboard

        // GET /dashboard/admins/:adminId
        fetchAdminDashboard: builder.query({
            query: (adminId) => ({
                url: `/admins/${adminId}`,
                method: "GET",
            }),

            providesTags: (result, error, adminId) => [
                {
                    type: "Dashboard",
                    id: `ADMIN-${adminId}`,
                },
            ],
        }),
    }),
})

export const {
    // Dashboard queries
    useFetchInstructorDashboardQuery,
    useLazyFetchInstructorDashboardQuery,

    useFetchStudentDashboardQuery,
    useLazyFetchStudentDashboardQuery,

    useFetchAdminDashboardQuery,
    useLazyFetchAdminDashboardQuery,
} = dashboardApi

export default dashboardApi
