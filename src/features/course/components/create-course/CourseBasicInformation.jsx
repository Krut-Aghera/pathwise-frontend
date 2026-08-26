import FormField from "../../../../components/form/FormField"
import Input from "../../../../components/form/Input"


const CourseBasicInformation = ({
    register,
    errors,
}) => {

    return (
        <section className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            p-5

            sm:p-6
        ">

            {/* Section Header */}

            <div className="mb-6">
                <h2 className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                ">
                    Basic Information
                </h2>

                <p className="
                    mt-1
                    font-body
                    text-sm
                    text-text-secondary
                ">
                    Provide the basic information about your course.
                </p>
            </div>


            {/* Fields */}

            <div className="space-y-5">

                {/* Title */}

                <FormField
                    label="Course Title"
                    htmlFor="title"
                    required
                    error={errors.title?.message}
                >
                    <Input
                        id="title"
                        type="text"
                        placeholder="Enter your course title"
                        error={!!errors.title}
                        {...register("title")}
                    />
                </FormField>


                {/* Subtitle */}

                <FormField
                    label="Subtitle"
                    htmlFor="subtitle"
                    required
                    error={errors.subtitle?.message}
                >
                    <Input
                        id="subtitle"
                        type="text"
                        placeholder="Enter a short description of your course"
                        error={!!errors.subtitle}
                        {...register("subtitle")}
                    />
                </FormField>


                {/* Description */}

                <FormField
                    label="Description"
                    htmlFor="description"
                    required
                    error={errors.description?.message}
                >
                    <textarea
                        id="description"
                        rows={7}
                        placeholder="Describe what students will learn in this course..."
                        aria-invalid={!!errors.description}
                        {...register("description")}
                        className={`
                            w-full
                            resize-y
                            rounded-md
                            border
                            bg-background-surface
                            px-3
                            py-2.5

                            font-body
                            text-sm
                            leading-6
                            text-text-primary

                            outline-none
                            placeholder:text-text-muted
                            transition

                            ${errors.description
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
                        `}
                    />
                </FormField>

            </div>

        </section>
    )
}


export default CourseBasicInformation