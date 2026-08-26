import { useState } from "react"
import {
    ArrowRight,
    Award,
    BookOpen,
    Clock3,
    Heart,
    Layers3,
    UserRound,
} from "lucide-react"

import { Link } from "react-router-dom"


const CourseCard = ({
    course,
}) => {

    const [isWishlisted, setIsWishlisted] = useState(
        course.isWishlisted ?? false
    )


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


    const handleWishlistToggle = (event) => {

        event.preventDefault()
        event.stopPropagation()

        setIsWishlisted((current) => !current)
    }


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
                    src={
                        course.thumbnail ||
                        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                    }
                    alt={course.title}
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

                {/* Title + Wishlist */}

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


                    {/* Wishlist */}

                    <button
                        type="button"
                        onClick={handleWishlistToggle}
                        aria-label={
                            isWishlisted
                                ? `Remove ${course.title} from wishlist`
                                : `Add ${course.title} to wishlist`
                        }
                        aria-pressed={isWishlisted}
                        className={`
                                 flex
                                 h-8
                                 w-8
                                 shrink-0
                                 items-center
                                 justify-center
                                                
                                 cursor-pointer
                                 rounded-md
                                                
                                 transition-all
                                 duration-200
                                                
                                 ${isWishlisted
                                        ? "text-emerald-600"
                                        : "text-text-muted hover:text-emerald-800"
                                }
                            `}
                    >
                        <Heart
                            size={18}
                            strokeWidth={1.8}
                            fill={
                                isWishlisted
                                    ? "currentColor"
                                    : "none"
                            }
                        />
                    </button>

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
                        {course.instructor}
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


                    {/* Duration */}

                    <span className="
                        flex
                        items-center
                        gap-1.5

                        font-body
                        text-xs
                        text-text-muted
                    ">

                        <Clock3 size={13} />

                        32 hrs on-demand videos

                    </span>



                </div>


                {/* Footer */}

                <div className="
                    mt-4
                    flex
                    items-center
                    justify-between

                    border-t
                    border-border-subtle
                    pt-3.5
                ">

                    <span className="
                        font-body
                        text-[11px]
                        text-text-muted
                    ">
                        Self-paced learning
                    </span>


                    <Link
                        to={`/courses/${course.id}`}
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

                        View Course

                        <ArrowRight
                            size={14}
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


export default CourseCard