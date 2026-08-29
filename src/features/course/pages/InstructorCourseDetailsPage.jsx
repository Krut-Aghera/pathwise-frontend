import { useState } from "react"

import {
    useNavigate,
    useParams,
} from "react-router-dom"


import {
    useFetchInstructorCourseQuery,
    usePublishCourseMutation,
    useSaveCourseAsDraftMutation,
    useRemoveCourseMutation,
} from "../courseApi.js"


import {
    useFetchCourseSectionsQuery,
    useRemoveSectionMutation,
    useReorderSectionsMutation,
} from "../../section/sectionApi.js"


import InstructorCourseDetailsHeader
    from "../components/course-manage/InstructorCourseDetailsHeader.jsx"

import InstructorCourseDetailsActions
    from "../components/course-manage/InstructorCourseDetailsActions.jsx"

import InstructorCourseOverview
    from "../components/course-manage/InstructorCourseOverview.jsx"

import InstructorCourseInformation
    from "../components/course-manage/InstructorCourseInformation.jsx"

import InstructorCourseDetailsLoadingSkeleton
    from "../components/skeletons/InstructorCourseDetailsSkeleton.jsx"

import InstructorCourseRemoveDialog
    from "../components/course-manage/InstructorCourseRemoveDialog.jsx"

import InstructorCourseCurriculum
    from "../components/course-manage/InstructorCourseCurriculum.jsx"

import ErrorState
    from "../../../components/ui/ErrorState.jsx"

import InstructorCourseSectionRemoveDialog
    from "../../section/components/InstructorCourseSectionRemoveDialog.jsx"


