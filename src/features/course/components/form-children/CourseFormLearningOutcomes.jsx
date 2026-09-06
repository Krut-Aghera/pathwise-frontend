import { useFieldArray } from "react-hook-form"

import FormField from "../../../../components/form/FormField.jsx"
import Button from "../../../../components/ui/Button.jsx"
import Input from "../../../../components/form/Input.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const CourseFormLearningOutcomes = ({
    control,
    register,
    errors,
    validationRules,
}) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "learningOutcomes",

        rules: validationRules.learningOutcomes,
    })

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
            {/* Header */}

            <div className="mb-6">
                <h2
                    className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                "
                >
                    What Students Will Learn
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
                    Add the key skills or knowledge students will gain from this
                    course.
                </p>
            </div>

            {/* Learning Outcomes */}

            <div className="space-y-4">
                {fields.map((field, index) => {
                    const fieldError = errors.learningOutcomes?.[index]

                    return (
                        <div
                            key={field.id}
                            className="
                                flex
                                flex-col
                                gap-2

                                sm:flex-row
                                sm:items-start
                            "
                        >
                            {/* Input */}

                            <div
                                className="
                                min-w-0
                                flex-1
                            "
                            >
                                <FormField
                                    label={`Learning Outcome ${index + 1}`}
                                    htmlFor={`learningOutcome-${field.id}`}
                                    required
                                    error={fieldError?.message}
                                >
                                    <Input
                                        id={`learningOutcome-${field.id}`}
                                        placeholder="What will students learn?"
                                        error={Boolean(fieldError)}
                                        {...register(
                                            `learningOutcomes.${index}`,
                                            validationRules.learningOutcomes
                                                .item
                                        )}
                                    />
                                </FormField>
                            </div>

                            {/* Remove */}

                            {fields.length > 1 && (
                                <Button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="
                                        shrink-0
                                        self-end

                                        border
                                        border-status-danger/30
                                        bg-background-surface
                                        text-status-danger

                                        transition-all
                                        duration-200

                                        hover:bg-status-danger/15
                                        hover:border-status-danger/50

                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-status-danger
                                        focus-visible:ring-offset-2

                                        sm:mt-7
                                    "
                                >
                                    Remove
                                </Button>
                            )}
                        </div>
                    )
                })}

                {/* Array-level error */}

                {errors?.learningOutcomes?.message && (
                    <p
                        role="alert"
                        className="
                            font-body
                            text-xs
                            leading-5
                            text-status-danger
                        "
                    >
                        {errors.learningOutcomes.message}
                    </p>
                )}

                {/* Add */}

                {fields.length < 10 && (
                    <Button
                        type="button"
                        onClick={() => append("")}
                        className="
                            w-full

                            border
                            border-accent-primary/30
                            bg-background-surface
                            text-accent-primary/90

                            shadow-sm

                            transition-all
                            duration-200

                            hover:bg-accent-primary/15
                            hover:border-accent-primary/50

                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-accent-primary
                            focus-visible:ring-offset-2

                            sm:w-auto
                        "
                    >
                        + Add Learning Outcome
                    </Button>
                )}
            </div>
        </section>
    )
}

export default CourseFormLearningOutcomes
