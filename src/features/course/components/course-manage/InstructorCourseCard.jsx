import {
    ArrowRight,
    Award,
    BookOpen,
    Edit3,
    Layers3,
    PlayCircle,
    UserRound,
} from "lucide-react"

import { Link } from "react-router-dom"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"


const InstructorCourseCard = ({
    course,
    onPublish,
    onDraft,
}) => {

    ///////////////////////////////////////////////////////////////
    // Course status

    const isPublished =
        course.status === RESOURCE_STATUS.PUBLISHED


    ///////////////////////////////////////////////////////////////
    // Level configuration

    const levelConfig = {
        beginner: {
            label: "Beginner",
            icon: BookOpen,
            classes: `
                border-accent-primary/20
                bg-accent-primary/10
                text-accent-primary
            `,
        },

        intermediate: {
            label: "Intermediate",
            icon: Layers3,
            classes: `
                border-accent-primary/30
                bg-accent-primary/15
                text-accent-primary
            `,
        },

        advanced: {
            label: "Advanced",
            icon: Award,
            classes: `
                border-accent-primary/40
                bg-accent-primary/20
                text-accent-primary
            `,
        },
    }


    const currentLevel =
        levelConfig[course.level?.toLowerCase()] ||
        levelConfig.beginner


    const LevelIcon = currentLevel.icon


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

            hover:border-accent-primary/50
            hover:bg-background-elevated
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
                    gap-3
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
                        text-[10px]
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
                    mt-2.5
                    flex
                    items-center
                    gap-1.5

                    font-body
                    text-xs
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
                    mt-3

                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-x-3
                    gap-y-2
                ">

                    {/* Level */}

                    <span className={`
                        inline-flex
                        items-center
                        gap-1.5

                        rounded-md
                        border

                        px-2
                        py-1

                        font-body
                        text-[10px]
                        font-medium

                        ${currentLevel.classes}
                    `}>

                        <LevelIcon size={11} />

                        {currentLevel.label}

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

                    pt-3.5
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                        gap-3
                    ">

                        {/* Edit */}

                        <Link
                            to={`/instructor/courses/${course._id}/edit`}
                            className="
                                inline-flex
                                items-center
                                gap-1.5

                                cursor-pointer

                                font-body
                                text-xs
                                font-medium
                                text-text-secondary

                                transition-colors
                                duration-200

                                hover:text-accent-primary
                            "
                        >

                            <Edit3 size={14} />

                            Edit Course

                        </Link>


                        {/* Publish / Draft */}

                        {isPublished ? (

                            <button
                                type="button"
                                onClick={() => onDraft?.(course)}
                                className="
                                    inline-flex
                                    items-center
                                    gap-1.5

                                    cursor-pointer

                                    rounded-md
                                    border
                                    border-status-warning/30

                                    bg-status-warning/10

                                    px-3
                                    py-1.5

                                    font-body
                                    text-xs
                                    font-medium
                                    text-status-warning

                                    transition-all
                                    duration-200

                                    hover:bg-status-warning/15
                                "
                            >

                                Save Draft

                            </button>

                        ) : (

                            <button
                                type="button"
                                onClick={() => onPublish?.(course)}
                                className="
                                    inline-flex
                                    items-center
                                    gap-1.5

                                    cursor-pointer

                                    rounded-md
                                    bg-accent-primary

                                    px-3
                                    py-1.5

                                    font-body
                                    text-xs
                                    font-medium
                                    text-text-primary

                                    transition-all
                                    duration-200

                                    hover:opacity-90
                                    active:brightness-90
                                "
                            >

                                <PlayCircle size={14} />

                                Publish Course

                            </button>

                        )}

                    </div>


                    {/* View Published Course */}

                    {isPublished && (
                        <Link
                            to={`/courses/${course._id}`}
                            className="
                                mt-3

                                flex
                                items-center
                                justify-between

                                border-t
                                border-border-subtle

                                pt-3

                                font-body
                                text-[11px]
                                text-text-muted

                                transition-colors
                                duration-200

                                hover:text-text-secondary
                            "
                        >

                            <span>
                                View public course
                            </span>

                            <ArrowRight
                                size={14}
                                className="
                                    transition-transform
                                    duration-200

                                    group-hover:translate-x-1
                                "
                            />

                        </Link>
                    )}

                </div>

            </div>

        </article>
    )
}


export default InstructorCourseCard