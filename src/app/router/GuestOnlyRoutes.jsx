import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const GuestOnlyRoutes = () => {
    const { isAuthenticated, isAuthInitializing } = useSelector(state => state.auth)

    if (isAuthInitializing) {
        return <div>Checking authentication</div>
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default GuestOnlyRoutes