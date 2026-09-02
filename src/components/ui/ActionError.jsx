import { AlertCircle } from "lucide-react"
import { useEffect, useRef } from "react"

const ActionError = ({
    open = false,

    title = "",
    message = "",

    variant = "danger",

    position = "inline",

    dismissible = true,
    autoHide = false,
    autoHideDuration = 5000,

    onDismiss,
}) => {
    const errorRef = useRef(null)

    useEffect(() => {
        if (!open) {
            return
        }

        requestAnimationFrame(() => {
            errorRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        })
    }, [open])

    useEffect(() => {
        if (!open || !dismissible) {
            return
        }

        const handleOutsideClick = (event) => {
            if (errorRef.current && !errorRef.current.contains(event.target)) {
                onDismiss?.()
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [open, dismissible, onDismiss])

    useEffect(() => {
        if (!open || !autoHide || !autoHideDuration) {
            return
        }

        const timeoutId = setTimeout(() => {
            onDismiss?.()
        }, autoHideDuration)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [open, autoHide, autoHideDuration, onDismiss])

    if (!open || !message) {
        return null
    }

    const isWarning = variant === "warning"

    const containerClass = isWarning
        ? `
            border-warning/20
            bg-warning/5
            text-warning
        `
        : `
            border-status-danger/20
            bg-status-danger/5
            text-status-danger
        `

    const positionClass =
        position === "fixed"
            ? `
                fixed
                left-1/2
                top-6
                z-50
                w-[calc(100%-2rem)]
                max-w-xl
                -translate-x-1/2
            `
            : `
                mt-6
                w-full
            `

    return (
        <div
            ref={errorRef}
            role="alert"
            aria-live="assertive"
            className={`
                ${positionClass}
                rounded-xl
                border
                px-4
                py-3
                shadow-sm
                ${containerClass}
            `}
        >
            <div
                className="
                    flex
                    items-start
                    gap-3
                "
            >
                <AlertCircle
                    size={18}
                    className="
                        mt-0.5
                        shrink-0
                    "
                />

                <div className="min-w-0 flex-1">
                    {title && (
                        <p
                            className="
                                font-body
                                text-sm
                                font-semibold
                            "
                        >
                            {title}
                        </p>
                    )}

                    <p
                        className={`
                            font-body
                            text-sm
                            leading-6
                            ${title ? "mt-0.5" : ""}
                        `}
                    >
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ActionError
