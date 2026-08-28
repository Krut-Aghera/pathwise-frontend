import {
    ArrowRight,
    BookOpen,
    UserRound,
} from "lucide-react"

import { Link } from "react-router-dom"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"


const InstructorCourseCard = ({
    course,
}) => {

    ///////////////////////////////////////////////////////////////
    // Course status

    const isPublished =
        course.status === RESOURCE_STATUS.PUBLISHED


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <article className="
            group
            flex
            h-full
            flex-col
            overflow-hidden

            rounded-xl
            border
            border-border-subtle
            bg-background-surface

            transition-all
            duration-300

            hover:border-accent-primary/30
            hover:bg-background-elevated/90
        ">

            {/* Thumbnail */}

            <div className="
                relative
                aspect-16/8
                shrink-0
                overflow-hidden
                bg-background-elevated
            ">

                <img
                    src={course.thumbnail?.url}
                    alt={course.title}
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                />


                {/* Thumbnail Overlay */}

                <div className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/35
                    via-transparent
                    to-transparent
                " />

            </div>


            {/* Content */}

            <div className="
                flex
                flex-1
                flex-col

                px-5
                py-4
            ">

                {/* Title + Status */}

                <div className="
                    flex
                    items-start
                    gap-2
                ">

                    {/* Title */}

                    <h3 className="
                        min-h-12
                        min-w-0
                        flex-1

                        overflow-hidden

                        font-accent
                        text-base
                        font-semibold
                        leading-6
                        text-text-primary

                        transition-colors
                        duration-300

                        group-hover:text-accent-primary
                    ">

                        {course.title}

                    </h3>


                    {/* Status */}

                    <span className={`
                        inline-flex
                        shrink-0
                        items-center

                        rounded-md
                        border

                        px-2
                        py-1

                        font-body
                        text-[12px]
                        font-semibold

                        ${
                            isPublished
                                ? `
                                    border-status-success/30
                                    bg-status-success/10
                                    text-status-success
                                `
                                : `
                                    border-status-warning/30
                                    bg-status-warning/10
                                    text-status-warning
                                `
                        }
                    `}>

                        {isPublished
                            ? "Published"
                            : "Draft"
                        }

                    </span>

                </div>


                {/* Instructor */}

                <div className="
                    mt-4
                    flex
                    items-center
                    gap-1.5

                    font-body
                    text-[12px]
                    text-text-secondary
                ">

                    <UserRound
                        size={13}
                        className="shrink-0"
                    />

                    <span className="truncate">
                        {course.instructor?.username}
                    </span>

                </div>


                {/* Metadata */}

                <div className="
                    mt-4

                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-x-3
                    gap-y-2
                ">

                    {/* Level */}

                    <span className="
                        inline-flex
                        items-center
                        gap-1.5

                        rounded-md
                        border
                        border-accent-primary/20

                        bg-accent-primary/10

                        px-2
                        py-1

                        font-body
                        text-[10px]
                        font-medium
                        text-accent-primary
                    ">

                        <BookOpen size={11} />

                        {course.level}

                    </span>


                    {/* Language */}

                    <span className="
                        font-body
                        text-xs
                        text-text-muted
                    ">

                        {course.language}

                    </span>


                    {/* Price */}

                    <span className="
                        ml-auto

                        font-body
                        text-xs
                        font-medium
                        text-text-secondary
                    ">

                        ₹{course.price}

                    </span>

                </div>


                {/* Footer */}

                <div className="
                    mt-4

                    border-t
                    border-border-subtle

                    pt-3
                ">

                    {/* View Course */}

                    <Link
                        to={`/instructor/courses/${course._id}`}
                        className="
                            flex
                            w-full
                            items-center
                            justify-between

                            rounded-md
                            border
                            border-accent-primary/20

                            bg-accent-primary/10

                            px-3
                            py-2.5

                            font-body
                            text-xs
                            font-medium
                            text-accent-primary

                            transition-all
                            duration-200

                            hover:border-accent-primary/30
                            hover:bg-accent-primary/15
                        "
                    >

                        <span>
                            View Course
                        </span>

                        <ArrowRight
                            size={15}
                            className="
                                transition-transform
                                duration-200

                                group-hover:translate-x-1
                            "
                        />

                    </Link>

                </div>

            </div>

        </article>
    )
}


export default InstructorCourseCard
