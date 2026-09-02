import { reasons } from "../../../data/aboutData"

const AboutWhyPathwise = () => {
    return (
        <section
            className="
            border-b
            border-border-subtle
            bg-background-surface/30
        "
        >
            <div
                className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                py-20
                sm:px-6
                lg:px-8
            "
            >
                <div className="max-w-3xl">
                    <span
                        className="
                        font-body
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-accent-secondary
                    "
                    >
                        Why Pathwise?
                    </span>

                    <h2
                        className="
                        mt-3
                        font-accent
                        text-3xl
                        font-bold
                        tracking-tight
                        text-text-primary
                        sm:text-4xl
                    "
                    >
                        More than a CRUD application.
                    </h2>

                    <p
                        className="
                        mt-5
                        font-body
                        text-base
                        leading-7
                        text-text-secondary
                    "
                    >
                        Pathwise was intentionally built as a serious portfolio
                        project rather than another basic MERN CRUD application.
                        The goal is to understand what happens when multiple
                        real-world systems have to operate together.
                    </p>
                </div>

                <div
                    className="
                    mt-10
                    grid
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-4
                "
                >
                    {reasons.map(({ icon: Icon, title, text }) => (
                        <article
                            key={title}
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
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-accent-primary/10
                                    text-accent-primary
                                "
                            >
                                <Icon size={19} />
                            </div>

                            <h3
                                className="
                                    mt-4
                                    font-accent
                                    text-base
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                {title}
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
                                {text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutWhyPathwise
