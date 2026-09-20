import { useState } from "react"
import {
    ArrowRight,
    Award,
    BookOpen,
    Heart,
    Layers3,
    UserRound,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const CourseCard = ({ course, onClick }) => {

    const navigate = useNavigate()

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
        levelConfig[course?.level?.toLowerCase()] ?? levelConfig.beginner

    const LevelIcon = currentLevel.icon


    ///////////////////////////////////////////////////////////////
    // Course click

    const handleCourseClick = () => {
        const courseId = course?._id ?? course?.id

        if (!courseId) {
            return
        }

        navigate(`/courses/${courseId}`)
    }

    return (
        <article
            onClick={handleCourseClick}
            className="
                group
                flex
                h-full
                cursor-pointer
                flex-col
                overflow-hidden

                rounded-xl
                border
                border-border-subtle
                bg-background-surface

                transition-all
                duration-300

                hover:border-accent-primary/30
                hover:bg-background-elevated/70
            "
        >
            {/* Thumbnail */}

            <div
                className="
                    relative
                    aspect-video
                    shrink-0
                    overflow-hidden
                    bg-background-elevated
                "
            >
                <img
                    src={course?.thumbnail?.url}
                    alt={course?.title ?? "Course thumbnail"}
                    className="
                        h-full
                        w-full
                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-black/35
                        via-transparent
                        to-transparent
                    "
                />
            </div>

            {/* Content */}

            <div
                className="
                    flex
                    flex-1
                    flex-col
                    px-5
                    py-4
                "
            >
                {/* Title */}

                <div
                    className="
                        flex
                        items-start
                        gap-3
                    "
                >
                    <h3
                        className="
                            min-h-12
                            min-w-0
                            flex-1

                            overflow-hidden

                            font-accent
                            text-base
                            font-semibold
                            leading-6
                            text-text-primary

                            line-clamp-2

                            transition-colors
                            duration-300

                            group-hover:text-accent-primary
                        "
                    >
                        {course?.title ?? "Untitled course"}
                    </h3>


                </div>

                {/* Instructor */}

                <div
                    className="
                        mt-2.5
                        flex
                        min-w-0
                        items-center
                        gap-1.5

                        font-body
                        text-xs
                        text-text-secondary
                    "
                >
                    <UserRound
                        size={13}
                        className="shrink-0"
                    />

                    <span className="truncate">
                        {course?.instructor?.username ??
                            "Unknown instructor"}
                    </span>
                </div>

                {/* Metadata */}

                <div
                    className="
                        mt-3
                        flex
                        flex-wrap
                        items-center
                        gap-2
                    "
                >
                    {/* Level */}

                    <span
                        className={`
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
                        `}
                    >
                        <LevelIcon size={11} />

                        {currentLevel.label}
                    </span>

                    {/* Language */}

                    <span
                        className="
                            inline-flex
                            items-center

                            rounded-md
                            border
                            border-border-subtle
                            bg-background-elevated

                            px-2
                            py-1

                            font-body
                            text-[10px]
                            font-medium
                            text-text-secondary
                        "
                    >
                        {course?.language ?? "Unknown"}
                    </span>
                </div>

                {/* Footer */}

                <div
                    className="
                        mt-4
                        flex
                        items-center
                        justify-between

                        border-t
                        border-border-subtle
                        pt-3.5
                    "
                >
                    {/* Price */}

                    <span
                        className="
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                    >
                        ₹{course?.price ?? 0}
                    </span>

                    {/* View Course */}

                    <span
                        className="
                            inline-flex
                            items-center
                            gap-1.5

                            font-body
                            text-xs
                            font-medium
                            text-text-secondary

                            transition-colors
                            duration-200

                            group-hover:text-accent-primary
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
                    </span>
                </div>
            </div>
        </article>
    )
}

export default CourseCard