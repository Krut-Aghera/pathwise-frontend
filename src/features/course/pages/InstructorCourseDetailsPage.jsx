import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import {
    useFetchInstructorCourseQuery,
    usePublishCourseMutation,
    useSaveCourseAsDraftMutation,
    useRemoveCourseMutation,
} from "../courseApi.js"
import useSession from "../../auth/hooks/useSession.js"

import useSection from "../../section/hooks/useSection.js"
import useSectionManagement from "../../section/hooks/useSectionManagement.js"

import InstructorCourseDetailsHeader from "../components/course-manage/InstructorCourseDetailsHeader.jsx"
import InstructorCourseOverview from "../components/course-manage/InstructorCourseOverview.jsx"
import InstructorCourseInformation from "../components/course-manage/InstructorCourseInformation.jsx"
import InstructorCourseDetailsLoadingSkeleton from "../components/skeletons/InstructorCourseDetailsSkeleton.jsx"
import InstructorCourseSectionArea from "../components/course-manage/InstructorCourseSectionArea.jsx"

import ErrorState from "../../../components/ui/ErrorState.jsx"
import ActionError from "../../../components/ui/ActionError.jsx"
import ConfirmDialog from "../../../components/ui/ConfirmDialog.jsx"
import WorkflowActions from "../../../components/workflow/WorkflowActions.jsx"

