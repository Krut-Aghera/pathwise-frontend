import FormField from "../../../../components/form/FormField"
import Input from "../../../../components/form/Input"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const LectureFormVideoUploadField = ({ register, errors, validationRules }) => {
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
                    Lecture Video
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
                    Upload the video students will watch for this lecture.
                </p>
            </div>

            {/* Video */}

            <FormField
                label="Video"
                htmlFor="video"
                required
                error={errors.video?.message}
            >
                <Input
                    id="video"
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime"
                    error={Boolean(errors.video)}
                    aria-describedby={errors.video ? "video-error" : undefined}
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
                    {...register("video", validationRules)}
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
                    Maximum file size: 100 MB.
                </p>
            </FormField>
        </section>
    )
}

export default LectureFormVideoUploadField
