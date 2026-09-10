const CourseGridSkeleton = ({ count = 8 }) => {
    return (
        <div
            className="
                grid
                grid-cols-1
                gap-5

                sm:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-4
            "
            aria-label="Loading courses"
            aria-busy="true"
        >
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="
                        h-full
                        overflow-hidden
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface
                    "
                >
                    <div
                        className="
                            aspect-videoo
                            animate-pulse
                            bg-background-elevated
                        "
                    />

                    <div className="space-y-3 p-5">
                        <div
                            className="
                                h-5
                                w-4/5
                                animate-pulse
                                rounded
                                bg-background-elevated
                            "
                        />

                        <div
                            className="
                                h-4
                                w-2/5
                                animate-pulse
                                rounded
                                bg-background-elevated
                            "
                        />

                        <div className="flex gap-2 pt-2">
                            <div
                                className="
                                    h-6
                                    w-20
                                    animate-pulse
                                    rounded-md
                                    bg-background-elevated
                                "
                            />

                            <div
                                className="
                                    h-6
                                    w-16
                                    animate-pulse
                                    rounded-md
                                    bg-background-elevated
                                "
                            />
                        </div>

                        <div
                            className="
                                mt-4
                                h-4
                                w-full
                                animate-pulse
                                rounded
                                bg-background-elevated
                            "
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CourseGridSkeleton


