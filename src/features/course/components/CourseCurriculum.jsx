import {
    ChevronDown,
    ChevronRight,
    FileVideo,
    Lock,
} from "lucide-react"
import { useState } from "react"


const CourseCurriculum = ({ sections = [] }) => {

    const [openSections, setOpenSections] = useState(
        () => new Set(sections.map((section) => section._id))
    )


    const toggleSection = (sectionId) => {
        setOpenSections((current) => {
            const next = new Set(current)

            if (next.has(sectionId)) {
                next.delete(sectionId)
            } else {
                next.add(sectionId)
            }

            return next
        })
    }


    if (sections.length === 0) {
        return (
            <section className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface

                px-5
                py-8

                text-center

                sm:px-6
            ">
                <p className="
                    font-body
                    text-sm
                    text-text-muted
                ">
                    No course content available yet.
                </p>
            </section>
        )
    }


    return (
        <section
            aria-labelledby="course-curriculum-heading"
            className="
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
            "
        >

            {/* Header */}

            <div className="
                border-b
                border-border-subtle

                px-5
                py-5

                sm:px-6
            ">

                <h2
                    id="course-curriculum-heading"
                    className="
                        font-accent
                        text-xl
                        font-semibold
                        text-text-primary
                    "
                >
                    Course Curriculum
                </h2>

                <p className="
                    mt-1

                    font-body
                    text-xs
                    text-text-muted
                ">
                    {sections.length}{" "}
                    {sections.length === 1 ? "section" : "sections"}
                </p>

            </div>


            {/* Sections */}

            <div>
                {sections.map((section) => {

                    const isOpen = openSections.has(section._id)

                    const lectures = section.lectures || []

                    return (
                        <div
                            key={section._id}
                            className="
                                border-b
                                border-border-subtle
                                last:border-b-0
                            "
                        >

                            {/* Section Header */}

                            <button
                                type="button"
                                onClick={() => toggleSection(section._id)}
                                aria-expanded={isOpen}
                                className="
                                    flex
                                    w-full
                                    items-center
                                    gap-3

                                    px-5
                                    py-4

                                    text-left

                                    transition-colors
                                    duration-200

                                    hover:bg-background-elevated

                                    sm:px-6
                                "
                            >

                                {/* Chevron */}

                                <span className="
                                    flex
                                    h-7
                                    w-7
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-md

                                    bg-accent-primary/10
                                    text-accent-primary
                                ">
                                    {isOpen ? (
                                        <ChevronDown size={16} />
                                    ) : (
                                        <ChevronRight size={16} />
                                    )}
                                </span>


                                {/* Section information */}

                                <span className="
                                    min-w-0
                                    flex-1
                                ">

                                    <span className="
                                        block
                                        truncate

                                        font-accent
                                        text-sm
                                        font-semibold
                                        text-text-primary
                                    ">
                                        {section.title}
                                    </span>

                                    <span className="
                                        mt-0.5
                                        block

                                        font-body
                                        text-[11px]
                                        text-text-muted
                                    ">
                                        {lectures.length}{" "}
                                        {lectures.length === 1
                                            ? "lecture"
                                            : "lectures"}
                                    </span>

                                </span>

                            </button>


                            {/* Lectures */}

                            {isOpen && (
                                <div className="
                                    border-t
                                    border-border-subtle
                                    bg-background-elevated/40
                                ">

                                    {lectures.length === 0 ? (
                                        <div className="
                                            px-5
                                            py-4

                                            font-body
                                            text-xs
                                            text-text-muted

                                            sm:px-6
                                        ">
                                            No lectures in this section.
                                        </div>
                                    ) : (
                                        lectures.map((lecture) => (
                                            <div
                                                key={lecture._id}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3

                                                    px-5
                                                    py-3.5

                                                    sm:px-6
                                                "
                                            >

                                                {/* Lecture icon */}

                                                <FileVideo
                                                    size={16}
                                                    className="
                                                        shrink-0
                                                        text-text-muted
                                                    "
                                                />


                                                {/* Lecture title */}

                                                <span className="
                                                    min-w-0
                                                    flex-1

                                                    font-body
                                                    text-sm
                                                    text-text-secondary
                                                ">
                                                    <span className="
                                                        block
                                                        truncate
                                                    ">
                                                        {lecture.title}
                                                    </span>
                                                </span>


                                                {/* Preview / locked */}

                                                {lecture.isPreviewFree ? (
                                                    <span className="
                                                        shrink-0

                                                        rounded-md
                                                        bg-accent-primary/10

                                                        px-2
                                                        py-1

                                                        font-body
                                                        text-[10px]
                                                        font-medium
                                                        text-accent-primary
                                                    ">
                                                        Preview
                                                    </span>
                                                ) : (
                                                    <Lock
                                                        size={14}
                                                        className="
                                                            shrink-0
                                                            text-text-muted
                                                        "
                                                        aria-label="Locked lecture"
                                                    />
                                                )}

                                            </div>
                                        ))
                                    )}

                                </div>
                            )}

                        </div>
                    )
                })}
            </div>

        </section>
    )
}


export default CourseCurriculum