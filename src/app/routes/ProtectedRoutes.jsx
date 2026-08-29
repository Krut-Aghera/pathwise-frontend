import { useSelector } from "react-redux"
import {
    Navigate,
    Outlet,
    useLocation
} from "react-router-dom"

const ProtectedRoutes = ({ allowedRoles }) => {

    const {
        user,
        isAuthenticated,
        isAuthInitializing,
    } = useSelector(state => state.auth)

    const location = useLocation()

    // Authentication initialization
    // still checking whether the user is logged in
    if (isAuthInitializing) {
        return <div>Checking authentication...</div>
    }

    // Authentication checks
    // if user is not logged in
    if (!isAuthenticated) {
        return (
            <Navigate
                to="/auth/login"
                replace
                state={{
                    from: location,
                }}
            />
        )
    }

    // Authorization checks
    // user is logged in but doesn't have permission
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