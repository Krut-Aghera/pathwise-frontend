import { ChevronDown, Clock3, PlayCircle } from "lucide-react"
import { useState } from "react"

import formatDuration from "../../../../../utils/format-media-duration.js"

import CourseLecture from "./CourseLecture.jsx"

const CourseSection = ({
    section,
    sectionNumber,
    onPreviewLecture,
    defaultOpen = false,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    const lectures = section?.lectures ?? []
    const lectureCount = section?.lectureCount ?? lectures.length

    const totalDuration = lectures.reduce(
        (total, lecture) => total + (Number(lecture?.duration) || 0),
        0
    )

    const handleToggle = () => {
        setIsOpen((current) => !current)
    }

    return (
        <div className="border-b border-border-subtle last:border-b-0">
            {/* Section header */}
            <button
                type="button"
                onClick={handleToggle}
                aria-expanded={isOpen}
                className="group flex w-full cursor-pointer items-center gap-3.5 px-4 py-4 text-left transition-colors duration-200 hover:bg-background-elevated/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-primary sm:px-5 sm:py-4.5"
            >
                {/* Number */}
                <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-body text-[10px] font-bold tracking-wide transition-colors duration-200 ${
                        isOpen
                            ? "border border-accent-primary/25 bg-accent-primary/10 text-accent-primary"
                            : "border border-border-subtle bg-background-elevated text-text-muted"
                    }`}
                >
                    {String(sectionNumber).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1">
                    <div className="flex min-w-0 items-center gap-2">
                        <h3 className="truncate font-accent text-sm font-semibold text-text-primary sm:text-[15px]">
                            {section?.title ?? "Untitled section"}
                        </h3>

                        {isOpen && (
                            <span className="hidden shrink-0 rounded-full bg-accent-primary/10 px-2 py-0.5 font-body text-[9px] font-semibold uppercase tracking-wider text-accent-primary sm:inline-flex">
                                Open
                            </span>
                        )}
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-[10px] text-text-muted sm:text-[11px]">
                        <span className="inline-flex items-center gap-1.5">
                            <PlayCircle size={12} />
                            {lectureCount}{" "}
                            {lectureCount === 1 ? "lecture" : "lectures"}
                        </span>

                        <span className="h-3 w-px bg-border-subtle" />

                        <span className="inline-flex items-center gap-1.5">
                            <Clock3 size={12} />

                            {formatDuration(totalDuration)}
                        </span>
                    </div>
                </div>

                {/* Chevron */}
                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isOpen
                            ? "bg-background-elevated text-text-primary"
                            : "text-text-muted group-hover:bg-background-elevated"
                    }`}
                >
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </span>
            </button>

            {/* Lectures */}
            {isOpen && (
                <div className="border-t border-border-subtle bg-background-base/30 px-2 py-2 sm:px-3 sm:py-2.5">
                    {lectures.length > 0 ? (
                        <div className="divide-y divide-border-subtle/60">
                            {lectures.map((lecture, index) => (
                                <CourseLecture
                                    key={
                                        lecture?._id ??
                                        lecture?.id ??
                                        `${section?._id}-${index}`
                                    }
                                    lecture={lecture}
                                    lectureNumber={index + 1}
                                    onPreview={onPreviewLecture}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="px-3 py-7 text-center">
                            <p className="font-body text-xs text-text-muted">
                                No lectures available in this section.
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CourseSection
