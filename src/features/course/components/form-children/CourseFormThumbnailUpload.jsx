import FormField from "../../../../components/form/FormField.jsx"
import Input from "../../../../components/form/Input.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const CourseFormThumbnailUpload = ({ register, errors, validationRules }) => {
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
                    Course Thumbnail
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
                    Upload an image that represents your course.
                </p>
            </div>

            {/* Thumbnail */}

            <FormField
                label="Thumbnail"
                htmlFor="thumbnail"
                required
                error={errors.thumbnail?.message}
            >
                <Input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    error={Boolean(errors.thumbnail)}
                    aria-describedby={
                        errors.thumbnail ? "thumbnail-error" : undefined
                    }
                    className="
                        cursor-pointer

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

                        hover:file:bg-background-elevated
                    "
                    {...register("thumbnail", validationRules)}
                />

                <p
                    className="
                        mt-2
                        font-body
                        text-[14px]
                        leading-5
                        text-status-warning
                    "
                >
                    Maximum file size: 10 MB.
                </p>
            </FormField>
        </section>
    )
}

export default CourseFormThumbnailUpload
