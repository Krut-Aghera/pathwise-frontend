import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"

import AppLayout from "../../layouts/AppLayout"
import HomePage from "../../pages/HomePage"
import CoursesPage from "../../features/course/pages/CoursesPage"
import AuthLayout from "../../layouts/AuthLayout"
import LoginPage from "../../features/auth/pages/LoginPage"
import SignupPage from "../../features/auth/pages/SignupPage"
import GuestOnlyRoutes from "./GuestOnlyRoutes"
import ProtectedRoutes from "./ProtectedRoutes"
import ProtectedTestPage from "../../pages/ProtectedTestPage"
import UnauthorizedPage from "../../pages/UnauthorizedPage"
import { USER_ROLE } from "../../constants/userConstant"

const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="courses" element={<CoursesPage />} />
            </Route>

            <Route path="unauthorized" element={<UnauthorizedPage />} />

            {/* Auth */}
            <Route path="auth" element={<AuthLayout />}>
                <Route element={<GuestOnlyRoutes />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                </Route>
            </Route>

            <Route element={<ProtectedRoutes allowedRoles={[USER_ROLE.STUDENT]} />}>
                <Route path="test-protected" element={<ProtectedTestPage />} />
            </Route>
        </>
    )
)

const AppRouter = () => {
    return <RouterProvider router={routerConfig} />
}

export default AppRouter