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
                gap-4
                px-4
                py-8
                text-center
                sm:px-6
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:px-8
                lg:text-left
            "
            >
                <div>
                    <span
                        className="
                            font-accent
                            text-lg
                            font-bold
                            text-text-primary
                        "
                    >
                        pathwise
                    </span>

                    <p
                        className="
                        mt-1
                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        Learn. Build. Grow. Empowering learners worldwide with curated path-based education.
                    </p>
                </div>

                <p
                    className="
                    font-body
                    text-xs
                    text-text-muted
                "
                >
                    © 2026 Pathwise. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer