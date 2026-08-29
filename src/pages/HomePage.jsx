import HomeHero from "../components/public/home/HomeHero"
import HomeCTA from "../components/public/home/HomeCTA"
import LearningPaths from "../components/public/home/LearningPath"
import WhyPathwise from "../components/public/home/WhyPathwise"
import FeaturedCourses from "../features/course/components/FeaturedCourses"

const HomePage = () => {
    return (
        <div className="bg-background-base">

            <HomeHero />

            <FeaturedCourses />

            <LearningPaths />

            <WhyPathwise />

            <HomeCTA />

        </div>
    )
}

export default HomePage