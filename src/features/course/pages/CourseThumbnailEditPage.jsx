import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"

import {
    useFetchInstructorCourseQuery,
    useUpdateCourseThumbnailMutation,
} from "../courseApi.js"

import CourseThumbnailUpload from "../components/create-course/CourseThumbnailUpload"

import InstructorCourseLoadingSkeleton from "../components/course-manage/InstructorCourseLoadingSkeleton"
import InstructorCourseError from "../components/course-manage/InstructorCourseError"

import Button from "../../../components/ui/Button"


const CourseThumbnailEditPage = () => {

    const navigate = useNavigate()

    const { courseId } = useParams()


    ///////////////////////////////////////////////////////////////
    // Form

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            thumbnail: null,
        },
    })


    ///////////////////////////////////////////////////////////////
    // Fetch course

    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
    } = useFetchInstructorCourseQuery(courseId)


    ///////////////////////////////////////////////////////////////
    // Thumbnail mutation

    const [
        updateCourseThumbnail,
        {
            isLoading: isUpdating,
        },
    ] = useUpdateCourseThumbnailMutation()


    ///////////////////////////////////////////////////////////////
    // Course

    const course = data?.data


    ///////////////////////////////////////////////////////////////
    // Submit

    const onSubmit = async (formData) => {

        const thumbnailFile = formData.thumbnail?.[0]


        if (!thumbnailFile) {
            return
        }


        try {

            await updateCourseThumbnail({
                courseId,
                thumbnail: thumbnailFile,
            }).unwrap()


            navigate("/instructor/courses")

        } catch (error) {

            console.error(
                "Failed to update course thumbnail:",
                error
            )

        }

    }


    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {
        navigate(`/instructor/courses/${course._id}/edit`)
    }


    ///////////////////////////////////////////////////////////////
    // Loading

    if (isLoading) {

        return (
            <main className="
                mx-auto
                w-full
                max-w-5xl

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
            "Unable to load the course."


        return (
            <main className="
                mx-auto
                w-full
                max-w-5xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <InstructorCourseError
                    title="Unable to load course"
                    message={errorMessage}
                    onRetry={refetch}
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Course not found

    if (!course) {

        return (
            <main className="
                mx-auto
                w-full
                max-w-5xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <InstructorCourseError
                    title="Course not found"
                    message="The course you're trying to update could not be found."
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <main className="
            mx-auto
            w-full
            max-w-4xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        ">

            {/* Header */}

            <header className="mb-8">

                <h1 className="
                    font-accent
                    text-2xl
                    font-semibold
                    text-text-primary

                    sm:text-3xl
                ">
                    Update Course Thumbnail
                </h1>

                <p className="
                    mt-2
                    max-w-2xl
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">
                    Replace the thumbnail displayed for your course.
                </p>

            </header>


            {/* Form */}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >

                <CourseThumbnailUpload
                    register={register}
                    errors={errors}
                    currentThumbnail={course.thumbnail?.url}
                />


                {/* Actions */}

                <div className="
                    flex
                    flex-col-reverse
                    gap-3

                    sm:flex-row
                    sm:justify-end
                ">

                    <Button
                        type="button"
                        onClick={handleCancel}
                        disabled={isUpdating}
                        className="
                            w-full
                            sm:w-auto
                        "
                    >
                        Cancel
                    </Button>


                    <Button
                        type="submit"
                        loading={isUpdating}
                        className="
                            w-full
                            sm:w-auto
                        "
                    >
                        Update Thumbnail
                    </Button>

                </div>

            </form>

        </main>
    )
}


export default CourseThumbnailEditPage