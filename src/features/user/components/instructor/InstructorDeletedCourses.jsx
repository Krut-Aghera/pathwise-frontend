import {
    ArchiveX,
    RotateCcw,
} from "lucide-react"

import { Link } from "react-router-dom"


const InstructorDeletedCourses = ({
    courses,
}) => {

    return (
        <section>

            <div className="mb-4">

                <p className="
                    font-body
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-status-danger
                ">
                    Archive
                </p>


                <h2 className="
                    mt-1
                    font-accent
                    text-xl
                    font-bold
                    text-text-primary
                ">
                    Deleted courses
                </h2>

            </div>


            <div className="space-y-3">

                {courses.map((course) => (

                    <article
                        key={course.id}
                        className="
                            rounded-xl
                            border
                            border-status-danger/15
                            bg-status-danger/5
                            p-4
                        "
                    >

                        <div className="
                            flex
                            flex-col
                            gap-4

                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        ">

                            <div>

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    text-status-danger
                                ">
                                    <ArchiveX size={14} />

                                    <span className="
                                        font-body
                                        text-[10px]
                                        font-medium
                                    ">
                                        Deleted
                                    </span>
                                </div>


                                <h3 className="
                                    mt-2
                                    font-accent
                                    text-sm
                                    font-semibold
                                    text-text-primary
                                ">
                                    {course.title}
                                </h3>


                                <p className="
                                    mt-1
                                    font-body
                                    text-xs
                                    text-text-muted
                                ">
                                    Deleted {course.deletedAt}
                                </p>

                            </div>


                            <Link
                                to={`/instructor/courses/${course.id}`}
                                className="
                                    inline-flex
                                    shrink-0
                                    items-center
                                    gap-1.5
                                    font-body
                                    text-xs
                                    font-medium
                                    text-status-danger
                                    transition

                                    hover:opacity-80
                                "
                            >
                                <RotateCcw size={14} />

                                Manage
                            </Link>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    )
}


export default InstructorDeletedCourses