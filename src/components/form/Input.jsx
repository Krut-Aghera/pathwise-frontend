import mergeClass from "../../utils/tailwind-cn.js"

const Input = ({
    type = "text",
    disabled = false,
    error = false,
    className,
    ...props
}) => {

    return (
        <input
            type={type}
            disabled={disabled}
            aria-invalid={error}
            className={mergeClass(
                `
                    w-full
                    rounded-md
                    border
                    bg-background-surface
                    px-3
                    py-2
                    font-body
                    text-sm
                    text-text-primary
                    outline-none
                    placeholder:text-text-muted
                    transition

                    disabled:cursor-not-allowed
                    disabled:border-border-subtle
                    disabled:bg-background-elevated
                    disabled:text-text-secondary
                `,
                error
                    ? `
                        border-status-danger
                        focus:border-status-danger
                        focus:ring-2
                        focus:ring-status-danger/20
                    `
                    : `
                        border-border-subtle
                        focus:border-accent-primary
                        focus:ring-2
                        focus:ring-accent-primary/20
                    `,
                className
            )}
            {...props}
        />
    )
}

export default Input