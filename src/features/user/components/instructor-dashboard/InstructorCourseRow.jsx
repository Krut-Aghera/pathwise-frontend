import { ArrowRight, Clock3, IndianRupee, UsersRound } from "lucide-react"

import { Link } from "react-router-dom"

const InstructorCourseRow = ({ course }) => {
    return (
        <article
            className="
            group
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            p-5
            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-accent-secondary/40
            hover:bg-background-elevated
        "
        >
            <div
                className="
                flex
                flex-col
                gap-5

                md:flex-row
                md:items-center
                md:justify-between
            "
            >
                {/* Course */}

                <div
                    className="
                    min-w-0
                    flex-1
                "
                >
                    <div
                        className="
                        flex
                        items-center
                        gap-2
                    "
                    >
                        <span
                            className="
                            rounded-md
                            border
                            border-status-success/20
                            bg-status-success/10
                            px-2
                            py-1
                            font-body
                            text-[10px]
                            font-medium
                            text-status-success
                        "
                        >
                            Published
                        </span>
                    </div>

                    <h3
                        className="
                        mt-2
                        font-accent
                        text-base
                        font-semibold
                        leading-6
                        text-text-primary
                        transition-colors
                        duration-300

                        group-hover:text-accent-secondary
                    "
                    >
                        {course.title}
                    </h3>

                    <div
                        className="
                        mt-2
                        flex
                        flex-wrap
                        gap-x-4
                        gap-y-2
                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        <span
                            className="
                            flex
                            items-center
                            gap-1.5
                        "
                        >
                            <Clock3 size={13} />
                            {course.totalHours} hrs
                        </span>

                        <span>Updated {course.updatedAt}</span>
                    </div>
                </div>

                {/* Performance */}

                <div
                    className="
                    grid
                    grid-cols-2
                    gap-x-6
                    gap-y-3

                    sm:grid-cols-2
                    md:w-64
                    md:shrink-0
                "
                >
                    <div>
                        <p
                            className="
                            font-body
                            text-[10px]
                            text-text-muted
                        "
                        >
                            Enrollments
                        </p>

                        <p
                            className="
                            mt-1
                            flex
                            items-center
                            gap-1.5
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                        >
                            <UsersRound size={13} />

                            {course.enrollments}
                        </p>
                    </div>

                    <div>
                        <p
                            className="
                            font-body
                            text-[10px]
                            text-text-muted
                        "
                        >
                            Revenue
                        </p>

                        <p
                            className="
                            mt-1
                            flex
                            items-center
                            gap-1
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                        >
                            <IndianRupee size={13} />

                            {course.revenue.replace("₹", "")}
                        </p>
                    </div>
                </div>

                {/* Manage */}

                <Link
                    to={`/instructor/courses/${course.id}`}
                    className="
                        inline-flex
                        shrink-0
                        items-center
                        gap-1.5
                        font-body
                        text-xs
                        font-medium
                        text-text-secondary
                        transition

                        hover:text-accent-secondary
                    "
                >
                    Manage
                    <ArrowRight
                        size={14}
                        className="
                            transition-transform
                            duration-200

                            group-hover:translate-x-1
                        "
                    />
                </Link>
            </div>
        </article>
    )
}

export default InstructorCourseRow
