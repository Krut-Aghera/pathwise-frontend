import { ArrowRight, CheckCircle2, Clock3, UserRound } from "lucide-react"

import { Link } from "react-router-dom"

const DashboardCourseCard = ({ course }) => {
    const accentClasses = {
        primary: {
            border: "hover:border-accent-primary/50",
            title: "group-hover:text-accent-primary",
            progress: "bg-accent-primary",
            badge: "bg-accent-primary/10 text-accent-primary",
        },

        secondary: {
            border: "hover:border-accent-secondary/50",
            title: "group-hover:text-accent-secondary",
            progress: "bg-accent-secondary",
            badge: "bg-accent-secondary/10 text-accent-secondary",
        },

        unique: {
            border: "hover:border-accent-unique/50",
            title: "group-hover:text-accent-unique",
            progress: "bg-accent-unique",
            badge: "bg-accent-unique/10 text-accent-unique",
        },
    }

    const accent = accentClasses[course.accent] || accentClasses.primary

    const isCompleted = course.progress >= 100

    return (
        <Link
            to={`/courses/${course.id}/learn`}
            className={`
                group
                overflow-hidden
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-background-elevated

                ${accent.border}
            `}
        >
            {/* Course visual */}

            <div
                className="
                relative
                flex
                h-32
                items-center
                justify-center
                overflow-hidden
                bg-background-elevated
            "
            >
                {course.thumbnail ? (
                    <img
                        src={course.thumbnail}
                        alt=""
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                        "
                    />
                ) : (
                    <div
                        className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                    "
                    >
                        <div
                            className="
                            h-24
                            w-24
                            rounded-full
                            border
                            border-accent-primary/10
                            bg-accent-primary/5
                            blur-xl
                        "
                        />
                    </div>
                )}
            </div>

            {/* Content */}

            <div className="p-5">
                <div
                    className="
                    flex
                    items-start
                    justify-between
                    gap-4
                "
                >
                    <div className="min-w-0">
                        <h3
                            className={`
                            font-accent
                            text-base
                            font-semibold
                            leading-6
                            text-text-primary
                            transition-colors
                            duration-200

                            ${accent.title}
                        `}
                        >
                            {course.title}
                        </h3>

                        <div
                            className="
                            mt-2
                            flex
                            items-center
                            gap-1.5
                            font-body
                            text-xs
                            text-text-secondary
                        "
                        >
                            <UserRound size={13} />

                            {course.instructor}
                        </div>
                    </div>

                    {isCompleted && (
                        <div
                            className={`
                            flex
                            shrink-0
                            items-center
                            gap-1
                            rounded-full
                            px-2
                            py-1
                            font-body
                            text-[10px]
                            font-medium

                            ${accent.badge}
                        `}
                        >
                            <CheckCircle2 size={12} />
                            Complete
                        </div>
                    )}
                </div>

                {/* Progress */}

                <div className="mt-6">
                    <div
                        className="
                        mb-2
                        flex
                        items-center
                        justify-between
                    "
                    >
                        <span
                            className="
                            font-body
                            text-xs
                            text-text-muted
                        "
                        >
                            Course progress
                        </span>

                        <span
                            className="
                            font-body
                            text-xs
                            font-medium
                            text-text-primary
                        "
                        >
                            {course.progress}%
                        </span>
                    </div>

                    <div
                        className="
                        h-1.5
                        overflow-hidden
                        rounded-full
                        bg-background-elevated
                    "
                    >
                        <div
                            className={`
                                h-full
                                rounded-full
                                transition-all
                                duration-500

                                ${accent.progress}
                            `}
                            style={{
                                width: `${Math.min(course.progress, 100)}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Footer */}

                <div
                    className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-border-subtle
                    pt-4
                "
                >
                    <div
                        className="
                        flex
                        items-center
                        gap-3
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

                        <span>{course.enrolledAt}</span>
                    </div>

                    <span
                        className={`
                        flex
                        shrink-0
                        items-center
                        gap-1
                        font-body
                        text-xs
                        font-semibold
                        text-text-secondary
                        transition-colors

                        ${accent.title}
                    `}
                    >
                        {isCompleted ? "Review" : "Continue"}

                        <ArrowRight
                            size={14}
                            className="
                                transition-transform
                                duration-200
                                group-hover:translate-x-1
                            "
                        />
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default DashboardCourseCard
