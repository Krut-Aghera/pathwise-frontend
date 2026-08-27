import FormField from "../../../../components/form/FormField.jsx"
import Input from "../../../../components/form/Input.jsx"

import {
    COURSE_LANGUAGE_OPTIONS,
    COURSE_LEVEL_OPTIONS,
} from "../../courseConstants.js"


const CourseDetails = ({
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

            {/* Section Header */}

            <div className="mb-6">

                <h2 className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                ">
                    Course Details
                </h2>

                <p className="
                    mt-1
                    font-body
                    text-sm
                    leading-5
                    text-text-secondary
                ">
                    Set the price, language, and difficulty level for your course.
                </p>

            </div>


            {/* Fields */}

            <div className="
                grid
                grid-cols-1
                gap-5

                sm:grid-cols-2
            ">

                {/* Price */}

                <FormField
                    label="Price"
                    htmlFor="course-price"
                    required
                    error={errors.price?.message}
                >

                    <Input
                        id="course-price"
                        type="number"
                        min="0"
                        step="0.01"
                        inputMode="decimal"
                        placeholder="Enter course price"
                        error={Boolean(errors.price)}
                        aria-describedby={
                            errors.price
                                ? "course-price-error"
                                : undefined
                        }
                        {...register(
                            "price",
                            validationRules.price
                        )}
                    />

                </FormField>


                {/* Language */}

                <FormField
                    label="Language"
                    htmlFor="course-language"
                    required
                    error={errors.language?.message}
                >

                    <select
                        id="course-language"
                        aria-invalid={Boolean(errors.language)}
                        aria-describedby={
                            errors.language
                                ? "course-language-error"
                                : undefined
                        }
                        {...register(
                            "language",
                            validationRules.language
                        )}
                        className={`
                            w-full
                            rounded-md
                            border
                            bg-background-surface
                            px-3
                            py-2

                            font-body
                            text-sm
                            text-text-primary

                            outline-none
                            transition

                            ${
                                errors.language
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
                    >

                        <option value="">
                            Select language
                        </option>

                        {COURSE_LANGUAGE_OPTIONS.map((option) => (

                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>

                        ))}

                    </select>

                </FormField>


                {/* Level */}

                <FormField
                    label="Level"
                    htmlFor="course-level"
                    required
                    error={errors.level?.message}
                    className="sm:col-span-2"
                >

                    <select
                        id="course-level"
                        aria-invalid={Boolean(errors.level)}
                        aria-describedby={
                            errors.level
                                ? "course-level-error"
                                : undefined
                        }
                        {...register(
                            "level",
                            validationRules.level
                        )}
                        className={`
                            w-full
                            rounded-md
                            border
                            bg-background-surface
                            px-3
                            py-2

                            font-body
                            text-sm
                            text-text-primary

                            outline-none
                            transition

                            ${
                                errors.level
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
                    >

                        <option value="">
                            Select course level
                        </option>

                        {COURSE_LEVEL_OPTIONS.map((option) => (

                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>

                        ))}

                    </select>

                </FormField>

            </div>

        </section>
    )
}


export default CourseDetails