import { BookOpen, Clock3, Layers3, UsersRound } from "lucide-react"

const CourseStatistics = ({
    lectureCount = 0,
    sectionCount = 0,
    duration,
    studentCount,
}) => {
    const statistics = [
        {
            key: "sections",
            label: "Sections",
            value: sectionCount,
            icon: Layers3,
        },

        {
            key: "lectures",
            label: "Lectures",
            value: lectureCount,
            icon: BookOpen,
        },

        ...(duration
            ? [
                  {
                      key: "duration",
                      label: "Duration",
                      value: duration,
                      icon: Clock3,
                  },
              ]
            : []),

        ...(studentCount !== undefined
            ? [
                  {
                      key: "students",
                      label: "Students",
                      value: studentCount,
                      icon: UsersRound,
                  },
              ]
            : []),
    ]

    return (
        <section
            aria-label="Course statistics"
            className="
                grid
                grid-cols-2
                gap-3

                sm:grid-cols-4
                sm:gap-4
            "
        >
            {statistics.map((statistic) => {
                const Icon = statistic.icon

                return (
                    <div
                        key={statistic.key}
                        className="
                            flex
                            min-w-0
                            items-center
                            gap-3

                            rounded-xl
                            border
                            border-border-subtle
                            bg-background-surface

                            px-4
                            py-4

                            transition-colors
                            duration-200

                            hover:border-accent-primary/30
                            hover:bg-background-elevated
                        "
                    >
                        {/* Icon */}

                        <div
                            className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center

                            rounded-lg

                            bg-accent-primary/10
                            text-accent-primary
                        "
                        >
                            <Icon size={17} strokeWidth={1.8} />
                        </div>

                        {/* Content */}

                        <div
                            className="
                            min-w-0
                        "
                        >
                            <p
                                className="
                                truncate

                                font-body
                                text-[11px]
                                text-text-muted
                            "
                            >
                                {statistic.label}
                            </p>

                            <p
                                className="
                                mt-0.5
                                truncate

                                font-body
                                text-sm
                                font-semibold
                                text-text-primary
                            "
                            >
                                {statistic.value}
                            </p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default CourseStatistics
