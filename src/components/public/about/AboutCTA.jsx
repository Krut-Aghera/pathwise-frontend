import { ArrowRight, BookOpen } from "lucide-react"

import { Link } from "react-router-dom"

const AboutCTA = () => {
    return (
        <section>
            <div
                className="
                mx-auto
                w-full
                max-w-4xl
                px-4
                py-20
                text-center
                sm:px-6
                lg:px-8
            "
            >
                <div
                    className="
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-accent-primary/10
                    text-accent-primary
                "
                >
                    <BookOpen size={22} />
                </div>

                <h2
                    className="
                    mt-5
                    font-accent
                    text-3xl
                    font-bold
                    tracking-tight
                    text-text-primary
                    sm:text-4xl
                "
                >
                    See the project in action.
                </h2>

                <p
                    className="
                    mx-auto
                    mt-4
                    max-w-xl
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                "
                >
                    Explore the course experience and see how the different
                    parts of Pathwise come together.
                </p>

                <div
                    className="
                    mt-7
                    flex
                    flex-col
                    justify-center
                    gap-3
                    sm:flex-row
                "
                >
                    <Link
                        to="/courses"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            bg-accent-primary
                            px-5
                            py-3
                            font-body
                            text-sm
                            font-medium
                            text-text-primary
                            transition
                            hover:opacity-90
                        "
                    >
                        Browse Courses
                        <ArrowRight size={16} />
                    </Link>

                    <Link
                        to="/auth/signup"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            border
                            border-border-subtle
                            bg-background-surface
                            px-5
                            py-3
                            font-body
                            text-sm
                            font-medium
                            text-text-secondary
                            transition
                            hover:text-text-primary
                        "
                    >
                        Create an Account
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AboutCTA
