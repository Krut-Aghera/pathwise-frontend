import {
    FileVideo,
    Upload,
    Trash2,
} from "lucide-react"

import Button
    from "../../../../components/ui/Button.jsx"


const LectureVideoUpload = ({
    video = null,
    onUpload,
    onRemove,
    isUploading = false,
    isRemoving = false,
}) => {

    ///////////////////////////////////////////////////////////////
    // Loading

    const isLoading =
        isUploading ||
        isRemoving


    ///////////////////////////////////////////////////////////////
    // Select video

    const handleFileChange = async (event) => {

        const file =
            event.target.files?.[0]


        if (!file) {
            return
        }


        await onUpload?.(file)


        // Allow selecting the same file again
        event.target.value = ""
    }


    ///////////////////////////////////////////////////////////////
    // Remove video

    const handleRemove = async () => {

        if (!video || isLoading) {
            return
        }


        const confirmed =
            window.confirm(
                "Are you sure you want to remove this lecture video?"
            )


        if (!confirmed) {
            return
        }


        await onRemove?.()
    }


    ///////////////////////////////////////////////////////////////
    // Video information

    const hasVideo =
        Boolean(video)


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
                mb-6
            ">

                <h2 className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                ">
                    Lecture Video
                </h2>

                <p className="
                    mt-1

                    font-body
                    text-sm
                    leading-5
                    text-text-secondary
                ">
                    Upload the video students will watch for this lecture.
                </p>

            </div>


            {/* Current video */}

            {hasVideo ? (

                <div className="
                    rounded-lg
                    border
                    border-border-subtle
                    bg-background-elevated
                    p-4
                ">

                    {/* Video preview */}

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
                            poster={video.thumbnailUrl || undefined}
                            src={video.url}
                            className="
                                aspect-video
                                w-full
                                bg-background-base
                            "
                        />

                    </div>


                    {/* Video information */}

                    <div className="
                        mt-4
                        flex
                        flex-col
                        gap-4

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    ">

                        <div className="
                            flex
                            min-w-0
                            items-start
                            gap-3
                        ">

                            <span className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center

                                rounded-lg

                                bg-accent-primary/10
                                text-accent-primary
                            ">

                                <FileVideo size={17} />

                            </span>


                            <div className="min-w-0">

                                <p className="
                                    font-body
                                    text-sm
                                    font-medium
                                    text-text-primary
                                ">
                                    Video uploaded
                                </p>

                                <p className="
                                    mt-0.5
                                    font-body
                                    text-xs
                                    text-text-muted
                                ">

                                    {video.duration
                                        ? `${Math.floor(video.duration / 60)}:${String(
                                            Math.floor(video.duration % 60)
                                        ).padStart(2, "0")}`
                                        : "Duration unavailable"
                                    }

                                    {video.format
                                        ? ` • ${video.format.toUpperCase()}`
                                        : ""
                                    }

                                </p>

                            </div>

                        </div>


                        {/* Remove */}

                        <Button
                            type="button"
                            onClick={handleRemove}
                            loading={isRemoving}
                            disabled={isLoading}
                            className="
                                w-full

                                border
                                border-status-danger/30

                                bg-status-danger/10
                                text-status-danger

                                hover:bg-status-danger/15

                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-status-danger/30
                                focus-visible:ring-offset-2

                                sm:w-auto
                            "
                        >

                            <Trash2 size={15} />

                            Remove Video

                        </Button>

                    </div>

                </div>

            ) : (

                /* Empty video state */

                <div className="
                    rounded-lg
                    border
                    border-dashed
                    border-border-subtle
                    bg-background-elevated

                    px-5
                    py-10

                    text-center
                ">

                    <span className="
                        mx-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-xl

                        bg-accent-primary/10
                        text-accent-primary
                    ">

                        <FileVideo size={22} />

                    </span>


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
                        mx-auto
                        mt-1
                        max-w-md

                        font-body
                        text-xs
                        leading-5
                        text-text-muted
                    ">
                        Upload a video to make this lecture ready
                        for publishing.
                    </p>

                </div>

            )}


            {/* Upload */}

            <div className="
                mt-5
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center
                sm:justify-between
            ">

                <div>

                    <p className="
                        font-body
                        text-xs
                        font-medium
                        text-text-secondary
                    ">
                        {hasVideo
                            ? "Replace lecture video"
                            : "Upload lecture video"
                        }
                    </p>

                    <p className="
                        mt-0.5
                        font-body
                        text-[11px]
                        leading-5
                        text-text-muted
                    ">
                        Select the video file from your device.
                    </p>

                </div>


                {/* File input */}

                <label
                    className={`
                        inline-flex
                        w-full
                        cursor-pointer
                        items-center
                        justify-center
                        gap-2

                        rounded-md

                        px-4
                        py-2.5

                        font-body
                        text-sm
                        font-semibold

                        transition-all
                        duration-200

                        sm:w-auto

                        ${
                            isLoading
                                ? `
                                    cursor-not-allowed
                                    opacity-50
                                `
                                : `
                                    bg-accent-primary
                                    text-background-base
                                    hover:opacity-90
                                `
                        }
                    `}
                >

                    <Upload size={15} />

                    {isUploading
                        ? "Uploading..."
                        : hasVideo
                            ? "Replace Video"
                            : "Upload Video"
                    }


                    <input
                        type="file"
                        accept="video/*"
                        disabled={isLoading}
                        onChange={handleFileChange}
                        className="sr-only"
                    />

                </label>

            </div>

        </section>
    )
}


export default LectureVideoUpload
