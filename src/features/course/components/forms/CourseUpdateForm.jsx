import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

import CourseBasicInformation from "../create-course/CourseBasicInformation.jsx"
import CourseDetails from "../create-course/CourseDetails.jsx"
import CourseLearningOutcomes from "../create-course/CourseLearningOutcomes.jsx"
import CourseTargetAudience from "../create-course/CourseTargetAudience.jsx"
import CourseRequirements from "../create-course/CourseRequirements.jsx"
import CourseFormActions from "../create-course/CourseFormActions.jsx"

const CourseUpdateForm = ({
    course,
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

        ///////////////////////////////////////////////////////////
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

        ///////////////////////////////////////////////////////////
        // Update payload

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

        ///////////////////////////////////////////////////////////
        // Send to page

        try {
            await onSubmit(courseData)
        } catch (error) {
            /////////////////////////////////////////////////////////
            // Backend validation errors

            if (error?.statusCode === 400 && Array.isArray(error?.errors)) {
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

            /////////////////////////////////////////////////////////
            // General server error

            setError("root", {
                type: "server",

                message:
                    error?.message ||
                    "Unable to update course. Please try again.",
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

            <CourseFormActions onCancel={onCancel} loading={isFormLoading} />
        </form>
    )
}

export default CourseUpdateForm
