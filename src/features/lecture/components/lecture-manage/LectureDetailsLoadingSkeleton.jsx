const SkeletonBlock = ({
    className = "",
}) => {

    return (
        <div className={`
            animate-pulse
            rounded-lg
            bg-background-elevated

            ${className}
        `} />
    )
}


const LectureDetailsLoadingSkeleton = () => {

    return (
        <main className="
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

            {/* Header */}

            <div className="
                overflow-hidden

                rounded-2xl

                border
                border-border-subtle

                bg-background-surface
            ">

                {/* Top */}

                <div className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-border-subtle

                    px-5
                    py-4

                    sm:px-6
                ">

                    <SkeletonBlock
                        className="
                            h-7
                            w-28
                        "
                    />

                    <SkeletonBlock
                        className="
                            h-6
                            w-20
                            rounded-full
                        "
                    />

                </div>


                {/* Main */}

                <div className="
                    flex
                    items-start
                    gap-4

                    px-5
                    py-6

                    sm:px-6
                    sm:py-7
                ">

                    <SkeletonBlock
                        className="
                            h-12
                            w-12
                            shrink-0
                            rounded-xl
                        "
                    />

                    <div className="
                        min-w-0
                        flex-1
                    ">

                        <SkeletonBlock
                            className="
                                h-3
                                w-32
                            "
                        />

                        <SkeletonBlock
                            className="
                                mt-3
                                h-8
                                w-3/4
                            "
                        />

                        <SkeletonBlock
                            className="
                                mt-3
                                h-4
                                w-full
                                max-w-2xl
                            "
                        />

                    </div>

                </div>

            </div>


            {/* Content */}

            <div className="
                mt-6

                grid
                grid-cols-1
                gap-6

                lg:grid-cols-[minmax(0,1fr)_360px]
            ">

                {/* Main */}

                <div className="
                    min-w-0
                    space-y-6
                ">

                    {/* Information */}

                    <section className="
                        rounded-2xl

                        border
                        border-border-subtle

                        bg-background-surface

                        p-5

                        sm:p-6
                    ">

                        <SkeletonBlock
                            className="
                                h-3
                                w-20
                            "
                        />

                        <SkeletonBlock
                            className="
                                mt-2
                                h-6
                                w-44
                            "
                        />

                        <SkeletonBlock
                            className="
                                mt-2
                                h-3
                                w-72
                            "
                        />


                        <div className="
                            mt-5

                            grid
                            grid-cols-1
                            gap-3

                            sm:grid-cols-2
                        ">

                            {Array.from(
                                { length: 5 }
                            ).map(
                                (_, index) => (

                                    <div
                                        key={index}
                                        className="
                                            rounded-xl

                                            border
                                            border-border-subtle

                                            bg-background-elevated

                                            px-4
                                            py-4
                                        "
                                    >

                                        <SkeletonBlock
                                            className="
                                                h-3
                                                w-24
                                            "
                                        />

                                        <SkeletonBlock
                                            className="
                                                mt-3
                                                h-4
                                                w-20
                                            "
                                        />

                                    </div>

                                )
                            )}

                        </div>

                    </section>


                    {/* Video */}

                    <section className="
                        overflow-hidden

                        rounded-2xl

                        border
                        border-border-subtle

                        bg-background-surface
                    ">

                        <div className="
                            flex
                            items-center
                            justify-between

                            border-b
                            border-border-subtle

                            px-5
                            py-5

                            sm:px-6
                        ">

                            <div className="
                                flex
                                items-center
                                gap-3
                            ">

                                <SkeletonBlock
                                    className="
                                        h-10
                                        w-10
                                        rounded-lg
                                    "
                                />

                                <div>

                                    <SkeletonBlock
                                        className="
                                            h-5
                                            w-32
                                        "
                                    />

                                    <SkeletonBlock
                                        className="
                                            mt-2
                                            h-3
                                            w-56
                                        "
                                    />

                                </div>

                            </div>


                            <SkeletonBlock
                                className="
                                    hidden
                                    h-9
                                    w-28

                                    sm:block
                                "
                            />

                        </div>


                        <div className="
                            p-5

                            sm:p-6
                        ">

                            <SkeletonBlock
                                className="
                                    aspect-video
                                    w-full
                                    rounded-xl
                                "
                            />

                        </div>

                    </section>

                </div>


                {/* Sidebar */}

                <aside>

                    <section className="
                        overflow-hidden

                        rounded-2xl

                        border
                        border-border-subtle

                        bg-background-surface
                    ">

                        <div className="
                            border-b
                            border-border-subtle

                            px-5
                            py-5

                            sm:px-6
                        ">

                            <SkeletonBlock
                                className="
                                    h-3
                                    w-16
                                "
                            />

                            <SkeletonBlock
                                className="
                                    mt-2
                                    h-6
                                    w-36
                                "
                            />

                            <SkeletonBlock
                                className="
                                    mt-2
                                    h-3
                                    w-48
                                "
                            />

                        </div>


                        <div className="
                            space-y-0
                        ">

                            {Array.from(
                                { length: 2 }
                            ).map(
                                (_, index) => (

                                    <div
                                        key={index}
                                        className="
                                            flex
                                            items-center
                                            gap-3.5

                                            border-b
                                            border-border-subtle

                                            px-5
                                            py-5

                                            last:border-b-0

                                            sm:px-6
                                        "
                                    >

                                        <SkeletonBlock
                                            className="
                                                h-10
                                                w-10
                                                shrink-0
                                                rounded-xl
                                            "
                                        />

                                        <div className="
                                            flex-1
                                        ">

                                            <SkeletonBlock
                                                className="
                                                    h-4
                                                    w-28
                                                "
                                            />

                                            <SkeletonBlock
                                                className="
                                                    mt-2
                                                    h-3
                                                    w-44
                                                "
                                            />

                                        </div>

                                        <SkeletonBlock
                                            className="
                                                h-4
                                                w-4
                                            "
                                        />

                                    </div>

                                )
                            )}

                        </div>

                    </section>

                </aside>

            </div>

        </main>
    )
}


export default LectureDetailsLoadingSkeleton