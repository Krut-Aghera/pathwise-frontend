const EnrollmentSkeleton = () => {
    return (
        <div
            className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:gap-6
                xl:grid-cols-3
            "
        >
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="
                        overflow-hidden
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface
                    "
                >
                    <div
                        className="
                            aspect-video
                            animate-pulse
                            bg-background-elevated
                        "
                    />

                    <div className="space-y-4 p-5">
                        <div
                            className="
                                h-5
                                w-32
                                animate-pulse
                                rounded
                                bg-background-elevated
                            "
                        />

                        <div className="space-y-2">
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
                                    w-full
                                    animate-pulse
                                    rounded
                                    bg-background-elevated
                                "
                            />

                            <div
                                className="
                                    h-4
                                    w-3/4
                                    animate-pulse
                                    rounded
                                    bg-background-elevated
                                "
                            />
                        </div>

                        <div className="space-y-2">
                            <div
                                className="
                                    h-3
                                    w-full
                                    animate-pulse
                                    rounded
                                    bg-background-elevated
                                "
                            />

                            <div
                                className="
                                    h-1.5
                                    w-full
                                    animate-pulse
                                    rounded-full
                                    bg-background-elevated
                                "
                            />
                        </div>

                        <div
                            className="
                                flex
                                justify-between
                                border-t
                                border-border-subtle
                                pt-4
                            "
                        >
                            <div
                                className="
                                    h-4
                                    w-28
                                    animate-pulse
                                    rounded
                                    bg-background-elevated
                                "
                            />

                            <div
                                className="
                                    h-4
                                    w-12
                                    animate-pulse
                                    rounded
                                    bg-background-elevated
                                "
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EnrollmentSkeleton
