import AboutCTA from "../components/public/about/AboutCTA"
import AboutEngineering from "../components/public/about/AboutEngineering"
import AboutHero from "../components/public/about/AboutHero"
import AboutPlatform from "../components/public/about/AboutPlatform"
import AboutPortfolioNotice from "../components/public/about/AboutPortfolioNotice"
import AboutTechnologyStack from "../components/public/about/AboutTechnologyStack"
import AboutWhyPathwise from "../components/public/about/AboutWhyPathwise"

const AboutPage = () => {
    return (
        <div className="bg-background-base">
            <AboutHero />

            <AboutWhyPathwise />

            <AboutPlatform />

            <AboutEngineering />

            <AboutTechnologyStack />

            <AboutPortfolioNotice />

            <AboutCTA />
        </div>
    )
}

export default AboutPage
