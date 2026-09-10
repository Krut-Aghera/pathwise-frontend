import { useDispatch } from "react-redux"

import {
    useRequestEmailVerificationMutation,
    useConfirmEmailVerificationMutation,
    useRequestPasswordResetMutation,
    useResetPasswordMutation,
    useChangePasswordMutation,
} from "../authApi"

import userApi, { useGetCurrentUserQuery } from "../../user/userApi"

const useAuthManagement = () => {
    const dispatch = useDispatch()

    // Current user
    const { refetch: refetchCurrentUser } = useGetCurrentUserQuery()

    ///////////////////////////////////////////////////////////////
    // Email verification

    const [
        requestEmailVerification,
        { isLoading: isRequestEmailVerificationLoading },
    ] = useRequestEmailVerificationMutation()

    const [
        confirmEmailVerification,
        { isLoading: isConfirmEmailVerificationLoading },
    ] = useConfirmEmailVerificationMutation()

    ///////////////////////////////////////////////////////////////
    // Password management

    const [requestPasswordReset, { isLoading: isRequestPasswordResetLoading }] =
        useRequestPasswordResetMutation()

    const [resetPassword, { isLoading: isResetPasswordLoading }] =
        useResetPasswordMutation()

    const [changePassword, { isLoading: isChangePasswordLoading }] =
        useChangePasswordMutation()

    ///////////////////////////////////////////////////////////////
    // Request email verification

    const userRequestEmailVerification = async () => {
        await requestEmailVerification().unwrap()
    }

    ///////////////////////////////////////////////////////////////
    // Confirm email verification

    const userConfirmEmailVerification = async (token) => {
        await confirmEmailVerification(token).unwrap()

        await refetchCurrentUser()
    }

    ///////////////////////////////////////////////////////////////
    // Request password reset

    const userRequestPasswordReset = async (data) => {
        await requestPasswordReset(data).unwrap()
    }

    ///////////////////////////////////////////////////////////////
    // Reset password

    const userResetPassword = async ({ token, data }) => {
        await resetPassword({
            token,
            data,
        }).unwrap()

        // Password reset destroys the backend session.
        // Keep the frontend session state in sync.
        dispatch(
            userApi.util.upsertQueryData("getCurrentUser", undefined, {
                data: null,
            })
        )
    }

    ///////////////////////////////////////////////////////////////
    // Change password

    const userChangePassword = async (data) => {
        await changePassword(data).unwrap()

        // Password change destroys the backend session.
        // Keep the frontend session state in sync.
        dispatch(
            userApi.util.upsertQueryData("getCurrentUser", undefined, {
                data: null,
            })
        )
    }

    ///////////////////////////////////////////////////////////////

    return {
        // Email verification
        userRequestEmailVerification,
        userConfirmEmailVerification,

        // Password management
        userRequestPasswordReset,
        userResetPassword,
        userChangePassword,

        // Loading states
        isRequestEmailVerificationLoading,
        isConfirmEmailVerificationLoading,

        isRequestPasswordResetLoading,
        isResetPasswordLoading,
        isChangePasswordLoading,
    }
}

export default useAuthManagement
