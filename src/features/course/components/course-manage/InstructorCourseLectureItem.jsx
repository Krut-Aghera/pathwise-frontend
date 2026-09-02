import { FileVideo, GripVertical } from "lucide-react"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"

const InstructorCourseLectureItem = ({ lecture }) => {
    const isPublished = lecture?.status === RESOURCE_STATUS.PUBLISHED

    return (
        <div
            className="
            group
            flex
            items-center
            gap-2

            py-3

            sm:gap-3
        "
        >
            {/* Drag handle */}

            <button
                type="button"
                aria-label="Reorder lecture"
                className="
                    hidden
                    shrink-0
                    cursor-grab

                    text-text-muted

                    transition-colors

                    hover:text-text-secondary

                    sm:inline-flex
                "
            >
                <GripVertical size={15} />
            </button>

            {/* Video icon */}

            <div
                className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center

                rounded-md

                bg-accent-secondary/10

                text-accent-secondary
            "
            >
                <FileVideo size={14} />
            </div>

            {/* Lecture */}

            <div className="min-w-0 flex-1">
                <p
                    className="
                    truncate

                    font-body
                    text-sm
                    font-medium
                    text-text-secondary

                    transition-colors

                    group-hover:text-text-primary
                "
                >
                    {lecture?.title}
                </p>
            </div>

            {/* Duration */}

            <span
                className="
                hidden
                shrink-0

                font-body
                text-xs
                text-text-muted

                sm:inline
            "
            >
                {lecture?.duration || "—"}
            </span>

            {/* Status */}

            <span
                className={`
                shrink-0

                rounded-md
                border

                px-1.5
                py-0.5

                font-body
                text-[10px]
                font-semibold

                ${
                    isPublished
                        ? `
                            border-status-success/30
                            bg-status-success/10
                            text-status-success
                        `
                        : `
                            border-status-warning/30
                            bg-status-warning/10
                            text-status-warning
                        `
                }
            `}
            >
                {isPublished ? "Published" : "Draft"}
            </span>
        </div>
    )
}

export default InstructorCourseLectureItem
