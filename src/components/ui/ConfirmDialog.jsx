import { AlertTriangle, X } from "lucide-react"

import Button from "./Button.jsx"

const ConfirmDialog = ({
    open = false,

    title = "Confirm Action",
    subtitle = "",
    message = "Are you sure you want to continue?",

    confirmLabel = "Confirm",
    cancelLabel = "Cancel",

    loading = false,

    onConfirm,
    onCancel,

    variant = "danger",

    children,
}) => {
    ///////////////////////////////////////////////////////////////
    // Closed

    if (!open) {
        return null
    }

    ///////////////////////////////////////////////////////////////
    // Styles

    const isDanger = variant === "danger"

    const iconContainerClass = isDanger
        ? `
            border
            border-status-danger/30
            bg-status-danger/10
            text-status-danger
        `
        : `
            border
            border-accent-primary/30
            bg-accent-primary/10
            text-accent-primary
        `

    const confirmButtonClass = isDanger
        ? `
            border
            border-status-danger
            bg-status-danger
            text-text-primary

            hover:opacity-90
            hover:shadow-md

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-status-danger
            focus-visible:ring-offset-2
        `
        : `
            border
            border-accent-primary
            bg-accent-primary
            text-text-primary

            hover:opacity-90
            hover:shadow-md

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent-primary
            focus-visible:ring-offset-2
        `

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <div
            className="
                fixed
                inset-0
                z-50

                flex
                items-center
                justify-center

                bg-black/60

                px-4
                py-6
            "
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget && !loading) {
                    onCancel?.()
                }
            }}
        >
            {/* Dialog */}

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-dialog-title"
                aria-describedby="confirm-dialog-description"
                className="
                    w-full
                    max-w-md

                    overflow-hidden

                    rounded-xl
                    border
                    border-border-subtle

                    bg-background-surface

                    shadow-xl
                "
                onMouseDown={(event) => event.stopPropagation()}
            >
                {/* Header */}

                <div
                    className="
                        flex
                        items-start
                        justify-between

                        border-b
                        border-border-subtle

                        px-5
                        py-4
                    "
                >
                    <div
                        className="
                            flex
                            min-w-0
                            items-start
                            gap-3
                        "
                    >
                        {/* Icon */}

                        <div
                            className={`
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center

                                rounded-lg

                                ${iconContainerClass}
                            `}
                        >
                            <AlertTriangle size={18} />
                        </div>

                        {/* Title */}

                        <div className="min-w-0">
                            <h2
                                id="confirm-dialog-title"
                                className="
                                    font-accent
                                    text-base
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                {title}
                            </h2>

                            <p
                                id="confirm-dialog-description"
                                className="
                                    mt-1

                                    font-body
                                    text-xs
                                    leading-5
                                    text-text-secondary
                                "
                            >
                                {subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Close */}

                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        aria-label="Close dialog"
                        className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center

                            cursor-pointer
                            rounded-md

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
                        <X size={17} />
                    </button>
                </div>

                {/* Content */}

                <div className="px-5 py-5">
                    <p
                        className="
                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        "
                    >
                        {message}
                    </p>

                    {children && <div className="mt-2">{children}</div>}
                </div>

                {/* Actions */}

                <div
                    className="
                        flex
                        flex-col-reverse
                        gap-3

                        border-t
                        border-border-subtle

                        px-5
                        py-4

                        sm:flex-row
                        sm:justify-end
                    "
                >
                    {/* Cancel */}

                    <Button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        className="
                            w-full

                            border
                            border-border-subtle

                            bg-transparent
                            text-text-secondary

                            transition-all
                            duration-200

                            hover:border-text-muted
                            hover:bg-background-elevated
                            hover:text-text-primary

                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-border-subtle
                            focus-visible:ring-offset-2

                            sm:w-auto
                        "
                    >
                        {cancelLabel}
                    </Button>

                    {/* Confirm */}

                    <Button
                        type="button"
                        onClick={onConfirm}
                        loading={loading}
                        disabled={loading}
                        className={`
                            w-full

                            ${confirmButtonClass}

                            transition-all
                            duration-200

                            sm:w-auto
                        `}
                    >
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDialog
