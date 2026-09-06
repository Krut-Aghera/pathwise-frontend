const CourseLoadingSkeleton = () => {
    return (
        <div
            className="
            w-full
            animate-pulse
        "
        >
            {/* Course Header Skeleton */}

            <div
                className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface

                p-5

                sm:p-6
                lg:p-8
            "
            >
                {/* Breadcrumb / small label */}

                <div
                    className="
                    h-3
                    w-24
                    rounded
                    bg-background-elevated
                "
                />

                {/* Title */}

                <div
                    className="
                    mt-5
                    h-8
                    w-full
                    max-w-2xl
                    rounded
                    bg-background-elevated

                    sm:h-10
                "
                />

                <div
                    className="
                    mt-2
                    h-8
                    w-3/4
                    max-w-xl
                    rounded
                    bg-background-elevated

                    sm:h-10
                "
                />

                {/* Description */}

                <div
                    className="
                    mt-5
                    space-y-2
                "
                >
                    <div
                        className="
                        h-3
                        w-full
                        rounded
                        bg-background-elevated
                        "
                    />

                    <div
                        className="
                        h-3
                        w-11/12
                        rounded
                        bg-background-elevated
                        "
                    />

                    <div
                        className="
                        h-3
                        w-2/3
                        rounded
                        bg-background-elevated
                    "
                    />
                </div>

                {/* Instructor */}

                <div
                    className="
                    mt-6
                    flex
                    items-center
                    gap-3
                "
                >
                    <div
                        className="
                        h-9
                        w-9
                        shrink-0
                        rounded-full
                        bg-background-elevated
                        "
                    />

                    <div
                        className="
                        space-y-2
                    "
                    >
                        <div
                            className="
                            h-3
                            w-24
                            rounded
                            bg-background-elevated
                            "
                        />

                        <div
                            className="
                            h-2.5
                            w-32
                            rounded
                            bg-background-elevated
                        "
                        />
                    </div>
                </div>
            </div>

            {/* Statistics Skeleton */}

            <div
                className="
                mt-5

                grid
                grid-cols-2
                gap-3

                sm:grid-cols-4
            "
            >
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="
                            rounded-xl
                            border
                            border-border-subtle
                            bg-background-surface

                            p-4
                        "
                    >
                        <div
                            className="
                            h-4
                            w-4
                            rounded
                            bg-background-elevated
                            "
                        />

                        <div
                            className="
                            mt-3
                            h-5
                            w-16
                            rounded
                            bg-background-elevated
                            "
                        />

                        <div
                            className="
                            mt-2
                            h-2.5
                            w-20
                            rounded
                            bg-background-elevated
                            "
                        />
                    </div>
                ))}
            </div>

            {/* Main Content */}

            <div
                className="
                mt-6

                grid
                grid-cols-1
                gap-6

                lg:grid-cols-[minmax(0,1fr)_360px]
            "
            >
                {/* Curriculum */}

                <div
                    className="
                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface

                    p-5

                    sm:p-6
                "
                >
                    <div
                        className="
                        h-6
                        w-36
                        rounded
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-5
                        space-y-3
                    "
                    >
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div
                                key={item}
                                className="
                                    flex
                                    items-center
                                    gap-3

                                    rounded-lg
                                    border
                                    border-border-subtle

                                    p-4
                                "
                            >
                                <div
                                    className="
                                    h-8
                                    w-8
                                    shrink-0
                                    rounded-md
                                    bg-background-elevated
                                "
                                />

                                <div
                                    className="
                                    min-w-0
                                    flex-1
                                "
                                >
                                    <div
                                        className="
                                        h-3
                                        w-2/3
                                        rounded
                                        bg-background-elevated
                                    "
                                    />

                                    <div
                                        className="
                                        mt-2
                                        h-2.5
                                        w-1/3
                                        rounded
                                        bg-background-elevated
                                    "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enrollment Card */}

                <div
                    className="
                    h-fit
                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface

                    p-5

                    sm:p-6
                "
                >
                    {/* Price */}

                    <div
                        className="
                        h-3
                        w-20
                        rounded
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-2
                        h-9
                        w-28
                        rounded
                        bg-background-elevated
                    "
                    />

                    {/* Button */}

                    <div
                        className="
                        mt-5
                        h-11
                        w-full
                        rounded-lg
                        bg-background-elevated
                    "
                    />

                    {/* Included */}

                    <div
                        className="
                        mt-6
                        border-t
                        border-border-subtle
                        pt-5
                    "
                    >
                        <div
                            className="
                            h-3
                            w-32
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            mt-4
                            space-y-3
                        "
                        >
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                    "
                                >
                                    <div
                                        className="
                                        h-3.5
                                        w-3.5
                                        shrink-0
                                        rounded-full
                                        bg-background-elevated
                                    "
                                    />

                                    <div
                                        className="
                                        h-2.5
                                        w-32
                                        rounded
                                        bg-background-elevated
                                    "
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseLoadingSkeleton
