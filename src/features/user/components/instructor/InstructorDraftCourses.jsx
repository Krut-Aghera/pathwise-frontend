import {
    ArrowRight,
    Clock3,
    FileEdit,
} from "lucide-react"

import { Link } from "react-router-dom"


const InstructorDraftCourses = ({
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
                    text-accent-secondary
                ">
                    Work in progress
                </p>


                <h2 className="
                    mt-1
                    font-accent
                    text-xl
                    font-bold
                    text-text-primary
                ">
                    Draft courses
                </h2>

            </div>


            <div className="
                grid
                grid-cols-1
                gap-3

                md:grid-cols-2
            ">

                {courses.map((course) => (

                    <article
                        key={course.id}
                        className="
                            group
                            rounded-xl
                            border
                            border-border-subtle
                            bg-background-surface
                            p-4
                            transition

                            hover:border-accent-secondary/40
                            hover:bg-background-elevated
                        "
                    >

                        <div className="
                            flex
                            items-start
                            justify-between
                            gap-4
                        ">

                            <div className="min-w-0">

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    text-accent-secondary
                                ">
                                    <FileEdit size={14} />

                                    <span className="
                                        font-body
                                        text-[10px]
                                        font-medium
                                    ">
                                        Draft
                                    </span>
                                </div>


                                <h3 className="
                                    mt-2
                                    line-clamp-2
                                    font-accent
                                    text-sm
                                    font-semibold
                                    leading-5
                                    text-text-primary
                                    transition

                                    group-hover:text-accent-secondary
                                ">
                                    {course.title}
                                </h3>

                            </div>


                            <Link
                                to={`/instructor/courses/${course.id}`}
                                className="
                                    shrink-0
                                    text-text-muted
                                    transition

                                    hover:text-accent-secondary
                                "
                                aria-label={`Edit ${course.title}`}
                            >
                                <ArrowRight size={16} />
                            </Link>

                        </div>


                        <div className="
                            mt-4
                            flex
                            items-center
                            justify-between
                            border-t
                            border-border-subtle
                            pt-3
                            font-body
                            text-xs
                            text-text-muted
                        ">

                            <span className="
                                flex
                                items-center
                                gap-1.5
                            ">
                                <Clock3 size={13} />

                                {course.totalHours} hrs
                            </span>


                            <span>
                                Updated {course.updatedAt}
                            </span>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    )
}


export default InstructorDraftCourses