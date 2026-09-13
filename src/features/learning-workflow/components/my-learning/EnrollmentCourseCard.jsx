import { useNavigate } from "react-router-dom"

const EnrollmentCourseCard = ({ enrollment }) => {
    const navigate = useNavigate()

    const course = enrollment.course

    const handleOpenCourse = () => {
        navigate(`/courses/${course._id}/learn`)
    }

    return (
        <article
            className="
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                transition
                duration-200
                hover:-translate-y-0.5
                hover:border-accent-primary/40
            "
        >
            <div className="aspect-video overflow-hidden bg-background-elevated">
                {course.thumbnail?.url ? (
                    <img
                        src={course.thumbnail.url}
                        alt={course.title}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-300
                            hover:scale-105
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
            </div>

            <div className="p-5">
                <div className="flex items-center gap-2">
                    <span
                        className="
                            rounded-full
                            border
                            border-border-subtle
                            px-2.5
                            py-1
                            font-body
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-wide
                            text-text-secondary
                        "
                    >
                        {course.level}
                    </span>

                    <span
                        className="
                            font-body
                            text-xs
                            text-text-muted
                        "
                    >
                        {course.language}
                    </span>
                </div>

                <h3
                    className="
                        mt-3
                        line-clamp-2
                        font-accent
                        text-lg
                        font-semibold
                        text-text-primary
                    "
                >
                    {course.title}
                </h3>

                <p
                    className="
                        mt-2
                        line-clamp-2
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    "
                >
                    {course.subtitle}
                </p>

                <button
                    type="button"
                    onClick={handleOpenCourse}
                    className="
                        mt-5
                        w-full
                        rounded-lg
                        bg-accent-primary
                        px-4
                        py-2.5
                        font-body
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:opacity-90
                    "
                >
                    Continue learning
                </button>
            </div>
        </article>
    )
}

export default EnrollmentCourseCard
