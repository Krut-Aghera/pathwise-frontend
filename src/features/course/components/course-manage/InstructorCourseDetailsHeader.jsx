import {
    ArrowLeft,
    UserRound,
} from "lucide-react"

import { Link } from "react-router-dom"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"


const InstructorCourseDetailsHeader = ({
    course,
}) => {

    const isPublished =
        course?.status === RESOURCE_STATUS.PUBLISHED


    return (
        <section className="
            overflow-hidden
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
        ">

            {/* Back */}

            <div className="
                border-b
                border-border-subtle
                px-4
                py-3

                sm:px-6
            ">

                <Link
                    to="/instructor/courses"
                    className="
                        inline-flex
                        items-center
                        gap-2

                        font-body
                        text-xs
                        font-medium
                        text-text-secondary

                        transition-colors
                        duration-200

                        hover:text-accent-primary
                    "
                >

                    <ArrowLeft size={15} />

                    Back to Courses

                </Link>

            </div>


            {/* Header content */}

            <div className="
                flex
                flex-col
                gap-5

                p-4

                sm:p-6

                lg:flex-row
                lg:items-center
            ">

                {/* Thumbnail */}

                <div className="
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    bg-background-elevated
                    lg:w-72
                ">

                    <div className="aspect-video">

                        <img
                            src={course?.thumbnail?.url}
                            alt={course?.title}
                            className="
                                h-full
                                w-full
                                object-cover
                            "
                        />

                    </div>

                </div>


                {/* Course identity */}

                <div className="
                    min-w-0
                    flex-1
                ">

                    <div className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                    ">

                        <span className={`
                            inline-flex
                            rounded-md
                            border
                            px-2
                            py-1

                            font-body
                            text-[11px]
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


                    <h1 className="
                        mt-3

                        font-accent
                        text-2xl
                        font-semibold
                        leading-tight
                        text-text-primary

                        sm:text-3xl
                    ">

                        {course?.title}

                    </h1>


                    {course?.subtitle && (
                        <p className="
                            mt-2

                            max-w-3xl

                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        ">

                            {course.subtitle}

                        </p>
                    )}


                    {/* Instructor */}

                    <div className="
                        mt-4
                        flex
                        items-center
                        gap-1.5

                        font-body
                        text-xs
                        text-text-muted
                    ">

                        <UserRound size={14} />

                        <span>
                            {course?.instructor?.username}
                        </span>

                    </div>

                </div>

            </div>

        </section>
    )
}


export default InstructorCourseDetailsHeader
