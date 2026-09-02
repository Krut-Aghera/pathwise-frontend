import { Clock3, Eye, FileVideo, Hash, Lock, Video } from "lucide-react"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"

const formatDuration = (seconds) => {
    if (
        seconds === null ||
        seconds === undefined ||
        Number.isNaN(Number(seconds))
    ) {
        return "Not available"
    }

    const totalSeconds = Math.max(0, Math.floor(Number(seconds)))

    const hours = Math.floor(totalSeconds / 3600)

    const minutes = Math.floor((totalSeconds % 3600) / 60)

    const remainingSeconds = totalSeconds % 60

    if (hours > 0) {
        return [
            hours,
            String(minutes).padStart(2, "0"),
            String(remainingSeconds).padStart(2, "0"),
        ].join(":")
    }

    return [minutes, String(remainingSeconds).padStart(2, "0")].join(":")
}

const LectureManageInformation = ({ lecture }) => {
    ///////////////////////////////////////////////////////////////
    // Guard

    if (!lecture) {
        return null
    }

    ///////////////////////////////////////////////////////////////
    // Status

    const isPublished = lecture.status === RESOURCE_STATUS.PUBLISHED

    ///////////////////////////////////////////////////////////////
    // Preview

    const isPreviewFree = lecture.isPreviewFree === true

    ///////////////////////////////////////////////////////////////
    // Video

    const hasVideo = Boolean(lecture.video?.url)

    ///////////////////////////////////////////////////////////////
    // Information items

    const information = [
        {
            label: "Order",
            value: lecture.order ?? "—",
            icon: Hash,
        },
        {
            label: "Status",
            value: isPublished ? "Published" : "Draft",
            icon: Video,
            valueClass: isPublished
                ? "text-status-success"
                : "text-status-warning",
        },
        {
            label: "Preview",
            value: isPreviewFree ? "Available" : "Locked",
            icon: isPreviewFree ? Eye : Lock,
        },
        {
            label: "Video",
            value: hasVideo ? "Uploaded" : "Not uploaded",
            icon: FileVideo,
            valueClass: hasVideo
                ? "text-status-success"
                : "text-status-warning",
        },
        ...(hasVideo
            ? [
                  {
                      label: "Duration",
                      value: formatDuration(lecture.video?.duration),
                      icon: Clock3,
                  },
              ]
            : []),
    ]

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <section
            className="
            rounded-xl
            border
            border-border-subtle

            bg-background-surface

            px-5
            py-4

            sm:px-6
        "
        >
            <div
                className="
                flex
                items-center
                justify-between
                gap-4
            "
            >
                <div>
                    <h2
                        className="
                        font-accent
                        text-sm
                        font-semibold
                        text-text-primary
                    "
                    >
                        Lecture Details
                    </h2>

                    <p
                        className="
                        mt-0.5

                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        Quick overview of this lecture.
                    </p>
                </div>
            </div>

            <div
                className="
                mt-4

                grid
                grid-cols-2

                divide-x
                divide-y
                divide-border-subtle

                overflow-hidden

                rounded-lg
                border
                border-border-subtle

                sm:grid-cols-5
                sm:divide-y-0
            "
            >
                {information.map(
                    ({
                        label,
                        value,
                        icon: Icon,
                        valueClass = "text-text-primary",
                    }) => (
                        <div
                            key={label}
                            className="
                                min-w-0

                                px-3
                                py-3.5

                                sm:px-4
                            "
                        >
                            <div
                                className="
                                flex
                                items-center
                                gap-1.5
                            "
                            >
                                <Icon
                                    size={13}
                                    className="
                                        shrink-0
                                        text-text-muted
                                    "
                                />

                                <span
                                    className="
                                    truncate

                                    font-body
                                    text-[11px]
                                    font-medium
                                    text-text-muted
                                "
                                >
                                    {label}
                                </span>
                            </div>

                            <p
                                className={`
                                mt-1.5

                                truncate

                                font-body
                                text-sm
                                font-semibold

                                ${valueClass}
                            `}
                            >
                                {value}
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default LectureManageInformation
