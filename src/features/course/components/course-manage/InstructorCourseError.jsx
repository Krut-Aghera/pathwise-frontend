import { AlertTriangle, RefreshCw } from "lucide-react"
import Button from "../../../../components/ui/Button"

const InstructorCourseError = ({
    message = "Unable to load your courses.",
    onRetry,
}) => {

    return (
        <section className="
            flex
            min-h-80
            w-full
            flex-col
            items-center
            justify-center

            rounded-xl
            border
            border-border-subtle
            bg-background-surface

            px-5
            py-10
            text-center

            sm:px-8
            sm:py-12
        ">

            {/* Icon */}

            <div className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-lg
                border
                border-status-danger/25
                bg-status-danger/10

                text-status-danger
            ">

                <AlertTriangle
                    size={22}
                    strokeWidth={1.8}
                />

            </div>


            {/* Content */}

            <div className="
                mt-4
                max-w-md
            ">

                <h2 className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                ">
                    Unable to load courses
                </h2>


                <p className="
                    mt-2

                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">
                    {message}
                </p>

            </div>


            {/* Retry */}

            <Button
                type="button"
                onClick={onRetry}
                className="
                    mt-6
                    w-full

                    sm:w-auto
                "
            >

                <RefreshCw size={15} />

                Try Again

            </Button>

        </section>
    )
}


export default InstructorCourseError