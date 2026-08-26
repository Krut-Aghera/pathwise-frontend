import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"

import { USER_ROLE } from "../../constants/userConstants"

import AppLayout from "../../layouts/AppLayout"
import HomePage from "../../pages/HomePage"
import AuthLayout from "../../layouts/AuthLayout"
import LoginPage from "../../features/auth/pages/LoginPage"
import SignupPage from "../../features/auth/pages/SignupPage"
import GuestOnlyRoutes from "./GuestOnlyRoutes"
import ProtectedRoutes from "./ProtectedRoutes"
import UnauthorizedPage from "../../pages/UnauthorizedPage"
import AboutPage from "../../pages/AboutPage"
import NotFoundPage from "../../pages/NotFoundPage"
import ForgotPasswordPage from "../../features/auth/pages/ForgotPasswordPage"
import UserDashboardPage from "../../features/user/pages/UserDashboardPage"
import WishlistPage from "../../features/wishlist/pages/WishlistPage"

const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Public Routes*/}

            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                {/* <Route path="courses" element={<CoursesPage />} /> */}
                {/* <Route path="preview" element={<ComponentPreviewPage />} /> */}
            </Route>


            {/* Auth Routes*/}

            <Route path="auth" element={<AuthLayout />}>
                <Route element={<GuestOnlyRoutes />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="forgot-password" element={<ForgotPasswordPage />} />
                </Route>
            </Route>


            {/* Authenticated User // student (default) - instructor - admin routes */}

            <Route element={<ProtectedRoutes allowedRoles={[
                USER_ROLE.STUDENT,
                USER_ROLE.INSTRUCTOR,
                USER_ROLE.ADMIN,
            ]} />}>
                
                <Route element={<AppLayout />}>
                    <Route
                        path="dashboard"
                        element={<UserDashboardPage />}
                    />
                    <Route 
                        path="wishlist"
                        element={<WishlistPage />}
                    />

                </Route>
            </Route>


            {/* Instructor - admin routes*/}

            <Route element={<ProtectedRoutes allowedRoles={[
                USER_ROLE.INSTRUCTOR,
                USER_ROLE.ADMIN,
            ]} />}>

                {/* <Route
                    path="instructor"
                    element={<InstructorLayout />}
                >


                </Route> */}

            </Route>


            {/* Admin Only Routes */}

            {/* 
            <Route element={<ProtectedRoutes allowedRoles={[USER_ROLE.ADMIN,]} />}>

                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboardPage />} />
                    <Route path="users" element={<AdminUsersPage />} />
                    <Route path="courses" element={<AdminCoursesPage />} />
                </Route> 

            </Route>
            */}


            {/* Error Routes*/}
            <Route path="unauthorized" element={<UnauthorizedPage />} />
            <Route path="*" element={<NotFoundPage />} />

        </>
    )
)

const AppRouter = () => {
    return <RouterProvider router={routerConfig} />
}

export default AppRouter