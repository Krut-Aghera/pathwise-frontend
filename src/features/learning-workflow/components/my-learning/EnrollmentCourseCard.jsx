import { useNavigate } from "react-router-dom"
import { ArrowRight, BookOpen, ConeIcon } from "lucide-react"

const EnrollmentCourseCard = ({ enrollment }) => {
    const navigate = useNavigate()
    const course = enrollment?.course
    const progressData = enrollment?.progress
    const progressMeta = enrollment?.progressMeta

    const completedLectures = progressMeta?.course?.completedLectures ?? 0
    const totalLectures = progressMeta?.course?.totalLectures ?? 0
    const progressPercentage = Math.round(
        progressMeta?.course?.progressPercentage ?? 0
    )

    const handleOpenCourse = () => {
        navigate(`/courses/${course._id}/learn`)
    }

    const isCompleted = progressPercentage >= 100
   
    return (
        <article
            role="button"
            tabIndex={0}
            onClick={handleOpenCourse}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    handleOpenCourse()
                }
            }}
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
                {course?.thumbnail?.url ? (
                    <img
                        src={course.thumbnail.url}
                        alt={course?.title}
                        className="
                            h-full
                            w-full
                            object-cover

                            transition-transform
                            duration-500

                            group-hover:scale-105
                        "
                    />
                ) : (
                    <div
                        className="
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center

                            font-accent
                            text-sm
                            text-text-muted
                        "
                    >
                        No thumbnail
                    </div>
                )}

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

                {/* Progress */}

                <div className="mt-4">
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            gap-3

                            font-body
                            text-[11px]
                        "
                    >
                        <div
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-1.5

                                text-text-muted
                            "
                        >
                            <BookOpen size={13} className="shrink-0" />

                            <span className="truncate">
                                {completedLectures} / {totalLectures} lectures
                            </span>
                        </div>

                        <span
                            className="
                                shrink-0
                                font-medium
                                text-accent-primary
                            "
                        >
                            {progressPercentage}% completed
                        </span>
                    </div>

                    <div
                        className="
                            mt-2
                            h-1.5
                            overflow-hidden
                            rounded-full
                            bg-background-elevated
                        "
                    >
                        <div
                            className="
                                h-full
                                rounded-full
                                bg-accent-primary

                                transition-all
                                duration-500
                            "
                            style={{
                                width: `${Math.min(progressPercentage, 100)}%`,
                            }}
                        />
                    </div>
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
                    <span
                        className="
                            font-body
                            text-xs
                            text-text-muted
                        "
                    >
                        {isCompleted ? "Course completed" : "Keep learning"}
                    </span>

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
                        Continue learning
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

export default EnrollmentCourseCard
