import { RotateCcw } from "lucide-react"

import {
    COURSE_LANGUAGE_OPTIONS,
    COURSE_LEVEL_OPTIONS,
    COURSE_SORT_OPTIONS,
    SORT_ORDER_OPTIONS,
} from "../../../courseConstants"

const FilterOption = ({ id, label, checked, onChange }) => {
    return (
        <label
            htmlFor={id}
            className="
                group
                flex
                cursor-pointer
                items-center
                gap-3

                rounded-lg
                px-2
                py-2

                transition-colors
                duration-200

                hover:bg-background-elevated
            "
        >
            <span
                className="
                    relative
                    flex
                    h-4
                    w-4
                    shrink-0
                    items-center
                    justify-center
                "
            >
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="
                        peer
                        h-4
                        w-4
                        cursor-pointer
                        appearance-none

                        rounded
                        border
                        border-border-subtle
                        bg-background-elevated

                        transition-all
                        duration-200

                        checked:border-accent-primary
                        checked:bg-accent-primary

                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent-primary/20
                    "
                />

                <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    className="
                        pointer-events-none
                        absolute
                        h-3
                        w-3

                        opacity-0
                        transition-opacity
                        duration-150

                        peer-checked:opacity-100
                    "
                >
                    <path
                        d="M2.5 6.2L4.8 8.5L9.5 3.5"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>

            <span
                className="
                    font-body
                    text-sm
                    text-text-secondary

                    transition-colors
                    duration-200

                    group-hover:text-text-primary
                "
            >
                {label}
            </span>
        </label>
    )
}

const FilterGroup = ({ title, options = [], value, onChange, name }) => {
    return (
        <div>
            <h3
                className="
                    mb-3

                    font-body
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-text-secondary
                "
            >
                {title}
            </h3>

            <div className="space-y-0.5">
                {options?.map((option) => (
                    <FilterOption
                        key={option?.value}
                        id={`${name}-${option?.value}`}
                        label={option?.label}
                        checked={value === option?.value}
                        onChange={() => {
                            onChange?.(
                                value === option?.value ? "" : option?.value
                            )
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

const CourseFilters = ({
    level,
    language,
    sortBy,
    sortOrder,
    onLevelChange,
    onLanguageChange,
    onSortByChange,
    onSortOrderChange,
    onReset,
    hasActiveFilters,
}) => {
    return (
        <aside
            className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-border-subtle

                    px-6
                    py-4
                "
            >
                <h2
                    className="
                        font-accent
                        text-sm
                        font-semibold
                        text-text-primary
                    "
                >
                    Filters
                </h2>

                {hasActiveFilters && (
                    <button
                        type="button"
                        onClick={onReset}
                        className="
                            inline-flex
                            cursor-pointer
                            items-center
                            gap-1.5

                            font-body
                            text-xs
                            font-medium
                            text-text-muted

                            transition-colors
                            duration-200

                            hover:text-accent-primary
                        "
                    >
                        <RotateCcw size={12} />
                        Reset
                    </button>
                )}
            </div>

            {/* Filter groups */}

            <div
                className="
                    space-y-8
                    px-6
                    py-5
                "
            >
                {/* Level */}

                <FilterGroup
                    title="Level"
                    name="level"
                    options={COURSE_LEVEL_OPTIONS}
                    value={level}
                    onChange={onLevelChange}
                />

                {/* Language */}

                <FilterGroup
                    title="Language"
                    name="language"
                    options={COURSE_LANGUAGE_OPTIONS}
                    value={language}
                    onChange={onLanguageChange}
                />

                {/* Sort by */}

                <FilterGroup
                    title="Sort by"
                    name="sort-by"
                    options={COURSE_SORT_OPTIONS}
                    value={sortBy}
                    onChange={onSortByChange}
                />

                {/* Sort order */}

                <FilterGroup
                    title="Sort order"
                    name="sort-order"
                    options={SORT_ORDER_OPTIONS}
                    value={sortOrder}
                    onChange={onSortOrderChange}
                />
            </div>
        </aside>
    )
}

export default CourseFilters
