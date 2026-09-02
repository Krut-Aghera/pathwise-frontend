import { BookOpen, CheckCircle2, Clock3, TrendingUp } from "lucide-react"

const UserLearningOverview = ({
    enrolledCourses = 0,
    completedCourses = 0,
    learningHours = 0,
    overallProgress = 0,
}) => {
    const statistics = [
        {
            label: "Enrolled courses",
            value: enrolledCourses,
            icon: BookOpen,
            accent: "primary",
        },
        {
            label: "Completed",
            value: completedCourses,
            icon: CheckCircle2,
            accent: "success",
        },
        {
            label: "Learning hours",
            value: learningHours,
            icon: Clock3,
            accent: "secondary",
        },
        {
            label: "Overall progress",
            value: `${overallProgress}%`,
            icon: TrendingUp,
            accent: "unique",
        },
    ]

    const accentClasses = {
        primary: {
            icon: `
                border-accent-primary/20
                bg-accent-primary/10
                text-accent-primary
            `,
        },

        success: {
            icon: `
                border-status-success/20
                bg-status-success/10
                text-status-success
            `,
        },

        secondary: {
            icon: `
                border-accent-secondary/20
                bg-accent-secondary/10
                text-accent-secondary
            `,
        },

        unique: {
            icon: `
                border-accent-unique/20
                bg-accent-unique/10
                text-accent-unique
            `,
        },
    }

    return (
        <section>
            <div
                className="
                mb-4
                flex
                flex-col
                gap-1
            "
            >
                <p
                    className="
                    font-body
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-accent-primary
                "
                >
                    Learning overview
                </p>

                <h2
                    className="
                    font-accent
                    text-xl
                    font-semibold
                    tracking-tight
                    text-text-primary
                "
                >
                    Your learning at a glance
                </h2>

                <p
                    className="
                    max-w-2xl
                    font-body
                    text-xs
                    leading-5
                    text-text-secondary
                "
                >
                    A quick snapshot of your learning activity and progress.
                </p>
            </div>

            <div
                className="
                grid
                grid-cols-2
                gap-3

                lg:grid-cols-4
            "
            >
                {statistics.map((item) => {
                    const Icon = item.icon
                    const classes = accentClasses[item.accent]

                    return (
                        <div
                            key={item.label}
                            className="
                                rounded-2xl
                                border
                                border-border-subtle
                                bg-background-surface
                                p-4
                                transition-colors
                                duration-200

                                hover:bg-background-elevated
                            "
                        >
                            <div
                                className="
                                flex
                                items-start
                                justify-between
                            "
                            >
                                <div
                                    className={`
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    ${classes.icon}
                                `}
                                >
                                    <Icon size={16} strokeWidth={1.9} />
                                </div>
                            </div>

                            <p
                                className="
                                mt-5
                                font-accent
                                text-2xl
                                font-bold
                                tracking-tight
                                text-text-primary
                            "
                            >
                                {item.value}
                            </p>

                            <p
                                className="
                                mt-1
                                font-body
                                text-xs
                                text-text-muted
                            "
                            >
                                {item.label}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default UserLearningOverview
