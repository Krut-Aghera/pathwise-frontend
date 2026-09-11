import { Link } from "react-router-dom"

import CourseCard from "../../../features/course/components/course-public/course-listing/CourseCard"

const FeaturedCourses = ({
    courses = [],
    isLoading = false,
    isError = false,
    onCourseClick,
}) => {
    return (
        <section
            className="
                border-b
                border-border-subtle
                bg-background-surface/30
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
                {/* Section Header */}

                <div
                    className="
                        mb-8
                        flex
                        flex-col
                        gap-4

                        sm:mb-10
                        sm:flex-row
                        sm:items-end
                        sm:justify-between
                    "
                >
                    <div>
                        <span
                            className="
                                font-body
                                text-xs
                                font-medium
                                uppercase
                                tracking-widest
                                text-accent-secondary
                            "
                        >
                            Featured learning
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
                            Explore popular courses
                        </h2>

                        <p
                            className="
                                mt-2
                                max-w-xl
                                font-body
                                text-sm
                                leading-6
                                text-text-secondary
                            "
                        >
                            Start with courses learners are using to develop
                            practical, real-world skills.
                        </p>
                    </div>

                    <Link
                        to="/courses"
                        className="
                            shrink-0
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

                {/* Loading */}

                {isLoading && (
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-5

                            md:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="
                                    h-80
                                    animate-pulse
                                    rounded-2xl
                                    border
                                    border-border-subtle
                                    bg-background-surface
                                "
                            />
                        ))}
                    </div>
                )}

                {/* Error */}

                {!isLoading && isError && (
                    <div
                        className="
                            flex
                            min-h-52
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-border-subtle
                            bg-background-surface
                            px-6
                            text-center
                        "
                    >
                        <p className="font-body text-sm text-text-muted">
                            Unable to load featured courses right now.
                        </p>
                    </div>
                )}

                {/* Empty */}

                {!isLoading && !isError && courses.length === 0 && (
                    <div
                        className="
                            flex
                            min-h-52
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-border-subtle
                            bg-background-surface
                            px-6
                            text-center
                        "
                    >
                        <p className="font-body text-sm text-text-muted">
                            Courses will appear here soon.
                        </p>
                    </div>
                )}

                {/* Course Grid */}

                {!isLoading && !isError && courses.length > 0 && (
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-5

                            md:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {courses.map((course) => (
                            <CourseCard
                                key={course?._id ?? course?.id}
                                course={course}
                                onClick={() => onCourseClick?.(course)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default FeaturedCourses
