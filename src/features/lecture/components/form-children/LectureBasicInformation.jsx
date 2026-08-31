import FormField from "../../../../components/form/FormField"
import Input from "../../../../components/form/Input"


const LectureBasicInformation = ({
    register,
    errors,
    validationRules,
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

            {/* Header */}

            <div className="mb-6">

                <h2 className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                ">
                    Lecture Information
                </h2>

                <p className="
                    mt-1
                    font-body
                    text-sm
                    leading-5
                    text-text-secondary
                ">
                    Provide the information students will see for this lecture.
                </p>

            </div>


            {/* Fields */}

            <div className="space-y-5">

                {/* Title */}

                <FormField
                    label="Lecture Title"
                    htmlFor="lecture-title"
                    error={errors.title?.message}
                    required
                >

                    <Input
                        id="lecture-title"
                        type="text"
                        autoComplete="off"
                        placeholder="Enter your lecture title"
                        error={Boolean(errors.title)}
                        aria-describedby={
                            errors.title
                                ? "lecture-title-error"
                                : undefined
                        }
                        {...register(
                            "title",
                            validationRules.title
                        )}
                    />

                </FormField>


                {/* Description */}

                <FormField
                    label="Description"
                    htmlFor="lecture-description"
                    error={errors.description?.message}
                >

                    <textarea
                        id="lecture-description"
                        rows={7}
                        placeholder="Describe what students will learn in this lecture..."
                        aria-invalid={Boolean(errors.description)}
                        aria-describedby={
                            errors.description
                                ? "lecture-description-error"
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


                {/* Free Preview */}

                <FormField
                    label="Free Preview"
                    htmlFor="lecture-preview-free"
                    error={errors.isPreviewFree?.message}
                >

                    <label
                        htmlFor="lecture-preview-free"
                        className="
                            flex
                            cursor-pointer
                            items-center
                            gap-3

                            rounded-lg
                            border
                            border-border-subtle
                            bg-background-elevated

                            px-3
                            py-2.5

                            transition-colors
                            duration-200

                            hover:border-accent-primary/40
                        "
                    >

                        {/* Toggle */}

                        <span
                            className="
                                relative
                                inline-flex
                                h-5
                                w-9
                                shrink-0
                                items-center

                                rounded-full

                                bg-border-subtle

                                transition-colors
                                duration-200

                                has-[:checked]:bg-accent-primary
                            "
                        >

                            <Input
                                id="lecture-preview-free"
                                type="checkbox"
                                error={Boolean(errors.isPreviewFree)}
                                {...register(
                                    "isPreviewFree",
                                    validationRules.isPreviewFree
                                )}
                                className="
                                    peer
                                    sr-only
                                "
                            />

                            {/* Sliding thumb */}

                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    left-0.5

                                    h-4
                                    w-4

                                    rounded-full

                                    bg-white

                                    shadow-sm

                                    transition-transform
                                    duration-200
                                    ease-in-out

                                    peer-checked:translate-x-4
                                "
                            />

                        </span>


                        {/* Text */}

                        <span className="
                            min-w-0
                            flex-1
                        ">

                            <span className="
                                block

                                font-body
                                text-sm
                                font-medium
                                text-text-primary
                            ">
                                Allow free preview
                            </span>

                            <span className="
                                mt-0.5
                                block

                                font-body
                                text-xs
                                leading-5
                                text-text-secondary
                            ">
                                Let students watch this lecture before enrolling.
                            </span>

                        </span>

                    </label>

                </FormField>

            </div>

        </section>
    )
}


export default LectureBasicInformation