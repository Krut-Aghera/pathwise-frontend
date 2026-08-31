const LectureDetailsLoadingSkeleton = () => {

    return (
        <div className="
            mx-auto
            w-full
            max-w-7xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        ">

            {/* Header skeleton */}

            <div className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                p-5

                sm:p-6
            ">

                <div className="
                    h-3
                    w-24
                    animate-pulse
                    rounded
                    bg-background-elevated
                " />

                <div className="
                    mt-3
                    h-7
                    w-2/3
                    animate-pulse
                    rounded
                    bg-background-elevated
                " />

                <div className="
                    mt-3
                    h-4
                    w-full
                    max-w-2xl
                    animate-pulse
                    rounded
                    bg-background-elevated
                " />

            </div>


            {/* Main content */}

            <div className="
                mt-6

                grid
                grid-cols-1
                gap-6

                lg:grid-cols-[minmax(0,1fr)_360px]
            ">

                {/* Main column */}

                <div className="
                    min-w-0
                    space-y-6
                ">

                    {/* Information */}

                    <div className="
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface
                        p-5

                        sm:p-6
                    ">

                        <div className="
                            h-5
                            w-44
                            animate-pulse
                            rounded
                            bg-background-elevated
                        " />

                        <div className="
                            mt-5

                            grid
                            grid-cols-1
                            gap-3

                            sm:grid-cols-2
                        ">

                            {Array.from(
                                { length: 4 }
                            ).map(
                                (_, index) => (
                                    <div
                                        key={index}
                                        className="
                                            rounded-lg
                                            border
                                            border-border-subtle
                                            bg-background-elevated
                                            p-4
                                        "
                                    >

                                        <div className="
                                            h-3
                                            w-24
                                            animate-pulse
                                            rounded
                                            bg-background-surface
                                        " />

                                        <div className="
                                            mt-3
                                            h-4
                                            w-20
                                            animate-pulse
                                            rounded
                                            bg-background-surface
                                        " />

                                    </div>
                                )
                            )}

                        </div>

                    </div>


                    {/* Video skeleton */}

                    <div className="
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface
                        p-5

                        sm:p-6
                    ">

                        <div className="
                            h-5
                            w-32
                            animate-pulse
                            rounded
                            bg-background-elevated
                        " />

                        <div className="
                            mt-5

                            aspect-video
                            w-full

                            animate-pulse
                            rounded-lg

                            bg-background-elevated
                        " />

                    </div>

                </div>


                {/* Sidebar */}

                <aside className="
                    min-w-0
                    space-y-6
                ">

                    {/* Actions */}

                    <div className="
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface
                        p-5

                        sm:p-6
                    ">

                        <div className="
                            h-5
                            w-32
                            animate-pulse
                            rounded
                            bg-background-elevated
                        " />

                        <div className="
                            mt-5
                            space-y-3
                        ">

                            <div className="
                                h-10
                                w-full
                                animate-pulse
                                rounded-lg
                                bg-background-elevated
                            " />

                            <div className="
                                h-10
                                w-full
                                animate-pulse
                                rounded-lg
                                bg-background-elevated
                            " />

                        </div>

                    </div>

                </aside>

            </div>

        </div>
    )
}


export default LectureDetailsLoadingSkeleton
