import {
    BookOpen,
    Settings,
} from "lucide-react"

import { Link } from "react-router-dom"


const InstructorQuickActions = () => {

    return (
        <section className="
            rounded-xl
            border
            border-accent-secondary/20
            bg-accent-secondary/5
            p-5
        ">

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
                        text-accent-secondary
                    ">
                        <BookOpen size={17} />

                        <span className="
                            font-accent
                            text-sm
                            font-semibold
                        ">
                            Course workspace
                        </span>
                    </div>


                    <p className="
                        mt-1
                        max-w-xl
                        font-body
                        text-xs
                        leading-5
                        text-text-secondary
                    ">
                        Create courses, organize sections and lectures,
                        upload videos, and manage publishing.
                    </p>

                </div>


                <Link
                    to="/instructor/courses"
                    className="
                        inline-flex
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-md
                        border
                        border-accent-secondary/20
                        bg-accent-secondary/10
                        px-4
                        py-2
                        font-body
                        text-xs
                        font-medium
                        text-accent-secondary
                        transition

                        hover:bg-accent-secondary/15
                    "
                >
                    <Settings size={14} />

                    Open workspace
                </Link>

            </div>

        </section>
    )
}


export default InstructorQuickActions