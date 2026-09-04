import { memo } from "react"

import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    CircleDashed,
    GripVertical,
} from "lucide-react"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorSectionItem = ({
    section,
    onSectionDetail,
    isReorderingSections = false,
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: section._id,
        disabled: isReorderingSections,
    })

    const isPublished = section?.status === RESOURCE_STATUS.PUBLISHED

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    const handleClick = () => {
        if (isReorderingSections || isDragging) {
            return
        }

        onSectionDetail?.(section)
    }

    const handleKeyDown = (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
            return
        }

        event.preventDefault()

        handleClick()
    }

    return (
        <div
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
                    min-h-18
                    items-center
                    gap-3
                    px-3
                    py-3
                    sm:px-4
                "
            >
                {/* Drag handle */}

                <button
                    type="button"
                    aria-label={`Reorder ${section?.title}`}
                    title="Drag to reorder"
                    disabled={isReorderingSections}
                    {...attributes}
                    {...listeners}
                    onClick={(event) => {
                        event.stopPropagation()
                    }}
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
                >
                    <GripVertical size={19} />
                </button>

                {/* Section icon */}

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
                    <BookOpen size={17} />
                </div>

                {/* Section information */}

                <div className="min-w-0 flex-1 py-2">
                    <div className="flex min-w-0 items-center gap-2">
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
                            Section {section?.order}
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
                            {section?.title}
                        </h3>
                    </div>

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
                            Section {section?.order}
                        </span>

                        <span
                            className={`
                               inline-flex
                                items-center
                                gap-1.5

                                rounded-full

                                px-2.5
                                py-1

                                font-body
                                text-xs
                                font-semibold
                        
                                ${
                                    isPublished
                                        ? "bg-status-success/10 text-status-success"
                                        : "bg-status-warning/10 text-status-warning"
                                }
                                
                            `}
                        >
                            {isPublished ? (
                                <>
                                    <CheckCircle2 size={12} />
                                    Published
                                </>
                            ) : (
                                <>
                                    <CircleDashed size={12} />
                                    Draft
                                </>
                            )}
                        </span>
                    </div>
                </div>

                {/* Navigation indicator */}

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-2
                    "
                >
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
        </div>
    )
}

export default memo(InstructorSectionItem)
