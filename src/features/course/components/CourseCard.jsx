import { Link } from "react-router-dom"


const CourseCard = ({
    course,
}) => {

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
            transition
            hover:-translate-y-0.5
            hover:border-accent-primary/30
        ">

            {/* Thumbnail placeholder */}

            <div className="
                relative
                aspect-video
                overflow-hidden
                bg-background-elevated
            ">
                <div className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                   bg-linear-to-br
                    from-accent-primary/20
                    via-background-elevated
                    to-accent-secondary/10
                ">
                    <span className="
                        font-accent
                        text-lg
                        font-semibold
                        text-text-muted
                    ">
                        PATHWISE
                    </span>
                </div>

                <span className="
                    absolute
                    left-3
                    top-3
                    rounded-md
                    bg-background-base/80
                    px-2
                    py-1
                    font-body
                    text-[10px]
                    font-medium
                    text-text-secondary
                    backdrop-blur
                ">
                    {course.level}
                </span>
            </div>


            {/* Content */}

            <div className="
                flex
                flex-1
                flex-col
                p-5
            ">

                <h3 className="
                    font-accent
                    text-lg
                    font-semibold
                    leading-6
                    text-text-primary
                    transition
                    group-hover:text-accent-primary
                ">
                    {course.title}
                </h3>


                <p className="
                    mt-2
                    line-clamp-2
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">
                    {course.description}
                </p>


                <div className="
                    mt-4
                    flex
                    flex-wrap
                    gap-x-4
                    gap-y-2
                    font-body
                    text-xs
                    text-text-muted
                ">
                    <span>{course.duration}</span>
                    <span>{course.students} students</span>
                    <span>★ {course.rating}</span>
                </div>


                <div className="
                    mt-auto
                    flex
                    items-center
                    justify-between
                    border-t
                    border-border-subtle
                    pt-4
                ">

                    <span className="
                        font-accent
                        text-lg
                        font-semibold
                        text-text-primary
                    ">
                        {course.price}
                    </span>

                    <Link
                        to={`/courses/${course.id}`}
                        className="
                            rounded-md
                            bg-background-elevated
                            px-3
                            py-2
                            font-body
                            text-xs
                            font-medium
                            text-text-secondary
                            transition
                            hover:bg-accent-primary
                            hover:text-text-primary
                        "
                    >
                        View Course
                    </Link>

                </div>

            </div>

        </article>
    )
}


export default CourseCard