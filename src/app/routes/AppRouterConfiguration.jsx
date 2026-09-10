import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"

import { USER_ROLE } from "../../features/user/userConstants"

import AppLayout from "../../layouts/AppLayout"
import AuthLayout from "../../layouts/AuthLayout"

import GuestOnlyRoutes from "./GuestOnlyRoutes"
import ProtectedRoutes from "./ProtectedRoutes"

import UnauthorizedPage from "../../pages/UnauthorizedPage"
import NotFoundPage from "../../pages/NotFoundPage"

import HomePage from "../../pages/HomePage"
import AboutPage from "../../pages/AboutPage"

import LoginPage from "../../features/auth/pages/LoginPage"
import SignupPage from "../../features/auth/pages/SignupPage"
import ForgotPasswordPage from "../../features/auth/pages/ForgotPasswordPage"

import UserDashboardPage from "../../features/user/pages/UserDashboardPage"
import WishlistPage from "../../features/wishlist/pages/WishlistPage"

import InstructorDashboardPage from "../../features/user/pages/InstructorDashboardPage"
import InstructorCourseListingPage from "../../features/course/pages/InstructorCourseListingPage"

import CourseCreatePage from "../../features/course/pages/CourseCreatePage"
import CourseUpdatePage from "../../features/course/pages/CourseUpdatePage"
import CourseManagementPage from "../../features/course/pages/CourseManagementPage"
import CourseThumbnailUpdatePage from "../../features/course/pages/CourseThumbnailUpdatePage"

import SectionCreatePage from "../../features/section/pages/SectionCreatePage"
import SectionUpdatePage from "../../features/section/pages/SectionUpdatePage"
import SectionManagementPage from "../../features/section/pages/SectionManagementPage"

import LectureCreatePage from "../../features/lecture/pages/LectureCreatePage"
import LectureUpdatePage from "../../features/lecture/pages/LectureUpdatePage"
import LectureVideoUploadPage from "../../features/lecture/pages/LectureVideoUploadPage"
import LectureManagementPage from "../../features/lecture/pages/LectureManagementPage"
import VerifyEmailPage from "../../features/auth/pages/VerifyEmailPage"
import ChangePasswordPage from "../../features/auth/pages/ChangePasswordPage"
import UserAuthLayout from "../../layouts/UserAuthLayout"
import ResetPasswordPage from "../../features/auth/pages/ResetPasswordPage"

const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Public Routes*/}

            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />

                <Route path="about" element={<AboutPage />} />
            </Route>

            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Auth Routes*/}

            <Route path="auth" element={<AuthLayout />}>
                <Route element={<GuestOnlyRoutes />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route
                        path="forgot-password"
                        element={<ForgotPasswordPage />}
                    />
                    <Route
                        path="reset-password/:token"
                        element={<ResetPasswordPage />}
                    />
                </Route>
            </Route>

            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Authenticated User // student (default) - instructor - admin routes */}

            <Route
                element={
                    <ProtectedRoutes
                        allowedRoles={[
                            USER_ROLE.STUDENT,
                            USER_ROLE.INSTRUCTOR,
                            USER_ROLE.ADMIN,
                        ]}
                    />
                }
            >
                <Route path="auth" element={<UserAuthLayout />}>
                    <Route
                        path="change-password"
                        element={<ChangePasswordPage />}
                    />
                    <Route
                        path="verify-email/:token"
                        element={<VerifyEmailPage />}
                    />
                </Route>

                <Route element={<AppLayout />}>
                    <Route
                        path="auth/change-password"
                        element={<ChangePasswordPage />}
                    />
                    <Route
                        path="auth/verify-email/:token"
                        element={<VerifyEmailPage />}
                    />
                    <Route path="dashboard" element={<UserDashboardPage />} />
                    <Route path="wishlist" element={<WishlistPage />} />
                </Route>
            </Route>

            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Instructor - admin routes*/}

            <Route
                element={
                    <ProtectedRoutes
                        allowedRoles={[USER_ROLE.INSTRUCTOR, USER_ROLE.ADMIN]}
                    />
                }
            >
                <Route element={<AppLayout />}>
                    <Route
                        path="instructor/dashboard"
                        element={<InstructorDashboardPage />}
                    />

                    <Route
                        path="instructor/courses/create"
                        element={<CourseCreatePage />}
                    />

                    <Route
                        path="instructor/courses"
                        element={<InstructorCourseListingPage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/edit"
                        element={<CourseUpdatePage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/thumbnail"
                        element={<CourseThumbnailUpdatePage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/manage"
                        element={<CourseManagementPage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/create"
                        element={<SectionCreatePage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/:sectionId/manage"
                        element={<SectionManagementPage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/:sectionId/edit"
                        element={<SectionUpdatePage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/:sectionId/lectures/create"
                        element={<LectureCreatePage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/:sectionId/lectures/:lectureId/edit"
                        element={<LectureUpdatePage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/:sectionId/lectures/:lectureId/manage"
                        element={<LectureManagementPage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/:sectionId/lectures/:lectureId/video"
                        element={<LectureVideoUploadPage />}
                    />
                </Route>
            </Route>

            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Admin Only Routes */}

            <Route
                element={<ProtectedRoutes allowedRoles={[USER_ROLE.ADMIN]} />}
            ></Route>

            {/* ////////////////////////////////////////////////////////////////////////////// */}
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
