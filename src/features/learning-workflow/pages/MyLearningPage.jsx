import { useEffect, useMemo, useState } from "react"

import ActionError from "../../../components/ui/ActionError.jsx"

import useEnrollment from "../../enrollment-workflow/hooks/useEnrollment.js"
import useProgress from "../hooks/useProgress.js"

import EnrollmentCourseGrid from "../components/my-learning/EnrollmentCourseGrid.jsx"
import EnrollmentEmptyState from "../components/my-learning/EnrollmentEmptyState.jsx"
import EnrollmentSkeleton from "../components/my-learning/EnrollmentSkeleton.jsx"

const MyLearningPage = () => {
    const { enrollments, isLoading, isError, error } = useEnrollment()

    const { fetchCourseProgresses } = useProgress()

    const [progressByCourseId, setProgressByCourseId] = useState({})
    const [isProgressLoading, setIsProgressLoading] = useState(false)

    const courseIds = useMemo(
        () =>
            enrollments
                .map((enrollment) => enrollment.course?._id)
                .filter(Boolean),
        [enrollments]
    )

    useEffect(() => {
        if (isLoading || isError || courseIds.length === 0) {
            return
        }

        let isActive = true

        const fetchProgress = async () => {
            setIsProgressLoading(true)

            try {
                const progressResults = await fetchCourseProgresses(courseIds)
                if (!isActive) {
                    return
                }

                const progressMap = {}

                progressResults.forEach((result) => {
                    if (!result.success) {
                        return
                    }

                    progressMap[result.courseId] = {
                        progress: result.data ?? null,
                        progressMeta: result.meta ?? null,
                    }
                })
          
                setProgressByCourseId(progressMap)
            } finally {
                if (isActive) {
                    setIsProgressLoading(false)
                }
            }
        }

        fetchProgress()

        return () => {
            isActive = false
        }
    }, [courseIds, isLoading, isError, fetchCourseProgresses])

    const enrollmentsWithProgress = enrollments.map((enrollment) => {
        const courseId = enrollment.course?._id
        const courseProgress = progressByCourseId[courseId]

        return {
            ...enrollment,
            progress: courseProgress?.progress ?? null,
            progressMeta: courseProgress?.progressMeta ?? null,
        }
    })

    const isPageLoading =
        isLoading || (isProgressLoading && enrollmentsWithProgress.length === 0)

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
                    sm:py-10
                    lg:px-8
                    lg:py-12
                "
            >
                <header className="mb-8 sm:mb-10">
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
                            tracking-tight
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

                {isPageLoading && <EnrollmentSkeleton />}

                {!isPageLoading && isError && (
                    <ActionError
                        message={
                            error?.message ||
                            "Unable to load your enrolled courses."
                        }
                    />
                )}

                {!isPageLoading && !isError && enrollments.length === 0 && (
                    <EnrollmentEmptyState />
                )}

                {!isPageLoading &&
                    !isError &&
                    enrollmentsWithProgress.length > 0 && (
                        <EnrollmentCourseGrid
                            enrollments={enrollmentsWithProgress}
                        />
                    )}
            </div>
        </main>
    )
}

export default MyLearningPage
