import { useState } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { RESOURCE_STATUS } from "../../../constants/resourceConstants.js"

import LectureManageHeader from "../components/lecture-manage/LectureManageHeader.jsx"

import LectureManageInformation from "../components/lecture-manage/LectureManageInformation.jsx"

import LectureManageVideo from "../components/lecture-manage/LectureManageVideo.jsx"

import LectureManageActions from "../components/lecture-manage/LectureManageActions.jsx"

import ErrorState from "../../../components/ui/ErrorState.jsx"

import LectureDetailsLoadingSkeleton from "../components/lecture-manage/LectureDetailsLoadingSkeleton.jsx"

import useLecture from "../hooks/useLecture.js"

import useLectureVideo from "../hooks/useLectureVideo.js"

import useLectureManagement from "../hooks/useLectureManagement.js"

import useLectureState from "../hooks/useLectureState.js"
import ConfirmDialog from "../../../components/ui/ConfirmDialog.jsx"

const LectureDetailsPage = () => {
    ///////////////////////////////////////////////////////////////
    // Route params

    const { courseId, sectionId, lectureId } = useParams()

    ///////////////////////////////////////////////////////////////
    // Navigation

    const navigate = useNavigate()

    ///////////////////////////////////////////////////////////////
    // Lecture

    const {
        lecture,

        isLectureLoading,
        isLectureError,
        lectureError,

        refetchLecture,
    } = useLecture({
        lectureId,
    })

    ///////////////////////////////////////////////////////////////
    // Lecture management

    const {
        removeLecture,

        isRemoving,
    } = useLectureManagement()

    ///////////////////////////////////////////////////////////////
    // Lecture video

    const {
        removeLectureVideo,

        isRemoving: isRemovingVideo,
    } = useLectureVideo()

    ///////////////////////////////////////////////////////////////
    // Lecture state

    const {
        publishLecture,
        saveLectureAsDraft,

        isPublishing,
        isSavingDraft,
    } = useLectureState()

    ///////////////////////////////////////////////////////////////
    // Remove lecture dialog

    const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false)

    ///////////////////////////////////////////////////////////////
    // Action error

    const [actionError, setActionError] = useState(null)

    ///////////////////////////////////////////////////////////////
    // Loading

    const isLoading = isLectureLoading

    ///////////////////////////////////////////////////////////////
    // Busy

    const isBusy =
        isRemoving || isRemovingVideo || isPublishing || isSavingDraft

    ///////////////////////////////////////////////////////////////
    // Error helper

    const getErrorMessage = (error, fallback) => {
        return error?.errors?.[0]?.message || error?.message || fallback
    }

    ///////////////////////////////////////////////////////////////
    // Clear action error

    const clearActionError = () => {
        setActionError(null)
    }

    ///////////////////////////////////////////////////////////////
    // Back to section

    const handleBack = () => {
        if (!courseId || !sectionId) {
            return
        }

        if (isBusy) {
            return
        }

        navigate(`/instructor/courses/${courseId}/sections/${sectionId}/manage`)
    }

    ///////////////////////////////////////////////////////////////
    // Edit lecture

    const handleEdit = () => {
        if (!courseId || !sectionId || !lectureId || isBusy) {
            return
        }

        clearActionError()

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lectureId}/edit`
        )
    }

    ///////////////////////////////////////////////////////////////
    // Open remove lecture dialog

    const handleRemove = () => {
        if (!lecture?._id || isBusy) {
            return
        }

        clearActionError()

        setIsRemoveDialogOpen(true)
    }

    ///////////////////////////////////////////////////////////////
    // Cancel remove lecture

    const handleCancelRemove = () => {
        if (isRemoving) {
            return
        }

        setIsRemoveDialogOpen(false)
    }

    ///////////////////////////////////////////////////////////////
    // Confirm remove lecture

    const handleConfirmRemove = async () => {
        if (!lecture?._id || !sectionId || isRemoving) {
            return
        }

        clearActionError()

        const result = await removeLecture(lecture._id, sectionId)

        if (!result?.success) {
            setActionError(
                getErrorMessage(result?.error, "Unable to remove this lecture.")
            )

            return
        }

        setIsRemoveDialogOpen(false)

        ///////////////////////////////////////////////////////////
        // Return to section management

        navigate(`/instructor/courses/${courseId}/sections/${sectionId}/manage`)
    }

    ///////////////////////////////////////////////////////////////
    // Upload video

    const handleUploadVideo = () => {
        if (!courseId || !sectionId || !lectureId || isBusy) {
            return
        }

        clearActionError()

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lectureId}/video`
        )
    }

    ///////////////////////////////////////////////////////////////
    // Remove video

    const handleRemoveVideo = async () => {
        if (!lecture?._id || !sectionId || isBusy) {
            return {
                success: false,
            }
        }

        clearActionError()

        const result = await removeLectureVideo(lecture._id, sectionId)

        if (!result?.success) {
            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to remove lecture video."
                )
            )

            return result
        }

        return result
    }

    ///////////////////////////////////////////////////////////////
    // Publish lecture

    const handlePublish = async () => {
        if (
            !lecture?._id ||
            !sectionId ||
            lecture.status !== RESOURCE_STATUS.DRAFT ||
            !lecture.video?.url ||
            isBusy
        ) {
            return
        }

        clearActionError()

        const result = await publishLecture(lecture._id, sectionId)

        if (!result?.success) {
            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to publish this lecture."
                )
            )
        }
    }

    ///////////////////////////////////////////////////////////////
    // Save lecture as draft

    const handleSaveDraft = async () => {
        if (
            !lecture?._id ||
            !sectionId ||
            lecture.status !== RESOURCE_STATUS.PUBLISHED ||
            isBusy
        ) {
            return
        }

        clearActionError()

        const result = await saveLectureAsDraft(lecture._id, sectionId)

        if (!result?.success) {
            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to save this lecture as draft."
                )
            )
        }
    }

    ///////////////////////////////////////////////////////////////
    // Loading state

    if (isLoading) {
        return <LectureDetailsLoadingSkeleton />
    }

    ///////////////////////////////////////////////////////////////
    // Error state

    if (isLectureError || !lecture) {
        const message = isLectureError
            ? getErrorMessage(lectureError, "Unable to load this lecture.")
            : "The requested lecture could not be found."

        return (
            <main
                className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                <ErrorState
                    title="Unable to load lecture"
                    message={message}
                    onRetry={refetchLecture}
                />
            </main>
        )
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <>
            <main
                className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                {/* Header */}

                <LectureManageHeader lecture={lecture} onBack={handleBack} />

                {/* Action error */}

                {actionError && (
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
                            {actionError}
                        </p>
                    </div>
                )}

                {/* Main content */}

                <div
                    className="
                    mt-6

                    grid
                    grid-cols-1
                    gap-6

                    lg:grid-cols-[minmax(0,1fr)_340px]
                "
                >
                    {/* Main column */}

                    <div
                        className="
                        min-w-0
                        space-y-6
                    "
                    >
                        <LectureManageInformation lecture={lecture} />

                        <LectureManageVideo
                            lecture={lecture}
                            onUploadVideo={handleUploadVideo}
                            onRemoveVideo={handleRemoveVideo}
                            removing={isRemovingVideo}
                        />
                    </div>

                    {/* Sidebar */}

                    <aside
                        className="
                        min-w-0
                    "
                    >
                        <LectureManageActions
                            lecture={lecture}

                            onEdit={handleEdit}
                            onRemove={handleRemove}

                            onPublish={handlePublish}
                            onSaveDraft={handleSaveDraft}

                            loading={isBusy}
                        />
                    </aside>
                </div>
            </main>

            {/* Remove lecture dialog */}

            <ConfirmDialog
                open={isRemoveDialogOpen}

                title="Remove Lecture"

                message="
                    Are you sure you want to remove this lecture?
                "

                confirmLabel="Remove Lecture"

                cancelLabel="Cancel"

                loading={isRemoving}

                onConfirm={handleConfirmRemove}

                onCancel={handleCancelRemove}
            >
                <div
                    className="
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
                        break-words

                        font-body
                        text-sm
                        font-medium
                        text-text-primary
                    "
                    >
                        {lecture.title}
                    </p>
                </div>

                <p
                    className="
                    mt-4

                    font-body
                    text-xs
                    leading-5
                    text-text-muted
                "
                >
                    This lecture will be removed from the curriculum. This
                    action cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}

export default LectureDetailsPage