const InstructorCourseDetailsPage = () => {
    const { courseId } = useParams()
    const navigate = useNavigate()

    const { user } = useSession()

    const [courseToRemove, setCourseToRemove] = useState(null)
    const [actionError, setActionError] = useState(null)

    const {
        data: courseResponse,
        isLoading: isCourseLoading,
        isError: isCourseError,
        error: courseError,
        refetch: refetchCourse,
    } = useFetchInstructorCourseQuery(courseId)

    const {
        sections,
        isSectionsLoading,
        isSectionsError,
        sectionsError,
        refetchSections,
    } = useSection({
        courseId,
    })

    const [publishCourse, { isLoading: isPublishing }] =
        usePublishCourseMutation()

    const [saveCourseAsDraft, { isLoading: isSavingDraft }] =
        useSaveCourseAsDraftMutation()

    const [removeCourse, { isLoading: isRemoving }] = useRemoveCourseMutation()

    const { reorderSections, isReordering: isReorderingSections } =
        useSectionManagement()

    const course = courseResponse?.data

    // Loading

    const isCourseWorkflowLoading = isPublishing || isSavingDraft || isRemoving

    const isLoading = isCourseLoading || isSectionsLoading

    // Error message

    const getErrorMessage = (error, fallback) => {
        return (
            error?.errors?.[0]?.message ||
            error?.data?.errors?.[0]?.message ||
            error?.data?.message ||
            error?.message ||
            fallback
        )
    }

    // Action error

    const clearActionError = () => {
        setActionError(null)
    }

    // Edit

    const handleEdit = () => {
        if (!course?._id || isCourseWorkflowLoading) {
            return
        }

        clearActionError()

        navigate(`/instructor/courses/${course._id}/edit`)
    }

    // Publish

    const handlePublish = async () => {
        if (!course?._id || isCourseWorkflowLoading) {
            return
        }

        clearActionError()

        try {
            await publishCourse(course._id).unwrap()
        } catch (error) {
            setActionError(
                getErrorMessage(error, "Unable to publish this course.")
            )
        }
    }

    // Save as draft

    const handleSaveDraft = async () => {
        if (!course?._id || isCourseWorkflowLoading) {
            return
        }

        clearActionError()

        try {
            await saveCourseAsDraft(course._id).unwrap()
        } catch (error) {
            setActionError(
                getErrorMessage(error, "Unable to save this course as draft.")
            )
        }
    }

    // Remove

    const handleRemove = () => {
        if (!course?._id || isCourseWorkflowLoading) {
            return
        }

        clearActionError()

        setCourseToRemove(course)
    }

    const handleCancelRemove = () => {
        if (isRemoving) {
            return
        }

        setCourseToRemove(null)
    }

    const handleConfirmRemove = async () => {
        if (!courseToRemove?._id || isRemoving) {
            return
        }

        clearActionError()

        try {
            await removeCourse(courseToRemove._id).unwrap()

            setCourseToRemove(null)

            navigate("/instructor/courses")
        } catch (error) {
            setActionError(
                getErrorMessage(error, "Unable to remove this course.")
            )
        }
    }

    // Add section

    const handleAddSection = () => {
        if (!course?._id || isReorderingSections) {
            return
        }

        clearActionError()

        navigate(`/instructor/courses/${course._id}/sections/create`)
    }

    // Manage section
    const handleSectionDetails = (section) => {
        if (!course?._id || !section?._id || isReorderingSections) {
            return
        }

        clearActionError()

        navigate(
            `/instructor/courses/${course._id}/sections/${section._id}/manage`
        )
    }

    // Add lecture

    const handleAddLecture = (section) => {
        if (!course?._id || !section?._id || isReorderingSections) {
            return
        }

        clearActionError()

        navigate(
            `/instructor/courses/${course._id}/sections/${section._id}/lectures/create`
        )
    }

    // Reorder sections

    const handleReorderSections = async (reorderedSections) => {
        if (
            !course?._id ||
            isReorderingSections ||
            !reorderedSections?.length
        ) {
            return false
        }

        clearActionError()

        const sectionsPayload = reorderedSections.map((section, index) => ({
            sectionId: section._id,
            order: index + 1,
        }))

        const result = await reorderSections(course._id, sectionsPayload)

        if (!result?.success) {
            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to reorder course sections."
                )
            )

            return false
        }

        return true
    }

    // Loading state

    if (isLoading) {
        return (
            <main
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-6
                    sm:px-6
                    lg:px-8
                "
            >
                <InstructorCourseDetailsLoadingSkeleton />
            </main>
        )
    }

    // Course error

    if (isCourseError || !course) {
        const message = isCourseError
            ? getErrorMessage(courseError, "Unable to load this course.")
            : "The requested course could not be found."

        return (
            <main
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-6
                    sm:px-6
                    lg:px-8
                "
            >
                <ErrorState
                    title="Unable to load course"
                    message={message}
                    onRetry={refetchCourse}
                />
            </main>
        )
    }

    // Curriculum error

    if (isSectionsError) {
        const message = getErrorMessage(
            sectionsError,
            "Unable to load the course curriculum."
        )

        return (
            <main
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-6
                    sm:px-6
                    lg:px-8
                "
            >
                <ErrorState
                    title="Unable to load curriculum"
                    message={message}
                    onRetry={refetchSections}
                />
            </main>
        )
    }

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
                    lg:px-8
                "
            >
                <InstructorCourseDetailsHeader
                    course={course}
                    instructor={user}
                />

                <ActionError
                    open={Boolean(actionError)}
                    message={actionError}
                    onDismiss={clearActionError}
                />

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
                        <InstructorCourseOverview course={course} />

                        <InstructorCourseSectionArea
                            course={course}
                            sections={sections}
                            onAddSection={handleAddSection}
                            onSectionDetail={handleSectionDetails}
                            onAddLecture={handleAddLecture}
                            onReorderSections={handleReorderSections}
                            isReorderingSections={isReorderingSections}
                        />
                    </div>

                    <aside
                        className="
                            min-w-0
                            space-y-6
                        "
                    >
                        <InstructorCourseInformation course={course} />

                        <WorkflowActions
                            status={course.status}
                            resourceName="Course"
                            resourceDescription="Manage this course."
                            onEdit={handleEdit}
                            onPublish={handlePublish}
                            onSaveDraft={handleSaveDraft}
                            onRemove={handleRemove}
                            loading={isCourseWorkflowLoading}
                            canPublish={true}
                            publishDisabledMessage="
                                The course must contain at least one published section before it can be published.
                            "
                        />
                    </aside>
                </div>
            </main>

            <ConfirmDialog
                open={Boolean(courseToRemove)}
                title="Remove Course"
                description="This will remove the course from your instructor course list."
                message={
                    courseToRemove
                        ? `Are you sure you want to remove "${courseToRemove.title}"?`
                        : "Are you sure you want to remove this course?"
                }
                confirmLabel="Remove Course"
                cancelLabel="Cancel"
                loading={isRemoving}
                onConfirm={handleConfirmRemove}
                onCancel={handleCancelRemove}
                variant="danger"
            />
        </>
    )
}

export default InstructorCourseDetailsPage
