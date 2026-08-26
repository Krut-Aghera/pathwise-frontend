import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

import {
    useCreateCourseMutation,
} from "../courseApi.js"

import CourseBasicInformation from "../components/create-course/CourseBasicInformation"
import CourseDetails from "../components/create-course/CourseDetails"
import CourseThumbnailUpload from "../components/create-course/CourseThumbnailUpload"
import CourseLearningOutcomes from "../components/create-course/CourseLearningOutcomes"
import CourseTargetAudience from "../components/create-course/CourseTargetAudience"
import CourseRequirements from "../components/create-course/CourseRequirements"
import CourseFormActions from "../components/create-course/CourseFormActions"


const CourseCreatePage = () => {

    const navigate = useNavigate()


    const [
        createCourse,
        {
            isLoading,
            isError,
            error,
        },
    ] = useCreateCourseMutation()


    const {
        register,
        control,
        handleSubmit,
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
            thumbnail: null,
        },
    })


    ///////////////////////////////////////////////////////////////
    // Submit

    const onSubmit = async (formData) => {

        const multipartFormData = new FormData()


        // Basic information

        multipartFormData.append(
            "title",
            formData.title
        )

        multipartFormData.append(
            "subtitle",
            formData.subtitle
        )

        multipartFormData.append(
            "description",
            formData.description
        )

        // Course details

        multipartFormData.append(
            "price",
            formData.price
        )

        multipartFormData.append(
            "language",
            formData.language
        )

        multipartFormData.append(
            "level",
            formData.level
        )

        // Learning outcomes

        formData.learningOutcomes.forEach((outcome) => {

            multipartFormData.append(
                "learningOutcomes",
                outcome
            )

        })

        // Target audience

        formData.targetAudience.forEach((audience) => {

            multipartFormData.append(
                "targetAudience",
                audience
            )

        })

        // Requirements

        formData.requirements.forEach((requirement) => {

            multipartFormData.append(
                "requirements",
                requirement
            )

        })

        // Thumbnail

        const thumbnail = formData.thumbnail?.[0]

        if (thumbnail) {

            multipartFormData.append(
                "thumbnail",
                thumbnail
            )

        }

        // API request

        try {

            const response = await createCourse(
                multipartFormData
            ).unwrap()

            console.log(
                "Course created successfully:",
                response
            )

            navigate("/instructor/courses")

        } catch (error) {

            console.error(
                "Course creation failed:",
                error
            )

        }

    }


    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {
        navigate("/instructor/dashboard")
    }


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

            <header className="mb-8">

                <h1 className="
                    font-accent
                    text-2xl
                    font-semibold
                    text-text-primary

                    sm:text-3xl
                ">
                    Create Course
                </h1>

                <p className="
                    mt-2
                    max-w-2xl
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">
                    Create a new course and share your knowledge with students.
                </p>

            </header>


            {/* API Error */}

            {isError && (
                <div className="
                    mb-6
                    rounded-lg
                    border
                    border-status-danger/30
                    bg-status-danger/10
                    px-4
                    py-3

                    font-body
                    text-sm
                    leading-5
                    text-status-danger
                ">
                    {error?.errors?.[0]?.message ||
                        error?.message ||
                        "Unable to create course. Please try again."}
                </div>
            )}


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


                <CourseThumbnailUpload
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
                    isLoading={isLoading}
                    onCancel={handleCancel}
                />

            </form>

        </main>
    )
}


export default CourseCreatePage