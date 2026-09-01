import {
    useState,
} from "react"

import {
    FileVideo,
    Upload,
    Trash2,
} from "lucide-react"


import VideoPlayer
    from "../../../../components/video/VideoPlaye.jsx"

import Button
    from "../../../../components/ui/Button.jsx"

import ConfirmDialog
    from "../../../../components/ui/ConfirmDialog.jsx"


const LectureManageVideo = ({
    lecture,
    onUploadVideo,
    onRemoveVideo,
    removing = false,
}) => {

    ///////////////////////////////////////////////////////////////
    // Remove dialog

    const [
        isRemoveDialogOpen,
        setIsRemoveDialogOpen,
    ] = useState(false)


    ///////////////////////////////////////////////////////////////
    // Video

    const video =
        lecture?.video ?? null


    const hasVideo =
        Boolean(video?.url)


    ///////////////////////////////////////////////////////////////
    // Open remove dialog

    const handleRemoveVideo = () => {

        if (
            !hasVideo ||
            removing
        ) {
            return
        }


        setIsRemoveDialogOpen(true)
    }


    ///////////////////////////////////////////////////////////////
    // Confirm remove

    const handleConfirmRemoveVideo = async () => {

        if (
            !hasVideo ||
            removing
        ) {
            return
        }


        await onRemoveVideo?.()


        setIsRemoveDialogOpen(false)
    }


    ///////////////////////////////////////////////////////////////
    // Cancel remove

    const handleCancelRemoveVideo = () => {

        if (removing) {
            return
        }


        setIsRemoveDialogOpen(false)
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <>

            <section className="
                overflow-hidden

                rounded-xl
                border
                border-border-subtle

                bg-background-surface
            ">

                {/* Header */}

                <div className="
                    flex
                    flex-col
                    gap-4

                    border-b
                    border-border-subtle

                    px-5
                    py-4

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:px-6
                ">

                    {/* Heading */}

                    <div className="
                        flex
                        min-w-0
                        items-center
                        gap-3
                    ">

                        <div className="
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

                        </div>


                        <div className="min-w-0">

                            <h2 className="
                                font-accent
                                text-base
                                font-semibold
                                text-text-primary
                            ">
                                Lecture Video
                            </h2>

                            <p className="
                                mt-0.5

                                font-body
                                text-xs
                                text-text-muted
                            ">
                                {hasVideo
                                    ? "Video students will watch for this lecture."
                                    : "Upload a video to make this lecture ready."
                                }
                            </p>

                        </div>

                    </div>


                    {/* Actions */}

                    <div className="
                        flex
                        w-full
                        gap-2

                        sm:w-auto
                    ">

                        {!hasVideo && (

                            <Button
                                type="button"
                                onClick={onUploadVideo}
                                disabled={removing}
                                className="
                                    w-full
                                    sm:w-auto
                                "
                            >

                                <Upload size={15} />

                                Upload Video

                            </Button>

                        )}


                        {hasVideo && (

                            <Button
                                type="button"
                                onClick={handleRemoveVideo}
                                loading={removing}
                                disabled={removing}
                                className="
                                    w-full

                                    border
                                    border-status-danger/30

                                    bg-status-danger/10
                                    text-status-danger

                                    hover:border-status-danger/50
                                    hover:bg-status-danger/15

                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-status-danger
                                    focus-visible:ring-offset-2

                                    sm:w-auto
                                "
                            >

                                <Trash2 size={15} />

                                Remove Video

                            </Button>

                        )}

                    </div>

                </div>


                {/* Video content */}

                <div className="p-4 sm:p-5">

                    {hasVideo ? (

                        <div className="
                            overflow-hidden

                            rounded-lg

                            border
                            border-border-subtle

                            bg-background-base
                        ">

                            <VideoPlayer
                                src={video.url}
                                poster={video.thumbnailUrl}
                            />

                        </div>

                    ) : (

                        <div className="
                            flex
                            min-h-64

                            flex-col
                            items-center
                            justify-center

                            rounded-lg

                            border
                            border-dashed
                            border-border-subtle

                            bg-background-elevated

                            px-5
                            py-12

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
                                Upload a video to make this lecture
                                available to students.
                            </p>


                            <Button
                                type="button"
                                onClick={onUploadVideo}
                                disabled={removing}
                                className="mt-5"
                            >

                                <Upload size={15} />

                                Upload Video

                            </Button>

                        </div>

                    )}

                </div>

            </section>


            {/* Remove video confirmation */}

            <ConfirmDialog
                open={isRemoveDialogOpen}

                title="Remove Video"

                message="
                    Are you sure you want to remove this lecture video?
                "

                confirmLabel="Remove Video"

                cancelLabel="Cancel"

                loading={removing}

                onConfirm={handleConfirmRemoveVideo}

                onCancel={handleCancelRemoveVideo}
            >

                <div className="
                    rounded-lg

                    border
                    border-border-subtle

                    bg-background-elevated

                    px-4
                    py-3
                ">

                    <p className="
                        break-words

                        font-body
                        text-sm
                        font-medium
                        text-text-primary
                    ">
                        {lecture?.title}
                    </p>

                </div>


                <p className="
                    mt-4

                    font-body
                    text-xs
                    leading-5
                    text-text-muted
                ">
                    Removing this video will leave the lecture without
                    a video. You can upload a video again later.
                </p>

            </ConfirmDialog>

        </>
    )
}


export default LectureManageVideo