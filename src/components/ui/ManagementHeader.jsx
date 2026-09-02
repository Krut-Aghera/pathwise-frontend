const ManagementHeader = ({ icon: Icon, title, description, children }) => {
    return (
        <section
            className="
                rounded-2xl
                border
                border-border-subtle

                bg-background-surface

                px-5
                py-5

                sm:px-6
                sm:py-6
            "
        >
            <div
                className="
                    flex
                    items-start
                    gap-4
                "
            >
                {/* Icon */}

                <div
                    className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center

                        rounded-xl

                        bg-accent-primary/10
                        text-accent-primary
                    "
                >
                    {Icon && <Icon size={21} />}
                </div>

                {/* Content */}

                <div
                    className="
                        min-w-0
                        flex-1
                    "
                >
                    <h2
                        className="
                            font-accent
                            text-lg
                            font-semibold
                            tracking-tight
                            text-text-primary

                            sm:text-xl
                        "
                    >
                        {title}
                    </h2>

                    {description && (
                        <p
                            className="
                                mt-1

                                font-body
                                text-sm
                                leading-5
                                text-text-secondary
                            "
                        >
                            {description}
                        </p>
                    )}

                    {children && <div className="mt-3">{children}</div>}
                </div>
            </div>
        </section>
    )
}

export default ManagementHeader
