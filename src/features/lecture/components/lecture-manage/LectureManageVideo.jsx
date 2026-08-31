import {
    FileVideo,
    Upload,
    Trash2,
} from "lucide-react"

import Button
    from "../../../../components/ui/Button.jsx"


const LectureManageVideo = ({
    lecture,
    onUploadVideo,
    onRemoveVideo,
    uploading = false,
    removing = false,
}) => {

    ///////////////////////////////////////////////////////////////
    // Video

    const video =
        lecture?.video ?? null


    const hasVideo =
        Boolean(video?.url)


    ///////////////////////////////////////////////////////////////
    // Loading

    const isLoading =
        uploading ||
        removing


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <section className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            p-5

            sm:p-6
        ">

            {/* Header */}

            <div className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center
                sm:justify-between
            ">

                <div>

                    <div className="
                        flex
                        items-center
                        gap-2
                    ">

                        <FileVideo
                            size={18}
                            className="text-accent-primary"
                        />

                        <h2 className="
                            font-accent
                            text-lg
                            font-semibold
                            text-text-primary
                        ">
                            Lecture Video
                        </h2>

                    </div>


                    <p className="
                        mt-1
                        font-body
                        text-xs
                        leading-5
                        text-text-muted
                    ">
                        Upload the video students will watch for this lecture.
                    </p>

                </div>


                {/* Actions */}

                <div className="
                    flex
                    w-full
                    flex-col
                    gap-2

                    sm:w-auto
                    sm:flex-row
                ">

                    <Button
                        type="button"
                        onClick={onUploadVideo}
                        disabled={isLoading}
                        loading={uploading}
                        className="
                            w-full
                            sm:w-auto
                        "
                    >

                        <Upload size={15} />

                        {hasVideo
                            ? "Replace Video"
                            : "Upload Video"}

                    </Button>


                    {hasVideo && (

                        <Button
                            type="button"
                            onClick={onRemoveVideo}
                            disabled={isLoading}
                            loading={removing}
                            className="
                                w-full

                                border
                                border-status-danger/30

                                bg-status-danger/10
                                text-status-danger

                                hover:border-status-danger/50
                                hover:bg-status-danger/15

                                sm:w-auto
                            "
                        >

                            <Trash2 size={15} />

                            Remove Video

                        </Button>

                    )}

                </div>

            </div>


            {/* Video */}

            <div className="mt-5">

                {hasVideo ? (

                    <div className="
                        overflow-hidden
                        rounded-lg
                        border
                        border-border-subtle
                        bg-background-base
                    ">

                        <video
                            controls
                            preload="metadata"
                            src={video.url}
                            poster={video.thumbnailUrl || undefined}
                            className="
                                aspect-video
                                w-full
                                bg-black
                                object-contain
                            "
                        />

                    </div>

                ) : (

                    <div className="
                        flex
                        min-h-56
                        flex-col
                        items-center
                        justify-center

                        rounded-lg
                        border
                        border-dashed
                        border-border-subtle

                        bg-background-elevated

                        px-5
                        py-10

                        text-center
                    ">

                        <div className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center

                            rounded-full

                            bg-accent-primary/10
                            text-accent-primary
                        ">

                            <FileVideo size={22} />

                        </div>


                        <h3 className="
                            mt-4

                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        ">
                            No video uploaded
                        </h3>


                        <p className="
                            mt-1
                            max-w-sm

                            font-body
                            text-xs
                            leading-5
                            text-text-muted
                        ">
                            Upload a video to make this lecture ready
                            for students.
                        </p>

                    </div>

                )}

            </div>


            {/* Video metadata */}

            {hasVideo && (

                <div className="
                    mt-4

                    flex
                    flex-wrap
                    gap-x-5
                    gap-y-2

                    font-body
                    text-xs
                    text-text-muted
                ">

                    {video.format && (
                        <span>
                            Format:{" "}
                            <span className="font-medium text-text-secondary">
                                {video.format.toUpperCase()}
                            </span>
                        </span>
                    )}


                    {video.width && video.height && (
                        <span>
                            Resolution:{" "}
                            <span className="font-medium text-text-secondary">
                                {video.width} × {video.height}
                            </span>
                        </span>
                    )}


                    {video.fileSize !== undefined &&
                        video.fileSize !== null && (
                            <span>
                                Size:{" "}
                                <span className="font-medium text-text-secondary">
                                    {formatFileSize(video.fileSize)}
                                </span>
                            </span>
                        )}

                </div>

            )}

        </section>
    )
}


///////////////////////////////////////////////////////////////
// File size formatting

const formatFileSize = (bytes) => {

    const size =
        Number(bytes)


    if (
        !Number.isFinite(size) ||
        size < 0
    ) {
        return "Unknown"
    }


    if (size === 0) {
        return "0 Bytes"
    }


    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB",
    ]


    const exponent =
        Math.min(
            Math.floor(
                Math.log(size) / Math.log(1024)
            ),
            units.length - 1
        )


    const value =
        size /
        Math.pow(
            1024,
            exponent
        )


    return `${value.toFixed(exponent === 0 ? 0 : 1)} ${units[exponent]}`
}


export default LectureManageVideo
