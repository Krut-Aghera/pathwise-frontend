import {
    BookOpen,
} from "lucide-react"

import InstructorCourseSectionList
    from "./InstructorCourseSectionList.jsx"


const InstructorCourseCurriculum = ({
    course,
    sections = [],
}) => {

    return (
        <section className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface

            p-5

            sm:p-6
        ">

            {/* Header */}

            <div className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center
                sm:justify-between
            ">

                <div>

                    <div className="
                        flex
                        items-center
                        gap-2
                    ">

                        <BookOpen
                            size={18}
                            className="text-accent-primary"
                        />

                        <h2 className="
                            font-accent
                            text-lg
                            font-semibold
                            text-text-primary
                        ">

                            Course Curriculum

                        </h2>

                    </div>

                    <p className="
                        mt-1

                        font-body
                        text-xs
                        leading-5
                        text-text-muted
                    ">

                        Manage sections and lectures for this course.

                    </p>

                </div>

            </div>


            {/* Sections */}

            <div className="mt-5">

                <InstructorCourseSectionList
                    course={course}
                    sections={sections}
                />

            </div>

        </section>
    )
}


export default InstructorCourseCurriculum
