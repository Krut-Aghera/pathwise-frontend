import { engineeringFeatures } from "../../../data/aboutData"

const AboutEngineering = () => {
    return (
        <section
            id="engineering"
            className="
                border-y
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
                        text-accent-primary
                    "
                    >
                        Engineering Story
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
                        Built around real engineering problems.
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
                        The interesting part of Pathwise is not the number of
                        screens. It is how different systems interact:
                        authentication, course management, payments, media,
                        communication, and persistent learning progress.
                    </p>
                </div>

                <div
                    className="
                    mt-10
                    grid
                    gap-4
                    sm:grid-cols-2
                    lg:grid-cols-3
                "
                >
                    {engineeringFeatures.map(
                        ({ icon: Icon, title, description }) => (
                            <article
                                key={title}
                                className="
                                    rounded-xl
                                    border
                                    border-border-subtle
                                    bg-background-surface
                                    p-5
                                    transition
                                    hover:border-accent-primary/30
                                "
                            >
                                <div
                                    className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-background-elevated
                                    text-accent-primary
                                "
                                >
                                    <Icon size={17} />
                                </div>

                                <h3
                                    className="
                                    mt-4
                                    font-accent
                                    text-sm
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
                                    text-xs
                                    leading-5
                                    text-text-secondary
                                "
                                >
                                    {description}
                                </p>
                            </article>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutEngineering
