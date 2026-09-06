import { BookOpen, RefreshCcw } from "lucide-react"

const CourseState = ({ type = "empty", title, message, onRetry }) => {
    const isError = type === "error"

    return (
        <div
            className="
            flex
            min-h-64
            w-full
            items-center
            justify-center

            rounded-xl
            border
            border-border-subtle
            bg-background-surface

            px-5
            py-10

            sm:min-h-72
            sm:px-8
        "
        >
            <div
                className="
                flex
                max-w-md
                flex-col
                items-center
                text-center
            "
            >
                {/* Icon */}

                <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    bg-accent-primary/10
                    text-accent-primary
                "
                >
                    {isError ? (
                        <RefreshCcw size={21} />
                    ) : (
                        <BookOpen size={21} />
                    )}
                </div>

                {/* Title */}

                <h3
                    className="
                    mt-4

                    font-accent
                    text-base
                    font-semibold
                    leading-6
                    text-text-primary

                    sm:text-lg
                "
                >
                    {title ||
                        (isError
                            ? "Unable to load courses"
                            : "No courses found")}
                </h3>

                {/* Message */}

                <p
                    className="
                    mt-2

                    font-body
                    text-xs
                    leading-5
                    text-text-secondary

                    sm:text-sm
                    sm:leading-6
                "
                >
                    {message ||
                        (isError
                            ? "Something went wrong while loading the courses. Please try again."
                            : "There are no courses available to display right now.")}
                </p>

                {/* Retry */}

                {isError && onRetry && (
                    <button
                        type="button"
                        onClick={onRetry}
                        className="
                            mt-5

                            inline-flex
                            items-center
                            justify-center
                            gap-2

                            rounded-lg

                            border
                            border-border-subtle

                            bg-background-surface

                            px-4
                            py-2.5

                            font-body
                            text-xs
                            font-medium
                            text-text-primary

                            transition-all
                            duration-200

                            hover:border-accent-primary/50
                            hover:text-accent-primary

                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/30

                            cursor-pointer
                        "
                    >
                        <RefreshCcw size={14} />
                        Try Again
                    </button>
                )}
            </div>
        </div>
    )
}

export default CourseState
