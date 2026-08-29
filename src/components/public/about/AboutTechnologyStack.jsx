import { technologies } from "../../../data/aboutData"

const AboutTechnologyStack = () => {
    return (
        <section>

            <div className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                py-20
                sm:px-6
                lg:px-8
            ">

                <div className="text-center">

                    <span className="
                        font-body
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-accent-secondary
                    ">
                        Technology Stack
                    </span>


                    <h2 className="
                        mt-3
                        font-accent
                        text-3xl
                        font-bold
                        text-text-primary
                        sm:text-4xl
                    ">
                        Tools behind the platform
                    </h2>

                </div>


                <div className="
                    mx-auto
                    mt-10
                    grid
                    max-w-5xl
                    gap-5
                    md:grid-cols-3
                ">

                    {technologies.map(
                        ({ category, icon: Icon, items }) => (
                            <article
                                key={category}
                                className="
                                    rounded-xl
                                    border
                                    border-border-subtle
                                    bg-background-surface
                                    p-6
                                "
                            >

                                <div className="
                                    flex
                                    items-center
                                    gap-3
                                ">

                                    <div className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-accent-primary/10
                                        text-accent-primary
                                    ">
                                        <Icon size={17} />
                                    </div>


                                    <h3 className="
                                        font-accent
                                        text-base
                                        font-semibold
                                        text-text-primary
                                    ">
                                        {category}
                                    </h3>

                                </div>


                                <div className="
                                    mt-5
                                    flex
                                    flex-wrap
                                    gap-2
                                ">

                                    {items.map((item) => (
                                        <span
                                            key={item}
                                            className="
                                                rounded-md
                                                border
                                                border-border-subtle
                                                bg-background-elevated
                                                px-2.5
                                                py-1.5
                                                font-body
                                                text-xs
                                                text-text-secondary
                                            "
                                        >
                                            {item}
                                        </span>
                                    ))}

                                </div>

                            </article>
                        )
                    )}

                </div>

            </div>

        </section>
    )
}


export default AboutTechnologyStack