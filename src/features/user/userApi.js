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

        ///////////////////////////////////////////////////////////////
        // Username

        // PATCH /users/me/username
        updateUsername: builder.mutation({
            query: (data) => ({
                url: "/me/username",
                method: "PATCH",
                data,
            }),

            invalidatesTags: ["User"],
        }),

        ///////////////////////////////////////////////////////////////
        // Email change

        // POST /users/me/email-change
        requestEmailChange: builder.mutation({
            query: (data) => ({
                url: "/me/email-change",
                method: "POST",
                data,
            }),
        }),

        // POST /users/me/email-change/confirm/:token
        confirmEmailChange: builder.mutation({
            query: (token) => ({
                url: `/me/email-change/confirm/${token}`,
                method: "POST",
            }),

            invalidatesTags: ["User"],
        }),

        ///////////////////////////////////////////////////////////////
        // Instructor access

        // POST /users/me/instructor-access
        requestInstructorAccess: builder.mutation({
            query: () => ({
                url: "/me/instructor-access",
                method: "POST",
            }),
        }),

        // POST /users/me/instructor-access/confirm/:token
        confirmInstructorAccess: builder.mutation({
            query: (token) => ({
                url: `/me/instructor-access/confirm/${token}`,
                method: "POST",
            }),

            invalidatesTags: ["User"],
        }),

        ///////////////////////////////////////////////////////////////
        // Account deactivation

        // POST /users/me/deactivation
        requestAccountDeactivation: builder.mutation({
            query: (data) => ({
                url: "/me/deactivation",
                method: "POST",
                data,
            }),
        }),

        // POST /users/me/deactivation/confirm
        confirmAccountDeactivation: builder.mutation({
            query: (data) => ({
                url: "/me/deactivation/confirm",
                method: "POST",
                data,
            }),

            invalidatesTags: ["User"],
        }),
    }),
})

export const {
    ///////////////////////////////////////////////////////////////
    // Current user

    useGetCurrentUserQuery,

    ///////////////////////////////////////////////////////////////
    // Username

    useUpdateUsernameMutation,

    ///////////////////////////////////////////////////////////////
    // Email change

    useRequestEmailChangeMutation,
    useConfirmEmailChangeMutation,

    ///////////////////////////////////////////////////////////////
    // Instructor access

    useRequestInstructorAccessMutation,
    useConfirmInstructorAccessMutation,

    ///////////////////////////////////////////////////////////////
    // Account deactivation

    useRequestAccountDeactivationMutation,
    useConfirmAccountDeactivationMutation,
} = userApi

export default userApi
