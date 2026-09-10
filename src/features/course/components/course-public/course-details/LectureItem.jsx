import { LockKeyhole, Play, PlayCircle } from "lucide-react"

import formatDuration from "../../../../../utils/format-media-duration"

const LectureItem = ({ lecture, lectureNumber, onPreview }) => {
    const isPreviewAvailable =
        lecture?.isPreviewFree === true && Boolean(lecture?.video?.url)

    const handlePreview = () => {
        if (!isPreviewAvailable) {
            return
        }

        onPreview?.(lecture)
    }

    return (
        <div className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-background-elevated/60">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-subtle bg-background-elevated text-text-muted">
                {isPreviewAvailable ? (
                    <PlayCircle
                        size={15}
                        className="text-accent-secondary"
                    />
                ) : (
                    <LockKeyhole size={14} />
                )}
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-center gap-2">
                    <span className="shrink-0 font-body text-[10px] font-medium text-text-muted">
                        {String(lectureNumber).padStart(2, "0")}
                    </span>

                    <h4 className="truncate font-body text-sm font-medium text-text-primary">
                        {lecture?.title ?? "Untitled lecture"}
                    </h4>
                </div>

                <div className="mt-1 flex items-center gap-2">
                    <span className="font-body text-[11px] text-text-muted">
                        {formatDuration(lecture?.duration)}
                    </span>

                    {isPreviewAvailable && (
                        <span className="inline-flex items-center gap-1 font-body text-[10px] font-medium text-accent-secondary">
                            <Play size={9} className="fill-current" />
                            Preview available
                        </span>
                    )}
                </div>
            </div>

            {isPreviewAvailable ? (
                <button
                    type="button"
                    onClick={handlePreview}
                    aria-label={`Preview ${lecture?.title ?? "lecture"}`}
                    className="shrink-0 cursor-pointer rounded-md border border-accent-secondary/20 bg-accent-secondary/10 px-2.5 py-1.5 font-body text-[10px] font-semibold text-accent-secondary transition-colors duration-200 hover:border-accent-secondary/40 hover:bg-accent-secondary/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary/50"
                >
                    Preview
                </button>
            ) : (
                <LockKeyhole
                    size={14}
                    className="shrink-0 text-text-muted"
                    aria-hidden="true"
                />
            )}
        </div>
    )
}

export default LectureItem
