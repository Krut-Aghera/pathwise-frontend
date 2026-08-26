import FormField from "../../../../components/form/FormField"
import Input from "../../../../components/form/Input"

import {
    COURSE_LEVEL_OPTIONS,
    COURSE_LANGUAGE_OPTIONS,
} from "../../courseConstants.js"


const CourseDetails = ({
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
                    Course Details
                </h2>

                <p className="
                    mt-1
                    font-body
                    text-sm
                    text-text-secondary
                ">
                    Set the price, language, and difficulty level for your course.
                </p>

            </div>


            <div className="
                grid
                grid-cols-1
                gap-5

                sm:grid-cols-2
            ">

                {/* Price */}

                <FormField
                    label="Price"
                    htmlFor="price"
                    required
                    error={errors.price?.message}
                >
                    <Input
                        id="price"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Enter course price"
                        error={!!errors.price}
                        {...register("price")}
                    />
                </FormField>


                {/* Language */}

                <FormField
                    label="Language"
                    htmlFor="language"
                    required
                    error={errors.language?.message}
                >
                    <select
                        id="language"
                        aria-invalid={!!errors.language}
                        {...register("language")}
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

                            ${errors.language
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
                    htmlFor="level"
                    required
                    error={errors.level?.message}
                    className="sm:col-span-2"
                >
                    <select
                        id="level"
                        aria-invalid={!!errors.level}
                        {...register("level")}
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

                            ${errors.level
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