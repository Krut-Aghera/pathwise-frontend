import { ArrowUpRight } from "lucide-react"

const CourseInstructor = ({ instructor }) => {
    if (!instructor) {
        return null
    }

    return (
        <section>
            <div className="flex items-end justify-between gap-4">
                <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-accent-secondary">
                        Course instructor
                    </p>

                    <h2 className="mt-1 font-accent text-xl font-semibold text-text-primary sm:text-2xl">
                        Meet your instructor
                    </h2>
                </div>
            </div>

            <div
                className="
                    group
                    mt-5
                    flex
                    items-center
                    gap-5

                    rounded-2xl
                    border
                    border-border-subtle
                    bg-background-surface
                    p-4

                    transition-colors
                    duration-200
                    hover:border-accent-secondary/20
                    cursor-pointer

                    sm:p-5
                "
            >
                {/* Profile image */}

                <div
                    className="
                        relative
                        h-14
                        w-14
                        shrink-0
                        overflow-hidden
                        rounded-xl
                        border
                        border-accent-secondary/20
                        bg-background-elevated

                        sm:h-20
                        sm:w-20
                    "
                >
                    {instructor?.profilePicture?.url ? (
                        <img
                            src={instructor.profilePicture.url}
                            alt={instructor?.username ?? "Instructor"}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <span
                                className="
                                    font-accent
                                    text-2xl
                                    font-semibold
                                    uppercase
                                    text-accent-secondary
                                "
                            >
                                {instructor?.username
                                    ?.charAt(0)
                                    ?.toUpperCase() ?? "I"}
                            </span>
                        </div>
                    )}
                </div>

                {/* Instructor information */}

                <div className="min-w-0 flex-1">
                    <h3
                        className="
                            truncate
                            font-accent
                            text-lg
                            font-semibold
                            text-text-primary
                            capitalize

                            sm:text-xl
                        "
                    >
                        {instructor?.username ?? "Instructor"}
                    </h3>

                    <p
                        className="
                            mt-1
                            font-body
                            text-sm
                            text-text-secondary
                        "
                    >
                        Instructor at Pathwise
                    </p>

                    <p
                        className="
                            mt-2
                            max-w-xl
                            font-body
                            text-xs
                            leading-5
                            text-text-muted

                            sm:text-sm
                        "
                    >
                        Learn from practical, structured lessons designed to
                        help you build real-world skills.
                    </p>
                </div>

                {/* Profile indicator */}

                <div
                    className="
                        hidden
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center

                        rounded-full
                        border
                        border-border-subtle
                        bg-background-elevated
                        text-text-muted
                        
                        group-hover:border-accent-secondary/5
                        group-hover:bg-accent-secondary/10
                        group-hover:text-accent-secondary/50

                        transition 
                        duration-300

                        sm:flex
                    "
                >
                    <ArrowUpRight
                        size={16}
                        className="
                            transition-transform
                            duration-200
                            ease-out
                            group-hover:rotate-45
                        "
                    />
                </div>
            </div>
        </section>
    )
}

export default CourseInstructor
