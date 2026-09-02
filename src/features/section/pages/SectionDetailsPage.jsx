import { useMemo, useState } from "react"
import { ArrowLeft, Settings2 } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

import Button from "../../../components/ui/Button.jsx"
import ConfirmDialog from "../../../components/ui/ConfirmDialog.jsx"
import ActionError from "../../../components/ui/ActionError.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"
import WorkflowActions from "../../../components/workflow/WorkflowActions.jsx"
import ManagementHeader from "../../../components/ui/ManagementHeader.jsx"

import SectionDetailsHeader from "../components/SectionDetailsHeader.jsx"
import SectionOverview from "../components/SectionOverview.jsx"
import InstructorSectionLectureArea from "../components/InstructorSectionLectureArea.jsx"

import useSection from "../hooks/useSection.js"
import useSectionState from "../hooks/useSectionState.js"
import useSectionManagement from "../hooks/useSectionManagement.js"

import useLecture from "../../lecture/hooks/useLecture.js"
import useLectureManagement from "../../lecture/hooks/useLectureManagement.js"

import { RESOURCE_STATUS } from "../../../constants/resourceConstants.js"

const SectionDetailsPage = () => {
    const navigate = useNavigate()
    const { courseId, sectionId } = useParams()

    const {
        section,
        isSectionLoading,
        isSectionFetching,
        isSectionError,
        sectionError,
        refetchSection,
    } = useSection({
        sectionId,
    })

    const { course } = useSectionState({
        section,
    })

    const {
        publishSection,
        saveSectionDraft,
        removeSection,

        isPublishingSection,
        isSavingSectionDraft,
        isRemovingSection,

        publishSectionError,
        saveSectionDraftError,
        removeSectionError,

        resetPublishSection,
        resetSaveSectionDraft,
        resetRemoveSection,
    } = useSectionManagement()

    const {
        lectures,
        isLecturesLoading,
        isLecturesFetching,
        isLecturesError,
        lecturesError,
        refetchLectures,
    } = useLecture({
        sectionId,
    })

    const { reorderLectures, isReordering: isReorderingLectures } =
        useLectureManagement()

    const [showRemoveDialog, setShowRemoveDialog] = useState(false)
    const [actionError, setActionError] = useState(null)

    const isActionLoading =
        isPublishingSection ||
        isSavingSectionDraft ||
        isRemovingSection ||
        isReorderingLectures

    const hasPublishedLecture = useMemo(
        () =>
            lectures.some(
                (lecture) => lecture.status === RESOURCE_STATUS.PUBLISHED
            ),
        [lectures]
    )

    const handleBack = () => {
        navigate(`/instructor/courses/${courseId}`)
    }

    const handleEdit = () => {
        navigate(`/instructor/courses/${courseId}/sections/${sectionId}/edit`)
    }

    const handleAddLecture = () => {
        if (isReorderingLectures) {
            return
        }

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/create`
        )
    }

    const handleManageLecture = (lecture) => {
        if (isReorderingLectures) {
            return
        }

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lecture._id}/manage`
        )
    }

    ///////////////////////////////////////////////////////////////
    // Reorder lectures

    const handleReorderLectures = async (reorderedLectures) => {
        if (
            !section?._id ||
            isReorderingLectures ||
            !reorderedLectures?.length
        ) {
            return false
        }

        setActionError(null)

        const lecturesPayload = reorderedLectures.map((lecture, index) => ({
            lectureId: lecture._id,
            order: index + 1,
        }))

        const result = await reorderLectures(section._id, lecturesPayload)

        if (!result?.success) {
            setActionError({
                title: "Unable to reorder lectures",
                message:
                    result?.error?.data?.message ||
                    result?.error?.message ||
                    "Something went wrong while reordering the lectures.",
            })

            return false
        }

        return true
    }

    ///////////////////////////////////////////////////////////////
    // Publish section

    const handlePublish = async () => {
        if (!section?._id) return

        setActionError(null)
        resetPublishSection?.()

        try {
            await publishSection(section._id).unwrap()
        } catch (error) {
            setActionError({
                title: "Unable to publish section",
                message:
                    error?.data?.message ||
                    error?.message ||
                    "Something went wrong while publishing the section.",
            })
        }
    }

    ///////////////////////////////////////////////////////////////
    // Save section draft

    const handleSaveDraft = async () => {
        if (!section?._id) return

        setActionError(null)
        resetSaveSectionDraft?.()

        try {
            await saveSectionDraft(section._id).unwrap()
        } catch (error) {
            setActionError({
                title: "Unable to save section as draft",
                message:
                    error?.data?.message ||
                    error?.message ||
                    "Something went wrong while saving the section as draft.",
            })
        }
    }

    ///////////////////////////////////////////////////////////////
    // Remove section

    const handleRemove = async () => {
        if (!section?._id) return

        setActionError(null)
        resetRemoveSection?.()

        try {
            await removeSection(section._id).unwrap()

            setShowRemoveDialog(false)

            navigate(`/instructor/courses/${courseId}`)
        } catch (error) {
            setShowRemoveDialog(false)

            setActionError({
                title: "Unable to remove section",
                message:
                    error?.data?.message ||
                    error?.message ||
                    "Something went wrong while removing the section.",
            })
        }
    }

    ///////////////////////////////////////////////////////////////
    // Loading

    if (isSectionLoading) {
        return (
            <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <div className="h-32 animate-pulse rounded-2xl bg-background-surface" />
                    <div className="h-48 animate-pulse rounded-2xl bg-background-surface" />
                    <div className="h-64 animate-pulse rounded-2xl bg-background-surface" />
                </div>
            </main>
        )
    }

    ///////////////////////////////////////////////////////////////
    // Error

    if (isSectionError || !section) {
        return (
            <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <ErrorState
                    title="Unable to load section"
                    message={
                        sectionError?.data?.message ||
                        sectionError?.message ||
                        "The section could not be loaded."
                    }
                    onRetry={refetchSection}
                />
            </main>
        )
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <>
            <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    {/* Management Header */}

                    <ManagementHeader
                        icon={Settings2}
                        title="Section Management"
                        description="Manage this section and organize its lectures."
                    >
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-xs text-text-muted">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="inline-flex items-center gap-1.5 font-medium text-accent-primary transition hover:opacity-80"
                            >
                                <ArrowLeft size={14} />
                                Back to Course
                            </button>

                            <span className="text-text-muted/50">/</span>

                            <span>Section {section.order}</span>

                            <span className="text-text-muted/50">/</span>

                            <span className="truncate">{section.title}</span>
                        </div>
                    </ManagementHeader>

                    {/* Section Header */}

                    <SectionDetailsHeader
                        section={section}
                        course={course}
                        isFetching={isSectionFetching}
                    />

                    <ActionError
                        open={Boolean(actionError)}
                        title={actionError?.title}
                        message={actionError?.message}
                        onDismiss={() => setActionError(null)}
                        dismissible
                    />

                    {/* Main Content */}

                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                        {/* Main */}

                        <div className="min-w-0 space-y-6">
                            <SectionOverview
                                section={section}
                                lectures={lectures}
                            />

                            <InstructorSectionLectureArea
                                course={course}
                                section={section}
                                lectures={lectures}
                                isActionLoading={isActionLoading}
                                isReorderingLectures={isReorderingLectures}
                                onAddLecture={handleAddLecture}
                                onManageLecture={handleManageLecture}
                                onReorderLectures={handleReorderLectures}
                            />
                        </div>

                        {/* Sidebar */}

                        <aside className="min-w-0 space-y-6">
                            <div className="rounded-2xl border border-border-subtle bg-background-surface p-5 sm:p-6">
                                <h2 className="font-accent text-lg font-semibold text-text-primary">
                                    Section Information
                                </h2>

                                <p className="mt-1 font-body text-sm leading-5 text-text-secondary">
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
                                onRemove={() => setShowRemoveDialog(true)}
                                onPublish={handlePublish}
                                onSaveDraft={handleSaveDraft}
                                loading={isActionLoading}
                                resourceName="Section"
                                resourceDescription="Manage this section and control its publication status."
                                canPublish={hasPublishedLecture}
                                publishDisabledMessage="The section must contain at least one published lecture before it can be published."
                                editDescription="Update this section's title and settings."
                                publishDescription="Make this section available as part of the published course curriculum."
                                draftDescription="Move this section back to draft status."
                                removeDescription="Remove this section and its lectures from the course."
                            />
                        </aside>
                    </div>
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
                loading={isRemovingSection}
                onConfirm={handleRemove}
                onCancel={() => {
                    if (!isRemovingSection) {
                        setShowRemoveDialog(false)
                    }
                }}
            />
        </>
    )
}

export default SectionDetailsPage
