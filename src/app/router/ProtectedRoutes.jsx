import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoutes = ({ allowedRoles }) => {

    const {
        user,
        isAuthenticated,
        isAuthInitializing,
    } = useSelector(state => state.auth)

    const location = useLocation()


    // Still checking whether the user is logged in
    if (isAuthInitializing) {
        return <div>Checking authentication...</div>
    }


    // User is not logged in
    if (!isAuthenticated) {
        return (
            <Navigate
                to="/auth/login"
                replace
                state={{
                    from: location.pathname,
                }}
            />
        )
    }


    // User is logged in but doesn't have permission
    if (
        allowedRoles &&
        !allowedRoles.includes(user?.role)
    ) {
        return (
            <Navigate
                to="/unauthorized"
                replace
            />
        )
    }


    // User is authenticated and authorized
    return <Outlet />
}

export default ProtectedRoutes