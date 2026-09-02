import { BookOpen, Globe2, IndianRupee, Layers3 } from "lucide-react"

const InstructorCourseInformation = ({ course }) => {
    const items = [
        {
            label: "Price",
            value: `₹${course?.price ?? 0}`,
            icon: IndianRupee,
        },
        {
            label: "Level",
            value: course?.level || "—",
            icon: BookOpen,
        },
        {
            label: "Language",
            value: course?.language || "—",
            icon: Globe2,
        },
        {
            label: "Course ID",
            value: course?._id || "—",
            icon: Layers3,
        },
    ]

    return (
        <section
            className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface

            p-5

            sm:p-6
        "
        >
            <h2
                className="
                font-accent
                text-lg
                font-semibold
                text-text-primary
            "
            >
                Course Information
            </h2>

            <div
                className="
                mt-5

                grid
                gap-3

                sm:grid-cols-2
            "
            >
                {items.map((item) => {
                    const Icon = item.icon

                    return (
                        <div
                            key={item.label}
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-3

                                rounded-lg
                                border
                                border-border-subtle

                                bg-background-elevated

                                p-3
                            "
                        >
                            <div
                                className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center

                                rounded-md

                                bg-accent-primary/10

                                text-accent-primary
                            "
                            >
                                <Icon size={15} />
                            </div>

                            <div className="min-w-0">
                                <p
                                    className="
                                    font-body
                                    text-[11px]
                                    text-text-muted
                                "
                                >
                                    {item.label}
                                </p>

                                <p
                                    className="
                                    mt-0.5

                                    truncate

                                    font-body
                                    text-sm
                                    font-medium
                                    text-text-secondary
                                "
                                >
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default InstructorCourseInformation
