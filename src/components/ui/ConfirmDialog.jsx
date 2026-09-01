import {
    AlertTriangle,
    X,
} from "lucide-react"

import Button
    from "./Button.jsx"


const ConfirmDialog = ({
    open = false,

    title = "Confirm Action",
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
    // Confirm styles

    const isDanger =
        variant === "danger"


    const iconContainerClass =
        isDanger
            ? `
                bg-status-danger/10
                text-status-danger
            `
            : `
                bg-accent-primary/10
                text-accent-primary
            `


    const confirmButtonClass =
        isDanger
            ? `
                border
                border-status-danger

                bg-status-danger
                text-background-base

                hover:opacity-90

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-status-danger
                focus-visible:ring-offset-2
            `
            : `
                border
                border-accent-primary

                bg-accent-primary
                text-background-base

                hover:opacity-90

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

                bg-black/50

                px-4
                py-6
            "
            role="presentation"
            onMouseDown={(event) => {

                if (
                    event.target === event.currentTarget &&
                    !loading
                ) {
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

                    rounded-xl
                    border
                    border-border-subtle

                    bg-background-surface

                    p-5

                    shadow-2xl

                    sm:p-6
                "
                onMouseDown={(event) =>
                    event.stopPropagation()
                }
            >

                {/* Header */}

                <div className="
                    flex
                    items-start
                    justify-between
                    gap-4
                ">

                    <div className="
                        flex
                        min-w-0
                        items-start
                        gap-3
                    ">

                        {/* Icon */}

                        <div className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center

                            rounded-full

                            ${iconContainerClass}
                        `}>

                            <AlertTriangle size={19} />

                        </div>


                        {/* Title + message */}

                        <div className="min-w-0">

                            <h2
                                id="confirm-dialog-title"
                                className="
                                    font-accent
                                    text-lg
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
                                    text-sm
                                    leading-5
                                    text-text-secondary
                                "
                            >
                                {message}
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
                            shrink-0

                            rounded-md
                            p-1.5

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

                        <X size={18} />

                    </button>

                </div>


                {/* Custom content */}

                {children && (

                    <div className="mt-5">
                        {children}
                    </div>

                )}


                {/* Actions */}

                <div className="
                    mt-6

                    flex
                    flex-col-reverse
                    gap-3

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

                            hover:bg-background-surface
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