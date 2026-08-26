import {
    ArrowRight,
    Clock3,
    UserRound,
} from "lucide-react"

import { Link } from "react-router-dom"


const DashboardCourseCard = ({
    course,
}) => {

    const accentClasses = {
        primary: {
            border:
                "hover:border-accent-primary/60",
            title:
                "group-hover:text-accent-primary",
            progress:
                "bg-accent-primary",
        },

        secondary: {
            border:
                "hover:border-accent-secondary/60",
            title:
                "group-hover:text-accent-secondary",
            progress:
                "bg-accent-secondary",
        },

        unique: {
            border:
                "hover:border-accent-unique/60",
            title:
                "group-hover:text-accent-unique",
            progress:
                "bg-accent-unique",
        },
    }

    const accent = accentClasses[course.accent]


    return (
        <Link
            to={`/courses/${course.id}/learn`}
            className={`
                group
                block
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                p-5
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-background-elevated

                ${accent.border}
            `}
        >

            {/* Top */}

            <div className="
                flex
                items-start
                justify-between
                gap-4
            ">

                <div className="
                    min-w-0
                ">
                    <h3 className={`
                        font-accent
                        text-base
                        font-semibold
                        leading-6
                        text-text-primary
                        transition-colors
                        duration-300

                        ${accent.title}
                    `}>
                        {course.title}
                    </h3>

                    <div className="
                        mt-2
                        flex
                        items-center
                        gap-1.5
                        font-body
                        text-xs
                        text-text-secondary
                    ">
                        <UserRound size={14} />

                        <span>
                            {course.instructor}
                        </span>
                    </div>
                </div>

            </div>


            {/* Progress */}

            <div className="
                mt-6
            ">

                <div className="
                    mb-2
                    flex
                    items-center
                    justify-between
                    font-body
                    text-xs
                ">
                    <span className="text-text-muted">
                        Progress
                    </span>

                    <span className="text-text-secondary">
                        {course.progress}%
                    </span>
                </div>


                <div className="
                    h-1.5
                    overflow-hidden
                    rounded-full
                    bg-background-elevated
                ">
                    <div
                        className={`
                            h-full
                            rounded-full
                            transition-all
                            duration-500
                            ${accent.progress}
                        `}
                        style={{
                            width: `${course.progress}%`,
                        }}
                    />
                </div>

            </div>


            {/* Bottom */}

            <div className="
                mt-5
                flex
                items-end
                justify-between
                gap-4
                border-t
                border-border-subtle
                pt-4
            ">

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-x-4
                    gap-y-2
                    font-body
                    text-xs
                    text-text-muted
                ">

                    <span className="
                        flex
                        items-center
                        gap-1.5
                    ">
                        <Clock3 size={14} />

                        {course.totalHours} hrs
                    </span>

                    <span>
                        Enrolled {course.enrolledAt}
                    </span>

                </div>


                <span className={`
                    flex
                    shrink-0
                    items-center
                    gap-1
                    font-body
                    text-xs
                    font-medium
                    text-text-secondary
                    transition-colors
                    duration-300

                    ${accent.title}
                `}>
                    Continue

                    <ArrowRight
                        size={14}
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                    />
                </span>

            </div>

        </Link>
    )
}


export default DashboardCourseCard