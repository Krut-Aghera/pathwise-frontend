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
            iconClass: "text-accent-primary bg-accent-primary/10",
        },
        {
            label: "Completed",
            value: completedCourses,
            icon: CheckCircle2,
            iconClass: "text-status-success bg-status-success/10",
        },
        {
            label: "Learning hours",
            value: learningHours,
            icon: Clock3,
            iconClass: "text-accent-secondary bg-accent-secondary/10",
        },
        {
            label: "Overall progress",
            value: `${overallProgress}%`,
            icon: TrendingUp,
            iconClass: "text-accent-unique bg-accent-unique/10",
        },
    ]

    return (
        <section
            className="
                min-w-0
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            <div className="px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                    <div>
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
                                mt-1
                                font-accent
                                text-base
                                font-semibold
                                tracking-tight
                                text-text-primary

                                sm:text-lg
                            "
                        >
                            Your learning at a glance
                        </h2>
                    </div>

                    <BookOpen
                        size={19}
                        strokeWidth={1.7}
                        className="shrink-0 text-text-muted"
                    />
                </div>

                <div
                    className="
                        mt-4
                        grid
                        grid-cols-2
                        overflow-hidden
                        rounded-xl
                        border
                        border-border-subtle

                        sm:grid-cols-4
                    "
                >
                    {statistics.map((stat, index) => {
                        const Icon = stat.icon

                        return (
                            <div
                                key={stat.label}
                                className={`
                                    min-w-0
                                    bg-background-elevated
                                    px-3
                                    py-3.5
                                    transition-colors
                                    hover:bg-background-elevated/80

                                    ${
                                        index < 2
                                            ? "border-b border-border-subtle"
                                            : ""
                                    }

                                    ${
                                        index % 2 === 0
                                            ? "border-r border-border-subtle"
                                            : ""
                                    }

                                    sm:border-b-0
                                    sm:border-r
                                    sm:border-border-subtle

                                    sm:last:border-r-0
                                `}
                            >
                                <div className="flex items-center gap-2.5">
                                    <div
                                        className={`
                                            flex
                                            h-8
                                            w-8
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            ${stat.iconClass}
                                        `}
                                    >
                                        <Icon size={15} strokeWidth={1.8} />
                                    </div>

                                    <div className="min-w-0">
                                        <p
                                            className="
                                                truncate
                                                font-body
                                                text-[10px]
                                                leading-4
                                                text-text-secondary
                                            "
                                        >
                                            {stat.label}
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                font-accent
                                                text-lg
                                                font-semibold
                                                leading-none
                                                text-text-primary
                                            "
                                        >
                                            {stat.value}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default UserLearningOverview
