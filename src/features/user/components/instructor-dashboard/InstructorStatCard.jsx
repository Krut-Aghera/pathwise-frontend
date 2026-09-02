const InstructorStatCard = ({
    label,
    value,
    description,
    accent = "secondary",
}) => {
    const accentClasses = {
        primary: "text-accent-primary",
        secondary: "text-accent-secondary",
        unique: "text-accent-unique",
    }

    return (
        <article
            className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            p-5
            transition
            hover:bg-background-elevated
        "
        >
            <p
                className="
                font-body
                text-xs
                text-text-muted
            "
            >
                {label}
            </p>

            <p
                className={`
                mt-2
                font-accent
                text-2xl
                font-bold

                ${accentClasses[accent]}
            `}
            >
                {value}
            </p>

            <p
                className="
                mt-1
                font-body
                text-xs
                text-text-secondary
            "
            >
                {description}
            </p>
        </article>
    )
}

export default InstructorStatCard
