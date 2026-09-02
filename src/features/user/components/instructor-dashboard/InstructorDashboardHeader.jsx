import { BookOpen, Settings } from "lucide-react"

import { Link } from "react-router-dom"

const InstructorDashboardHeader = () => {
    return (
        <header
            className="
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
        "
        >
            <div>
                <p
                    className="
                    font-body
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-accent-secondary
                "
                >
                    Instructor workspace
                </p>

                <h1
                    className="
                    mt-1
                    font-accent
                    text-2xl
                    font-bold
                    text-text-primary

                    sm:text-3xl
                "
                >
                    Instructor Dashboard
                </h1>

                <p
                    className="
                    mt-2
                    max-w-xl
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                "
                >
                    Monitor your courses, learners, and earnings from one place.
                </p>
            </div>

            <div
                className="
                flex
                flex-wrap
                gap-2
            "
            >
                <Link
                    to="/instructor/courses"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-md
                        border
                        border-accent-secondary/20
                        bg-accent-secondary/10
                        px-3.5
                        py-2
                        font-body
                        text-xs
                        font-medium
                        text-accent-secondary
                        transition

                        hover:bg-accent-secondary/15
                    "
                >
                    <Settings size={15} />
                    Manage Courses
                </Link>

                <Link
                    to="/instructor/courses/create"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-md
                        bg-accent-secondary
                        px-3.5
                        py-2
                        font-body
                        text-xs
                        font-medium
                        text-background-base
                        transition

                        hover:opacity-90
                    "
                >
                    <BookOpen size={15} />
                    Create Course
                </Link>
            </div>
        </header>
    )
}

export default InstructorDashboardHeader
