import { LockKeyhole, Play, PlayCircle } from "lucide-react"

import formatDuration from "../../../../../utils/format-media-duration.js"

const CourseLecture = ({ lecture, lectureNumber, onPreview }) => {
    const isPreviewAvailable =
        lecture?.isPreviewFree === true && Boolean(lecture?.video?.url)

    const handlePreview = () => {
        if (!isPreviewAvailable) {
            return
        }

        onPreview?.(lecture)
    }

    return (
        <div
            className={`group flex items-center gap-3 rounded-xl px-2.5 py-3 m-3 transition-all duration-200 sm:px-3 ${
                isPreviewAvailable
                    ? "hover:bg-accent-secondary/4"
                    : "hover:bg-background-elevated/40"
            }`}
        >
            {/* Lecture icon */}
            <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 ${
                    isPreviewAvailable
                        ? "border-accent-secondary/20 bg-accent-secondary/10 text-accent-secondary"
                        : "border-border-subtle bg-background-elevated text-text-muted"
                }`}
            >
                {isPreviewAvailable ? (
                    <PlayCircle size={15} />
                ) : (
                    <LockKeyhole size={13} />
                )}
            </div>

            {/* Lecture content */}
            <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-center gap-2">
                    <span className="shrink-0 font-body text-[9px] font-semibold tracking-wide text-text-muted">
                        {String(lectureNumber).padStart(2, "0")}
                    </span>

                    <h4 className="truncate font-body text-xs font-medium text-text-primary sm:text-sm">
                        {lecture?.title ?? "Untitled lecture"}
                    </h4>
                </div>

                <div className="mt-1 flex items-center gap-2.5">
                    <span className="font-body text-[10px] text-text-muted">
                        {formatDuration(lecture?.duration)}
                    </span>

                    {isPreviewAvailable && (
                        <>
                            <span className="h-2.5 w-px bg-border-subtle" />

                            <span className="inline-flex items-center gap-1 font-body text-[9px] font-semibold text-accent-secondary">
                                <Play size={8} className="fill-current" />
                                Free preview
                            </span>
                        </>
                    )}
                </div>
            </div>

            {/* Action */}
            {isPreviewAvailable ? (
                <button
                    type="button"
                    onClick={handlePreview}
                    aria-label={`Preview ${lecture?.title ?? "lecture"}`}
                    className="shrink-0 cursor-pointer rounded-lg border border-accent-secondary/20 bg-accent-secondary/10 px-2.5 py-1.5 font-body text-[9px] font-semibold text-accent-secondary opacity-90 transition-all duration-200 hover:border-accent-secondary/40 hover:bg-accent-secondary/15 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary/50 sm:px-3 sm:text-[10px]"
                >
                    Preview
                </button>
            ) : (
                <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-text-muted"
                    aria-label="Locked lecture"
                >
                    <LockKeyhole size={13} aria-hidden="true" />
                </div>
            )}
        </div>
    )
}

export default CourseLecture
