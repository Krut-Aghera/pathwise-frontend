import {
    ChevronDown,
    GripVertical,
    Plus,
} from "lucide-react"

import { useState } from "react"

import Button from "../../../../components/ui/Button"

import InstructorCourseLectureList
    from "./InstructorCourseLectureList.jsx"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"


const InstructorCourseSectionItem = ({
    course,
    section,
}) => {

    const [isOpen, setIsOpen] = useState(true)


    const isPublished =
        section?.status === RESOURCE_STATUS.PUBLISHED


    return (
        <article className="
            overflow-hidden

            rounded-lg
            border
            border-border-subtle

            bg-background-elevated
        ">

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
                    aria-label="Reorder section"
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

                    <GripVertical size={17} />

                </button>


                {/* Expand */}

                <button
                    type="button"
                    onClick={() => setIsOpen((value) => !value)}
                    aria-expanded={isOpen}
                    className="
                        flex
                        min-w-0
                        flex-1
                        items-center
                        gap-2

                        text-left
                    "
                >

                    <ChevronDown
                        size={17}
                        className={`
                            shrink-0
                            text-text-muted
                            transition-transform
                            duration-200

                            ${isOpen ? "" : "-rotate-90"}
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


                {/* Add lecture */}

                <Button
                    type="button"
                    aria-label={`Add lecture to ${section?.title}`}
                    title="Add lecture"
                    className="
                        h-8
                        w-8
                        shrink-0

                        rounded-md

                        p-0
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
