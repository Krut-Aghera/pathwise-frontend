import {
    Award,
    BookOpen,
    Clock3,
    Layers3,
    UserRound,
} from "lucide-react"


const CourseHeader = ({ course }) => {

    const levelConfig = {
        beginner: {
            label: "Beginner",
            icon: BookOpen,
        },

        intermediate: {
            label: "Intermediate",
            icon: Layers3,
        },

        advanced: {
            label: "Advanced",
            icon: Award,
        },
    }


    const currentLevel =
        levelConfig[course?.level?.toLowerCase()] ||
        levelConfig.beginner

    const LevelIcon = currentLevel.icon


    return (
        <section className="
            overflow-hidden
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
        ">

            {/* Thumbnail */}

            <div className="
                relative
                aspect-16/8
                w-full
                overflow-hidden
                bg-background-elevated

                sm:aspect-16/7

                lg:aspect-16/6
            ">

                <img
                    src={
                        course?.thumbnail ||
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
                    }
                    alt={course?.title || "Course thumbnail"}
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                />

                <div className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/45
                    via-black/5
                    to-transparent
                " />
            </div>


            {/* Information */}

            <div className="
                px-5
                py-5

                sm:px-6
                sm:py-6

                lg:px-8
                lg:py-7
            ">

                {/* Level */}

                <div className="
                    mb-3
                    inline-flex
                    items-center
                    gap-1.5

                    rounded-md
                    border
                    border-accent-primary/25
                    bg-accent-primary/10
                    px-2.5
                    py-1

                    font-body
                    text-xs
                    font-medium
                    text-accent-primary
                ">

                    <LevelIcon size={13} />

                    {currentLevel.label}

                </div>


                {/* Title */}

                <h1 className="
                    max-w-4xl

                    font-accent
                    text-2xl
                    font-bold
                    leading-tight
                    text-text-primary

                    sm:text-3xl

                    lg:text-4xl
                ">
                    {course?.title}
                </h1>


                {/* Description */}

                {course?.description && (
                    <p className="
                        mt-3
                        max-w-3xl

                        font-body
                        text-sm
                        leading-6
                        text-text-secondary

                        sm:text-base
                        sm:leading-7
                    ">
                        {course.description}
                    </p>
                )}


                {/* Instructor */}

                <div className="
                    mt-5
                    flex
                    items-center
                    gap-2

                    font-body
                    text-sm
                    text-text-secondary
                ">

                    <UserRound
                        size={16}
                        className="shrink-0"
                    />

                    <span>
                        {course?.instructor?.name ||
                            course?.instructor ||
                            "Instructor"}
                    </span>

                </div>


                {/* Metadata */}

                <div className="
                    mt-5
                    flex
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-3

                    border-t
                    border-border-subtle
                    pt-4
                ">

                    {/* Level */}

                    <div className="
                        flex
                        items-center
                        gap-1.5

                        font-body
                        text-xs
                        text-text-muted
                    ">

                        <LevelIcon size={14} />

                        <span>
                            {currentLevel.label}
                        </span>

                    </div>


                    {/* Duration */}

                    {course?.duration && (
                        <div className="
                            flex
                            items-center
                            gap-1.5

                            font-body
                            text-xs
                            text-text-muted
                        ">

                            <Clock3 size={14} />

                            <span>
                                {course.duration}
                            </span>

                        </div>
                    )}

                </div>

            </div>

        </section>
    )
}


export default CourseHeader