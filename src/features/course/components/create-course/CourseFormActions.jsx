import Button from "../../../../components/ui/Button"


const CourseFormActions = ({
    onCancel,
    loading = false,
}) => {

    return (
        <div className="
            flex
            flex-col-reverse
            gap-3

            border-t
            border-border-subtle
            pt-5

            sm:flex-row
            sm:justify-end
        ">

            {/* Cancel */}

            <Button
                type="button"
                onClick={onCancel}
                disabled={loading}
                className="
                    w-full

                    border
                    border-border-subtle

                    bg-background-elevated
                    text-text-secondary

                    transition-all
                    duration-200

                    hover:border-text-muted
                    hover:bg-background-surface
                    hover:text-text-primary

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-border-subtle
                    focus-visible:ring-offset-2

                    sm:w-auto
                "
            >
                Cancel
            </Button>


            {/* Submit */}

            <Button
                type="submit"
                loading={loading}
                className="
        w-full

        border
        border-status-success
        bg-status-success
        text-background-base

        shadow-sm

        transition-all
        duration-200

        hover:opacity-90
        hover:shadow-md

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-status-success
        focus-visible:ring-offset-2

        sm:w-auto
    "
            >
                Save Details
            </Button>

        </div>
    )
}


export default CourseFormActions