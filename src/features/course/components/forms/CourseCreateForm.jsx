import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

import FormActions from "../../../../components/form/FormActions.jsx"

import CourseFormBasicInformation from "../form-children/CourseFormBasicInformation.jsx"
import CourseFormStateDetails from "../form-children/CourseFormStateDetails.jsx"
import CourseFormThumbnailUpload from "../form-children/CourseFormThumbnailUpload.jsx"
import CourseFormLearningOutcomes from "../form-children/CourseFormLearningOutcomes.jsx"
import CourseFormTargetAudience from "../form-children/CourseFormTargetAudience.jsx"
import CourseFormRequirements from "../form-children/CourseFormRequirements.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const CourseCreateForm = ({
    onSubmit,
    onCancel,
    loading = false,
    validationRules,
}) => {
    const globalErrorRef = useRef(null)

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

    // Submit
    const handleFormSubmit = async (formData) => {
        clearErrors("root")

        const learningOutcomes = formData.learningOutcomes
            .map((item) => item.trim())
            .filter(Boolean)

        const targetAudience = formData.targetAudience
            .map((item) => item.trim())
            .filter(Boolean)

        const requirements = formData.requirements
            .map((item) => item.trim())
            .filter(Boolean)

        // Create multipart form data
        const multipartFormData = new FormData()

        multipartFormData.append("title", formData.title)
        multipartFormData.append("subtitle", formData.subtitle)
        multipartFormData.append("description", formData.description)
        multipartFormData.append("price", formData.price)
        multipartFormData.append("language", formData.language)
        multipartFormData.append("level", formData.level)

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

        // Thumbnail
        const thumbnail = formData.thumbnail?.[0]

        if (thumbnail) {
            multipartFormData.append("thumbnail", thumbnail)
        }

        // Send to page
        const result = await onSubmit(multipartFormData)

        if (result?.success) {
            return
        }

        const error = result?.error

        // Backend validation errors
        if (
            error?.statusCode === 400 &&
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

        // Thumbnail validation error
        if (error?.statusCode === 400 && error?.message) {
            setError("thumbnail", {
                type: "server",
                message: error.message,
            })

            return
        }

        // General server error
        setError("root", {
            type: "server",
            message:
                error?.message || "Unable to create course. Please try again.",
        })
    }

    // Loading
    const isFormLoading = loading || isSubmitting

    /////////////////////////////////////////////////////////////////////////////////////////////////
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

            <CourseFormBasicInformation
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Course Details */}

            <CourseFormStateDetails
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Thumbnail */}

            <CourseFormThumbnailUpload
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Learning Outcomes */}

            <CourseFormLearningOutcomes
                control={control}
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Target Audience */}

            <CourseFormTargetAudience
                control={control}
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Requirements */}

            <CourseFormRequirements
                control={control}
                register={register}
                errors={errors}
                validationRules={validationRules}
            />

            {/* Actions */}

            <FormActions loading={isFormLoading} onCancel={onCancel} />
        </form>
    )
}

export default CourseCreateForm
