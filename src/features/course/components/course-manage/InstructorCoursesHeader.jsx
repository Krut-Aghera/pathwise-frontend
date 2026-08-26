import { Plus } from "lucide-react"
import Button from "../../../../components/ui/Button"

const InstructorCoursesHeader = ({
    courseCount = 0,
    onCreateCourse,
}) => {

    return (
        <header className="
            flex
            flex-col
            gap-5

            sm:flex-row
            sm:items-end
            sm:justify-between
        ">

            {/* Heading */}

            <div className="
                min-w-0
            ">

                <h1 className="
                    font-accent
                    text-2xl
                    font-semibold
                    leading-tight
                    text-text-primary

                    sm:text-3xl
                ">
                    My Courses
                </h1>


                <p className="
                    mt-2
                    max-w-2xl

                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">
                    Manage your courses, update content, and control
                    their publishing status.
                </p>


                {/* Course Count */}

                <p className="
                    mt-2
                    font-body
                    text-xs
                    text-text-muted
                ">

                    {courseCount}{" "}
                    {courseCount === 1 ? "course" : "courses"}

                </p>

            </div>


            {/* Create Course */}

            <Button
                type="button"
                onClick={onCreateCourse}
                className="
                    w-full
                    shrink-0

                    sm:w-auto
                "
            >

                <Plus size={16} />

                Create Course

            </Button>

        </header>
    )
}


export default InstructorCoursesHeader