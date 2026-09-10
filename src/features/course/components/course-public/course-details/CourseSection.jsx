import { ChevronDown, Clock3, PlayCircle } from "lucide-react"
import { useState } from "react"

import formatDuration from "../../../../../utils/format-media-duration.js"

import LectureItem from "./LectureItem.jsx"

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
            <button
                type="button"
                onClick={handleToggle}
                aria-expanded={isOpen}
                className="group flex w-full cursor-pointer items-center gap-3 px-4 py-4 text-left transition-colors duration-200 hover:bg-background-elevated/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-primary sm:px-5"
            >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-primary/20 bg-accent-primary/10 font-accent text-sm font-semibold text-accent-primary">
                    {String(sectionNumber).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="truncate font-accent text-sm font-semibold text-text-primary sm:text-base">
                        {section?.title ?? "Untitled section"}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-[11px] text-text-muted">
                        <span className="flex items-center gap-1.5">
                            <PlayCircle size={12} />
                            {lectureCount}{" "}
                            {lectureCount === 1 ? "lecture" : "lectures"}
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Clock3 size={12} />
                            {formatDuration(totalDuration)}
                        </span>
                    </div>
                </div>

                <ChevronDown
                    size={18}
                    className={`shrink-0 text-text-muted transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-text-primary" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="border-t border-border-subtle bg-background-base/40 px-3 py-2 sm:px-4">
                    {lectures.length > 0 ? (
                        <div>
                            {lectures.map((lecture, index) => (
                                <LectureItem
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
                        <div className="px-3 py-6 text-center">
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
