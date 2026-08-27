import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
    useFetchInstructorCoursesQuery,
    usePublishCourseMutation,
    useRemoveCourseMutation,
    useSaveCourseAsDraftMutation,
} from "../courseApi.js"

import InstructorCoursesHeader from "../components/course-manage/InstructorCoursesHeader.jsx"
import InstructorCourseGrid from "../components/course-manage/InstructorCourseGrid.jsx"
import InstructorCourseEmpty from "../components/course-manage/InstructorCourseEmpty.jsx"
import InstructorCourseError from "../components/course-manage/InstructorCourseError.jsx"
import InstructorCourseLoadingSkeleton from "../components/course-manage/InstructorCourseLoadingSkeleton.jsx"
import InstructorCourseRemoveDialog from "../components/course-manage/InstructorCourseRemoveDialog.jsx"


const InstructorCoursesPage = () => {

    const navigate = useNavigate()


    ///////////////////////////////////////////////////////////////
    // Course list

    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
    } = useFetchInstructorCoursesQuery()


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
    // Courses

    const courses = data?.data || []


    ///////////////////////////////////////////////////////////////
    // Create course

    const handleCreateCourse = () => {

        navigate("/instructor/courses/create")

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
    // Loading

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

                <InstructorCourseLoadingSkeleton />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Error

    if (isError) {

        const errorMessage =
            error?.errors?.[0]?.message ||
            error?.message ||
            "Unable to load your courses."


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

                <InstructorCourseError
                    message={errorMessage}
                    onRetry={refetch}
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

                {/* Header */}

                <InstructorCoursesHeader
                    courseCount={courses.length}
                    onCreateCourse={handleCreateCourse}
                />


                {/* Content */}

                {courses.length === 0 ? (

                    <InstructorCourseEmpty />

                ) : (

                    <InstructorCourseGrid
                        courses={courses}
                        onPublish={handlePublish}
                        onDraft={handleDraft}
                        onRemove={handleRemove}
                    />

                )}

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


export default InstructorCoursesPage