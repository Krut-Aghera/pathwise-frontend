import {
    ChevronDown,
    GripVertical,
    Plus,
    Pencil,
    Trash2,
} from "lucide-react"

import { useState } from "react"

import {
    useSortable,
} from "@dnd-kit/sortable"

import {
    CSS,
} from "@dnd-kit/utilities"

import InstructorCourseLectureList
    from "../../course/components/course-manage/InstructorCourseLectureList.jsx"

import { RESOURCE_STATUS }
    from "../../../constants/resourceConstants.js"

import Button
    from "../../../components/ui/Button.jsx"


const InstructorCourseSectionItem = ({
    course,
    section,
    onEditSection,
    onAddLecture,
    onRemoveSection,
    isReorderingSections = false,
}) => {

    const [
        isOpen,
        setIsOpen,
    ] = useState(true)


    ///////////////////////////////////////////////////////////////
    // Sortable

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: section._id,
        disabled: false,
    })


    ///////////////////////////////////////////////////////////////
    // Styles

    const style = {
        transform: CSS.Transform.toString(
            transform
        ),
        transition,
    }


    ///////////////////////////////////////////////////////////////
    // Section status

    const isPublished =
        section?.status === RESOURCE_STATUS.PUBLISHED


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <article
            ref={setNodeRef}
            style={style}
            className={`
                overflow-hidden
                rounded-lg
                border
                border-border-subtle
                bg-background-elevated

                ${isDragging
                    ? `
                        relative
                        z-10
                        opacity-50
                        shadow-xl
                    `
                    : ""
                }
            `}
        >

            {/* Section header */}

            <div className="
                flex
                items-center
                gap-2
                p-3
                sm:p-4
            ">

                {/* Drag handle */}

                <button
                    type="button"
                    aria-label={`Reorder ${section?.title}`}
                    title="Drag to reorder"
                    disabled={isReorderingSections}
                    className="
                        inline-flex
                        shrink-0
                        cursor-grab
                        touch-none
                        select-none
                        items-center
                        justify-center
                        text-text-muted
                        transition-colors
                        hover:text-text-secondary
                        active:cursor-grabbing
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                    {...attributes}
                    {...listeners}
                >
                    <GripVertical size={17} />
                </button>


                {/* Expand */}

                <button
                    type="button"
                    onClick={() =>
                        setIsOpen(
                            (value) => !value
                        )
                    }
                    aria-expanded={isOpen}
                    aria-label={
                        isOpen
                            ? `Collapse ${section?.title}`
                            : `Expand ${section?.title}`
                    }
                    disabled={isReorderingSections}
                    className="
                        flex
                        min-w-0
                        flex-1
                        items-center
                        gap-2
                        text-left
                        disabled:cursor-not-allowed
                    "
                >

                    <ChevronDown
                        size={17}
                        className={`
                            shrink-0
                            text-text-muted
                            transition-transform
                            duration-200

                            ${isOpen
                                ? ""
                                : "-rotate-90"
                            }
                        `}
                    />


                    <div className="min-w-0">

                        <div className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                        ">

                            <span className="
                                font-body
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-text-muted
                            ">
                                Section {section?.order}
                            </span>


                            <span className={`
                                rounded-md
                                border
                                px-1.5
                                py-0.5
                                font-body
                                text-[10px]
                                font-semibold

                                ${isPublished
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
                            `}>
                                {isPublished
                                    ? "Published"
                                    : "Draft"
                                }
                            </span>

                        </div>


                        <h3 className="
                            mt-1
                            truncate
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        ">
                            {section?.title}
                        </h3>

                    </div>

                </button>


                {/* Edit section */}

                <Button
                    type="button"
                    onClick={() =>
                        onEditSection?.(section)
                    }
                    disabled={isReorderingSections}
                    aria-label={`Edit ${section?.title}`}
                    title="Edit section"
                    className="
                        h-8
                        w-8
                        shrink-0
                        rounded-md
                        p-0

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    <Pencil size={14} />
                </Button>


                {/* Remove section */}

                <Button
                    type="button"
                    onClick={() =>
                        onRemoveSection?.(section)
                    }
                    disabled={isReorderingSections}
                    aria-label={`Remove ${section?.title}`}
                    title="Remove section"
                    className="
                        h-8
                        w-8
                        shrink-0
                        rounded-md
                        p-0

                        border
                        border-status-danger/30

                        bg-status-danger/10
                        text-status-danger

                        hover:bg-status-danger/20

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    <Trash2 size={14} />
                </Button>


                {/* Add lecture */}

                <Button
                    type="button"
                    onClick={() =>
                        onAddLecture?.(section)
                    }
                    disabled={isReorderingSections}
                    aria-label={`Add lecture to ${section?.title}`}
                    title="Add lecture"
                    className="
                        h-8
                        w-8
                        shrink-0
                        rounded-md
                        p-0

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    <Plus size={15} />
                </Button>

            </div>


            {/* Lectures */}

            {isOpen && (
                <div className="
                    border-t
                    border-border-subtle
                    px-3
                    pb-3
                    pt-2
                    sm:px-4
                ">

                    <InstructorCourseLectureList
                        course={course}
                        section={section}
                    />

                </div>
            )}

        </article>
    )
}


export default InstructorCourseSectionItem