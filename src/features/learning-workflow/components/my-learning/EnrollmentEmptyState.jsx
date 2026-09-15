import { useNavigate } from "react-router-dom"

const EnrollmentEmptyState = () => {
    const navigate = useNavigate()

    const handleExploreCourses = () => {
        navigate("/courses")
    }

    return (
        <div
            className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                px-6
                py-14
                text-center
                sm:px-10
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-accent-primary/20
                    bg-accent-primary/10
                    font-accent
                    text-lg
                    text-accent-primary
                "
            >
                →
            </div>

            <h2
                className="
                    mt-5
                    font-accent
                    text-xl
                    font-semibold
                    text-text-primary
                "
            >
                Start your learning journey
            </h2>

            <p
                className="
                    mx-auto
                    mt-2
                    max-w-md
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                "
            >
                You haven't enrolled in any courses yet. Explore Pathwise and
                find something worth learning.
            </p>

            <button
                type="button"
                onClick={handleExploreCourses}
                className="
                    group
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-body
                    text-sm
                    font-medium
                    text-accent-primary
                "
            >
                Explore courses
                <span
                    className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                    "
                >
                    →
                </span>
            </button>
        </div>
    )
}

export default EnrollmentEmptyState
