import FormField from "../../../../components/form/FormField"


const CourseThumbnailUpload = ({
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
                    Course Thumbnail
                </h2>

                <p className="
                    mt-1
                    font-body
                    text-sm
                    leading-5
                    text-text-secondary
                ">
                    Upload an image that represents your course.
                </p>
            </div>


            <FormField
                label="Thumbnail"
                htmlFor="thumbnail"
                required
                error={errors.thumbnail?.message}
            >
                <input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    aria-invalid={!!errors.thumbnail}
                    {...register("thumbnail")}
                    className={`
                        block
                        w-full

                        rounded-md
                        border
                        bg-background-surface

                        px-3
                        py-2

                        font-body
                        text-sm
                        text-text-secondary

                        file:mr-4
                        file:rounded-md
                        file:border-0
                        file:bg-background-elevated
                        file:px-3
                        file:py-1.5
                        file:font-body
                        file:text-xs
                        file:font-medium
                        file:text-text-primary

                        ${errors.thumbnail
                            ? "border-status-danger"
                            : "border-border-subtle"
                        }

                        focus:outline-none
                    `}
                />
            </FormField>

        </section>
    )
}


export default CourseThumbnailUpload