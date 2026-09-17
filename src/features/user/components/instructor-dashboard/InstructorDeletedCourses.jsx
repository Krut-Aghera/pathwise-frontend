import { ArchiveX } from "lucide-react"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorDeletedCourses = ({ courses = [] }) => {
    if (courses.length === 0) {
        return null
    }

    return (
        <div>
            <div
                className="
                    mb-3
                    flex
                    items-end
                    justify-between
                    gap-4
                "
            >
                <div>
                    <p
                        className="
                            font-body
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-status-danger
                        "
                    >
                        Archive
                    </p>

                    <h2
                        className="
                            mt-1
                            font-accent
                            text-lg
                            font-semibold
                            tracking-tight
                            text-text-primary
                        "
                    >
                        Deleted courses
                    </h2>
                </div>

                <span
                    className="
                        rounded-full
                        bg-status-danger/10
                        px-2
                        py-1
                        font-body
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-status-danger
                    "
                >
                    {courses.length}{" "}
                    {courses.length === 1 ? "course" : "courses"}
                </span>
            </div>

            <div className="space-y-2.5">
                {courses.map((course, index) => (
                    <article
                        key={index}
                        className="
                            rounded-xl
                            border
                            border-status-danger/15
                            bg-status-danger/5
                            px-4
                            py-3.5
                        "
                    >
                        <div
                            className="
                                flex
                                min-w-0
                                items-center
                                gap-3
                            "
                        >
                            {/* Icon */}

                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-status-danger/20
                                    bg-status-danger/10
                                    text-status-danger
                                "
                            >
                                <ArchiveX size={16} strokeWidth={1.7} />
                            </div>

                            {/* Course information */}

                            <div className="min-w-0">
                                <h3
                                    className="
                                        truncate
                                        font-accent
                                        text-sm
                                        font-semibold
                                        text-text-primary
                                    "
                                >
                                    {course.title}
                                </h3>

                                <p
                                    className="
                                        mt-0.5
                                        truncate
                                        font-body
                                        text-[10px]
                                        text-text-muted
                                    "
                                >
                                    {course.subtitle ||
                                        "No subtitle available."}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default InstructorDeletedCourses
