import ActionError from "../../../components/ui/ActionError.jsx"

import useEnrollment from "../../enrollment-workflow/hooks/useEnrollment.js"

import EnrollmentCourseGrid from "../components/my-learning/EnrollmentCourseGrid.jsx"
import EnrollmentEmptyState from "../components/my-learning/EnrollmentEmptyState.jsx"
import EnrollmentSkeleton from "../components/my-learning/EnrollmentSkeleton.jsx"

const MyLearningPage = () => {
    const { enrollments, isLoading, isError, error } = useEnrollment()

    return (
        <main className="min-h-screen bg-background-base">
            <div
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-8
                    sm:px-6
                    lg:px-8
                "
            >
                <header className="mb-8">
                    <p
                        className="
                            font-body
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            text-accent-primary
                        "
                    >
                        Learning
                    </p>

                    <h1
                        className="
                            mt-2
                            font-accent
                            text-3xl
                            font-semibold
                            text-text-primary
                            sm:text-4xl
                        "
                    >
                        My Learning
                    </h1>

                    <p
                        className="
                            mt-2
                            max-w-2xl
                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        "
                    >
                        Continue learning from the courses you've enrolled in.
                    </p>
                </header>

                {isLoading && <EnrollmentSkeleton />}

                {!isLoading && isError && (
                    <ActionError
                        message={
                            error?.message ||
                            "Unable to load your enrolled courses."
                        }
                    />
                )}

                {!isLoading && !isError && enrollments.length === 0 && (
                    <EnrollmentEmptyState />
                )}

                {!isLoading && !isError && enrollments.length > 0 && (
                    <EnrollmentCourseGrid enrollments={enrollments} />
                )}
            </div>
        </main>
    )
}

export default MyLearningPage
