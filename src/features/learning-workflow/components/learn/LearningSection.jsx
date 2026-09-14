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
            (item) => item.lecture === lecture._id
        )

        return lectureProgress?.isCompleted
    }).length

    const isSectionComplete =
        lectures.length > 0 && completedCount === lectures.length

    return (
        <section
            className="
                border-b
                border-border-subtle
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
                    px-5
                    py-4
                    text-left
                    transition
                    hover:bg-background-elevated/60
                "
            >
                {/* Section number */}

                <span
                    className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        font-body
                        text-[10px]
                        font-semibold
                        ${
                            isSectionComplete
                                ? "border-status-success/30 bg-status-success/10 text-status-success"
                                : "border-border-subtle bg-background-elevated text-text-muted"
                        }
                    `}
                >
                    {String(sectionNumber).padStart(2, "0")}
                </span>

                {/* Section info */}

                <div className="min-w-0 flex-1">
                    <p
                        className="
                            truncate
                            font-body
                            text-sm
                            font-medium
                            text-text-primary
                        "
                    >
                        {section.title}
                    </p>

                    <p
                        className="
                            mt-1
                            font-body
                            text-[11px]
                            text-text-muted
                        "
                    >
                        {completedCount} / {lectures.length} completed
                    </p>
                </div>

                {/* Chevron */}

                {open ? (
                    <ChevronDown
                        size={16}
                        className="
                            shrink-0
                            text-text-muted
                            transition
                            group-hover:text-text-secondary
                        "
                    />
                ) : (
                    <ChevronRight
                        size={16}
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
                <div className="pb-2">
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
