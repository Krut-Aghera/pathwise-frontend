import { Layers3 } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"

import InstructorCourseOverview from "../../components/course-management/InstructorCourseOverview.jsx"
import InstructorCourseInformation from "../../components/course-management/InstructorCourseInformation.jsx"
import InstructorCourseSectionArea from "../../components/course-management/InstructorCourseSectionArea.jsx"
import InstructorCourseDetailsLoadingSkeleton from "../../components/skeletons/InstructorCourseDetailsSkeleton.jsx"

import ErrorState from "../../../../components/ui/ErrorState.jsx"
import ActionError from "../../../../components/ui/ActionError.jsx"
import ConfirmDialog from "../../../../components/ui/ConfirmDialog.jsx"
import WorkflowActions from "../../../../components/workflow/WorkflowActions.jsx"
import ManagementPageHeader from "../../../../components/workflow/ManagementPageHeader.jsx"

import useCourse from "../../hooks/useCourse.js"
import useCourseManagement from "../../hooks/useCourseManagement.js"
import useCourseState from "../../hooks/useCourseState.js"

import useSection from "../../../section/hooks/useSection.js"
import useSectionManagement from "../../../section/hooks/useSectionManagement.js"

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

const CourseManagementPage = () => {
    const { courseId } = useParams()
    const navigate = useNavigate()

    /*
     * Temporary page state
     */

    const [showRemoveDialog, setShowRemoveDialog] = useState(false)

    /*
     * Action errors
     *
     * workflowError:
     * Course-level workflow actions
     * (publish, draft, remove)
     *
     * sectionError:
     * Section management actions
     * (reorder)
     */

    const [workflowError, setWorkflowError] = useState(null)
    const [sectionError, setSectionError] = useState(null)

    /*
     * Error refs
     */

    const workflowErrorRef = useRef(null)
    const sectionErrorRef = useRef(null)

    /*
     * Course data
     */

    const {
        fetchInstructorCourse,
        instructorCourse: course,
        isInstructorCourseLoading: isCourseLoading,
        isInstructorCourseError: isCourseError,
        instructorCourseError: courseError,
    } = useCourse()

    /*
     * Course management
     */

    const { removeCourse, isRemoving } = useCourseManagement()

    /*
     * Course workflow state
     */

    const { publishCourse, saveCourseAsDraft, isPublishing, isSavingDraft } =
        useCourseState()

    /*
     * Section data
     */

    const {
        sections,
        fetchSections,

        isSectionsLoading,
        isSectionsError,
        sectionsError,
    } = useSection()

    /*
     * Derived state
     */

    const hasPublishedSection = sections.some(
        (section) => section.status === RESOURCE_STATUS.PUBLISHED
    )

    const isWorkflowLoading = isPublishing || isSavingDraft || isRemoving

    const isLoading = isCourseLoading || isSectionsLoading

    /*
     * Section management
     */

    const { reorderSections, isReordering: isReorderingSections } =
        useSectionManagement()

    /*
     * Fetch course
     */

    useEffect(() => {
        if (!courseId) {
            return
        }

        fetchInstructorCourse(courseId)
    }, [courseId, fetchInstructorCourse])

    /*
     * Fetch course sections
     *
     * useSection now uses a lazy query, so sections
     * must be fetched explicitly.
     */

    useEffect(() => {
        if (!courseId) {
            return
        }

        fetchSections(courseId)
    }, [courseId, fetchSections])

    /*
     * Error helpers
     */

    const getErrorMessage = useCallback((error, fallbackMessage) => {
        return error?.message || error?.data?.message || fallbackMessage
    }, [])

    const clearWorkflowError = useCallback(() => {
        setWorkflowError(null)
    }, [])

    const clearSectionError = useCallback(() => {
        setSectionError(null)
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
     * Scroll to section error
     */

    useEffect(() => {
        if (!sectionError) {
            return
        }

        scrollToError(sectionErrorRef)
    }, [sectionError, scrollToError])

    /*
     * Shared page handlers
     */

    const handleBack = useCallback(() => {
        navigate("/instructor/courses")
    }, [navigate])

    /*
     * Edit course
     */

    const handleEdit = useCallback(() => {
        if (!course?._id || isWorkflowLoading) {
            return
        }

        clearWorkflowError()

        navigate(`/instructor/courses/${course._id}/edit`)
    }, [course?._id, isWorkflowLoading, clearWorkflowError, navigate])

    /*
     * Publish course
     *
     * Final defensive business-rule validation
     * before calling the API.
     */

    const handlePublish = useCallback(async () => {
        if (!course?._id || isWorkflowLoading) {
            return
        }

        clearWorkflowError()

        /*
         * Defensive business-rule validation
         */

        if (!hasPublishedSection) {
            setWorkflowError(
                "The course must contain at least one published section before it can be published."
            )

            return
        }

        const result = await publishCourse(course._id)

        if (!result.success) {
            setWorkflowError(
                getErrorMessage(result.error, "Unable to publish course.")
            )
        }
    }, [
        course?._id,
        isWorkflowLoading,
        hasPublishedSection,
        clearWorkflowError,
        publishCourse,
        getErrorMessage,
    ])

    /*
     * Save course as draft
     */

    const handleSaveDraft = useCallback(async () => {
        if (!course?._id || isWorkflowLoading) {
            return
        }

        clearWorkflowError()

        const result = await saveCourseAsDraft(course._id)

        if (!result.success) {
            setWorkflowError(
                getErrorMessage(result.error, "Unable to save course as draft.")
            )
        }
    }, [
        course?._id,
        isWorkflowLoading,
        clearWorkflowError,
        saveCourseAsDraft,
        getErrorMessage,
    ])

    /*
     * Start remove workflow
     */

    const handleRemove = useCallback(() => {
        if (!course?._id || isWorkflowLoading) {
            return
        }

        clearWorkflowError()

        setShowRemoveDialog(true)
    }, [course?._id, isWorkflowLoading, clearWorkflowError])

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
     * Confirm course removal
     */

    const handleConfirmRemove = useCallback(async () => {
        if (!course?._id || isRemoving) {
            return
        }

        clearWorkflowError()

        const result = await removeCourse(course._id)

        if (!result.success) {
            setWorkflowError(
                getErrorMessage(result.error, "Unable to remove course.")
            )

            return
        }

        setShowRemoveDialog(false)

        navigate("/instructor/courses")
    }, [
        course?._id,
        isRemoving,
        clearWorkflowError,
        removeCourse,
        navigate,
        getErrorMessage,
    ])

    /*
     * Add section
     */

    const handleAddSection = useCallback(() => {
        if (!course?._id || isReorderingSections) {
            return
        }

        clearSectionError()

        navigate(`/instructor/courses/${course._id}/sections/create`)
    }, [course?._id, isReorderingSections, clearSectionError, navigate])

    /*
     * Section details
     */

    const handleSectionDetails = useCallback(
        (section) => {
            if (!course?._id || !section?._id || isReorderingSections) {
                return
            }

            clearSectionError()

            navigate(
                `/instructor/courses/${course._id}/sections/${section._id}/manage`
            )
        },
        [course?._id, isReorderingSections, clearSectionError, navigate]
    )

    /*
     * Reorder sections
     */

    const handleReorderSections = useCallback(
        async (reorderedSections) => {
            if (
                !course?._id ||
                isReorderingSections ||
                !reorderedSections?.length
            ) {
                return false
            }

            clearSectionError()

            const sectionsPayload = reorderedSections.map((section, index) => ({
                sectionId: section._id,
                order: index + 1,
            }))

            const result = await reorderSections(course._id, sectionsPayload)

            if (!result?.success) {
                setSectionError(
                    getErrorMessage(
                        result?.error,
                        "Unable to reorder course sections."
                    )
                )

                return false
            }

            return true
        },
        [
            course?._id,
            isReorderingSections,
            clearSectionError,
            reorderSections,
            getErrorMessage,
        ]
    )

    /*
     * Retry course
     */

    const handleRetryCourse = useCallback(() => {
        if (!courseId) {
            return
        }

        fetchInstructorCourse(courseId)
    }, [courseId, fetchInstructorCourse])

    /*
     * Retry sections
     */

    const handleRetrySections = useCallback(() => {
        if (!courseId) {
            return
        }

        fetchSections(courseId)
    }, [courseId, fetchSections])

    /*
     * Initial loading
     */

    if (isLoading) {
        return (
            <main className={PAGE_CONTAINER}>
                <InstructorCourseDetailsLoadingSkeleton />
            </main>
        )
    }

    /*
     * Course loading error
     */

    if (isCourseError || !course) {
        return (
            <main className={PAGE_CONTAINER}>
                <ErrorState
                    title="Unable to load course"
                    message={
                        isCourseError
                            ? getErrorMessage(
                                  courseError,
                                  "Unable to load course."
                              )
                            : "The requested course could not be found."
                    }
                    onRetry={handleRetryCourse}
                />
            </main>
        )
    }

    /*
     * Section loading error
     */

    if (isSectionsError) {
        return (
            <main className={PAGE_CONTAINER}>
                <ErrorState
                    title="Unable to load course curriculum"
                    message={getErrorMessage(
                        sectionsError,
                        "Unable to load course curriculum."
                    )}
                    onRetry={handleRetrySections}
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
                    pageTitle="Course Management"
                    context={[course.title]}
                    thumbnail={course.thumbnail?.url}
                    icon={Layers3}
                    onBack={handleBack}
                    backLabel="Back to My Courses"
                    status={course.status}
                    showStatus
                />

                {/* Course workflow error */}

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
                        <InstructorCourseOverview course={course} />

                        {/* Section action error */}

                        <div ref={sectionErrorRef} className="scroll-mt-6">
                            <ActionError
                                open={Boolean(sectionError)}
                                message={sectionError}
                                onDismiss={clearSectionError}
                            />
                        </div>

                        <InstructorCourseSectionArea
                            sections={sections}
                            onAddSection={handleAddSection}
                            onSectionDetail={handleSectionDetails}
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
                            onPublishInvalid={setWorkflowError}
                            onSaveDraft={handleSaveDraft}
                            onRemove={handleRemove}
                            loading={isWorkflowLoading}
                            publishEnabled={hasPublishedSection}
                            publishDisabledMessage="The course must contain at least one published section before it can be published."
                        />
                    </aside>
                </div>
            </main>

            <ConfirmDialog
                open={showRemoveDialog}
                title="Remove Course"
                subtitle="This action cannot be undone."
                message={
                    <>
                        Are you sure you want to remove{" "}
                        <span className="font-semibold text-text-primary">
                            "{course.title}"
                        </span>
                        ? This will remove the course from your instructor
                        course list.
                    </>
                }
                confirmLabel="Remove Course"
                cancelLabel="Cancel"
                variant="danger"
                loading={isRemoving}
                onConfirm={handleConfirmRemove}
                onCancel={handleCancelRemove}
            />
        </>
    )
}

export default CourseManagementPage
