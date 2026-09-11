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

    return (
        <section>
            {/* Header */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="h-px w-6 bg-accent-secondary" />

                        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-secondary">
                            Curriculum
                        </p>
                    </div>

                    <h2 className="mt-2 font-accent text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                        Course content
                    </h2>

                    <p className="mt-1.5 max-w-xl font-body text-xs leading-5 text-text-muted sm:text-sm">
                        Explore the sections and lectures included in this
                        course.
                    </p>
                </div>

                {sections.length > 0 && (
                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-background-surface px-3 py-1.5">
                            <Layers3
                                size={13}
                                className="text-accent-secondary"
                            />

                            <span className="font-body text-[11px] font-medium text-text-secondary">
                                {totalSections}{" "}
                                {totalSections === 1 ? "section" : "sections"}
                            </span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-background-surface px-3 py-1.5">
                            <BookOpen
                                size={13}
                                className="text-accent-primary"
                            />

                            <span className="font-body text-[11px] font-medium text-text-secondary">
                                {totalLectures}{" "}
                                {totalLectures === 1 ? "lecture" : "lectures"}
                            </span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-background-surface px-3 py-1.5">
                            <Clock3 size={13} className="text-accent-unique" />

                            <span className="font-body text-[11px] font-medium text-text-secondary">
                                {formatDuration(totalDuration)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Empty state */}
            {sections.length === 0 ? (
                <div className="mt-6 overflow-hidden rounded-2xl border border-border-subtle bg-background-surface">
                    <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-background-elevated">
                            <Layers3 size={20} className="text-text-muted" />
                        </div>

                        <h3 className="mt-4 font-accent text-base font-semibold text-text-primary">
                            Curriculum is not available
                        </h3>

                        <p className="mt-1.5 max-w-sm font-body text-xs leading-5 text-text-muted">
                            Course lectures will appear here once the curriculum
                            is available.
                        </p>
                    </div>
                </div>
            ) : (
                /* Curriculum */
                <div className="mt-6 overflow-hidden rounded-2xl border border-border-subtle bg-background-surface shadow-sm shadow-black/5">
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
            )}
        </section>
    )
}

export default CourseCurriculum
