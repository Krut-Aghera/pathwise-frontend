import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoutes = ({ allowedRoles }) => {

    const { user, isAuthenticated, isAuthInitializing } = useSelector(state => state.auth)

    if (isAuthInitializing) {
        return <div>Checking authentication...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" replace />
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />
    }

    return <Outlet />
}

export default ProtectedRoutes