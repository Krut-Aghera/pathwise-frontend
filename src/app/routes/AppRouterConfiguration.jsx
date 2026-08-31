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
import CourseDetailsPage from "../../features/course/pages/CourseDetailsPage"

import LoginPage from "../../features/auth/pages/LoginPage"
import SignupPage from "../../features/auth/pages/SignupPage"
import ForgotPasswordPage from "../../features/auth/pages/ForgotPasswordPage"

import UserDashboardPage from "../../features/user/pages/UserDashboardPage"
import WishlistPage from "../../features/wishlist/pages/WishlistPage"
import InstructorDashboardPage from "../../features/user/pages/InstructorDashboardPage"

import CourseCreatePage from "../../features/course/pages/CourseCreatePage"
import InstructorCoursesPage from "../../features/course/pages/InstructorCoursesPage"
import CourseUpdatePage from "../../features/course/pages/CourseUpdatePage"
import CourseThumbnailEditPage from "../../features/course/pages/CourseThumbnailEditPage"
import InstructorCourseDetailsPage from "../../features/course/pages/InstructorCourseDetailsPage"
import SectionCreatePage from "../../features/section/pages/SectionCreatePage"
import SectionUpdatePage from "../../features/section/pages/SectionUpdatePage"
import SectionDetailsPage from "../../features/section/pages/SectionDetailsPage"
import LectureCreatePage from "../../features/lecture/pages/LectureCreatePage"
import LectureDetailsPage from "../../features/lecture/pages/LectureDetailsPage"
import LectureUpdatePage from "../../features/lecture/pages/LectureUpdatePage"

const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <>

            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Public Routes*/}

            <Route path="/" element={<AppLayout />}>

                <Route
                    index
                    element={<HomePage />}
                />

                <Route
                    path="about"
                    element={<AboutPage />}
                />

                <Route
                    path="courses/:courseId"
                    element={<CourseDetailsPage />}
                />

            </Route>


            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Auth Routes*/}

            <Route path="auth" element={<AuthLayout />}>

                <Route element={<GuestOnlyRoutes />}>

                    <Route
                        path="login"
                        element={<LoginPage />}
                    />
                    <Route
                        path="signup"
                        element={<SignupPage />}
                    />
                    <Route
                        path="forgot-password"
                        element={<ForgotPasswordPage />}
                    />

                </Route>

            </Route>


            {/* ////////////////////////////////////////////////////////////////////////////// */}
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


            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Instructor - admin routes*/}

            <Route element={<ProtectedRoutes allowedRoles={[
                USER_ROLE.INSTRUCTOR,
                USER_ROLE.ADMIN,
            ]} />}>

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
                        element={<InstructorCoursesPage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/edit"
                        element={<CourseUpdatePage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/thumbnail"
                        element={<CourseThumbnailEditPage />}
                    />

                    <Route
                        path="instructor/courses/:courseId"
                        element={<InstructorCourseDetailsPage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/create"
                        element={<SectionCreatePage />}
                    />

                    <Route
                        path="instructor/courses/:courseId/sections/:sectionId/manage"
                        element={<SectionDetailsPage />}
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
                        path="/instructor/courses/:courseId/sections/:sectionId/lectures/:lectureId/edit"
                        element={<LectureUpdatePage />}
                    />
                  
                    <Route
                        path="instructor/courses/:courseId/sections/:sectionId/lectures/:lectureId/manage"
                        element={<LectureDetailsPage />}
                    />

                </Route>

            </Route>


            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Admin Only Routes */}


            <Route element={<ProtectedRoutes allowedRoles={[USER_ROLE.ADMIN,]} />}></Route>


            {/* ////////////////////////////////////////////////////////////////////////////// */}
            {/* Error Routes*/}

            <Route
                path="unauthorized"
                element={<UnauthorizedPage />}
            />
            <Route
                path="*"
                element={<NotFoundPage />}
            />

        </>
    )
)

const AppRouter = () => {
    return <RouterProvider router={routerConfig} />
}

export default AppRouter