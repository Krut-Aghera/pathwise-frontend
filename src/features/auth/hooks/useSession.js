import { useDispatch } from "react-redux"

import userApi, { useGetCurrentUserQuery } from "../../user/userApi"

import {
    useSignupMutation,
    useLoginMutation,
    useLogoutMutation,
} from "../authApi"

const useSession = () => {
    const dispatch = useDispatch()

    // Current authenticated user
    const {
        data: userResponse,
        isLoading: isAuthInitializing,
        isError: isAuthError,
        refetch: refetchCurrentUser,
    } = useGetCurrentUserQuery()

    const user = userResponse?.data || null

    // Session mutations
    const [signup, { isLoading: isSignupLoading }] = useSignupMutation()

    const [login, { isLoading: isLoginLoading }] = useLoginMutation()

    const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation()

    ///////////////////////////////////////////////////////////////
    // Derived authentication state

    const isAuthenticated = Boolean(user)

    ///////////////////////////////////////////////////////////////
    // Signup

    const userSignup = async (userData) => {
        await signup(userData).unwrap()

        await refetchCurrentUser()
    }

    ///////////////////////////////////////////////////////////////
    // Login

    const userLogin = async (credentials) => {
        await login(credentials).unwrap()

        await refetchCurrentUser()
    }

    ///////////////////////////////////////////////////////////////
    // Logout

    const userLogout = async () => {
        try {
            await logout().unwrap()
        } finally {
            dispatch(
                userApi.util.upsertQueryData("getCurrentUser", undefined, {
                    data: null,
                })
            )
        }
    }

    ///////////////////////////////////////////////////////////////

    return {
        // Current user
        user,

        // Authentication state
        isAuthenticated,
        isAuthInitializing,
        isAuthError,

        // Session actions
        userSignup,
        userLogin,
        userLogout,

        // Loading states
        isSignupLoading,
        isLoginLoading,
        isLogoutLoading,
    }
}

export default useSession
