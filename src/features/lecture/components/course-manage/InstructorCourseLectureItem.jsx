import {
    ArrowRight,
    FileVideo,
    GripVertical,
    LockKeyhole,
    PlayCircle,
} from "lucide-react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"

const InstructorCourseLectureItem = ({
    lecture,
    onManageLecture,
    isReorderingLectures = false,
}) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useSortable({
            id: lecture._id,
            disabled: isReorderingLectures,
        })

    const style = {
        transform: CSS.Transform.toString(transform),
    }

    const isPublished = lecture?.status === RESOURCE_STATUS.PUBLISHED

    const hasVideo = Boolean(lecture?.video?.url)

    const handleClick = () => {
        if (isReorderingLectures || isDragging) {
            return
        }

        onManageLecture?.(lecture)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            handleClick()
        }
    }

    return (
        <article
            ref={setNodeRef}
            style={style}
            role="button"
            tabIndex={isReorderingLectures ? -1 : 0}
            aria-label={`Open lecture ${lecture?.title}`}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className={`
                group

                rounded-lg
                border
                border-border-subtle

                bg-background-elevated

                ${
                    isDragging
                        ? `
                            relative
                            z-10
                            opacity-50
                            shadow-xl
                        `
                        : `
                            cursor-pointer
                            hover:bg-background-surface
                        `
                }

                ${isReorderingLectures ? "cursor-not-allowed" : ""}
            `}
        >
            <div
                className="
                    flex
                    min-h-[72px]
                    items-center
                    gap-3

                    px-3
                    py-3

                    sm:px-4
                "
            >
                {/* Drag Handle */}

                <button
                    type="button"
                    aria-label={`Reorder ${lecture?.title}`}
                    title="Drag to reorder"
                    disabled={isReorderingLectures}
                    className="
                        inline-flex
                        h-10
                        w-12
                        shrink-0

                        cursor-grab
                        touch-none
                        select-none

                        items-center
                        justify-center

                        rounded-md

                        text-text-secondary

                        hover:bg-background-surface
                        hover:text-text-primary

                        active:cursor-grabbing

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                    {...attributes}
                    {...listeners}
                    onClick={(event) => {
                        event.stopPropagation()
                    }}
                >
                    <GripVertical size={19} />
                </button>

                {/* Lecture Icon */}

                <div
                    className="
                        flex
                        h-10
                        w-10
                        shrink-0

                        items-center
                        justify-center

                        rounded-lg

                        bg-accent-primary/10
                        text-accent-primary
                    "
                >
                    <FileVideo size={17} />
                </div>

                {/* Lecture Information */}

                <div
                    className="
                        min-w-0
                        flex-1
                        py-2
                    "
                >
                    <div
                        className="
                            flex
                            min-w-0
                            items-center
                            gap-2
                        "
                    >
                        <span
                            className="
                                hidden
                                shrink-0

                                font-body
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-text-muted

                                sm:inline
                            "
                        >
                            Lecture {lecture?.order}
                        </span>

                        <h3
                            className="
                                min-w-0
                                truncate

                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary

                                group-hover:text-text-primary/80
                            "
                        >
                            {lecture?.title}
                        </h3>
                    </div>

                    {/* Metadata */}

                    <div
                        className="
                            mt-2

                            flex
                            flex-wrap
                            items-center
                            gap-x-3
                            gap-y-2
                        "
                    >
                        {/* Lecture Number - Mobile */}

                        <span
                            className="
                                shrink-0

                                font-body
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-text-muted

                                sm:hidden
                            "
                        >
                            Lecture {lecture?.order}
                        </span>

                        {/* Video Status */}

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-1.5

                                font-body
                                text-[10px]
                                text-text-muted
                            "
                        >
                            {hasVideo ? (
                                <>
                                    <PlayCircle size={12} />
                                    Video uploaded
                                </>
                            ) : (
                                <>
                                    <LockKeyhole size={12} />
                                    No video
                                </>
                            )}
                        </span>

                        {/* Preview */}

                        {lecture?.isPreviewFree && (
                            <span
                                className="
                                    rounded-md

                                    bg-accent-secondary/10

                                    px-2
                                    py-1

                                    font-body
                                    text-[10px]
                                    font-medium
                                    text-accent-secondary
                                "
                            >
                                Preview
                            </span>
                        )}
                    </div>
                </div>

                {/* Status + Navigation */}

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-2
                    "
                >
                    <span
                        className={`
                            mr-5
                            hidden

                            rounded-md
                            border

                            px-2
                            py-1

                            font-body
                            text-[10px]
                            font-semibold

                            sm:inline-flex

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

                    <ArrowRight
                        size={17}
                        className="
                            text-text-muted

                            transition-transform
                            duration-200

                            group-hover:translate-x-0.5
                            group-hover:text-text-primary/80
                        "
                    />
                </div>
            </div>
        </article>
    )
}

export default InstructorCourseLectureItem
