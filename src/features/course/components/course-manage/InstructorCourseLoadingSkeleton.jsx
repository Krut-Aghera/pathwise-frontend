const InstructorCourseLoadingSkeleton = () => {

    return (
        <div className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            xl:grid-cols-3
        ">

            {Array.from({ length: 6 }).map((_, index) => (

                <article
                    key={index}
                    className="
                        overflow-hidden

                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface
                    "
                >

                    {/* Thumbnail */}

                    <div className="
                        aspect-16/8
                        w-full

                        animate-pulse
                        bg-background-elevated
                    " />


                    {/* Content */}

                    <div className="
                        flex
                        flex-col

                        px-5
                        py-4
                    ">

                        {/* Title */}

                        <div className="
                            h-4
                            w-4/5

                            animate-pulse
                            rounded

                            bg-background-elevated
                        " />

                        <div className="
                            mt-2
                            h-4
                            w-3/5

                            animate-pulse
                            rounded

                            bg-background-elevated
                        " />


                        {/* Metadata */}

                        <div className="
                            mt-3
                            flex
                            items-center
                            gap-3
                        ">

                            <div className="
                                h-6
                                w-20

                                animate-pulse
                                rounded-md

                                bg-background-elevated
                            " />

                            <div className="
                                h-3
                                w-14

                                animate-pulse
                                rounded

                                bg-background-elevated
                            " />

                            <div className="
                                ml-auto
                                h-3
                                w-12

                                animate-pulse
                                rounded

                                bg-background-elevated
                            " />

                        </div>


                        {/* Footer */}

                        <div className="
                            mt-4

                            border-t
                            border-border-subtle

                            pt-3
                        ">

                            <div className="
                                flex
                                items-center
                                justify-between
                            ">

                                <div className="
                                    h-3
                                    w-12

                                    animate-pulse
                                    rounded

                                    bg-background-elevated
                                " />

                                <div className="
                                    h-3
                                    w-20

                                    animate-pulse
                                    rounded

                                    bg-background-elevated
                                " />

                            </div>

                        </div>

                    </div>

                </article>

            ))}

        </div>
    )
}


export default InstructorCourseLoadingSkeleton