import { useNavigate } from "react-router-dom"

const EnrollmentEmptyState = () => {
    const navigate = useNavigate()

    const handleExploreCourses = () => {
        navigate("/courses")
    }

    return (
        <div
            className="
                flex
                min-h-[360px]
                flex-col
                items-center
                justify-center
                rounded-xl
                border
                border-dashed
                border-border-subtle
                bg-background-surface
                px-6
                py-12
                text-center
            "
        >
            <div
                className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-background-elevated
                    font-accent
                    text-xl
                    text-accent-primary
                "
            >
                —
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
                Your learning journey starts here
            </h2>

            <p
                className="
                    mt-2
                    max-w-md
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                "
            >
                You haven't enrolled in any courses yet. Explore the available
                courses and start learning something new.
            </p>

            <button
                type="button"
                onClick={handleExploreCourses}
                className="
                    mt-6
                    rounded-lg
                    bg-accent-primary
                    px-5
                    py-2.5
                    font-body
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:opacity-90
                "
            >
                Explore courses
            </button>
        </div>
    )
}

export default EnrollmentEmptyState
