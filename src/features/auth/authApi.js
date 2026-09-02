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
        // User registration

        // POST /auth/users
        signup: builder.mutation({
            query: (userData) => ({
                url: "/users",
                method: "POST",
                data: userData,
            }),

            invalidatesTags: ["Auth"],
        }),

        ///////////////////////////////////////////////////////////////
        // User login

        // POST /auth/sessions
        login: builder.mutation({
            query: (credentials) => ({
                url: "/sessions",
                method: "POST",
                data: credentials,
            }),

            invalidatesTags: ["Auth"],
        }),

        ///////////////////////////////////////////////////////////////
        // User logout

        // POST /auth/sessions/current
        logout: builder.mutation({
            query: () => ({
                url: "/sessions/current",
                method: "POST",
            }),

            invalidatesTags: ["Auth"],
        }),

        ///////////////////////////////////////////////////////////////
        // Rotate authentication tokens

        // POST /auth/tokens/rotate
        rotateTokens: builder.mutation({
            query: () => ({
                url: "/tokens/rotate",
                method: "POST",
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Request password reset

        // POST /auth/password-reset
        requestPasswordReset: builder.mutation({
            query: (data) => ({
                url: "/password-reset",
                method: "POST",
                data,
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Reset password

        // POST /auth/password-reset/confirm/:token
        resetPassword: builder.mutation({
            query: ({ token, data }) => ({
                url: `/password-reset/confirm/${token}`,
                method: "POST",
                data,
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Confirm email verification

        // POST /auth/email-verification/confirm/:token
        confirmEmailVerification: builder.mutation({
            query: (token) => ({
                url: `/email-verification/confirm/${token}`,
                method: "POST",
            }),

            invalidatesTags: ["Auth"],
        }),

        ///////////////////////////////////////////////////////////////
        // Request email verification

        // POST /auth/email-verification
        requestEmailVerification: builder.mutation({
            query: () => ({
                url: "/email-verification",
                method: "POST",
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Change password

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

    useConfirmEmailVerificationMutation,
    useRequestEmailVerificationMutation,

    useChangePasswordMutation,
} = authApi

export default authApi
