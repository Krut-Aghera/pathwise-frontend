import { useFieldArray } from "react-hook-form"
import FormField from "../../../../components/form/FormField"
import Button from "../../../../components/ui/Button"
import Input from "../../../../components/form/Input"


const CourseLearningOutcomes = ({
    control,
    register,
    errors,
}) => {

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "learningOutcomes",
    })


    return (
        <section className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            p-5

            sm:p-6
        ">

            {/* Header */}

            <div className="mb-6">
                <h2 className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                ">
                    What Students Will Learn
                </h2>

                <p className="
                    mt-1
                    font-body
                    text-sm
                    leading-5
                    text-text-secondary
                ">
                    Add the key skills or knowledge students will gain from this course.
                </p>
            </div>


            {/* Outcomes */}

            <div className="space-y-4">

                {fields.map((field, index) => (

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

                        <div className="min-w-0 flex-1">

                            <FormField
                                label={`Learning Outcome ${index + 1}`}
                                htmlFor={`learningOutcome-${field.id}`}
                                error={
                                    errors.learningOutcomes?.[index]?.message
                                }
                            >
                                <Input
                                    id={`learningOutcome-${field.id}`}
                                    placeholder="What will students learn?"
                                    error={
                                        !!errors.learningOutcomes?.[index]
                                    }
                                    {...register(
                                        `learningOutcomes.${index}`
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
                                    px-3

                                    sm:mt-7
                                "
                            >
                                Remove
                            </Button>
                        )}

                    </div>

                ))}


                {/* Add */}

                {fields.length < 20 && (
                    <Button
                        type="button"
                        onClick={() => append("")}
                        className="
                            w-full

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


export default CourseLearningOutcomes