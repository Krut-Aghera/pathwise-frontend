import { Link } from "react-router-dom"
import { ArrowLeft, Compass, Home, Search } from "lucide-react"

const NotFoundPage = () => {
    return (
        <main className="
            flex
            min-h-[calc(100vh-5rem)]
            items-center
            justify-center
            bg-background-base
            px-4
            py-12
            sm:px-6
        ">

            <div className="
                w-full
                max-w-xl
                text-center
            ">

                {/* Icon */}

                <div className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-border-subtle
                    bg-background-surface
                    text-accent-primary
                    shadow-lg
                    shadow-accent-primary/5
                ">
                    <Compass
                        size={30}
                        strokeWidth={1.8}
                    />
                </div>


                {/* Error code */}

                <p className="
                    mt-8
                    font-compact
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-accent-primary
                ">
                    Error 404
                </p>


                {/* Heading */}

                <h1 className="
                    mt-3
                    font-accent
                    text-3xl
                    font-bold
                    tracking-tight
                    text-text-primary
                    sm:text-4xl
                ">
                    Page not found
                </h1>


                {/* Description */}

                <p className="
                    mx-auto
                    mt-4
                    max-w-md
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                    sm:text-base
                ">
                    The page you're looking for doesn't exist, may have
                    been moved, or the URL might be incorrect.
                </p>


                {/* Actions */}

                <div className="
                    mt-8
                    flex
                    flex-col
                    items-stretch
                    justify-center
                    gap-3
                    sm:flex-row
                    sm:items-center
                ">

                    <Link
                        to="/"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            bg-accent-primary
                            px-5
                            py-2.5
                            font-body
                            text-sm
                            font-medium
                            text-text-primary
                            transition
                            hover:opacity-90
                            active:brightness-90
                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/30
                        "
                    >
                        <Home size={16} />
                        Go home
                    </Link>


                    <Link
                        to="/courses"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            border
                            border-border-subtle
                            bg-background-surface
                            px-5
                            py-2.5
                            font-body
                            text-sm
                            font-medium
                            text-text-secondary
                            transition
                            hover:bg-background-elevated
                            hover:text-text-primary
                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/30
                        "
                    >
                        <Search size={16} />
                        Browse courses
                    </Link>

                </div>


                {/* Back */}

                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="
                        mx-auto
                        mt-6
                        inline-flex
                        cursor-pointer
                        items-center
                        gap-1.5
                        font-body
                        text-xs
                        text-text-muted
                        transition
                        hover:text-text-secondary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent-primary/30
                        rounded-md
                        px-2
                        py-1
                    "
                >
                    <ArrowLeft size={14} />
                    Go back
                </button>

            </div>

        </main>
    )
}

export default NotFoundPage