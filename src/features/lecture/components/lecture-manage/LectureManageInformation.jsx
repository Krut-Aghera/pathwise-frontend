import {
    Clock3,
    Eye,
    FileVideo,
    Hash,
    Lock,
    Video,
} from "lucide-react"

import {
    RESOURCE_STATUS,
} from "../../../../constants/resourceConstants.js"


const formatDuration = (seconds) => {

    if (
        seconds === null ||
        seconds === undefined ||
        Number.isNaN(Number(seconds))
    ) {
        return "Not available"
    }


    const totalSeconds =
        Math.max(
            0,
            Math.floor(Number(seconds))
        )


    const hours =
        Math.floor(
            totalSeconds / 3600
        )


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        )


    const remainingSeconds =
        totalSeconds % 60


    if (hours > 0) {

        return [
            hours,
            String(minutes).padStart(2, "0"),
            String(remainingSeconds).padStart(2, "0"),
        ].join(":")

    }


    return [
        minutes,
        String(remainingSeconds).padStart(2, "0"),
    ].join(":")
}


const LectureManageInformation = ({
    lecture,
}) => {

    ///////////////////////////////////////////////////////////////
    // Guard

    if (!lecture) {
        return null
    }


    ///////////////////////////////////////////////////////////////
    // Status

    const isPublished =
        lecture.status === RESOURCE_STATUS.PUBLISHED


    ///////////////////////////////////////////////////////////////
    // Preview

    const isPreviewFree =
        lecture.isPreviewFree === true


    ///////////////////////////////////////////////////////////////
    // Video

    const hasVideo =
        Boolean(lecture.video)


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <section className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            px-5
            py-5

            sm:px-6
            sm:py-6
        ">

            {/* Header */}

            <div className="
                flex
                items-center
                gap-2
            ">

                <FileVideo
                    size={17}
                    className="text-accent-primary"
                />

                <h2 className="
                    font-accent
                    text-base
                    font-semibold
                    text-text-primary
                ">
                    Lecture Information
                </h2>

            </div>


            {/* Information */}

            <div className="
                mt-5

                divide-y
                divide-border-subtle

                rounded-lg
                border
                border-border-subtle
            ">

                {/* Order */}

                <div className="
                    flex
                    items-center
                    justify-between
                    gap-4

                    px-4
                    py-3.5
                ">

                    <div className="
                        flex
                        items-center
                        gap-2.5
                    ">

                        <Hash
                            size={15}
                            className="text-text-muted"
                        />

                        <span className="
                            font-body
                            text-sm
                            text-text-secondary
                        ">
                            Lecture Order
                        </span>

                    </div>


                    <span className="
                        font-body
                        text-sm
                        font-semibold
                        text-text-primary
                    ">
                        {lecture.order ?? "—"}
                    </span>

                </div>


                {/* Status */}

                <div className="
                    flex
                    items-center
                    justify-between
                    gap-4

                    px-4
                    py-3.5
                ">

                    <div className="
                        flex
                        items-center
                        gap-2.5
                    ">

                        <Video
                            size={15}
                            className="text-text-muted"
                        />

                        <span className="
                            font-body
                            text-sm
                            text-text-secondary
                        ">
                            Status
                        </span>

                    </div>


                    <span className={`
                        font-body
                        text-sm
                        font-semibold

                        ${
                            isPublished
                                ? "text-status-success"
                                : "text-status-warning"
                        }
                    `}>
                        {
                            isPublished
                                ? "Published"
                                : "Draft"
                        }
                    </span>

                </div>


                {/* Preview */}

                <div className="
                    flex
                    items-center
                    justify-between
                    gap-4

                    px-4
                    py-3.5
                ">

                    <div className="
                        flex
                        items-center
                        gap-2.5
                    ">

                        {isPreviewFree ? (
                            <Eye
                                size={15}
                                className="text-text-muted"
                            />
                        ) : (
                            <Lock
                                size={15}
                                className="text-text-muted"
                            />
                        )}

                        <span className="
                            font-body
                            text-sm
                            text-text-secondary
                        ">
                            Student Preview
                        </span>

                    </div>


                    <span className="
                        font-body
                        text-sm
                        font-semibold
                        text-text-primary
                    ">
                        {
                            isPreviewFree
                                ? "Available"
                                : "Locked"
                        }
                    </span>

                </div>


                {/* Video */}

                <div className="
                    flex
                    items-center
                    justify-between
                    gap-4

                    px-4
                    py-3.5
                ">

                    <div className="
                        flex
                        items-center
                        gap-2.5
                    ">

                        <FileVideo
                            size={15}
                            className="text-text-muted"
                        />

                        <span className="
                            font-body
                            text-sm
                            text-text-secondary
                        ">
                            Video
                        </span>

                    </div>


                    <span className={`
                        font-body
                        text-sm
                        font-semibold

                        ${
                            hasVideo
                                ? "text-status-success"
                                : "text-status-warning"
                        }
                    `}>
                        {
                            hasVideo
                                ? "Uploaded"
                                : "Not uploaded"
                        }
                    </span>

                </div>


                {/* Duration */}

                {hasVideo && (

                    <div className="
                        flex
                        items-center
                        justify-between
                        gap-4

                        px-4
                        py-3.5
                    ">

                        <div className="
                            flex
                            items-center
                            gap-2.5
                        ">

                            <Clock3
                                size={15}
                                className="text-text-muted"
                            />

                            <span className="
                                font-body
                                text-sm
                                text-text-secondary
                            ">
                                Video Duration
                            </span>

                        </div>


                        <span className="
                            font-body
                            text-sm
                            font-semibold
                            text-text-primary
                        ">
                            {formatDuration(
                                lecture.video?.duration
                            )}
                        </span>

                    </div>

                )}

            </div>

        </section>
    )
}


export default LectureManageInformation
