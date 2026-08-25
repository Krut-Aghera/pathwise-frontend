import { useState } from "react"

import Input from "./Input"
import mergeClass from "../../utils/tailwind-cn.js"

const PasswordInput = ({
    disabled = false,
    error = false,
    className,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        if (disabled) {
            return
        }

        setShowPassword((current) => !current)
    }

    return (
        <div className="relative">

            <Input
                type={showPassword ? "text" : "password"}
                disabled={disabled}
                error={error}
                className={mergeClass(
                    "pr-16",
                    className
                )}
                {...props}
            />

            <button
                type="button"
                onClick={togglePasswordVisibility}
                disabled={disabled}
                aria-label={
                    showPassword
                        ? "Hide password"
                        : "Show password"
                }
                aria-pressed={showPassword}
                className="
                    absolute
                    right-2
                    top-1/2
                    -translate-y-1/2

                    cursor-pointer
                    rounded-md
                    px-2
                    py-1

                    font-body
                    text-xs
                    font-medium
                    text-text-secondary

                    transition

                    hover:text-text-primary
                    active:brightness-90

                    focus:outline-none
                    focus:ring-2
                    focus:ring-accent-primary/20

                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                {showPassword ? "Hide" : "Show"}
            </button>

        </div>
    )
}

export default PasswordInput