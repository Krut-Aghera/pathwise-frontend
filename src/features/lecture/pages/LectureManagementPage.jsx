import { useCallback, useEffect, useRef, useState } from "react"
import { BookOpen } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

import { RESOURCE_STATUS } from "../../../constants/resourceConstants.js"

import LectureManageInformation from "../components/lecture-management/LectureManageInformation.jsx"
import LectureManageVideo from "../components/lecture-management/LectureManageVideo.jsx"

import ErrorState from "../../../components/ui/ErrorState.jsx"
import ActionError from "../../../components/ui/ActionError.jsx"
import ConfirmDialog from "../../../components/ui/ConfirmDialog.jsx"
import WorkflowActions from "../../../components/workflow/WorkflowActions.jsx"
import ManagementPageHeader from "../../../components/workflow/ManagementPageHeader.jsx"

import useLecture from "../hooks/useLecture.js"
import useLectureVideo from "../hooks/useLectureVideo.js"
import useLectureState from "../hooks/useLectureState.js"
import useLectureManagement from "../hooks/useLectureManagement.js"

const PAGE_CONTAINER = `
    mx-auto
    w-full
    max-w-7xl
    px-4
    py-6
    sm:px-6
    sm:py-8
    lg:px-8
    lg:py-10
`
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const LectureManagementPage = () => {
    const { courseId, sectionId, lectureId } = useParams()
    const navigate = useNavigate()

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

    // Lecture management
    const { removeLecture, isRemoving } = useLectureManagement()

    // Lecture video
    const { removeLectureVideo, isRemoving: isRemovingVideo } =
        useLectureVideo()

    // Lecture state
    const {
        publishLecture,
        saveLectureAsDraft,

        isPublishing,
        isSavingDraft,
    } = useLectureState()

    // Remove lecture dialog
    const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false)

    // Workflow error
    const [workflowError, setWorkflowError] = useState(null)
    const workflowErrorRef = useRef(null)

    // Loading
    const isLoading = isLectureLoading

    // Workflow loading
    const isWorkflowLoading =
        isRemoving || isRemovingVideo || isPublishing || isSavingDraft

    // Error helper
    const getErrorMessage = useCallback((error, fallbackMessage) => {
        return error?.message || error?.data?.message || fallbackMessage
    }, [])

    // Clear workflow error
    const clearWorkflowError = useCallback(() => {
        setWorkflowError(null)
    }, [])

    // Smooth scroll helper
    const scrollToError = useCallback((ref) => {
        requestAnimationFrame(() => {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        })
    }, [])

    // Scroll to workflow error
    useEffect(() => {
        if (!workflowError) {
            return
        }
        scrollToError(workflowErrorRef)
    }, [workflowError, scrollToError])

    // Back to section
    const handleBack = useCallback(() => {
        if (!courseId || !sectionId || isWorkflowLoading) {
            return
        }
        navigate(`/instructor/courses/${courseId}/sections/${sectionId}/manage`)
    }, [courseId, sectionId, isWorkflowLoading, navigate])

    // Edit lecture
    const handleEdit = useCallback(() => {
        if (!courseId || !sectionId || !lectureId || isWorkflowLoading) {
            return
        }

        clearWorkflowError()
        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lectureId}/edit`
        )
    }, [
        courseId,
        sectionId,
        lectureId,
        isWorkflowLoading,
        clearWorkflowError,
        navigate,
    ])

    // Open remove lecture dialog
    const handleRemove = useCallback(() => {
        if (!lecture?._id || isWorkflowLoading) {
            return
        }
        clearWorkflowError()

        setIsRemoveDialogOpen(true)
    }, [lecture?._id, isWorkflowLoading, clearWorkflowError])

    // Cancel remove lecture
    const handleCancelRemove = useCallback(() => {
        if (isRemoving) {
            return
        }
        setIsRemoveDialogOpen(false)
    }, [isRemoving])

    // Confirm remove lecture
    const handleConfirmRemove = useCallback(async () => {
        if (!lecture?._id || !sectionId || isRemoving) {
            return
        }

        clearWorkflowError()

        const result = await removeLecture(lecture._id, sectionId)

        if (!result?.success) {
            setWorkflowError(
                getErrorMessage(result?.error, "Unable to remove this lecture.")
            )
            return
        }

        setIsRemoveDialogOpen(false)

        navigate(`/instructor/courses/${courseId}/sections/${sectionId}/manage`)
    }, [
        lecture?._id,
        sectionId,
        isRemoving,
        clearWorkflowError,
        removeLecture,
        getErrorMessage,
        navigate,
        courseId,
    ])

    // Upload video
    const handleUploadVideo = useCallback(() => {
        if (!courseId || !sectionId || !lectureId || isWorkflowLoading) {
            return
        }

        clearWorkflowError()

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lectureId}/video`
        )
    }, [
        courseId,
        sectionId,
        lectureId,
        isWorkflowLoading,
        clearWorkflowError,
        navigate,
    ])

    // Remove video
    const handleRemoveVideo = useCallback(async () => {
        if (!lecture?._id || !sectionId || isWorkflowLoading) {
            return {
                success: false,
            }
        }

        clearWorkflowError()

        const result = await removeLectureVideo(lecture._id, sectionId)

        if (!result?.success) {
            setWorkflowError(
                getErrorMessage(
                    result?.error,
                    "Unable to remove lecture video."
                )
            )

            return result
        }

        return result
    }, [
        lecture?._id,
        sectionId,
        isWorkflowLoading,
        clearWorkflowError,
        removeLectureVideo,
        getErrorMessage,
    ])

    // Publish lecture
    const handlePublish = useCallback(async () => {
        if (
            !lecture?._id ||
            !sectionId ||
            lecture.status !== RESOURCE_STATUS.DRAFT ||
            !lecture.video?.url ||
            isWorkflowLoading
        ) {
            return
        }

        clearWorkflowError()

        const result = await publishLecture(lecture._id, sectionId)

        if (!result?.success) {
            setWorkflowError(
                getErrorMessage(
                    result?.error,
                    "Unable to publish this lecture."
                )
            )
        }
    }, [
        lecture?._id,
        lecture?.status,
        lecture?.video?.url,
        sectionId,
        isWorkflowLoading,
        clearWorkflowError,
        publishLecture,
        getErrorMessage,
    ])

    // Save lecture as draft
    const handleSaveDraft = useCallback(async () => {
        if (
            !lecture?._id ||
            !sectionId ||
            lecture.status !== RESOURCE_STATUS.PUBLISHED ||
            isWorkflowLoading
        ) {
            return
        }

        clearWorkflowError()

        const result = await saveLectureAsDraft(lecture._id, sectionId)

        if (!result?.success) {
            setWorkflowError(
                getErrorMessage(
                    result?.error,
                    "Unable to save this lecture as draft."
                )
            )
        }
    }, [
        lecture?._id,
        lecture?.status,
        sectionId,
        isWorkflowLoading,
        clearWorkflowError,
        saveLectureAsDraft,
        getErrorMessage,
    ])

    // Initial loading
    if (isLoading) {
        return (
            <main className={PAGE_CONTAINER}>
                <div
                    className="
                        flex
                        min-h-60
                        items-center
                        justify-center
                    "
                >
                    <p
                        className="
                            font-body
                            text-sm
                            text-text-muted
                        "
                    >
                        Loading lecture...
                    </p>
                </div>
            </main>
        )
    }

    // Lecture loading error
    if (isLectureError || !lecture) {
        return (
            <main className={PAGE_CONTAINER}>
                <ErrorState
                    title="Unable to load lecture"
                    message={
                        isLectureError
                            ? getErrorMessage(
                                  lectureError,
                                  "Unable to load this lecture."
                              )
                            : "The requested lecture could not be found."
                    }
                    onRetry={refetchLecture}
                />
            </main>
        )
    }

    // Header context
    const headerContext = [
        lecture?.section?.course?.title,
        lecture?.section?.title,
        lecture?.title,
    ].filter(Boolean)

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Render

    return (
        <>
            <main className={PAGE_CONTAINER}>
                {/* Header */}

                <ManagementPageHeader
                    pageTitle="Lecture Management"
                    context={headerContext}
                    icon={BookOpen}
                    onBack={handleBack}
                    backLabel="Back to Section"
                    status={lecture.status}
                    showStatus
                />

                {/* Workflow error */}

                <div ref={workflowErrorRef} className="scroll-mt-6">
                    <ActionError
                        open={Boolean(workflowError)}
                        message={workflowError}
                        onDismiss={clearWorkflowError}
                    />
                </div>

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
                            space-y-6
                        "
                    >
                        <WorkflowActions
                            status={lecture?.status}
                            resourceName="Lecture"
                            resourceDescription="Manage this lecture."
                            onEdit={handleEdit}
                            onPublish={handlePublish}
                            onPublishInvalid={setWorkflowError}
                            onSaveDraft={handleSaveDraft}
                            onRemove={handleRemove}
                            loading={isWorkflowLoading}
                            publishEnabled={Boolean(lecture?.video?.url)}
                            publishDisabledMessage="Upload a video before publishing this lecture."
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
                            wrap-break-word

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

export default LectureManagementPage
