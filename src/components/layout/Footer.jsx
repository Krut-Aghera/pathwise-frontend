import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer
            className="
            border-t
            border-border-subtle
            bg-background-base
        "
        >
            <div
                className="
                mx-auto
                flex
                w-full
                max-w-7xl
                flex-col
                gap-6
                px-4
                py-8
                sm:px-6
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:px-8
            "
            >
                <div>
                    <Link
                        to="/"
                        className="
                            font-accent
                            text-lg
                            font-bold
                            text-text-primary
                        "
                    >
                        pathwise
                    </Link>

                    <p
                        className="
                        mt-1
                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        Learn. Build. Grow.
                    </p>
                </div>

                <nav
                    className="
                    flex
                    flex-wrap
                    gap-x-5
                    gap-y-2
                    font-body
                    text-xs
                    text-text-muted
                "
                >
                    <Link
                        to="/courses"
                        className="transition hover:text-text-secondary"
                    >
                        Courses
                    </Link>

                    <Link
                        to="/learning-paths"
                        className="transition hover:text-text-secondary"
                    >
                        Learning Paths
                    </Link>

                    <Link
                        to="/auth/login"
                        className="transition hover:text-text-secondary"
                    >
                        Log in
                    </Link>

                    <Link
                        to="/auth/signup"
                        className="transition hover:text-text-secondary"
                    >
                        Sign up
                    </Link>
                </nav>

                <p
                    className="
                    font-body
                    text-xs
                    text-text-muted
                "
                >
                    © 2026 Pathwise
                </p>
            </div>
        </footer>
    )
}

export default Footer
