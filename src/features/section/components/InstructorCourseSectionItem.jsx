import { ArrowRight, GripVertical } from "lucide-react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { RESOURCE_STATUS } from "../../../constants/resourceConstants"

const InstructorCourseSectionItem = ({
    section,
    onSectionDetail,
    isReorderingSections = false,
}) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useSortable({
            id: section._id,
            disabled: isReorderingSections,
        })

    const style = {
        transform: CSS.Transform.toString(transform),
    }

    const isPublished = section?.status === RESOURCE_STATUS.PUBLISHED

    const handleClick = () => {
        if (isReorderingSections || isDragging) {
            return
        }

        onSectionDetail?.(section)
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
            tabIndex={isReorderingSections ? -1 : 0}
            aria-label={`Open section ${section?.title}`}
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

                ${isReorderingSections ? "cursor-not-allowed" : ""}
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
                    aria-label={`Reorder ${section?.title}`}
                    title="Drag to reorder"
                    disabled={isReorderingSections}
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

                {/* Section Information */}
                <div className="min-w-0 flex-1 py-2">
                    <span
                        className="
                            font-body
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wider
                            text-text-muted
                        "
                    >
                        Section {section?.order}
                    </span>

                    <h3
                        className="
                            mt-1
                            truncate
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                            group-hover:text-text-primary/80
                        "
                    >
                        {section?.title}
                    </h3>
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
                            group-hover:translate-x-0.5
                            group-hover:text-text-primary/80
                        "
                    />
                </div>
            </div>
        </article>
    )
}

export default InstructorCourseSectionItem
