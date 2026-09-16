import { useCallback } from "react"

import {
    useGetCurrentUserQuery,
    useUpdateUsernameMutation,
    useRequestEmailChangeMutation,
    useConfirmEmailChangeMutation,
    useRequestInstructorAccessMutation,
    useConfirmInstructorAccessMutation,
    useRequestAccountDeactivationMutation,
    useConfirmAccountDeactivationMutation,
} from "../userApi.js"

const useUser = () => {
    ///////////////////////////////////////////////////////////////
    // Current authenticated user

    const {
        data: currentUserResponse,
        isLoading: isCurrentUserLoading,
        isFetching: isCurrentUserFetching,
        isSuccess: isCurrentUserSuccess,
        isError: isCurrentUserError,
        error: currentUserError,
        refetch: refetchCurrentUser,
    } = useGetCurrentUserQuery()

    ///////////////////////////////////////////////////////////////
    // Update username

    const [
        updateUsernameMutation,
        {
            isLoading: isUpdatingUsername,
            isSuccess: isUpdateUsernameSuccess,
            isError: isUpdateUsernameError,
            error: updateUsernameError,
            reset: resetUpdateUsername,
        },
    ] = useUpdateUsernameMutation()

    ///////////////////////////////////////////////////////////////
    // Request email change

    const [
        requestEmailChangeMutation,
        {
            isLoading: isRequestingEmailChange,
            isSuccess: isRequestEmailChangeSuccess,
            isError: isRequestEmailChangeError,
            error: requestEmailChangeError,
            reset: resetRequestEmailChange,
        },
    ] = useRequestEmailChangeMutation()

    ///////////////////////////////////////////////////////////////
    // Confirm email change

    const [
        confirmEmailChangeMutation,
        {
            isLoading: isConfirmingEmailChange,
            isSuccess: isConfirmEmailChangeSuccess,
            isError: isConfirmEmailChangeError,
            error: confirmEmailChangeError,
            reset: resetConfirmEmailChange,
        },
    ] = useConfirmEmailChangeMutation()

    ///////////////////////////////////////////////////////////////
    // Request instructor access

    const [
        requestInstructorAccessMutation,
        {
            isLoading: isRequestingInstructorAccess,
            isSuccess: isRequestInstructorAccessSuccess,
            isError: isRequestInstructorAccessError,
            error: requestInstructorAccessError,
            reset: resetRequestInstructorAccess,
        },
    ] = useRequestInstructorAccessMutation()

    ///////////////////////////////////////////////////////////////
    // Confirm instructor access

    const [
        confirmInstructorAccessMutation,
        {
            isLoading: isConfirmingInstructorAccess,
            isSuccess: isConfirmInstructorAccessSuccess,
            isError: isConfirmInstructorAccessError,
            error: confirmInstructorAccessError,
            reset: resetConfirmInstructorAccess,
        },
    ] = useConfirmInstructorAccessMutation()

    ///////////////////////////////////////////////////////////////
    // Request account deactivation

    const [
        requestAccountDeactivationMutation,
        {
            isLoading: isRequestingAccountDeactivation,
            isSuccess: isRequestAccountDeactivationSuccess,
            isError: isRequestAccountDeactivationError,
            error: requestAccountDeactivationError,
            reset: resetRequestAccountDeactivation,
        },
    ] = useRequestAccountDeactivationMutation()

    ///////////////////////////////////////////////////////////////
    // Confirm account deactivation

    const [
        confirmAccountDeactivationMutation,
        {
            isLoading: isConfirmingAccountDeactivation,
            isSuccess: isConfirmAccountDeactivationSuccess,
            isError: isConfirmAccountDeactivationError,
            error: confirmAccountDeactivationError,
            reset: resetConfirmAccountDeactivation,
        },
    ] = useConfirmAccountDeactivationMutation()

    ///////////////////////////////////////////////////////////////
    // Current user

    const currentUser = currentUserResponse?.data ?? null
    const currentUserMeta = currentUserResponse?.meta ?? null

    ///////////////////////////////////////////////////////////////
    // Update username

    const updateUsername = useCallback(
        async (data) => {
            if (!data?.username) {
                throw new Error("Username is required.")
            }

            try {
                const response = await updateUsernameMutation(data).unwrap()

                return {
                    success: true,
                    data: response?.data ?? null,
                    meta: response?.meta ?? null,
                }
            } catch (error) {
                throw error
            }
        },
        [updateUsernameMutation]
    )

    ///////////////////////////////////////////////////////////////
    // Request email change

    const requestEmailChange = useCallback(
        async (data) => {
            if (!data?.password || !data?.newEmail) {
                throw new Error("Current password and new email are required.")
            }

            try {
                const response = await requestEmailChangeMutation(data).unwrap()

                return {
                    success: true,
                    data: response?.data ?? null,
                    meta: response?.meta ?? null,
                }
            } catch (error) {
                throw error
            }
        },
        [requestEmailChangeMutation]
    )

    ///////////////////////////////////////////////////////////////
    // Confirm email change

    const confirmEmailChange = useCallback(
        async (token) => {
            if (!token) {
                throw new Error("Email change token is required.")
            }

            try {
                const response =
                    await confirmEmailChangeMutation(token).unwrap()

                return {
                    success: true,
                    data: response?.data ?? null,
                    meta: response?.meta ?? null,
                }
            } catch (error) {
                throw error
            }
        },
        [confirmEmailChangeMutation]
    )

    ///////////////////////////////////////////////////////////////
    // Request instructor access

    const requestInstructorAccess = useCallback(async () => {
        try {
            const response = await requestInstructorAccessMutation().unwrap()

            return {
                success: true,
                data: response?.data ?? null,
                meta: response?.meta ?? null,
            }
        } catch (error) {
            throw error
        }
    }, [requestInstructorAccessMutation])

    ///////////////////////////////////////////////////////////////
    // Confirm instructor access

    const confirmInstructorAccess = useCallback(
        async (token) => {
            if (!token) {
                throw new Error("Instructor access token is required.")
            }

            try {
                const response =
                    await confirmInstructorAccessMutation(token).unwrap()

                return {
                    success: true,
                    data: response?.data ?? null,
                    meta: response?.meta ?? null,
                }
            } catch (error) {
                throw error
            }
        },
        [confirmInstructorAccessMutation]
    )

    ///////////////////////////////////////////////////////////////
    // Request account deactivation

    const requestAccountDeactivation = useCallback(
        async (data) => {
            if (!data?.password) {
                throw new Error("Current password is required.")
            }

            const response =
                await requestAccountDeactivationMutation(data).unwrap()

            return {
                success: true,
                message: response?.message ?? "",
                data: response?.data ?? null,
                meta: response?.meta ?? null,
            }
        },
        [requestAccountDeactivationMutation]
    )

    ///////////////////////////////////////////////////////////////
    // Confirm account deactivation

    const confirmAccountDeactivation = useCallback(
        async (data) => {
            if (!data?.otp) {
                throw new Error("Verification code is required.")
            }

            const response =
                await confirmAccountDeactivationMutation(data).unwrap()

            return {
                success: true,
                message: response?.message ?? "",
                data: response?.data ?? null,
                meta: response?.meta ?? null,
            }
        },
        [confirmAccountDeactivationMutation]
    )

    ///////////////////////////////////////////////////////////////
    // Reset

    const reset = useCallback(() => {
        resetUpdateUsername()
        resetRequestEmailChange()
        resetConfirmEmailChange()
        resetRequestInstructorAccess()
        resetConfirmInstructorAccess()
        resetRequestAccountDeactivation()
        resetConfirmAccountDeactivation()
    }, [
        resetUpdateUsername,
        resetRequestEmailChange,
        resetConfirmEmailChange,
        resetRequestInstructorAccess,
        resetConfirmInstructorAccess,
        resetRequestAccountDeactivation,
        resetConfirmAccountDeactivation,
    ])

    ///////////////////////////////////////////////////////////////
    // Overall loading state

    const isLoading =
        isCurrentUserLoading ||
        isUpdatingUsername ||
        isRequestingEmailChange ||
        isConfirmingEmailChange ||
        isRequestingInstructorAccess ||
        isConfirmingInstructorAccess ||
        isRequestingAccountDeactivation ||
        isConfirmingAccountDeactivation

    ///////////////////////////////////////////////////////////////

    return {
        ///////////////////////////////////////////////////////////
        // Current user

        currentUser,
        currentUserMeta,

        ///////////////////////////////////////////////////////////
        // Current user state

        isCurrentUserLoading,
        isCurrentUserFetching,
        isCurrentUserSuccess,
        isCurrentUserError,
        currentUserError,
        refetchCurrentUser,

        ///////////////////////////////////////////////////////////
        // Username

        updateUsername,

        isUpdatingUsername,
        isUpdateUsernameSuccess,
        isUpdateUsernameError,
        updateUsernameError,

        ///////////////////////////////////////////////////////////
        // Email change

        requestEmailChange,
        confirmEmailChange,

        isRequestingEmailChange,
        isRequestEmailChangeSuccess,
        isRequestEmailChangeError,
        requestEmailChangeError,

        isConfirmingEmailChange,
        isConfirmEmailChangeSuccess,
        isConfirmEmailChangeError,
        confirmEmailChangeError,

        ///////////////////////////////////////////////////////////
        // Instructor access

        requestInstructorAccess,
        confirmInstructorAccess,

        isRequestingInstructorAccess,
        isRequestInstructorAccessSuccess,
        isRequestInstructorAccessError,
        requestInstructorAccessError,

        isConfirmingInstructorAccess,
        isConfirmInstructorAccessSuccess,
        isConfirmInstructorAccessError,
        confirmInstructorAccessError,

        ///////////////////////////////////////////////////////////
        // Account deactivation

        requestAccountDeactivation,
        confirmAccountDeactivation,

        isRequestingAccountDeactivation,
        isRequestAccountDeactivationSuccess,
        isRequestAccountDeactivationError,
        requestAccountDeactivationError,

        isConfirmingAccountDeactivation,
        isConfirmAccountDeactivationSuccess,
        isConfirmAccountDeactivationError,
        confirmAccountDeactivationError,

        ///////////////////////////////////////////////////////////
        // Reset

        reset,

        ///////////////////////////////////////////////////////////
        // Overall state

        isLoading,
    }
}

export default useUser
