import { BookOpen, IndianRupee, UsersRound } from "lucide-react"

const InstructorStats = ({ stats }) => {
    const statistics = [
        {
            label: "Total courses",
            value: stats.totalCourses,
            icon: BookOpen,
            iconClass: "text-accent-secondary bg-accent-secondary/10",
        },
        {
            label: "Total learners",
            value: stats.totalEnrollments,
            icon: UsersRound,
            iconClass: "text-accent-unique bg-accent-unique/10",
        },
        {
            label: "Total revenue",
            value: stats.totalRevenue,
            icon: IndianRupee,
            iconClass: "text-status-success bg-status-success/10",
        },
    ]

    return (
        <div
            className="
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
            "
        >
            <div
                className="
                    grid
                    grid-cols-1

                    sm:grid-cols-3
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
                                    index !== statistics.length - 1
                                        ? "border-b border-border-subtle sm:border-b-0 sm:border-r"
                                        : ""
                                }
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
    )
}

export default InstructorStats
