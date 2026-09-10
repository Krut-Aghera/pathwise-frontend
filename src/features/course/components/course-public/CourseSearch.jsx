import { Search, X } from "lucide-react"

const CourseSearch = ({ value = "", onChange }) => {
    return (
        <div className="relative">
            <Search
                size={18}
                className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-text-muted
                "
            />

            <input
                type="search"
                value={value}
                onChange={(event) => onChange?.(event.target.value)}
                placeholder="Search courses..."
                aria-label="Search courses"
                className="
                    h-12
                    w-full

                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface

                    pl-11
                    pr-11

                    font-body
                    text-sm
                    text-text-primary

                    outline-none

                    placeholder:text-text-muted

                    transition-all
                    duration-200

                    focus:border-accent-primary
                    focus:bg-background-elevated
                    focus:ring-2
                    focus:ring-accent-primary/10
                "
            />

            {value && (
                <button
                    type="button"
                    onClick={() => onChange?.("")}
                    aria-label="Clear search"
                    className="
                        absolute
                        right-3
                        top-1/2

                        flex
                        h-7
                        w-7
                        -translate-y-1/2
                        items-center
                        justify-center

                        cursor-pointer
                        rounded-md

                        text-text-muted

                        transition-colors
                        duration-200

                        hover:bg-background-elevated
                        hover:text-text-primary
                    "
                >
                    <X size={15} />
                </button>
            )}
        </div>
    )
}

export default CourseSearch
