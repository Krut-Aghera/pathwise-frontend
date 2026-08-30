import {
    useGetCurrentUserQuery,
} from "../../user/userApi"

import {
    useSignupMutation,
    useLoginMutation,
    useLogoutMutation,
} from "../authApi"


const useSession = () => {

    // Current user
    const {
        data: userResponse,
        isLoading: isAuthInitializing,
        isError: isAuthError,
        refetch: refetchCurrentUser,
    } = useGetCurrentUserQuery()

    const user = userResponse?.data || null

    // Authentication mutations
    const [
        signup,
        {
            isLoading: isSignupLoading,
        },
    ] = useSignupMutation()


    const [
        login,
        {
            isLoading: isLoginLoading,
        },
    ] = useLoginMutation()


    const [
        logout,
        {
            isLoading: isLogoutLoading,
        },
    ] = useLogoutMutation()

    // Derived authentication state
    const isAuthenticated = Boolean(userResponse?.statusCode === 200 || userResponse?.suceess || user)

    // Signup
    const userSignup = async (userData) => {
        await signup(userData).unwrap()
        await refetchCurrentUser()
    }

    // Login
    const userLogin = async (credentials) => {
        await login(credentials).unwrap()
        await refetchCurrentUser()
    }


    // Logout
    const userLogout = async () => {
        await logout().unwrap()
        await refetchCurrentUser()
    }



    // Return session interface
    return {
        user,
        isAuthenticated,
        isAuthInitializing,
        isAuthError,

        userSignup,
        userLogin,
        userLogout,

        isSignupLoading,
        isLoginLoading,
        isLogoutLoading,
    }
}


export default useSession