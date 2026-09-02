import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

import CourseBasicInformation from "../create-course/CourseBasicInformation.jsx"
import CourseDetails from "../create-course/CourseDetails.jsx"
import CourseThumbnailUpload from "../create-course/CourseThumbnailUpload.jsx"
import CourseLearningOutcomes from "../create-course/CourseLearningOutcomes.jsx"
import CourseTargetAudience from "../create-course/CourseTargetAudience.jsx"
import CourseRequirements from "../create-course/CourseRequirements.jsx"
import CourseFormActions from "../create-course/CourseFormActions.jsx"

const CourseCreateForm = ({
    onSubmit,
    onCancel,
    loading = false,
    validationRules,
}) => {
    const globalErrorRef = useRef(null)

    ///////////////////////////////////////////////////////////////
    // Form

    const {
        register,
        control,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
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
            requirements: [""],
            thumbnail: null,
        },

        mode: "onBlur",

        shouldFocusError: true,
    })

    ///////////////////////////////////////////////////////////////
    // Global error scroll

    useEffect(() => {
        if (!errors.root?.message) {
            return
        }

        requestAnimationFrame(() => {
            globalErrorRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })

            globalErrorRef.current?.focus()
        })
    }, [errors.root?.message])

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        clearErrors("root")

        /////////////////////////////////////////////////////////////
        // Normalize array fields

        const learningOutcomes = formData.learningOutcomes
            .map((item) => item.trim())
            .filter(Boolean)

        const targetAudience = formData.targetAudience
            .map((item) => item.trim())
            .filter(Boolean)

        const requirements = formData.requirements
            .map((item) => item.trim())
            .filter(Boolean)

        /////////////////////////////////////////////////////////////
        // Create multipart form data

        const multipartFormData = new FormData()

        /////////////////////////////////////////////////////////////
        // Basic information

        multipartFormData.append("title", formData.title)

        multipartFormData.append("subtitle", formData.subtitle)

        multipartFormData.append("description", formData.description)

        /////////////////////////////////////////////////////////////
        // Course details

        multipartFormData.append("price", formData.price)

        multipartFormData.append("language", formData.language)

        multipartFormData.append("level", formData.level)

        /////////////////////////////////////////////////////////////
        // Array fields

        multipartFormData.append(
            "learningOutcomes",
            JSON.stringify(learningOutcomes)
        )

        multipartFormData.append(
            "targetAudience",
            JSON.stringify(targetAudience)
        )

        multipartFormData.append("requirements", JSON.stringify(requirements))

        /////////////////////////////////////////////////////////////
        // Thumbnail

        const thumbnail = formData.thumbnail?.[0]

        if (thumbnail) {
            multipartFormData.append("thumbnail", thumbnail)
        }

        /////////////////////////////////////////////////////////////
        // Send to page

        try {
            await onSubmit(multipartFormData)
        } catch (error) {
            ///////////////////////////////////////////////////////////
            // Backend validation errors

            if (
                error?.status === 400 &&
                Array.isArray(error?.errors) &&
                error.errors.length > 0
            ) {
                error.errors.forEach(({ field, message }) => {
                    if (!field) {
                        return
                    }

                    setError(field, {
                        type: "server",
                        message,
                    })
                })

                return
            }

            /////////////////////////////////////////////////////////////
            // Thumbnail validation error

            if (error?.status === 400 && error?.message) {
                setError("thumbnail", {
                    type: "server",
                    message: error.message,
                })

                return
            }

            ///////////////////////////////////////////////////////////
            // General server error

            setError("root", {
                type: "server",
                message:
                    error?.message ||
                    "Unable to create course. Please try again.",
            })
        }
    }

    ///////////////////////////////////////////////////////////////
    // Loading

    const isFormLoading = loading || isSubmitting

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
            className="space-y-6"
        >
            {/* Global server error */}

            {errors.root?.message && (
                <div
                    ref={globalErrorRef}
                    role="alert"
                    tabIndex={-1}
                    className="
                        scroll-mt-6

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

                        focus:outline-none
                        focus:ring-2
                        focus:ring-status-danger/20
                    "
                >
                    {errors.root.message}
                </div>
            )}

            {/* Basic Information */}

            <CourseBasicInformation
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Course Details */}

            <CourseDetails
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Thumbnail */}

            <CourseThumbnailUpload
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Learning Outcomes */}

            <CourseLearningOutcomes
                control={control}
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Target Audience */}

            <CourseTargetAudience
                control={control}
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Requirements */}

            <CourseRequirements
                control={control}
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Actions */}

            <CourseFormActions loading={isFormLoading} onCancel={onCancel} />
        </form>
    )
}

export default CourseCreateForm