const InstructorCourseDetailsPage = () => {

    const {
        courseId,
    } = useParams()


    const navigate = useNavigate()


    ///////////////////////////////////////////////////////////////
    // Course

    const {
        data: courseResponse,
        isLoading: isCourseLoading,
        isError: isCourseError,
        error: courseError,
        refetch: refetchCourse,
    } = useFetchInstructorCourseQuery(courseId)


    ///////////////////////////////////////////////////////////////
    // Course sections

    const {
        data: sectionsResponse,
        isLoading: isSectionsLoading,
        isError: isSectionsError,
        error: sectionsError,
        refetch: refetchSections,
    } = useFetchCourseSectionsQuery(courseId)


    ///////////////////////////////////////////////////////////////
    // Course mutations

    const [
        publishCourse,
        {
            isLoading: isPublishing,
        },
    ] = usePublishCourseMutation()


    const [
        saveCourseAsDraft,
        {
            isLoading: isSavingDraft,
        },
    ] = useSaveCourseAsDraftMutation()


    const [
        removeCourse,
        {
            isLoading: isRemoving,
        },
    ] = useRemoveCourseMutation()


    ///////////////////////////////////////////////////////////////
    // Section mutations

    const [
        removeSection,
        {
            isLoading: isRemovingSection,
        },
    ] = useRemoveSectionMutation()


    const [
        reorderSections,
        {
            isLoading: isReorderingSections,
        },
    ] = useReorderSectionsMutation()


    ///////////////////////////////////////////////////////////////
    // Dialog state

    const [
        courseToRemove,
        setCourseToRemove,
    ] = useState(null)


    const [
        sectionToRemove,
        setSectionToRemove,
    ] = useState(null)


    ///////////////////////////////////////////////////////////////
    // Action error

    const [
        actionError,
        setActionError,
    ] = useState(null)


    ///////////////////////////////////////////////////////////////
    // Data

    const course =
        courseResponse?.data


    const sections =
        sectionsResponse?.data || []


    ///////////////////////////////////////////////////////////////
    // Loading

    const isLoading =
        isCourseLoading ||
        isSectionsLoading


    ///////////////////////////////////////////////////////////////
    // Error message helper

    const getErrorMessage = (
        error,
        fallback
    ) => {

        return (
            error?.errors?.[0]?.message ||
            error?.message ||
            fallback
        )
    }


    ///////////////////////////////////////////////////////////////
    // Clear action error

    const clearActionError = () => {
        setActionError(null)
    }


    ///////////////////////////////////////////////////////////////
    // Add section

    const handleAddSection = () => {

        if (!course?._id) {
            return
        }


        clearActionError()


        navigate(
            `/instructor/courses/${course._id}/sections/create`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Edit section

    const handleEditSection = (section) => {

        if (
            !course?._id ||
            !section?._id
        ) {
            return
        }


        clearActionError()


        navigate(
            `/instructor/courses/${course._id}/sections/${section._id}/edit`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Add lecture

    const handleAddLecture = (section) => {

        if (
            !course?._id ||
            !section?._id
        ) {
            return
        }


        clearActionError()


        navigate(
            `/instructor/courses/${course._id}/sections/${section._id}/lectures/create`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Publish course

    const handlePublish = async (course) => {

        if (
            !course?._id ||
            isPublishing ||
            isSavingDraft ||
            isRemoving ||
            isRemovingSection ||
            isReorderingSections
        ) {
            return
        }


        clearActionError()


        try {

            await publishCourse(
                course._id
            ).unwrap()

        } catch (error) {

            const message =
                getErrorMessage(
                    error,
                    "Unable to publish this course."
                )


            setActionError(message)

        }
    }


    ///////////////////////////////////////////////////////////////
    // Save course as draft

    const handleDraft = async (course) => {

        if (
            !course?._id ||
            isPublishing ||
            isSavingDraft ||
            isRemoving ||
            isRemovingSection ||
            isReorderingSections
        ) {
            return
        }


        clearActionError()


        try {

            await saveCourseAsDraft(
                course._id
            ).unwrap()

        } catch (error) {

            const message =
                getErrorMessage(
                    error,
                    "Unable to save this course as draft."
                )


            setActionError(message)

        }
    }


    ///////////////////////////////////////////////////////////////
    // Open remove course dialog

    const handleRemove = (course) => {

        if (
            !course?._id ||
            isRemoving ||
            isRemovingSection ||
            isReorderingSections
        ) {
            return
        }


        clearActionError()


        setCourseToRemove(course)
    }


    ///////////////////////////////////////////////////////////////
    // Cancel remove course

    const handleCancelRemove = () => {

        if (isRemoving) {
            return
        }


        setCourseToRemove(null)
    }


    ///////////////////////////////////////////////////////////////
    // Confirm remove course

    const handleConfirmRemove = async () => {

        if (
            !courseToRemove?._id ||
            isRemoving ||
            isRemovingSection ||
            isReorderingSections
        ) {
            return
        }


        clearActionError()


        try {

            await removeCourse(
                courseToRemove._id
            ).unwrap()


            setCourseToRemove(null)

        } catch (error) {

            const message =
                getErrorMessage(
                    error,
                    "Unable to remove this course."
                )


            setActionError(message)

        }
    }


    ///////////////////////////////////////////////////////////////
    // Open remove section dialog

    const handleRemoveSection = (section) => {

        if (
            !section?._id ||
            isRemovingSection ||
            isReorderingSections
        ) {
            return
        }


        clearActionError()


        setSectionToRemove(section)
    }


    ///////////////////////////////////////////////////////////////
    // Cancel remove section

    const handleCancelRemoveSection = () => {

        if (isRemovingSection) {
            return
        }


        setSectionToRemove(null)
    }


    ///////////////////////////////////////////////////////////////
    // Confirm remove section

    const handleConfirmRemoveSection = async () => {

        if (
            !sectionToRemove?._id ||
            isRemovingSection ||
            isReorderingSections
        ) {
            return
        }


        clearActionError()


        try {

            await removeSection({
                sectionId: sectionToRemove._id,
                courseId: course._id,
            }).unwrap()


            setSectionToRemove(null)

        } catch (error) {

            const message =
                getErrorMessage(
                    error,
                    "Unable to remove this section."
                )


            setActionError(message)

        }
    }


    ///////////////////////////////////////////////////////////////
    // Reorder sections

    const handleReorderSections = async (
        reorderedSections
    ) => {

        if (
            !course?._id ||
            isReorderingSections ||
            isRemovingSection ||
            reorderedSections.length === 0
        ) {
            return false
        }


        clearActionError()


        const sectionsPayload =
            reorderedSections.map(
                (section, index) => ({
                    sectionId: section._id,
                    order: index + 1,
                })
            )


        try {

            await reorderSections({
                courseId: course._id,
                sections: sectionsPayload,
            }).unwrap()


            return true

        } catch (error) {

            const message =
                getErrorMessage(
                    error,
                    "Unable to reorder course sections."
                )


            setActionError(message)


            return false
        }
    }


    ///////////////////////////////////////////////////////////////
    // Loading state

    if (isLoading) {

        return (
            <main className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <InstructorCourseDetailsLoadingSkeleton />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Course error

    if (
        isCourseError ||
        !course
    ) {

        const message =
            isCourseError
                ? getErrorMessage(
                    courseError,
                    "Unable to load this course."
                )
                : "The requested course could not be found."


        return (
            <main className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <ErrorState
                    title="Unable to load course"
                    message={message}
                    onRetry={refetchCourse}
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Sections error

    if (isSectionsError) {

        const message =
            getErrorMessage(
                sectionsError,
                "Unable to load the course curriculum."
            )


        return (
            <main className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <ErrorState
                    title="Unable to load curriculum"
                    message={message}
                    onRetry={refetchSections}
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <>

            <main className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                {/* Course Header */}

                <InstructorCourseDetailsHeader
                    course={course}
                />


                {/* Course Actions */}

                <div className="mt-5">

                    <InstructorCourseDetailsActions
                        course={course}
                        onPublish={handlePublish}
                        onDraft={handleDraft}
                        onRemove={handleRemove}
                    />

                </div>


                {/* Action Error */}

                {actionError && (
                    <div className="
                        mt-5
                        rounded-lg
                        border
                        border-status-danger/30
                        bg-status-danger/10
                        px-4
                        py-3
                    ">
                        <p className="
                            font-body
                            text-sm
                            font-medium
                            text-status-danger
                        ">
                            {actionError}
                        </p>
                    </div>
                )}


                {/* Main Content */}

                <div className="
                    mt-6

                    grid
                    grid-cols-1
                    gap-6

                    lg:grid-cols-[minmax(0,1fr)_360px]
                ">

                    {/* Main column */}

                    <div className="
                        min-w-0
                        space-y-6
                    ">

                        {/* Overview */}

                        <InstructorCourseOverview
                            course={course}
                        />


                        {/* Curriculum */}

                        <InstructorCourseCurriculum
                            course={course}
                            sections={sections}
                            onAddSection={handleAddSection}
                            onEditSection={handleEditSection}
                            onAddLecture={handleAddLecture}
                            onRemoveSection={handleRemoveSection}
                            onReorderSections={handleReorderSections}
                            isReorderingSections={isReorderingSections}
                        />

                    </div>


                    {/* Sidebar */}

                    <aside className="
                        min-w-0
                        space-y-6
                    ">

                        <InstructorCourseInformation
                            course={course}
                        />

                    </aside>

                </div>

            </main>


            {/* Remove Course Dialog */}

            <InstructorCourseRemoveDialog
                course={courseToRemove}
                open={Boolean(courseToRemove)}
                loading={isRemoving}
                onConfirm={handleConfirmRemove}
                onCancel={handleCancelRemove}
            />


            {/* Remove Section Dialog */}

            <InstructorCourseSectionRemoveDialog
                section={sectionToRemove}
                open={Boolean(sectionToRemove)}
                loading={isRemovingSection}
                onConfirm={handleConfirmRemoveSection}
                onCancel={handleCancelRemoveSection}
            />

        </>
    )
}


export default InstructorCourseDetailsPage
