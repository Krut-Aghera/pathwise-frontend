import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"

import { USER_ROLE } from "../../constants/userConstants"

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
import ComponentPreviewPage from '../../pages/ComponentPreviewPage'
import AboutPage from "../../pages/AboutPage"
import NotFoundPage from "../../pages/NotFoundPage"

const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="courses" element={<CoursesPage />} />
                <Route path="preview" element={<ComponentPreviewPage />} />
            </Route>


            {/* Auth */}
            <Route path="auth" element={<AuthLayout />}>
                <Route element={<GuestOnlyRoutes />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                </Route>
            </Route>

            <Route element={<ProtectedRoutes allowedRoles={[USER_ROLE.INSTRUCTOR]} />}>
                <Route path="/test-protected" element={<ProtectedTestPage />} />
            </Route>


            <Route path="unauthorized" element={<UnauthorizedPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </>

    )
)

const AppRouter = () => {
    return <RouterProvider router={routerConfig} />
}

export default AppRouter