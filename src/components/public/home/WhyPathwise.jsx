const benefits = [
    {
        title: "Learn at your pace",
        description:
            "Move through lessons when it works for you. Your progress stays with you.",
        accent: "primary",
    },

    {
        title: "Structured courses",
        description:
            "Follow clear lessons and sections instead of piecing your learning together.",
        accent: "secondary",
    },

    {
        title: "Track your progress",
        description: "Know exactly where you stopped and how far you've come.",
        accent: "unique",
    },

    {
        title: "Build practical skills",
        description:
            "Focus on concepts and workflows that translate into real projects.",
        accent: "primary",
    },
]

const WhyPathwise = () => {
    return (
        <section
            id="why-pathwise"
            className="
                border-y
                border-border-subtle
                bg-background-surface/30
                py-16
                sm:py-20
            "
        >
            <div
                className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                sm:px-6
                lg:px-8
            "
            >
                <div
                    className="
                    grid
                    grid-cols-1
                    gap-10
                    lg:grid-cols-5
                    lg:items-center
                "
                >
                    <div className="lg:col-span-2">
                        <span
                            className="
                            font-body
                            text-xs
                            font-medium
                            uppercase
                            tracking-widest
                            text-accent-secondary
                        "
                        >
                            Why Pathwise
                        </span>

                        <h2
                            className="
                            mt-2
                            font-accent
                            text-2xl
                            font-bold
                            leading-tight
                            text-text-primary
                            sm:text-3xl
                        "
                        >
                            A learning experience built around progress.
                        </h2>

                        <p
                            className="
                            mt-4
                            font-body
                            text-sm
                            leading-7
                            text-text-secondary
                        "
                        >
                            PATHWISE is designed to make learning feel
                            organized, measurable and practical — from your
                            first lesson to your final one.
                        </p>
                    </div>

                    <div
                        className="
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        lg:col-span-3
                    "
                    >
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="
                                    rounded-xl
                                    border
                                    border-border-subtle
                                    bg-background-surface
                                    p-5
                                "
                            >
                                <div
                                    className="
                                    mb-4
                                    h-2
                                    w-8
                                    rounded-full
                                    bg-accent-primary
                                "
                                />

                                <h3
                                    className="
                                    font-accent
                                    text-base
                                    font-semibold
                                    text-text-primary
                                "
                                >
                                    {benefit.title}
                                </h3>

                                <p
                                    className="
                                    mt-2
                                    font-body
                                    text-sm
                                    leading-6
                                    text-text-secondary
                                "
                                >
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyPathwise
