import { useSelector } from "react-redux"
import {
    Navigate,
    Outlet,
    useLocation
} from "react-router-dom"

const GuestOnlyRoutes = () => {

    const {
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
    // if user is already logged in
    if (isAuthenticated) {
        const from = location.state?.from

        return (
            <Navigate to={from || "/"} replace />
        )
    }

    // Guest
    return <Outlet />
}

export default GuestOnlyRoutes