import { Maximize2, X } from "lucide-react"
import { useEffect } from "react"

import VideoPlayer from "../../../../../components/video/VideoPlaye"

const CoursePreviewModal = ({ lecture, onClose }) => {
    useEffect(() => {
        if (!lecture) {
            return undefined
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose?.()
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = previousOverflow
        }
    }, [lecture, onClose])

    if (!lecture) {
        return null
    }

    const videoUrl = lecture?.video?.url

    if (!videoUrl) {
        return null
    }

    return (
        <div
            className="
                fixed
                inset-0
                z-100
                flex
                items-center
                justify-center

                bg-black/80
                p-4
                backdrop-blur-sm
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-preview-title"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose?.()
                }
            }}
        >
            <div
                className="
                    w-full
                    max-w-5xl
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border-subtle
                    bg-background-elevated
                    shadow-2xl
                "
            >
                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        border-b
                        border-border-subtle
                        px-4
                        py-3

                        sm:px-5
                    "
                >
                    <div className="min-w-0">
                        <p
                            className="
                                font-body
                                text-xs
                                text-accent-secondary
                            "
                        >
                            Course Preview
                        </p>

                        <h2
                            id="course-preview-title"
                            className="
                                truncate
                                font-accent
                                text-base
                                font-semibold
                                text-text-primary
                            "
                        >
                            {lecture?.title ?? "Lecture preview"}
                        </h2>
                    </div>

                    <button
                        type="button"
                        aria-label="Close preview"
                        onClick={onClose}
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-lg
                            text-text-muted
                            transition-colors

                            hover:bg-background-surface
                            hover:text-text-primary
                        "
                    >
                        <X size={19} />
                    </button>
                </div>

                {/* Video */}

                <div className="bg-black">
                    <VideoPlayer
                        src={videoUrl}
                        poster={lecture?.video?.thumbnailUrl}
                        controls
                        autoplay
                        preload="metadata"
                        className="w-full"
                    />
                </div>

                {/* Footer */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        px-4
                        py-3

                        sm:px-5
                    "
                >
                    <p
                        className="
                            font-body
                            text-xs
                            text-text-muted
                        "
                    >
                        Preview lecture
                    </p>

                    <Maximize2 size={15} className="text-text-muted" />
                </div>
            </div>
        </div>
    )
}

export default CoursePreviewModal
