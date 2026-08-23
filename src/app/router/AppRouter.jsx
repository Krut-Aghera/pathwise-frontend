import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"

import AppLayout from "../../layouts/AppLayout"
import HomePage from "../../pages/HomePage"
import CoursesPage from "../../features/course/pages/CoursesPage"

const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<CoursesPage />} />
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={routerConfig} />
}

export default AppRouter