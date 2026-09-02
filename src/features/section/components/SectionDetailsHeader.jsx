import { ArrowLeft, BookOpen, CircleCheck, CircleDashed } from "lucide-react"
import { RESOURCE_STATUS } from "../../../constants/resourceConstants"

const SectionDetailsHeader = ({ section, onBack, disabled = false }) => {
    ///////////////////////////////////////////////////////////////
    // Guard

    if (!section) {
        return null
    }

    ///////////////////////////////////////////////////////////////
    // Status

    const isPublished = section.status === RESOURCE_STATUS.PUBLISHED

    ///////////////////////////////////////////////////////////////
    // Course

    const courseTitle = section?.course?.title

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <header
            className="
                overflow-hidden

                rounded-2xl

                border
                border-border-subtle

                bg-background-surface
            "
        >
            {/* Top bar */}

            <div
                className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-border-subtle

                    px-5
                    py-3.5

                    sm:px-6
                "
            >
                <button
                    type="button"
                    onClick={onBack}
                    disabled={disabled}
                    className="
                        inline-flex
                        items-center
                        gap-2

                        rounded-lg

                        px-2
                        py-1.5
                        -ml-2

                        font-body
                        text-xs
                        font-medium
                        text-text-muted

                        transition-colors
                        duration-200

                        hover:bg-background-elevated
                        hover:text-text-primary

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-accent-primary

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    <ArrowLeft size={15} />
                    Back to Course
                </button>

                {/* Status */}

                <div
                    className={`
                        inline-flex
                        items-center
                        gap-1.5

                        rounded-full

                        px-2.5
                        py-1

                        font-body
                        text-xs
                        font-semibold

                        ${
                            isPublished
                                ? `
                                    bg-status-success/10
                                    text-status-success
                                `
                                : `
                                    bg-status-warning/10
                                    text-status-warning
                                `
                        }
                    `}
                >
                    {isPublished ? (
                        <CircleCheck size={13} />
                    ) : (
                        <CircleDashed size={13} />
                    )}

                    {isPublished ? "Published" : "Draft"}
                </div>
            </div>

            {/* Main header */}

            <div
                className="
                    px-5
                    py-6

                    sm:px-6
                    sm:py-7
                "
            >
                <div
                    className="
                        flex
                        items-start
                        gap-4
                    "
                >
                    <div
                        className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center

                            rounded-xl

                            bg-accent-primary/10
                            text-accent-primary
                        "
                    >
                        <BookOpen size={21} />
                    </div>

                    <div
                        className="
                            min-w-0
                            flex-1
                        "
                    >
                        <div
                            className="
                                flex
                                flex-wrap
                                items-center
                                gap-x-2
                                gap-y-1
                            "
                        >
                            <span
                                className="
                                    font-body
                                    text-xs
                                    font-medium
                                    text-text-muted
                                "
                            >
                                Section {section.order}
                            </span>

                            <span
                                className="
                                    text-text-muted/50
                                "
                            >
                                /
                            </span>

                            <span
                                className="
                                    truncate
                                    font-body
                                    text-xs
                                    font-medium
                                    text-accent-primary
                                "
                            >
                                {courseTitle || "Course Curriculum"}
                            </span>
                        </div>

                        <h1
                            className="
                                mt-2

                                break-words

                                font-accent
                                text-2xl
                                font-semibold
                                leading-8
                                tracking-tight
                                text-text-primary

                                sm:text-3xl
                                sm:leading-9
                            "
                        >
                            {section.title}
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SectionDetailsHeader
