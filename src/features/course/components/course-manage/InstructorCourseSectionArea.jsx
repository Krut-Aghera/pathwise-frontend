import { BookOpen, Plus } from "lucide-react"

import Button from "../../../../components/ui/Button.jsx"

import InstructorCourseSectionList from "../../../section/components/InstructorCourseSectionList.jsx"

const InstructorCourseSectionArea = ({
    sections = [],
    onAddSection,
    onSectionClick,
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
                        <BookOpen size={18} className="text-accent-primary" />

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
                        Organize and manage the sections of this course.
                    </p>
                </div>

                <Button
                    type="button"
                    onClick={onAddSection}
                    disabled={isReorderingSections}
                    className="w-full sm:w-auto"
                >
                    <Plus size={15} />
                    Add Section
                </Button>
            </div>

            <div className="mt-5">
                <InstructorCourseSectionList
                    sections={sections}
                    onSectionClick={onSectionClick}
                    onSectionDetail={onSectionDetail}
                    onReorderSections={onReorderSections}
                    isReorderingSections={isReorderingSections}
                />
            </div>
        </section>
    )
}

export default InstructorCourseSectionArea
