import { FileVideo, Plus } from "lucide-react"

import Button from "../../../components/ui/Button.jsx"
import InstructorCourseLectureList from "../../lecture/components/course-manage/InstructorCourseLectureList.jsx"

const InstructorSectionLectureArea = ({
    course,
    section,
    lectures = [],
    onAddLecture,
    onManageLecture,
    onRemoveLecture,
    onReorderLectures,
    isActionLoading = false,
    isReorderingLectures = false,
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
                        <FileVideo size={18} className="text-accent-primary" />

                        <h2
                            className="
                                font-accent
                                text-lg
                                font-semibold
                                text-text-primary
                            "
                        >
                            Section Lectures
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
                        Add and manage the lectures inside this section.
                    </p>
                </div>

                <Button
                    type="button"
                    onClick={onAddLecture}
                    disabled={isActionLoading}
                    className="w-full sm:w-auto"
                >
                    <Plus size={15} />
                    Add Lecture
                </Button>
            </div>

            <div className="mt-5">
                <InstructorCourseLectureList
                    course={course}
                    section={section}
                    lectures={lectures}
                    onManageLecture={onManageLecture}
                    onRemoveLecture={onRemoveLecture}
                    onReorderLectures={onReorderLectures}
                    isActionLoading={isActionLoading}
                    isReorderingLectures={isReorderingLectures}
                />
            </div>
        </section>
    )
}

export default InstructorSectionLectureArea
