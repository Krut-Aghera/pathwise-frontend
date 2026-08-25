import { Link } from "react-router-dom"

import CourseCard from "./CourseCard"
import { featuredCourses } from "../../../data/homeData.js"


const FeaturedCourses = () => {

    return (
        <section className="
            border-b
            border-border-subtle
            bg-background-surface/30
            py-16
            sm:py-20
        ">

            <div className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                sm:px-6
                lg:px-8
            ">

                <div className="
                    mb-8
                    flex
                    flex-col
                    gap-4
                    sm:mb-10
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                ">

                    <div>
                        <span className="
                            font-body
                            text-xs
                            font-medium
                            uppercase
                            tracking-widest
                            text-accent-secondary
                        ">
                            Featured learning
                        </span>

                        <h2 className="
                            mt-2
                            font-accent
                            text-2xl
                            font-bold
                            text-text-primary
                            sm:text-3xl
                        ">
                            Explore popular courses
                        </h2>

                        <p className="
                            mt-2
                            max-w-xl
                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        ">
                            Start with courses learners are using to
                            develop practical, real-world skills.
                        </p>
                    </div>


                    <Link
                        to="/courses"
                        className="
                            font-body
                            text-sm
                            font-medium
                            text-accent-primary
                            transition
                            hover:opacity-80
                        "
                    >
                        View all courses →
                    </Link>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-2
                    lg:grid-cols-3
                ">
                    {featuredCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}


export default FeaturedCourses