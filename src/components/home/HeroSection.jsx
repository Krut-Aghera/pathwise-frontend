import { Link } from "react-router-dom"


const HeroSection = () => {

    return (
        <section className="
            relative
            overflow-hidden
            border-b
            border-border-subtle
        ">

            {/* Ambient background */}

            <div className="
                pointer-events-none
                absolute
                -left-40
                -top-40
                h-96
                w-96
                rounded-full
                bg-accent-primary
                opacity-10
                blur-[120px]
            " />

            <div className="
                pointer-events-none
                absolute
                -right-40
                top-40
                h-96
                w-96
                rounded-full
                bg-accent-secondary
                opacity-10
                blur-[120px]
            " />


            <div className="
                relative
                mx-auto
                grid
                w-full
                max-w-7xl
                grid-cols-1
                items-center
                gap-12
                px-4
                py-16
                sm:px-6
                sm:py-20
                lg:grid-cols-12
                lg:px-8
                lg:py-28
            ">

                {/* Copy */}

                <div className="
                    text-center
                    lg:col-span-7
                    lg:text-left
                ">

                    <div className="
                        mb-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-border-subtle
                        bg-background-surface
                        px-3
                        py-1.5
                    ">
                        <span className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-accent-primary
                        " />

                        <span className="
                            font-body
                            text-xs
                            text-text-secondary
                        ">
                            Learn skills that move you forward
                        </span>
                    </div>


                    <h1 className="
                        font-accent
                        text-4xl
                        font-bold
                        leading-tight
                        tracking-tight
                        text-text-primary
                        sm:text-5xl
                        lg:text-6xl
                    ">
                        Learn with purpose.
                        <br />

                        <span className="
                            bg-gradient-to-r
                            from-accent-primary
                            via-accent-unique
                            to-accent-secondary
                            bg-clip-text
                            text-transparent
                        ">
                            Build your future.
                        </span>
                    </h1>


                    <p className="
                        mx-auto
                        mt-5
                        max-w-2xl
                        font-body
                        text-base
                        leading-7
                        text-text-secondary
                        sm:text-lg
                        lg:mx-0
                    ">
                        Discover structured courses, practical projects,
                        and guided learning paths designed to help you
                        build skills you can actually use.
                    </p>


                    <div className="
                        mt-8
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                        sm:justify-center
                        lg:justify-start
                    ">
                        <Link
                            to="/courses"
                            className="
                                rounded-md
                                bg-accent-primary
                                px-6
                                py-3
                                text-center
                                font-body
                                text-sm
                                font-medium
                                text-text-primary
                                shadow-lg
                                shadow-accent-primary/10
                                transition
                                hover:opacity-90
                                active:brightness-90
                            "
                        >
                            Explore Courses
                        </Link>

                        <Link
                            to="/learning-paths"
                            className="
                                rounded-md
                                border
                                border-border-subtle
                                bg-background-surface
                                px-6
                                py-3
                                text-center
                                font-body
                                text-sm
                                font-medium
                                text-text-secondary
                                transition
                                hover:bg-background-elevated
                                hover:text-text-primary
                            "
                        >
                            Browse Learning Paths
                        </Link>
                    </div>

                </div>


                {/* Learning dashboard visual */}

                <div className="
                    flex
                    justify-center
                    lg:col-span-5
                ">

                    <div className="
                        w-full
                        max-w-sm
                        rounded-2xl
                        border
                        border-border-subtle
                        bg-background-surface/80
                        p-5
                        shadow-2xl
                        backdrop-blur
                    ">

                        <div className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-border-subtle
                            pb-4
                        ">
                            <span className="
                                font-body
                                text-xs
                                font-medium
                                text-text-muted
                            ">
                                YOUR LEARNING
                            </span>

                            <span className="
                                rounded-full
                                bg-status-success/10
                                px-2
                                py-1
                                font-body
                                text-[10px]
                                font-medium
                                text-status-success
                            ">
                                ACTIVE
                            </span>
                        </div>


                        <div className="py-5">

                            <div className="
                                flex
                                items-end
                                justify-between
                            ">
                                <div>
                                    <p className="
                                        font-body
                                        text-xs
                                        text-text-muted
                                    ">
                                        Current progress
                                    </p>

                                    <p className="
                                        mt-1
                                        font-accent
                                        text-3xl
                                        font-bold
                                        text-text-primary
                                    ">
                                        68%
                                    </p>
                                </div>

                                <span className="
                                    font-body
                                    text-xs
                                    text-text-secondary
                                ">
                                    12 / 18 lessons
                                </span>
                            </div>


                            <div className="
                                mt-4
                                h-2
                                overflow-hidden
                                rounded-full
                                bg-background-elevated
                            ">
                                <div className="
                                    h-full
                                    w-[68%]
                                    rounded-full
                                    bg-accent-primary
                                " />
                            </div>

                        </div>


                        <div className="
                            rounded-xl
                            border
                            border-border-subtle
                            bg-background-elevated
                            p-4
                        ">
                            <p className="
                                font-body
                                text-xs
                                text-text-muted
                            ">
                                Continue learning
                            </p>

                            <p className="
                                mt-1
                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary
                            ">
                                Modern Web Development
                            </p>

                            <p className="
                                mt-1
                                font-body
                                text-xs
                                text-text-secondary
                            ">
                                Next: Building reusable components
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}


export default HeroSection