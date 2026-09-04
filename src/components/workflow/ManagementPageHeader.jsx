import { ArrowLeft, BookOpen, CircleCheck, CircleDashed } from "lucide-react"

import { RESOURCE_STATUS } from "../../constants/resourceConstants"

const ManagementPageHeader = ({
    pageTitle,
    context = [],
    icon: Icon = BookOpen,

    onBack,
    backLabel = "Back",

    status,
    showStatus = false,

    thumbnail = null,
}) => {
    ///////////////////////////////////////////////////////////////
    // Status

    const isPublished = status === RESOURCE_STATUS.PUBLISHED

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
                {/* Back */}

                <button
                    type="button"
                    onClick={onBack}
                    className="
                        inline-flex
                        items-center
                        gap-2

                        -ml-2

                        cursor-pointer
                        rounded-lg

                        px-2
                        py-1.5

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
                    "
                >
                    <ArrowLeft size={15} />

                    {backLabel}
                </button>

                {/* Status */}

                {showStatus && status && (
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
                )}
            </div>

            {/* Main */}

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
                    {/* Thumbnail / Icon */}

                    {thumbnail ? (
                        <div
                            className="
                                h-50
                                w-90
                                shrink-0

                                overflow-hidden

                                rounded-xl

                                border
                                border-border-subtle

                                bg-background-elevated
                            "
                        >
                            <img
                                src={thumbnail}
                                alt=""
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                "
                            />
                        </div>
                    ) : (
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
                            <Icon size={21} />
                        </div>
                    )}

                    {/* Content */}

                    <div
                        className="
                            min-w-0
                            flex-1
                        "
                    >
                        {/* Page title */}

                        <h1
                            className="
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
                            {pageTitle}
                        </h1>

                        {/* Context */}

                        {context.length > 0 && (
                            <div
                                className="
                                    mt-3

                                    flex
                                    flex-wrap
                                    items-center
                                    gap-x-2
                                    gap-y-1
                                "
                            >
                                {context.map((item, index) => (
                                    <div
                                        key={`${item}-${index}`}
                                        className="
                                                flex
                                                min-w-0
                                                items-center
                                                gap-2
                                            "
                                    >
                                        {index > 0 && (
                                            <span
                                                className="
                                                        shrink-0
                                                        text-text-muted/40
                                                    "
                                            >
                                                /
                                            </span>
                                        )}

                                        <span
                                            className={`
                                                    min-w-0
                                                    wrap-break-word

                                                    font-body
                                                    text-sm

                                                    ${
                                                        index ===
                                                        context.length - 1
                                                            ? `
                                                                font-medium
                                                                text-text-primary
                                                            `
                                                            : `
                                                                font-medium
                                                                text-text-muted
                                                            `
                                                    }
                                                `}
                                        >
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default ManagementPageHeader
