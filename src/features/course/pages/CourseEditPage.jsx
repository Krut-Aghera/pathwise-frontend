import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Image } from "lucide-react"

import {
    useFetchInstructorCourseQuery,
    useUpdateCourseMutation,
} from "../courseApi.js"

import CourseBasicInformation from "../components/create-course/CourseBasicInformation"
import CourseDetails from "../components/create-course/CourseDetails"
import CourseLearningOutcomes from "../components/create-course/CourseLearningOutcomes"
import CourseTargetAudience from "../components/create-course/CourseTargetAudience"
import CourseRequirements from "../components/create-course/CourseRequirements"
import CourseFormActions from "../components/create-course/CourseFormActions"

import InstructorCourseLoadingSkeleton from "../components/course-manage/InstructorCourseLoadingSkeleton"
import InstructorCourseError from "../components/course-manage/InstructorCourseError"

import Button from "../../../components/ui/Button"


const CourseEditPage = () => {

    const navigate = useNavigate()

    const { courseId } = useParams()


    ///////////////////////////////////////////////////////////////
    // Form

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            title: "",
            subtitle: "",
            description: "",
            price: "",
            language: "",
            level: "",
            learningOutcomes: [""],
            targetAudience: [""],
            requirements: [],
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
    // Update course

    const [
        updateCourse,
        {
            isLoading: isUpdating,
        },
    ] = useUpdateCourseMutation()


    ///////////////////////////////////////////////////////////////
    // Course

    const course = data?.data


    ///////////////////////////////////////////////////////////////
    // Populate form

    useEffect(() => {

        if (!course) {
            return
        }


        reset({
            title: course.title ?? "",
            subtitle: course.subtitle ?? "",
            description: course.description ?? "",
            price: course.price ?? "",
            language: course.language ?? "",
            level: course.level ?? "",

            learningOutcomes:
                course.learningOutcomes?.length
                    ? course.learningOutcomes
                    : [""],

            targetAudience:
                course.targetAudience?.length
                    ? course.targetAudience
                    : [""],

            requirements:
                course.requirements ?? [],
        })

    }, [course, reset])


    ///////////////////////////////////////////////////////////////
    // Submit

    const onSubmit = async (formData) => {

        try {

            await updateCourse({
                courseId,
                courseData: formData,
            }).unwrap()


            navigate("/instructor/courses")

        } catch (error) {

            console.error(
                "Failed to update course:",
                error
            )

        }

    }


    ///////////////////////////////////////////////////////////////
    // Change thumbnail

    const handleChangeThumbnail = () => {

        navigate(
            `/instructor/courses/${courseId}/thumbnail`
        )

    }


    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {
        navigate("/instructor/courses")
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
                    message="The course you're trying to edit could not be found."
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
            max-w-5xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        ">

            {/* Page Header */}

            <header className="
                mb-8

                flex
                flex-col
                gap-4

                sm:flex-row
                sm:items-end
                sm:justify-between
            ">

                <div>

                    <h1 className="
                        font-accent
                        text-2xl
                        font-semibold
                        text-text-primary

                        sm:text-3xl
                    ">
                        Edit Course
                    </h1>

                    <p className="
                        mt-2
                        max-w-2xl
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    ">
                        Update your course information and keep your course
                        details up to date.
                    </p>

                </div>


                {/* Change Thumbnail */}

                <Button
                    type="button"
                    variant="warning"
                    className="
                        border
                        border-warning
                        bg-transparent
                        text-warning

                        shadow-sm
                        transition-all
                        duration-200

                        hover:bg-warning
                        hover:text-white
                        hover:shadow-md

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-warning
                        focus-visible:ring-offset-2
                    "
                    onClick={handleChangeThumbnail}
                >

                    <Image size={16} />

                    Change Thumbnail

                </Button>

            </header>


            {/* Course Form */}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >

                <CourseBasicInformation
                    register={register}
                    errors={errors}
                />


                <CourseDetails
                    register={register}
                    errors={errors}
                />


                <CourseLearningOutcomes
                    control={control}
                    register={register}
                    errors={errors}
                />


                <CourseTargetAudience
                    control={control}
                    register={register}
                    errors={errors}
                />


                <CourseRequirements
                    control={control}
                    register={register}
                    errors={errors}
                />


                <CourseFormActions
                    onCancel={handleCancel}
                    loading={isUpdating}
                />

            </form>

        </main>
    )
}


export default CourseEditPage
