import FormField from "../../../../components/form/FormField"
import Input from "../../../../components/form/Input"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const CourseFormBasicInformation = ({ register, errors, validationRules }) => {
    return (
        <section
            className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            p-5

            sm:p-6
        "
        >
            {/* Section Header */}

            <div className="mb-6">
                <h2
                    className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                "
                >
                    Basic Information
                </h2>

                <p
                    className="
                    mt-1
                    font-body
                    text-sm
                    leading-5
                    text-text-secondary
                "
                >
                    Provide the basic information about your course.
                </p>
            </div>

            {/* Fields */}

            <div className="space-y-5">
                {/* Title */}

                <FormField
                    label="Course Title"
                    htmlFor="course-title"
                    error={errors.title?.message}
                    required
                >
                    <Input
                        id="course-title"
                        type="text"
                        autoComplete="off"
                        placeholder="Enter your course title"
                        error={Boolean(errors.title)}
                        aria-describedby={
                            errors.title ? "course-title-error" : undefined
                        }
                        {...register("title", validationRules.title)}
                    />
                </FormField>

                {/* Subtitle */}

                <FormField
                    label="Subtitle"
                    htmlFor="course-subtitle"
                    error={errors.subtitle?.message}
                    required
                >
                    <Input
                        id="course-subtitle"
                        type="text"
                        autoComplete="off"
                        placeholder="Enter a short description of your course"
                        error={Boolean(errors.subtitle)}
                        aria-describedby={
                            errors.subtitle
                                ? "course-subtitle-error"
                                : undefined
                        }
                        {...register("subtitle", validationRules.subtitle)}
                    />
                </FormField>

                {/* Description */}

                <FormField
                    label="Description"
                    htmlFor="course-description"
                    error={errors.description?.message}
                    required
                >
                    <textarea
                        id="course-description"
                        rows={7}
                        placeholder="Describe what students will learn in this course..."
                        aria-invalid={Boolean(errors.description)}
                        aria-describedby={
                            errors.description
                                ? "course-description-error"
                                : undefined
                        }
                        {...register(
                            "description",
                            validationRules.description
                        )}
                        className={`
                            w-full
                            resize-y
                            rounded-md
                            border
                            bg-background-surface
                            px-3
                            py-2

                            font-body
                            text-sm
                            leading-6
                            text-text-primary

                            outline-none
                            placeholder:text-text-muted
                            transition

                            ${
                                errors.description
                                    ? `
                                        border-status-danger
                                        focus:border-status-danger
                                        focus:ring-2
                                        focus:ring-status-danger/20
                                    `
                                    : `
                                        border-border-subtle
                                        focus:border-accent-primary
                                        focus:ring-2
                                        focus:ring-accent-primary/20
                                    `
                            }

                            disabled:cursor-not-allowed
                            disabled:border-border-subtle
                            disabled:bg-background-elevated
                            disabled:text-text-secondary
                        `}
                    />
                </FormField>
            </div>
        </section>
    )
}

export default CourseFormBasicInformation
