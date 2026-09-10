import { BookOpen, Clock3, Layers3 } from "lucide-react"

import formatDuration from "../../../../../utils/format-media-duration.js"

import CourseSection from "./CourseSection.jsx"

const CourseCurriculum = ({
    sections = [],
    statistics = {},
    onPreviewLecture,
}) => {
    const totalSections = statistics?.totalSections ?? sections.length
    const totalLectures = statistics?.totalLectures ?? 0
    const totalDuration = statistics?.totalDuration ?? 0

    if (sections.length === 0) {
        return (
            <section>
                <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-accent-secondary">
                        Curriculum
                    </p>

                    <h2 className="mt-1 font-accent text-xl font-semibold text-text-primary sm:text-2xl">
                        Course content
                    </h2>
                </div>

                <div className="mt-5 flex flex-col items-center justify-center rounded-2xl border border-border-subtle bg-background-surface px-6 py-12 text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-background-elevated text-text-muted">
                        <Layers3 size={19} />
                    </div>

                    <h3 className="mt-4 font-accent text-base font-semibold text-text-primary">
                        Curriculum is not available
                    </h3>

                    <p className="mt-1.5 max-w-md font-body text-sm leading-6 text-text-muted">
                        Course lectures will appear here once the curriculum is
                        available.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-accent-secondary">
                        Curriculum
                    </p>

                    <h2 className="mt-1 font-accent text-xl font-semibold text-text-primary sm:text-2xl">
                        Course content
                    </h2>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-xs text-text-muted">
                    <div className="flex items-center gap-1.5">
                        <Layers3
                            size={14}
                            className="text-accent-secondary"
                        />

                        <span>
                            {totalSections}{" "}
                            {totalSections === 1 ? "section" : "sections"}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <BookOpen
                            size={14}
                            className="text-accent-primary"
                        />

                        <span>
                            {totalLectures}{" "}
                            {totalLectures === 1 ? "lecture" : "lectures"}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Clock3
                            size={14}
                            className="text-accent-unique"
                        />

                        <span>{formatDuration(totalDuration)}</span>
                    </div>
                </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-border-subtle bg-background-surface">
                {sections.map((section, index) => (
                    <CourseSection
                        key={section?._id ?? section?.id ?? index}
                        section={section}
                        sectionNumber={index + 1}
                        onPreviewLecture={onPreviewLecture}
                        defaultOpen={index === 0}
                    />
                ))}
            </div>
        </section>
    )
}

export default CourseCurriculum
