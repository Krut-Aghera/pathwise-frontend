import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const userApi = createApi({
    reducerPath: "userApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/users",
    }),

    tagTypes: ["User"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Current authenticated user

        // GET /users/me
        getCurrentUser: builder.query({
            query: () => ({
                url: "/me",
                method: "GET",
            }),

            providesTags: ["User"],
        }),
    }),
})

export const { useGetCurrentUserQuery } = userApi

export default userApi
