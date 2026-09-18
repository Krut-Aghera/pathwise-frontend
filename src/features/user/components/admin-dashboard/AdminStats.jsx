import {
    ArchiveX,
    BookOpen,
    GraduationCap,
    IndianRupee,
    UserRoundCheck,
    UsersRound,
} from "lucide-react"

const AdminStats = ({ stats, isLoading = false }) => {
    const statistics = [
        {
            label: "Total courses",
            value: stats.totalCourses,
            icon: BookOpen,
            iconClass: "text-accent-secondary bg-accent-secondary/10",
        },
        {
            label: "Instructors",
            value: stats.totalInstructors,
            icon: UserRoundCheck,
            iconClass: "text-accent-primary bg-accent-primary/10",
        },
        {
            label: "Students",
            value: stats.totalStudents,
            icon: GraduationCap,
            iconClass: "text-accent-unique bg-accent-unique/10",
        },
        {
            label: "Total enrollments",
            value: stats.totalEnrollments,
            icon: UsersRound,
            iconClass: "text-accent-secondary bg-accent-secondary/10",
        },
        {
            label: "Total revenue",
            value: stats.totalRevenue,
            icon: IndianRupee,
            iconClass: "text-status-success bg-status-success/10",
        },
        {
            label: "Removed courses",
            value: stats.totalRemovedCourses,
            icon: ArchiveX,
            iconClass: "text-status-danger bg-status-danger/10",
        },
    ]

    return (
        <div className="overflow-hidden rounded-xl border border-border-subtle">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {statistics.map((stat, index) => {
                    const Icon = stat.icon

                    const borderRightClass =
                        index === 0 || index === 3
                            ? "sm:border-r lg:border-r"
                            : index === 1 || index === 4
                              ? "lg:border-r"
                              : "sm:border-r-0 lg:border-r-0"

                    const borderBottomClass =
                        index !== statistics.length - 1
                            ? "border-b border-border-subtle"
                            : ""

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
                                ${borderRightClass}
                                ${borderBottomClass}
                                lg:border-b-0
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
                                    <p className="truncate font-body text-[10px] leading-4 text-text-secondary">
                                        {stat.label}
                                    </p>

                                    <p className="mt-0.5 font-accent text-lg font-semibold leading-none text-text-primary">
                                        {isLoading ? "—" : stat.value}
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

export default AdminStats