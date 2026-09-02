import { Navigate, Outlet, useLocation } from "react-router-dom"

import useSession from "../../features/auth/hooks/useSession"

const ProtectedRoutes = ({ allowedRoles }) => {
    const location = useLocation()

    ///////////////////////////////////////////////////////////////
    // Session

    const { user, isAuthenticated, isAuthInitializing } = useSession()

    ///////////////////////////////////////////////////////////////
    // Authentication initialization

    if (isAuthInitializing) {
        return <div>Checking authentication...</div>
    }

    ///////////////////////////////////////////////////////////////
    // Authentication check

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

    ///////////////////////////////////////////////////////////////
    // Authorization check

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" replace />
    }

    ///////////////////////////////////////////////////////////////
    // Authenticated and authorized

    return <Outlet />
}

export default ProtectedRoutes
