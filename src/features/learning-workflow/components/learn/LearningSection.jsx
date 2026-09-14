import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

import LearningLectureItem from "./LearningLectureItem"

const LearningSection = ({
    section,
    sectionNumber,
    selectedLectureId,
    progress,
    onLectureSelect,
}) => {
    const [open, setOpen] = useState(true)

    const lectures = section?.lectures ?? []

    const completedCount = lectures.filter((lecture) => {
        const lectureProgress = progress?.lectures?.find(
            (item) => item.lecture?.toString() === lecture._id?.toString()
        )

        return lectureProgress?.isCompleted
    }).length

    return (
        <section
            className="
                border-b
                border-border-subtle/70
            "
        >
            <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="
                     group
    flex
    w-full
    items-center
    gap-3
    px-4
    py-3
    text-left
    transition
    hover:bg-background-elevated/40
    sm:px-5
    sm:py-4
                "
            >
                {/* Section number */}

                <span
                    className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-border-subtle
                        bg-background-elevated/50
                        font-body
                        text-[10px]
                        font-semibold
                        text-text-muted
                        transition
                        group-hover:text-text-secondary
                    "
                >
                    {String(sectionNumber).padStart(2, "0")}
                </span>

                {/* Section info */}

                <div className="min-w-0 flex-1">
                    <p
                        className="
                            truncate
                            font-body
                            text-[13px]
                            font-semibold
                            tracking-[-0.01em]
                            text-text-primary
                        "
                    >
                        {section.title}
                    </p>

                    <p
                        className="
                            mt-1
                            font-body
                            text-[10px]
                            font-medium
                            text-text-muted
                        "
                    >
                        {completedCount} / {lectures.length} completed
                    </p>
                </div>

                {/* Chevron */}

                {open ? (
                    <ChevronDown
                        size={15}
                        strokeWidth={1.8}
                        className="
                            shrink-0
                            text-text-muted
                            transition
                            group-hover:text-text-secondary
                        "
                    />
                ) : (
                    <ChevronRight
                        size={15}
                        strokeWidth={1.8}
                        className="
                            shrink-0
                            text-text-muted
                            transition
                            group-hover:text-text-secondary
                        "
                    />
                )}
            </button>

            {open && (
                <div
                    className="
                        px-2
                        pb-2
                    "
                >
                    {lectures.map((lecture) => (
                        <LearningLectureItem
                            key={lecture._id}
                            lecture={lecture}
                            selected={lecture._id === selectedLectureId}
                            progress={progress}
                            onSelect={onLectureSelect}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default LearningSection
