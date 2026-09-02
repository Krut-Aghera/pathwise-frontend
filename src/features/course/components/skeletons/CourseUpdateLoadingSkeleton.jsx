const CourseUpdateLoadingSkeleton = () => {
    return (
        <div className="space-y-6">
            {/* Page Header */}

            <div
                className="
                flex
                flex-col
                gap-4

                sm:flex-row
                sm:items-end
                sm:justify-between
            "
            >
                <div className="w-full">
                    {/* Title */}

                    <div
                        className="
                        h-8
                        w-40
                        animate-pulse
                        rounded-md
                        bg-background-elevated

                        sm:h-9
                    "
                    />

                    {/* Description */}

                    <div
                        className="
                        mt-3
                        h-5
                        w-full
                        max-w-2xl
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />
                </div>

                {/* Change Thumbnail */}

                <div
                    className="
                    h-10
                    w-full
                    animate-pulse
                    rounded-md
                    bg-background-elevated

                    sm:w-44
                "
                />
            </div>

            {/* Basic Information */}

            <section
                className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                p-5

                sm:p-6
            "
            >
                <div className="mb-6">
                    <div
                        className="
                        h-6
                        w-40
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-2
                        h-4
                        w-full
                        max-w-lg
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />
                </div>

                <div className="space-y-5">
                    {/* Title */}

                    <div>
                        <div
                            className="
                            mb-2
                            h-4
                            w-24
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            h-10
                            w-full
                            animate-pulse
                            rounded-md
                            bg-background-elevated
                        "
                        />
                    </div>

                    {/* Subtitle */}

                    <div>
                        <div
                            className="
                            mb-2
                            h-4
                            w-20
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            h-10
                            w-full
                            animate-pulse
                            rounded-md
                            bg-background-elevated
                        "
                        />
                    </div>

                    {/* Description */}

                    <div>
                        <div
                            className="
                            mb-2
                            h-4
                            w-24
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            h-36
                            w-full
                            animate-pulse
                            rounded-md
                            bg-background-elevated
                        "
                        />
                    </div>
                </div>
            </section>

            {/* Course Details */}

            <section
                className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                p-5

                sm:p-6
            "
            >
                <div className="mb-6">
                    <div
                        className="
                        h-6
                        w-36
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-2
                        h-4
                        w-full
                        max-w-xl
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />
                </div>

                <div
                    className="
                    grid
                    grid-cols-1
                    gap-5

                    sm:grid-cols-2
                "
                >
                    {/* Price */}

                    <div>
                        <div
                            className="
                            mb-2
                            h-4
                            w-16
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            h-10
                            w-full
                            animate-pulse
                            rounded-md
                            bg-background-elevated
                        "
                        />
                    </div>

                    {/* Language */}

                    <div>
                        <div
                            className="
                            mb-2
                            h-4
                            w-20
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            h-10
                            w-full
                            animate-pulse
                            rounded-md
                            bg-background-elevated
                        "
                        />
                    </div>

                    {/* Level */}

                    <div className="sm:col-span-2">
                        <div
                            className="
                            mb-2
                            h-4
                            w-16
                            animate-pulse
                            rounded
                            bg-background-elevated
                        "
                        />

                        <div
                            className="
                            h-10
                            w-full
                            animate-pulse
                            rounded-md
                            bg-background-elevated
                        "
                        />
                    </div>
                </div>
            </section>

            {/* Learning Outcomes */}

            <section
                className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                p-5

                sm:p-6
            "
            >
                <div className="mb-6">
                    <div
                        className="
                        h-6
                        w-48
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-2
                        h-4
                        w-full
                        max-w-xl
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />
                </div>

                <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="
                                flex
                                flex-col
                                gap-2

                                sm:flex-row
                            "
                        >
                            <div
                                className="
                                h-10
                                min-w-0
                                flex-1
                                animate-pulse
                                rounded-md
                                bg-background-elevated
                            "
                            />

                            <div
                                className="
                                h-10
                                w-20
                                animate-pulse
                                rounded-md
                                bg-background-elevated

                                sm:mt-0
                            "
                            />
                        </div>
                    ))}

                    <div
                        className="
                        h-10
                        w-full
                        animate-pulse
                        rounded-md
                        bg-background-elevated

                        sm:w-48
                    "
                    />
                </div>
            </section>

            {/* Target Audience */}

            <section
                className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                p-5

                sm:p-6
            "
            >
                <div className="mb-6">
                    <div
                        className="
                        h-6
                        w-40
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-2
                        h-4
                        w-full
                        max-w-xl
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />
                </div>

                <div className="space-y-4">
                    {[1, 2].map((item) => (
                        <div
                            key={item}
                            className="
                                flex
                                flex-col
                                gap-2

                                sm:flex-row
                            "
                        >
                            <div
                                className="
                                h-10
                                min-w-0
                                flex-1
                                animate-pulse
                                rounded-md
                                bg-background-elevated
                            "
                            />

                            <div
                                className="
                                h-10
                                w-20
                                animate-pulse
                                rounded-md
                                bg-background-elevated
                            "
                            />
                        </div>
                    ))}

                    <div
                        className="
                        h-10
                        w-full
                        animate-pulse
                        rounded-md
                        bg-background-elevated

                        sm:w-48
                    "
                    />
                </div>
            </section>

            {/* Requirements */}

            <section
                className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                p-5

                sm:p-6
            "
            >
                <div className="mb-6">
                    <div
                        className="
                        h-6
                        w-32
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />

                    <div
                        className="
                        mt-2
                        h-4
                        w-full
                        max-w-xl
                        animate-pulse
                        rounded-md
                        bg-background-elevated
                    "
                    />
                </div>

                <div className="space-y-4">
                    {[1, 2].map((item) => (
                        <div
                            key={item}
                            className="
                                flex
                                flex-col
                                gap-2

                                sm:flex-row
                            "
                        >
                            <div
                                className="
                                h-10
                                min-w-0
                                flex-1
                                animate-pulse
                                rounded-md
                                bg-background-elevated
                            "
                            />

                            <div
                                className="
                                h-10
                                w-20
                                animate-pulse
                                rounded-md
                                bg-background-elevated
                            "
                            />
                        </div>
                    ))}

                    <div
                        className="
                        h-10
                        w-full
                        animate-pulse
                        rounded-md
                        bg-background-elevated

                        sm:w-48
                    "
                    />
                </div>
            </section>

            {/* Form Actions */}

            <div
                className="
                flex
                flex-col-reverse
                gap-3

                border-t
                border-border-subtle
                pt-5

                sm:flex-row
                sm:justify-end
            "
            >
                <div
                    className="
                    h-10
                    w-full
                    animate-pulse
                    rounded-md
                    bg-background-elevated

                    sm:w-24
                "
                />

                <div
                    className="
                    h-10
                    w-full
                    animate-pulse
                    rounded-md
                    bg-background-elevated

                    sm:w-32
                "
                />
            </div>
        </div>
    )
}

export default CourseUpdateLoadingSkeleton
