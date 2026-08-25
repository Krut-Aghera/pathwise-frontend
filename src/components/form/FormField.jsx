import mergeClass from "../../utils/tailwind-cn.js"

const FormField = ({
    label,
    htmlFor,
    error = null,
    required = false,
    children,
    className,
}) => {

    const errorId = error && htmlFor
        ? `${htmlFor}-error`
        : undefined

    return (
        <div
            className={mergeClass(
                `
                    flex
                    flex-col
                    gap-1.5
                `,
                className
            )}
        >

            <label
                htmlFor={htmlFor}
                className="
                    font-body
                    text-sm
                    font-medium
                    text-text-secondary
                "
            >
                {label}

                {required && (
                    <span className="ml-1 text-status-danger">
                        *
                    </span>
                )}
            </label>


            <div>
                {children}
            </div>


            {error && (
                <p
                    id={errorId}
                    className="
                        font-body
                        text-xs
                        leading-5
                        text-status-danger
                    "
                >
                    {error}
                </p>
            )}

        </div>
    )
}

export default FormField