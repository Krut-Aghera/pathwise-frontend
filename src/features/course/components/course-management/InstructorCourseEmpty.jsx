import { BookOpen } from "lucide-react"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorCourseEmpty = () => {
    return (
        <section
            className="
            flex
            min-h-80
            w-full
            flex-col
            items-center
            justify-center

            rounded-xl
            border
            border-border-subtle
            bg-background-surface

            mt-6
            px-5
            py-10
            text-center

            sm:px-8
            sm:py-12
        "
        >
            {/* Icon */}

            <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-lg
                border
                border-accent-primary/20
                bg-accent-primary/10

                text-accent-primary
            "
            >
                <BookOpen size={22} strokeWidth={1.8} />
            </div>

            {/* Content */}

            <div
                className="
                mt-4
                max-w-md
            "
            >
                <h2
                    className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                "
                >
                    No courses yet
                </h2>

                <p
                    className="
                    mt-2

                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                "
                >
                    You haven't created any courses yet. Start building your
                    first course and share your knowledge with students.
                </p>
            </div>
        </section>
    )
}

export default InstructorCourseEmpty
