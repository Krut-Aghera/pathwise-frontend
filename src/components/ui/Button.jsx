import mergeClass from "../../utils/tailwind-cn.js"

const Button = ({
    children,
    type = "button",
    loading = false,
    disabled = false,
    className,
    ...props
}) => {

    const isDisabled = disabled || loading

    const stateClasses = loading
        ? "bg-accent-primary opacity-50 cursor-not-allowed"
        : disabled
            ? "bg-gray-500 opacity-40 cursor-not-allowed"
            : "bg-accent-primary cursor-pointer hover:opacity-90 active:brightness-90"

    return (
        <button
            type={type}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-busy={loading}
            className={mergeClass(
                `
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    px-4
                    py-2
                    font-body
                    text-sm
                    font-medium
                    text-text-primary
                    transition
                `,
                stateClasses,
                className
            )}
            {...props}
        >
            {loading ? "Loading..." : children}
        </button>
    )
}

export default Button