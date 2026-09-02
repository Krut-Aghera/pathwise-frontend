import LearningPathCard from "./LearningPathCard"
import { learningPaths } from "../../../data/homeData"

const LearningPaths = () => {
    return (
        <section
            className="
            py-16
            sm:py-20
        "
        >
            <div
                className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                sm:px-6
                lg:px-8
            "
            >
                <div
                    className="
                    mx-auto
                    mb-10
                    max-w-2xl
                    text-center
                "
                >
                    <span
                        className="
                        font-body
                        text-xs
                        font-medium
                        uppercase
                        tracking-widest
                        text-accent-unique
                    "
                    >
                        Structured learning
                    </span>

                    <h2
                        className="
                        mt-2
                        font-accent
                        text-2xl
                        font-bold
                        text-text-primary
                        sm:text-3xl
                    "
                    >
                        Learn through a path, not just a course
                    </h2>

                    <p
                        className="
                        mt-3
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    "
                    >
                        Follow structured collections of courses designed to
                        take you from fundamentals to confident application.
                    </p>
                </div>

                <div
                    className="
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-2
                    lg:grid-cols-3
                "
                >
                    {learningPaths.map((path) => (
                        <LearningPathCard key={path.id} path={path} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LearningPaths
