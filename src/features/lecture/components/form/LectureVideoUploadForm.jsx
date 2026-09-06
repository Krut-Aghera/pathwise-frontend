import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FileVideo, X } from "lucide-react"

import formatFileSize from "../../../../utils/format-media-size"
import VideoPlayer from "../../../../components/video/VideoPlaye"

import FormActions from "../../../../components/form/FormActions"
import LectureFormVideoUploadField from "../form-children/LectureFormVideoUploadField"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const LectureVideoUploadForm = ({
    lecture,
    onSubmit,
    onCancel,
    loading = false,
    validationRules,
}) => {
    const {
        register,
        handleSubmit,
        watch,
        resetField,
        formState: { errors },
    } = useForm({
        defaultValues: {
            video: null,
        },

        mode: "onChange",
        shouldFocusError: true,
    })

    // Selected video
    const selectedVideo = watch("video")?.[0] || null

    // Preview URL
    const [previewUrl, setPreviewUrl] = useState(null)

    // Local error
    const [error, setError] = useState(null)

    // Upload waiting message
    const [uploadMessageIndex, setUploadMessageIndex] = useState(0)

    // Existing video
    const hasExistingVideo = Boolean(lecture?.video?.url)

    // Upload waiting messages
    const uploadMessages = [
        "Uploading video...",
        "Processing video...",
        "Almost there...",
        "Please wait...",
    ]

    // Cycle upload waiting messages
    useEffect(() => {
        if (!loading) {
            setUploadMessageIndex(0)

            return
        }

        const interval = setInterval(() => {
            setUploadMessageIndex(
                (currentIndex) => (currentIndex + 1) % uploadMessages.length
            )
        }, 2500)

        return () => {
            clearInterval(interval)
        }
    }, [loading])

    // Create preview URL
    useEffect(() => {
        if (!selectedVideo) {
            setPreviewUrl(null)
            return
        }

        const url = URL.createObjectURL(selectedVideo)

        setPreviewUrl(url)

        return () => {
            URL.revokeObjectURL(url)
        }
    }, [selectedVideo])

    // Submit
    const handleFormSubmit = async (data) => {
        if (loading) {
            return
        }

        setError(null)

        if (hasExistingVideo) {
            setError(
                "This lecture already has a video. Remove the existing video before uploading another one."
            )

            return
        }

        const video = data.video?.[0]

        if (!video) {
            return
        }

        await onSubmit?.(video)
    }

    // Remove selected video
    const handleRemoveSelectedVideo = () => {
        if (loading) {
            return
        }

        resetField("video", {
            defaultValue: null,
        })

        setError(null)
    }

    // Cancel
    const handleCancel = () => {
        if (loading) {
            return
        }

        onCancel?.()
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Render

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}

            noValidate

            className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface

                p-5

                sm:p-6
            "
        >
            {/* Lecture information */}

            <div
                className="
                mb-6

                rounded-lg
                border
                border-border-subtle

                bg-background-elevated

                px-4
                py-3
            "
            >
                <p
                    className="
                    font-body
                    text-xs
                    font-medium
                    text-text-muted
                "
                >
                    Lecture
                </p>

                <p
                    className="
                    mt-1

                    font-accent
                    text-sm
                    font-semibold
                    text-text-primary
                "
                >
                    {lecture?.title || "Untitled Lecture"}
                </p>
            </div>

            {/* Existing video warning */}

            {hasExistingVideo && (
                <div
                    className="
                    mb-5

                    rounded-lg
                    border
                    border-status-danger/30

                    bg-status-danger/10

                    px-4
                    py-3
                "
                >
                    <p
                        className="
                        font-body
                        text-sm
                        font-medium
                        text-status-danger
                    "
                    >
                        This lecture already has a video.
                    </p>

                    <p
                        className="
                        mt-1

                        font-body
                        text-xs
                        leading-5
                        text-status-danger/80
                    "
                    >
                        Remove the existing video from the lecture details page
                        before uploading a new one.
                    </p>
                </div>
            )}

            {/* Video field */}

            {!selectedVideo && (
                <LectureFormVideoUploadField
                    register={register}
                    errors={errors}
                    validationRules={validationRules}
                />
            )}

            {/* Selected video */}

            {selectedVideo && previewUrl && (
                <div
                    className="
                    rounded-lg
                    border
                    border-border-subtle

                    bg-background-elevated

                    p-4
                "
                >
                    {/* Preview */}

                    <div
                        className="
                        overflow-hidden
                        rounded-lg

                        border
                        border-border-subtle

                        bg-background-base
                    "
                    >
                        <VideoPlayer src={previewUrl} />
                    </div>

                    {/* Validation error */}

                    {errors.video?.message && (
                        <div
                            role="alert"
                            className="
                                mt-4

                                rounded-lg
                                border
                                border-status-danger/30

                                bg-status-danger/10

                                px-4
                                py-3
                            "
                        >
                            <p
                                className="
                                font-body
                                text-sm
                                font-medium
                                text-status-danger
                            "
                            >
                                {errors.video.message}
                            </p>
                        </div>
                    )}

                    {/* File information */}

                    <div
                        className="
                        mt-4

                        flex
                        flex-col
                        gap-4

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                    >
                        <div
                            className="
                            flex
                            min-w-0
                            items-center
                            gap-3
                        "
                        >
                            <div
                                className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center

                                rounded-lg

                                bg-accent-primary/10
                                text-accent-primary
                            "
                            >
                                <FileVideo size={17} />
                            </div>

                            <div className="min-w-0">
                                <p
                                    className="
                                    truncate

                                    font-body
                                    text-sm
                                    font-medium
                                    text-text-primary
                                "
                                >
                                    {selectedVideo.name}
                                </p>

                                <p
                                    className="
                                    mt-0.5

                                    font-body
                                    text-xs
                                    text-text-muted
                                "
                                >
                                    {formatFileSize(selectedVideo.size)}
                                </p>
                            </div>
                        </div>

                        {/* Remove selection */}

                        <button
                            type="button"
                            onClick={handleRemoveSelectedVideo}
                            disabled={loading}
                            className="
                                inline-flex
                                shrink-0
                                items-center
                                justify-center
                                gap-2

                                rounded-md

                                border
                                border-border-subtle

                                bg-background-surface

                                px-3
                                py-2

                                font-body
                                text-xs
                                font-medium
                                text-text-secondary

                                transition-all
                                duration-200

                                hover:border-text-muted
                                hover:text-text-primary

                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >
                            <X size={14} />
                            Remove
                        </button>
                    </div>

                    {/* Upload waiting state */}

                    {loading && (
                        <div
                            className="
                            mt-4

                            rounded-lg
                            border
                            border-accent-secondary/20
                            bg-accent-secondary/5

                            px-4
                            py-2
                        "
                        >
                            <div
                                className="
                                flex
                                items-center
                                gap-3
                            "
                            >
                                {/* Spinner */}

                                <div
                                    className="
                                    h-5
                                    w-5
                                    shrink-0

                                    animate-spin

                                    rounded-full

                                    border-2
                                    border-accent-secondary/20
                                    border-t-accent-secondary
                                "
                                />

                                {/* Message */}

                                <div>
                                    <p
                                        className="
                                        font-body
                                        text-sm
                                        font-medium
                                        text-text-primary
                                    "
                                    >
                                        {uploadMessages[uploadMessageIndex]}
                                    </p>

                                    <p
                                        className="
                                        mt-1

                                        font-body
                                        text-xs
                                        leading-5
                                        text-text-muted
                                    "
                                    >
                                        Please keep this page open until the
                                        upload is complete.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Local error */}

            {error && (
                <div
                    className="
                    mt-5

                    rounded-lg
                    border
                    border-status-danger/30

                    bg-status-danger/10

                    px-4
                    py-3
                "
                >
                    <p
                        className="
                        font-body
                        text-sm
                        font-medium
                        text-status-danger
                    "
                    >
                        {error}
                    </p>
                </div>
            )}

            {/* Actions */}

            <div className="mt-6">
                <FormActions
                    onCancel={handleCancel}
                    loading={loading}
                    disabled={
                        hasExistingVideo ||
                        !selectedVideo ||
                        Boolean(errors.video)
                    }
                    submitLabel="Upload Video"
                />
            </div>
        </form>
    )
}

export default LectureVideoUploadForm
