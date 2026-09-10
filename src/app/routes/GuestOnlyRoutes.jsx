import { Navigate, Outlet, useLocation } from "react-router-dom"
import useSession from "../../features/auth/hooks/useSession"

const GuestOnlyRoutes = () => {
    const location = useLocation()

    const { isAuthenticated, isAuthInitializing } = useSession()

    if (isAuthInitializing) {
        return <div>Checking authentication...</div>
    }

    if (isAuthenticated) {
        const from = location.state?.from

        return <Navigate to={from || "/"} replace />
    }

    return <Outlet />
}

export default GuestOnlyRoutes
