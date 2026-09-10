import { createApi } from "@reduxjs/toolkit/query/react"

import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const authApi = createApi({
    reducerPath: "authApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/auth",
    }),

    tagTypes: ["Auth"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Authentication

        // POST /auth/users
        signup: builder.mutation({
            query: (userData) => ({
                url: "/users",
                method: "POST",
                data: userData,
            }),
        }),

        // POST /auth/sessions
        login: builder.mutation({
            query: (credentials) => ({
                url: "/sessions",
                method: "POST",
                data: credentials,
            }),
        }),

        // POST /auth/sessions/current
        logout: builder.mutation({
            query: () => ({
                url: "/sessions/current",
                method: "POST",
            }),
        }),

        // POST /auth/tokens/rotate
        rotateTokens: builder.mutation({
            query: () => ({
                url: "/tokens/rotate",
                method: "POST",
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Password reset

        // POST /auth/password-reset
        requestPasswordReset: builder.mutation({
            query: (data) => ({
                url: "/password-reset",
                method: "POST",
                data,
            }),
        }),

        // POST /auth/password-reset/confirm/:token
        resetPassword: builder.mutation({
            query: ({ token, data }) => ({
                url: `/password-reset/confirm/${token}`,
                method: "POST",
                data,
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Email verification

        // POST /auth/email-verification
        requestEmailVerification: builder.mutation({
            query: () => ({
                url: "/email-verification",
                method: "POST",
            }),
        }),

        // POST /auth/email-verification/confirm/:token
        confirmEmailVerification: builder.mutation({
            query: (token) => ({
                url: `/email-verification/confirm/${token}`,
                method: "POST",
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Password

        // PATCH /auth/password
        changePassword: builder.mutation({
            query: (data) => ({
                url: "/password",
                method: "PATCH",
                data,
            }),
        }),
    }),
})

export const {
    useSignupMutation,
    useLoginMutation,
    useLogoutMutation,
    useRotateTokensMutation,
    useRequestPasswordResetMutation,
    useResetPasswordMutation,
    useRequestEmailVerificationMutation,
    useConfirmEmailVerificationMutation,
    useChangePasswordMutation,
} = authApi

export default authApi
