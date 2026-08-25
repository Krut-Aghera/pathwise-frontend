import HeroSection from "../components/home/HeroSection"
import HomeCTA from "../components/home/HomeCTA"
import LearningPaths from "../components/home/LearningPath"
import WhyPathwise from "../components/home/WhyPathwise"
import FeaturedCourses from "../features/course/components/FeaturedCourses"

const HomePage = () => {
    return (
        <div className="bg-background-base">

            <HeroSection />

            <FeaturedCourses />

            <LearningPaths />

            <WhyPathwise />

            <HomeCTA />

        </div>
    )
}

export default HomePage