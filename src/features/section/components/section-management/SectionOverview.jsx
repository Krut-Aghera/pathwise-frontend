import { BookOpen, FileVideo, Hash, Video } from "lucide-react"
import { RESOURCE_STATUS } from "../../../../constants/resourceConstants"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const SectionOverview = ({
    section,
    lectureCount = 0,
    publishedLectureCount = 0,
}) => {
    if (!section) {
        return null
    }

    const isPublished = section.status === RESOURCE_STATUS.PUBLISHED

    const information = [
        {
            label: "Order",
            value: section.order ?? "—",
            icon: Hash,
        },
        {
            label: "Lectures",
            value: lectureCount,
            icon: FileVideo,
        },
        {
            label: "Published",
            value: publishedLectureCount,
            icon: BookOpen,
        },
        {
            label: "Status",
            value: isPublished ? "Published" : "Draft",
            icon: Video,
            valueClass: isPublished
                ? "text-status-success"
                : "text-status-warning",
        },
    ]

    return (
        <section
            className="
                rounded-xl
                border
                border-border-subtle

                bg-background-surface

                px-5
                py-4

                sm:px-6
            "
        >
            {/* Header */}

            <div>
                <h2
                    className="
                        font-accent
                        text-sm
                        font-semibold
                        text-text-primary
                    "
                >
                    Section Details
                </h2>

                <p
                    className="
                        mt-0.5

                        font-body
                        text-xs
                        text-text-muted
                    "
                >
                    Quick overview of this section.
                </p>
            </div>

            {/* Information */}

            <div
                className="
                    mt-4

                    grid
                    grid-cols-2

                    divide-x
                    divide-y
                    divide-border-subtle

                    overflow-hidden

                    rounded-lg
                    border
                    border-border-subtle

                    sm:grid-cols-4
                    sm:divide-y-0
                "
            >
                {information.map(
                    ({
                        label,
                        value,
                        icon: Icon,
                        valueClass = "text-text-primary",
                    }) => (
                        <div
                            key={label}
                            className="
                                min-w-0

                                px-3
                                py-3.5

                                sm:px-4
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-1.5
                                "
                            >
                                <Icon
                                    size={13}
                                    className="
                                        shrink-0
                                        text-text-muted
                                    "
                                />

                                <span
                                    className="
                                        truncate

                                        font-body
                                        text-[11px]
                                        font-medium
                                        text-text-muted
                                    "
                                >
                                    {label}
                                </span>
                            </div>

                            <p
                                className={`
                                    mt-1.5

                                    truncate

                                    font-body
                                    text-sm
                                    font-semibold

                                    ${valueClass}
                                `}
                            >
                                {value}
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default SectionOverview
