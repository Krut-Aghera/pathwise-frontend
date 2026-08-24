import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const GuestOnlyRoutes = () => {

    const {
        isAuthenticated,
        isAuthInitializing,
    } = useSelector(state => state.auth)

    const location = useLocation()

    if (isAuthInitializing) {
        return <div>Checking authentication...</div>
    }

    if (isAuthenticated) {
        const from = location.state?.from

        return (
            <Navigate to={from || "/"} replace />
        )
    }

    return <Outlet />
}

export default GuestOnlyRoutes