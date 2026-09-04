import { Layers3 } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { RESOURCE_STATUS } from "../../../constants/resourceConstants.js"

import ConfirmDialog from "../../../components/ui/ConfirmDialog.jsx"
import ActionError from "../../../components/ui/ActionError.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"
import WorkflowActions from "../../../components/workflow/WorkflowActions.jsx"
import ManagementPageHeader from "../../../components/workflow/ManagementPageHeader.jsx"

import SectionOverview from "../components/section-management/SectionOverview.jsx"
import InstructorSectionLectureArea from "../components/section-management/InstructorSectionLectureArea.jsx"

import useSection from "../hooks/useSection.js"
import useSectionState from "../hooks/useSectionState.js"
import useSectionManagement from "../hooks/useSectionManagement.js"

import useLecture from "../../lecture/hooks/useLecture.js"
import useLectureManagement from "../../lecture/hooks/useLectureManagement.js"

const PAGE_CONTAINER = `
    mx-auto
    w-full
    max-w-7xl
    px-4
    py-6
    sm:px-6
    lg:px-8
`

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const SectionManagementPage = () => {
    const { courseId, sectionId } = useParams()
    const navigate = useNavigate()

    /*
     * Temporary page state
     */

    const [showRemoveDialog, setShowRemoveDialog] = useState(false)

    /*
     * Action errors
     *
     * workflowError:
     * Section-level workflow actions
     * (publish, draft, remove)
     *
     * lectureError:
     * Lecture management actions
     * (reorder)
     */

    const [workflowError, setWorkflowError] = useState(null)
    const [lectureError, setLectureError] = useState(null)

    /*
     * Error refs
     */

    const workflowErrorRef = useRef(null)
    const lectureErrorRef = useRef(null)

    /*
     * Section data
     */

    const {
        section,
        isSectionLoading,
        isSectionError,
        sectionError,
        refetchSection,
    } = useSection({
        sectionId,
    })

    /*
     * Section workflow state
     */

    const {
        publishSection,
        saveSectionAsDraft,

        isPublishing,
        isSavingDraft,

        resetPublish,
        resetDraft,
    } = useSectionState()

    /*
     * Section management
     */

    const { removeSection, isRemoving, resetRemove } = useSectionManagement()

    /*
     * Lecture data
     */

    const {
        lectures,
        isLecturesLoading,
        isLecturesError,
        lecturesError,
        refetchLectures,
    } = useLecture({
        sectionId,
    })

    /*
     * Lecture management
     */

    const { reorderLectures, isReordering: isReorderingLectures } =
        useLectureManagement()

    /*
     * Derived state
     */

    const isWorkflowLoading = isPublishing || isSavingDraft || isRemoving

    const isLoading = isSectionLoading || isLecturesLoading

    const hasPublishedLecture = lectures.some(
        (lecture) => lecture.status === RESOURCE_STATUS.PUBLISHED
    )

    /*
     * Error helpers
     */

    const clearWorkflowError = useCallback(() => {
        setWorkflowError(null)
    }, [])

    const clearLectureError = useCallback(() => {
        setLectureError(null)
    }, [])

    /*
     * Smooth scroll helper
     */

    const scrollToError = useCallback((ref) => {
        requestAnimationFrame(() => {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        })
    }, [])

    /*
     * Scroll to workflow error
     */

    useEffect(() => {
        if (!workflowError) {
            return
        }

        scrollToError(workflowErrorRef)
    }, [workflowError, scrollToError])

    /*
     * Scroll to lecture error
     */

    useEffect(() => {
        if (!lectureError) {
            return
        }

        scrollToError(lectureErrorRef)
    }, [lectureError, scrollToError])

    /*
     * Shared page handlers
     */

    const handleBack = useCallback(() => {
        if (!courseId) {
            return
        }

        navigate(`/instructor/courses/${courseId}`)
    }, [courseId, navigate])

    /*
     * Edit section
     */

    const handleEdit = useCallback(() => {
        if (!courseId || !sectionId || isWorkflowLoading) {
            return
        }

        clearWorkflowError()

        navigate(`/instructor/courses/${courseId}/sections/${sectionId}/edit`)
    }, [courseId, sectionId, isWorkflowLoading, clearWorkflowError, navigate])

    /*
     * Add lecture
     */

    const handleAddLecture = useCallback(() => {
        if (!courseId || !sectionId || isReorderingLectures) {
            return
        }

        clearLectureError()

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/create`
        )
    }, [courseId, sectionId, isReorderingLectures, clearLectureError, navigate])

    /*
     * Lecture details
     */

    const handleManageLecture = useCallback(
        (lecture) => {
            if (
                !courseId ||
                !sectionId ||
                !lecture?._id ||
                isReorderingLectures
            ) {
                return
            }

            clearLectureError()

            navigate(
                `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lecture._id}/manage`
            )
        },
        [courseId, sectionId, isReorderingLectures, clearLectureError, navigate]
    )

    /*
     * Reorder lectures
     */

    const handleReorderLectures = useCallback(
        async (reorderedLectures) => {
            if (
                !sectionId ||
                isReorderingLectures ||
                !reorderedLectures?.length
            ) {
                return false
            }

            clearLectureError()

            const lecturesPayload = reorderedLectures.map((lecture, index) => ({
                lectureId: lecture._id,
                order: index + 1,
            }))

            try {
                const result = await reorderLectures(sectionId, lecturesPayload)

                if (!result?.success) {
                    setLectureError(
                        result?.error?.message ||
                            "Unable to reorder section lectures."
                    )

                    return false
                }

                return true
            } catch (error) {
                setLectureError(
                    error?.message || "Unable to reorder section lectures."
                )

                return false
            }
        },
        [sectionId, isReorderingLectures, clearLectureError, reorderLectures]
    )

    /*
     * Publish section
     *
     * This is the final defensive business-rule
     * validation before calling the API.
     */

    const handlePublish = useCallback(async () => {
        if (!section?._id || isWorkflowLoading) {
            return
        }

        clearWorkflowError()
        resetPublish()

        /*
         * Defensive business-rule validation
         *
         * This protects the action even if the
         * WorkflowActions disabled attribute is
         * manually removed through DevTools.
         */

        if (!hasPublishedLecture) {
            setWorkflowError(
                "The section must contain at least one published lecture before it can be published."
            )

            return
        }

        try {
            const result = await publishSection(section._id)

            if (!result?.success) {
                setWorkflowError(
                    result?.error?.message || "Unable to publish section."
                )
            }
        } catch (error) {
            setWorkflowError(error?.message || "Unable to publish section.")
        }
    }, [
        section?._id,
        isWorkflowLoading,
        hasPublishedLecture,
        clearWorkflowError,
        resetPublish,
        publishSection,
    ])

    /*
     * Save section as draft
     */

    const handleSaveDraft = useCallback(async () => {
        if (!section?._id || isWorkflowLoading) {
            return
        }

        clearWorkflowError()
        resetDraft()

        try {
            const result = await saveSectionAsDraft(section._id)

            if (!result?.success) {
                setWorkflowError(
                    result?.error?.message || "Unable to save section as draft."
                )
            }
        } catch (error) {
            setWorkflowError(
                error?.message || "Unable to save section as draft."
            )
        }
    }, [
        section?._id,
        isWorkflowLoading,
        clearWorkflowError,
        resetDraft,
        saveSectionAsDraft,
    ])

    /*
     * Start remove workflow
     */

    const handleOpenRemove = useCallback(() => {
        if (!section?._id || !courseId || isWorkflowLoading) {
            return
        }

        clearWorkflowError()
        resetRemove()

        setShowRemoveDialog(true)
    }, [
        section?._id,
        courseId,
        isWorkflowLoading,
        clearWorkflowError,
        resetRemove,
    ])

    /*
     * Cancel remove workflow
     */

    const handleCancelRemove = useCallback(() => {
        if (isRemoving) {
            return
        }

        setShowRemoveDialog(false)
    }, [isRemoving])

    /*
     * Confirm section removal
     */

    const handleRemove = useCallback(async () => {
        if (!section?._id || !courseId || isRemoving) {
            return
        }

        clearWorkflowError()

        try {
            const result = await removeSection(section._id, courseId)

            if (!result?.success) {
                setWorkflowError(
                    result?.error?.message || "Unable to remove section."
                )

                return
            }

            setShowRemoveDialog(false)

            navigate(`/instructor/courses/${courseId}`)
        } catch (error) {
            setWorkflowError(error?.message || "Unable to remove section.")
        }
    }, [
        section?._id,
        courseId,
        isRemoving,
        clearWorkflowError,
        removeSection,
        navigate,
    ])

    /*
     * Initial loading
     */

    if (isLoading) {
        return (
            <main className={PAGE_CONTAINER}>
                <div className="space-y-6">
                    <div className="h-32 animate-pulse rounded-2xl bg-background-surface" />
                    <div className="h-48 animate-pulse rounded-2xl bg-background-surface" />
                    <div className="h-64 animate-pulse rounded-2xl bg-background-surface" />
                </div>
            </main>
        )
    }

    /*
     * Section loading error
     */

    if (isSectionError || !section) {
        return (
            <main className={PAGE_CONTAINER}>
                <ErrorState
                    title="Unable to load section"
                    message={
                        isSectionError
                            ? sectionError?.message || "Unable to load section."
                            : "The requested section could not be found."
                    }
                    onRetry={refetchSection}
                />
            </main>
        )
    }

    /*
     * Lecture loading error
     */

    if (isLecturesError) {
        return (
            <main className={PAGE_CONTAINER}>
                <ErrorState
                    title="Unable to load section lectures"
                    message={
                        lecturesError?.message ||
                        "Unable to load section lectures."
                    }
                    onRetry={refetchLectures}
                />
            </main>
        )
    }

    /*
     * Page
     */

    return (
        <>
            <main className={PAGE_CONTAINER}>
                <ManagementPageHeader
                    pageTitle="Section Management"
                    context={[section?.course?.title, section?.title].filter(
                        Boolean
                    )}
                    icon={Layers3}
                    onBack={handleBack}
                    backLabel="Back to Course"
                    status={section?.status}
                    showStatus
                />

                {/* Section workflow error */}

                <div ref={workflowErrorRef} className="scroll-mt-6">
                    <ActionError
                        open={Boolean(workflowError)}
                        message={workflowError}
                        onDismiss={clearWorkflowError}
                    />
                </div>

                <div
                    className="
                        mt-6
                        grid
                        grid-cols-1
                        gap-6
                        lg:grid-cols-[minmax(0,1fr)_360px]
                    "
                >
                    <div
                        className="
                            min-w-0
                            space-y-6
                        "
                    >
                        <SectionOverview
                            section={section}
                            lectures={lectures}
                        />

                        {/* Lecture action error */}

                        <div ref={lectureErrorRef} className="scroll-mt-6">
                            <ActionError
                                open={Boolean(lectureError)}
                                message={lectureError}
                                onDismiss={clearLectureError}
                            />
                        </div>

                        <InstructorSectionLectureArea
                            lectures={lectures}
                            onAddLecture={handleAddLecture}
                            onManageLecture={handleManageLecture}
                            onReorderLectures={handleReorderLectures}
                            isReorderingLectures={isReorderingLectures}
                        />
                    </div>

                    <aside
                        className="
                            min-w-0
                            space-y-6
                        "
                    >
                        <div
                            className="
                                rounded-2xl
                                border
                                border-border-subtle
                                bg-background-surface
                                p-5
                                sm:p-6
                            "
                        >
                            <h2
                                className="
                                    font-accent
                                    text-lg
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                Section Information
                            </h2>

                            <p
                                className="
                                    mt-1
                                    font-body
                                    text-sm
                                    leading-5
                                    text-text-secondary
                                "
                            >
                                View the current section status and lecture
                                progress.
                            </p>

                            <div className="mt-5 space-y-4">
                                <div>
                                    <p className="font-body text-xs text-text-muted">
                                        Section
                                    </p>

                                    <p className="mt-1 font-body text-sm font-medium text-text-primary">
                                        {section.order}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-body text-xs text-text-muted">
                                        Lectures
                                    </p>

                                    <p className="mt-1 font-body text-sm font-medium text-text-primary">
                                        {lectures.length}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-body text-xs text-text-muted">
                                        Published Lectures
                                    </p>

                                    <p className="mt-1 font-body text-sm font-medium text-text-primary">
                                        {
                                            lectures.filter(
                                                (lecture) =>
                                                    lecture.status ===
                                                    RESOURCE_STATUS.PUBLISHED
                                            ).length
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        <WorkflowActions
                            status={section.status}
                            onEdit={handleEdit}
                            onRemove={handleOpenRemove}
                            onPublish={handlePublish}
                            onPublishBlocked={() =>
                                setWorkflowError(
                                    "The section must contain at least one published lecture before it can be published."
                                )
                            }
                            onSaveDraft={handleSaveDraft}
                            loading={isWorkflowLoading}
                            resourceName="Section"
                            resourceDescription="Manage this section and control its publication status."
                            publishEnabled={hasPublishedLecture}
                            publishDisabledMessage="The section must contain at least one published lecture before it can be published."
                            editDescription="Update this section's title and settings."
                            publishDescription="Make this section available as part of the published course curriculum."
                            draftDescription="Move this section back to draft status."
                            removeDescription="Remove this section and its lectures from the course."
                        />
                    </aside>
                </div>
            </main>

            <ConfirmDialog
                open={showRemoveDialog}
                title="Remove Section"
                subtitle="This action cannot be undone."
                message={
                    <>
                        Are you sure you want to remove{" "}
                        <span className="font-semibold text-text-primary">
                            "{section.title}"
                        </span>
                        ? This will remove the section from the course.
                    </>
                }
                confirmLabel="Remove Section"
                cancelLabel="Cancel"
                variant="danger"
                loading={isRemoving}
                onConfirm={handleRemove}
                onCancel={handleCancelRemove}
            />
        </>
    )
}

export default SectionManagementPage
