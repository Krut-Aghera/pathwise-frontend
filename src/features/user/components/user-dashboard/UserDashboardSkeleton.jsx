const UserDashboardSkeleton = () => {
    return (
        <main
            className="
            min-h-[calc(100vh-4rem)]
            bg-background-base
        "
        >
            <div
                className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            "
            >
                {/* Dashboard header */}

                <section
                    className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border-subtle
                    bg-background-surface
                    px-5
                    py-7

                    sm:px-7
                    sm:py-8

                    lg:px-9
                    lg:py-10
                "
                >
                    <div
                        className="
                        h-6
                        w-40
                        animate-pulse
                        rounded-full
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-5
                        h-10
                        w-full
                        max-w-md
                        animate-pulse
                        rounded-lg
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-3
                        h-4
                        w-full
                        max-w-xl
                        animate-pulse
                        rounded
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-6
                        h-10
                        w-36
                        animate-pulse
                        rounded-xl
                        bg-background-elevated

                        lg:hidden
                    "
                    />
                </section>

                <div
                    className="
                    mt-6
                    space-y-8

                    lg:mt-8
                    lg:space-y-10
                "
                >
                    {/* Learning overview */}

                    <section>
                        <div
                            className="
                            h-3
                            w-28
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            mt-2
                            h-6
                            w-52
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            mt-4
                            grid
                            grid-cols-2
                            gap-3

                            lg:grid-cols-4
                        "
                        >
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="
                                        rounded-2xl
                                        border
                                        border-border-subtle
                                        bg-background-surface
                                        p-4
                                    "
                                >
                                    <div
                                        className="
                                        h-9
                                        w-9
                                        animate-pulse
                                        rounded-xl
                                        bg-background-elevated
                                    "
                                    />

                                    <div
                                        className="
                                        mt-5
                                        h-8
                                        w-16
                                        animate-pulse
                                        rounded
                                        bg-background-elevated
                                    "
                                    />

                                    <div
                                        className="
                                        mt-2
                                        h-3
                                        w-24
                                        animate-pulse
                                        rounded
                                        bg-background-elevated
                                    "
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Account status */}

                    <section>
                        <div
                            className="
                            h-3
                            w-24
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            mt-2
                            h-6
                            w-52
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            mt-4
                            grid
                            grid-cols-1
                            gap-4

                            lg:grid-cols-2
                        "
                        >
                            {Array.from({ length: 2 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="
                                        rounded-2xl
                                        border
                                        border-border-subtle
                                        bg-background-surface
                                        p-5
                                    "
                                >
                                    <div
                                        className="
                                        flex
                                        gap-4
                                    "
                                    >
                                        <div
                                            className="
                                            h-11
                                            w-11
                                            shrink-0
                                            animate-pulse
                                            rounded-xl
                                            bg-background-elevated
                                        "
                                        />

                                        <div className="flex-1">
                                            <div
                                                className="
                                                h-4
                                                w-36
                                                animate-pulse
                                                rounded
                                                bg-background-elevated
                                            "
                                            />

                                            <div
                                                className="
                                                mt-2
                                                h-3
                                                w-full
                                                max-w-sm
                                                animate-pulse
                                                rounded
                                                bg-background-elevated
                                            "
                                            />

                                            <div
                                                className="
                                                mt-2
                                                h-3
                                                w-2/3
                                                animate-pulse
                                                rounded
                                                bg-background-elevated
                                            "
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className="
                                        mt-6
                                        h-9
                                        w-32
                                        animate-pulse
                                        rounded-lg
                                        bg-background-elevated
                                    "
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Profile summary */}

                    <section
                        className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-border-subtle
                        bg-background-surface
                    "
                    >
                        <div
                            className="
                            border-b
                            border-border-subtle
                            px-5
                            py-4

                            sm:px-6
                        "
                        >
                            <div
                                className="
                                h-3
                                w-20
                                animate-pulse
                                rounded
                                bg-background-elevated
                            "
                            />

                            <div
                                className="
                                mt-2
                                h-4
                                w-44
                                animate-pulse
                                rounded
                                bg-background-elevated
                            "
                            />
                        </div>

                        <div
                            className="
                            grid
                            grid-cols-1

                            sm:grid-cols-3
                        "
                        >
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                        border-border-subtle
                                        px-5
                                        py-5

                                        sm:px-6
                                        sm:border-l
                                        first:border-l-0
                                    "
                                >
                                    <div
                                        className="
                                        h-10
                                        w-10
                                        shrink-0
                                        animate-pulse
                                        rounded-xl
                                        bg-background-elevated
                                    "
                                    />

                                    <div className="min-w-0">
                                        <div
                                            className="
                                            h-3
                                            w-16
                                            animate-pulse
                                            rounded
                                            bg-background-elevated
                                        "
                                        />

                                        <div
                                            className="
                                            mt-2
                                            h-4
                                            w-28
                                            animate-pulse
                                            rounded
                                            bg-background-elevated
                                        "
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Account management */}

                    <section>
                        <div
                            className="
                            h-3
                            w-20
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            mt-2
                            h-6
                            w-48
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            mt-4
                            overflow-hidden
                            rounded-2xl
                            border
                            border-border-subtle
                            bg-background-surface
                        "
                        >
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                        border-b
                                        border-border-subtle
                                        px-5
                                        py-5
                                        last:border-b-0

                                        sm:px-6
                                    "
                                >
                                    <div
                                        className="
                                        h-10
                                        w-10
                                        shrink-0
                                        animate-pulse
                                        rounded-xl
                                        bg-background-elevated
                                    "
                                    />

                                    <div className="flex-1">
                                        <div
                                            className="
                                            h-4
                                            w-36
                                            animate-pulse
                                            rounded
                                            bg-background-elevated
                                        "
                                        />

                                        <div
                                            className="
                                            mt-2
                                            h-3
                                            w-full
                                            max-w-md
                                            animate-pulse
                                            rounded
                                            bg-background-elevated
                                        "
                                        />
                                    </div>

                                    <div
                                        className="
                                        h-4
                                        w-4
                                        shrink-0
                                        animate-pulse
                                        rounded-full
                                        bg-background-elevated
                                    "
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default UserDashboardSkeleton
