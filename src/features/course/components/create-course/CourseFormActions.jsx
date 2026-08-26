import Button from "../../../../components/ui/Button"


const CourseFormActions = ({
    isLoading = false,
    onCancel,
}) => {

    return (
        <div className="
            flex
            flex-col-reverse
            gap-3

            border-t
            border-border-subtle
            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-end
        ">

            {/* Cancel */}

            <Button
                type="button"
                onClick={onCancel}
                disabled={isLoading}
                className="
                    w-full

                    sm:w-auto
                "
            >
                Cancel
            </Button>


            {/* Create */}

            <Button
                type="submit"
                loading={isLoading}
                className="
                    w-full

                    sm:w-auto
                "
            >
                Create Course
            </Button>

        </div>
    )
}


export default CourseFormActions