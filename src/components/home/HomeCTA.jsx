import { Link } from "react-router-dom"


const HomeCTA = () => {

    return (
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

            <div className="
                relative
                mx-auto
                w-full
                max-w-5xl
                overflow-hidden
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
                px-6
                py-12
                text-center
                sm:px-10
            ">

                <div className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    bg-accent-primary
                    opacity-10
                    blur-[100px]
                " />

                <div className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -left-24
                    h-64
                    w-64
                    rounded-full
                    bg-accent-secondary
                    opacity-10
                    blur-[100px]
                " />


                <div className="relative">

                    <h2 className="
                        font-accent
                        text-2xl
                        font-bold
                        text-text-primary
                        sm:text-3xl
                    ">
                        Ready to start learning?
                    </h2>

                    <p className="
                        mx-auto
                        mt-3
                        max-w-xl
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    ">
                        Explore the catalog, find something that interests
                        you, and start building your next skill.
                    </p>

                    <Link
                        to="/courses"
                        className="
                            mt-6
                            inline-flex
                            rounded-md
                            bg-accent-primary
                            px-6
                            py-3
                            font-body
                            text-sm
                            font-medium
                            text-text-primary
                            transition
                            hover:opacity-90
                            active:brightness-90
                        "
                    >
                        Explore Courses
                    </Link>

                </div>

            </div>

        </section>
    )
}


export default HomeCTA