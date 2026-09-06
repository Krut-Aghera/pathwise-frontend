import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

import FormActions from "../../../../components/form/FormActions.jsx"

import CourseFormBasicInformation from "../form-children/CourseFormBasicInformation.jsx"
import CourseFormStateDetails from "../form-children/CourseFormStateDetails.jsx"
import CourseFormLearningOutcomes from "../form-children/CourseFormLearningOutcomes.jsx"
import CourseFormTargetAudience from "../form-children/CourseFormTargetAudience.jsx"
import CourseFormRequirements from "../form-children/CourseFormRequirements.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const CourseUpdateForm = ({
    course,
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
        reset,
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
        },

        mode: "onBlur",

        shouldFocusError: true,
    })

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

            learningOutcomes: course.learningOutcomes?.length
                ? course.learningOutcomes
                : [""],

            targetAudience: course.targetAudience?.length
                ? course.targetAudience
                : [""],

            requirements: course.requirements?.length
                ? course.requirements
                : [""],
        })
    }, [course, reset])

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

        const courseData = {
            title: formData.title,
            subtitle: formData.subtitle,
            description: formData.description,
            price: formData.price,
            language: formData.language,
            level: formData.level,
            learningOutcomes,
            targetAudience,
            requirements,
        }

        // Send to page
        const result = await onSubmit(courseData)

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

        // General server error
        setError("root", {
            type: "server",

            message:
                error?.message || "Unable to update course. Please try again.",
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

            <FormActions onCancel={onCancel} loading={isFormLoading} />
        </form>
    )
}

export default CourseUpdateForm
