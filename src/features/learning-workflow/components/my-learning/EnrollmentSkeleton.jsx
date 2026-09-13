const EnrollmentSkeleton = () => {
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
        >
            {Array.from({ length: 8 }).map((_, index) => (
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

                    <div className="space-y-3 p-5">
                        <div
                            className="
                                h-4
                                w-20
                                animate-pulse
                                rounded
                                bg-background-elevated
                            "
                        />

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
                                h-10
                                w-full
                                animate-pulse
                                rounded-lg
                                bg-background-elevated
                            "
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EnrollmentSkeleton
