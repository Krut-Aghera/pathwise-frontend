import { ArrowUpDown, Layers3, Plus } from "lucide-react"

import Button from "../../../../components/ui/Button.jsx"
import InstructorSectionList from "../../../section/components/section-management/InstructorSectionList.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorCourseSectionArea = ({
    sections = [],
    onAddSection,
    onSectionDetail,
    onReorderSections,
    isReorderingSections = false,
}) => {
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
            <div
                className="
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >
                <div>
                    <div className="flex items-center gap-2">
                        <Layers3 size={18} className="text-accent-primary" />

                        <h2
                            className="
                                font-accent
                                text-lg
                                font-semibold
                                text-text-primary
                            "
                        >
                            Course Sections
                        </h2>
                    </div>

                    <p
                        className="
                            mt-1
                            font-body
                            text-xs
                            leading-5
                            text-text-muted
                        "
                    >
                        Organize the sections that make up this course.
                    </p>
                </div>

                <Button
                    type="button"
                    onClick={onAddSection}
                    disabled={isReorderingSections}
                    className="w-full sm:w-auto"
                >
                    {isReorderingSections ? (
                        <>
                            <ArrowUpDown size={15} />
                            Reordering...
                        </>
                    ) : (
                        <>
                            <Plus size={15} />
                            Add Section
                        </>
                    )}
                </Button>
            </div>

            <div className="mt-5">
                <InstructorSectionList
                    sections={sections}
                    onSectionDetail={onSectionDetail}
                    onReorderSections={onReorderSections}
                    isReorderingSections={isReorderingSections}
                />
            </div>
        </section>
    )
}

export default InstructorCourseSectionArea
