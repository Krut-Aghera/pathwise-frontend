import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const enrollmentApi = createApi({
    reducerPath: "enrollmentApi",
    baseQuery: axiosBaseQuery({
        baseUrl: "/enrollments",
    }),
    tagTypes: ["Enrollment"],
    endpoints: (builder) => ({
        fetchStudentEnrollments: builder.query({
            query: () => ({
                url: "",
                method: "GET",
            }),
            providesTags: ["Enrollment"],
        }),
    }),
})

export const { useFetchStudentEnrollmentsQuery } = enrollmentApi

export default enrollmentApi
