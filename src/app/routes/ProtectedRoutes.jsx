import { Navigate, Outlet, useLocation } from "react-router-dom"
import useSession from "../../features/auth/hooks/useSession"

const ProtectedRoutes = ({ allowedRoles }) => {
    const location = useLocation()

    const { user, isAuthenticated, isAuthInitializing } = useSession()

    if (isAuthInitializing) {
        return <div>Checking authentication...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" replace state={{ from: location }} />
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" replace />
    }

    return <Outlet />
}

export default ProtectedRoutes
