import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import useCourse from "../features/course/hooks/useCourse"

import HomeHero from "../components/public/home/HomeHero"
import WhyPathwise from "../components/public/home/WhyPathwise"
import FeaturedCourses from "../components/public/home/FeaturedCourses"

const HomePage = () => {
    const navigate = useNavigate()

    const {
        fetchCourses,
        courses: featuredCourses,
        isCoursesLoading,
        isCoursesError,
    } = useCourse()

    useEffect(() => {
        fetchCourses({
            sortBy: "createdAt",
            sortOrder: "asc",
            limit: 3,
        })
    }, [fetchCourses])

    /*
     * Navigate to course detail page.
     */
    const handleCourseDetailsPage = useCallback(
        (course) => {
            const courseId = course?._id ?? course?.id

            if (!courseId) {
                return
            }

            navigate(`/courses/${courseId}`)
        },
        [navigate]
    )

    return (
        <div className="bg-background-base">
            <HomeHero />

            <FeaturedCourses
                courses={featuredCourses}
                isLoading={isCoursesLoading}
                isError={isCoursesError}
                onCourseClick={handleCourseDetailsPage}
            />

            <WhyPathwise />
        </div>
    )
}

export default HomePage
