import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoutes = ({ allowedRoles }) => {
    const {
        user,
        isAuthenticated,
        isAuthInitializing,
    } = useSelector(state => state.auth)

    const location = useLocation()

    if (isAuthInitializing) {
        return <div>Checking authentication...</div>
    }

    if (!isAuthenticated) {
        return <Navigate
            to="/auth/login"
            replace
            state={{ from: location.pathname }}
        />
    }

    if (
        allowedRoles &&
        !allowedRoles.includes(user?.role)
    ) {
        return <Navigate to="/unauthorized" replace />
    }

    return <Outlet />
}

export default ProtectedRoutes