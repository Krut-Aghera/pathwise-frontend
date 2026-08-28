const InstructorCourseDetailsSkeleton = () => {
    return (
        <div className="
            w-full
            animate-pulse
        ">

            {/* Course Header */}

            <section className="
                overflow-hidden

                rounded-xl
                border
                border-border-subtle
                bg-background-surface
            ">

                {/* Thumbnail */}

                <div className="
                    aspect-16/6
                    w-full
                    bg-background-elevated
                " />


                {/* Header Content */}

                <div className="
                    p-5

                    sm:p-6
                    lg:p-8
                ">

                    {/* Breadcrumb / Label */}

                    <div className="
                        h-3
                        w-28
                        rounded
                        bg-background-elevated
                    " />


                    {/* Title */}

                    <div className="
                        mt-4
                        h-8
                        w-full
                        max-w-3xl
                        rounded
                        bg-background-elevated

                        sm:h-10
                    " />

                    <div className="
                        mt-2
                        h-8
                        w-3/4
                        max-w-2xl
                        rounded
                        bg-background-elevated

                        sm:h-10
                    " />


                    {/* Subtitle */}

                    <div className="
                        mt-4
                        h-3
                        w-full
                        max-w-2xl
                        rounded
                        bg-background-elevated
                    " />


                    {/* Instructor + Status */}

                    <div className="
                        mt-6

                        flex
                        flex-wrap
                        items-center
                        gap-4
                    ">

                        {/* Instructor */}

                        <div className="
                            flex
                            items-center
                            gap-3
                        ">

                            <div className="
                                h-9
                                w-9
                                shrink-0
                                rounded-full
                                bg-background-elevated
                            " />

                            <div className="
                                space-y-2
                            ">

                                <div className="
                                    h-3
                                    w-24
                                    rounded
                                    bg-background-elevated
                                " />

                                <div className="
                                    h-2.5
                                    w-32
                                    rounded
                                    bg-background-elevated
                                " />

                            </div>

                        </div>


                        {/* Status */}

                        <div className="
                            h-7
                            w-20
                            rounded-md
                            bg-background-elevated
                        " />

                    </div>


                    {/* Actions */}

                    <div className="
                        mt-6

                        flex
                        flex-wrap
                        gap-3
                    ">

                        <div className="
                            h-9
                            w-28
                            rounded-md
                            bg-background-elevated
                        " />

                        <div className="
                            h-9
                            w-28
                            rounded-md
                            bg-background-elevated
                        " />

                        <div className="
                            h-9
                            w-28
                            rounded-md
                            bg-background-elevated
                        " />

                    </div>

                </div>

            </section>


            {/* Course Statistics */}

            <div className="
                mt-5

                grid
                grid-cols-2
                gap-3

                sm:grid-cols-4
            ">

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

                        <div className="
                            h-4
                            w-4
                            rounded
                            bg-background-elevated
                        " />

                        <div className="
                            mt-3
                            h-5
                            w-16
                            rounded
                            bg-background-elevated
                        " />

                        <div className="
                            mt-2
                            h-2.5
                            w-24
                            rounded
                            bg-background-elevated
                        " />

                    </div>
                ))}

            </div>


            {/* Main Content */}

            <div className="
                mt-6

                grid
                grid-cols-1
                gap-6

                lg:grid-cols-[minmax(0,1fr)_320px]
            ">

                {/* Main Column */}

                <div className="
                    min-w-0
                ">

                    {/* Course Information */}

                    <section className="
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface

                        p-5

                        sm:p-6
                    ">

                        {/* Heading */}

                        <div className="
                            h-6
                            w-40
                            rounded
                            bg-background-elevated
                        " />


                        {/* Description */}

                        <div className="
                            mt-5
                            space-y-2
                        ">

                            <div className="
                                h-3
                                w-full
                                rounded
                                bg-background-elevated
                            " />

                            <div className="
                                h-3
                                w-full
                                rounded
                                bg-background-elevated
                            " />

                            <div className="
                                h-3
                                w-11/12
                                rounded
                                bg-background-elevated
                            " />

                            <div className="
                                h-3
                                w-2/3
                                rounded
                                bg-background-elevated
                            " />

                        </div>


                        {/* Metadata */}

                        <div className="
                            mt-6

                            grid
                            grid-cols-1
                            gap-4

                            sm:grid-cols-2
                        ">

                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="
                                        rounded-lg
                                        border
                                        border-border-subtle

                                        p-3
                                    "
                                >

                                    <div className="
                                        h-2.5
                                        w-20
                                        rounded
                                        bg-background-elevated
                                    " />

                                    <div className="
                                        mt-2
                                        h-4
                                        w-28
                                        rounded
                                        bg-background-elevated
                                    " />

                                </div>
                            ))}

                        </div>

                    </section>


                    {/* Curriculum */}

                    <section className="
                        mt-6

                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface

                        p-5

                        sm:p-6
                    ">

                        {/* Curriculum Header */}

                        <div className="
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-3
                        ">

                            <div>

                                <div className="
                                    h-6
                                    w-32
                                    rounded
                                    bg-background-elevated
                                " />

                                <div className="
                                    mt-2
                                    h-2.5
                                    w-48
                                    rounded
                                    bg-background-elevated
                                " />

                            </div>


                            {/* Add Section */}

                            <div className="
                                h-9
                                w-28
                                rounded-md
                                bg-background-elevated
                            " />

                        </div>


                        {/* Sections */}

                        <div className="
                            mt-6
                            space-y-4
                        ">

                            {[1, 2, 3].map((section) => (

                                <div
                                    key={section}
                                    className="
                                        overflow-hidden

                                        rounded-lg
                                        border
                                        border-border-subtle
                                    "
                                >

                                    {/* Section Header */}

                                    <div className="
                                        flex
                                        items-center
                                        gap-3

                                        p-4

                                        bg-background-elevated/40
                                    ">

                                        {/* Drag / Order */}

                                        <div className="
                                            h-8
                                            w-8
                                            shrink-0
                                            rounded-md
                                            bg-background-elevated
                                        " />


                                        {/* Section Content */}

                                        <div className="
                                            min-w-0
                                            flex-1
                                        ">

                                            <div className="
                                                h-3.5
                                                w-2/3
                                                rounded
                                                bg-background-elevated
                                            " />

                                            <div className="
                                                mt-2
                                                h-2.5
                                                w-24
                                                rounded
                                                bg-background-elevated
                                            " />

                                        </div>


                                        {/* Actions */}

                                        <div className="
                                            h-7
                                            w-16
                                            shrink-0
                                            rounded-md
                                            bg-background-elevated
                                        " />

                                    </div>


                                    {/* Lectures */}

                                    <div className="
                                        space-y-2
                                        p-3
                                    ">

                                        {[1, 2, 3].map((lecture) => (

                                            <div
                                                key={lecture}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3

                                                    rounded-md
                                                    border
                                                    border-border-subtle

                                                    p-3
                                                "
                                            >

                                                {/* Lecture Icon */}

                                                <div className="
                                                    h-8
                                                    w-8
                                                    shrink-0
                                                    rounded-md
                                                    bg-background-elevated
                                                " />


                                                {/* Lecture Content */}

                                                <div className="
                                                    min-w-0
                                                    flex-1
                                                ">

                                                    <div className="
                                                        h-3
                                                        w-3/5
                                                        rounded
                                                        bg-background-elevated
                                                    " />

                                                    <div className="
                                                        mt-2
                                                        h-2.5
                                                        w-20
                                                        rounded
                                                        bg-background-elevated
                                                    " />

                                                </div>


                                                {/* Lecture Status */}

                                                <div className="
                                                    h-6
                                                    w-16
                                                    shrink-0
                                                    rounded-md
                                                    bg-background-elevated
                                                " />

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </section>

                </div>


                {/* Sidebar */}

                <aside className="
                    h-fit

                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface

                    p-5

                    sm:p-6

                    lg:sticky
                    lg:top-6
                ">

                    {/* Thumbnail */}

                    <div className="
                        aspect-16/9
                        w-full
                        rounded-lg
                        bg-background-elevated
                    " />


                    {/* Price */}

                    <div className="
                        mt-5
                    ">

                        <div className="
                            h-2.5
                            w-20
                            rounded
                            bg-background-elevated
                        " />

                        <div className="
                            mt-2
                            h-8
                            w-28
                            rounded
                            bg-background-elevated
                        " />

                    </div>


                    {/* Primary Action */}

                    <div className="
                        mt-5
                        h-10
                        w-full
                        rounded-lg
                        bg-background-elevated
                    " />


                    {/* Secondary Action */}

                    <div className="
                        mt-3
                        h-10
                        w-full
                        rounded-lg
                        bg-background-elevated
                    " />


                    {/* Course Details */}

                    <div className="
                        mt-6

                        border-t
                        border-border-subtle

                        pt-5
                    ">

                        <div className="
                            h-3
                            w-32
                            rounded
                            bg-background-elevated
                        " />

                        <div className="
                            mt-4
                            space-y-3
                        ">

                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                    "
                                >

                                    <div className="
                                        h-2.5
                                        w-20
                                        rounded
                                        bg-background-elevated
                                    " />

                                    <div className="
                                        h-2.5
                                        w-16
                                        rounded
                                        bg-background-elevated
                                    " />

                                </div>
                            ))}

                        </div>

                    </div>

                </aside>

            </div>

        </div>
    )
}


export default InstructorCourseDetailsSkeleton