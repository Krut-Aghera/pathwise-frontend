import {
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom"

import useSession from "../../features/auth/hooks/useSession"


const GuestOnlyRoutes = () => {

    const location = useLocation()


    ///////////////////////////////////////////////////////////////
    // Session

    const {
        isAuthenticated,
        isAuthInitializing,
    } = useSession()


    ///////////////////////////////////////////////////////////////
    // Authentication initialization

    if (isAuthInitializing) {
        return (
            <div>
                Checking authentication...
            </div>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Authentication check

    if (isAuthenticated) {

        const from = location.state?.from

        return (
            <Navigate
                to={from || "/"}
                replace
            />
        )
    }


    ///////////////////////////////////////////////////////////////
    // Guest

    return <Outlet />
}


export default GuestOnlyRoutes