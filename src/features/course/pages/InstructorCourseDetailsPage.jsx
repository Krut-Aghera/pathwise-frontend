import { useState } from "react"
import { useParams } from "react-router-dom"

import {
    useFetchInstructorCourseQuery,
    usePublishCourseMutation,
    useSaveCourseAsDraftMutation,
    useRemoveCourseMutation,
} from "../courseApi.js"

import {
    useFetchCourseSectionsQuery,
} from "../../section/sectionApi.js"

import InstructorCourseDetailsHeader from "../components/course-manage/InstructorCourseDetailsHeader.jsx"
import InstructorCourseDetailsActions from "../components/course-manage/InstructorCourseDetailsActions.jsx"
import InstructorCourseOverview from "../components/course-manage/InstructorCourseOverview.jsx"
import InstructorCourseInformation from "../components/course-manage/InstructorCourseInformation.jsx"
import InstructorCourseDetailsLoadingSkeleton from "../components/skeletons/InstructorCourseDetailsSkeleton.jsx"
import InstructorCourseRemoveDialog from "../components/course-manage/InstructorCourseRemoveDialog.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"
import InstructorCourseCurriculum from "../components/course-manage/InstructorCourseCurriculum.jsx"

const InstructorCourseDetailsPage = () => {

    const { courseId } = useParams()


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
    // Mutations

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
    // Remove dialog

    const [courseToRemove, setCourseToRemove] = useState(null)


    ///////////////////////////////////////////////////////////////
    // Data

    const course = courseResponse?.data

    const sections = sectionsResponse?.data || []


    ///////////////////////////////////////////////////////////////
    // Loading

    const isLoading =
        isCourseLoading ||
        isSectionsLoading


    ///////////////////////////////////////////////////////////////
    // Error message helper

    const getErrorMessage = (error, fallback) => {

        return (
            error?.errors?.[0]?.message ||
            error?.message ||
            fallback
        )
    }


    ///////////////////////////////////////////////////////////////
    // Publish course

    const handlePublish = async (course) => {

        if (
            !course?._id ||
            isPublishing ||
            isSavingDraft ||
            isRemoving
        ) {
            return
        }


        try {

            await publishCourse(course._id).unwrap()

        } catch (error) {

            console.error(
                "Failed to publish course:",
                error
            )

        }

    }


    ///////////////////////////////////////////////////////////////
    // Save course as draft

    const handleDraft = async (course) => {

        if (
            !course?._id ||
            isPublishing ||
            isSavingDraft ||
            isRemoving
        ) {
            return
        }


        try {

            await saveCourseAsDraft(course._id).unwrap()

        } catch (error) {

            console.error(
                "Failed to save course as draft:",
                error
            )

        }

    }


    ///////////////////////////////////////////////////////////////
    // Open remove dialog

    const handleRemove = (course) => {

        if (
            !course?._id ||
            isRemoving
        ) {
            return
        }


        setCourseToRemove(course)

    }


    ///////////////////////////////////////////////////////////////
    // Cancel remove

    const handleCancelRemove = () => {

        if (isRemoving) {
            return
        }


        setCourseToRemove(null)

    }


    ///////////////////////////////////////////////////////////////
    // Confirm remove

    const handleConfirmRemove = async () => {

        if (
            !courseToRemove?._id ||
            isRemoving
        ) {
            return
        }


        try {

            await removeCourse(
                courseToRemove._id
            ).unwrap()

            setCourseToRemove(null)

        } catch (error) {

            console.error(
                "Failed to remove course:",
                error
            )

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

    if (isCourseError || !course) {

        const message = isCourseError
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

        const message = getErrorMessage(
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

        </>
    )
}


export default InstructorCourseDetailsPage