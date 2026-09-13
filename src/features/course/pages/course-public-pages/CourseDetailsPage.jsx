import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import ActionError from "../../../../components/ui/ActionError.jsx"
import ErrorState from "../../../../components/ui/ErrorState.jsx"

import useCourse from "../../hooks/useCourse.js"
import useEnrollmentWorkflow from "../../../enrollment-workflow/hooks/useEnrollmentWorkflow.js"

import CourseCurriculum from "../../components/course-public/course-details/CourseCurriculum.jsx"
import CourseDetailsContent from "../../components/course-public/course-details/CourseDetailsContent.jsx"
import CourseDetailsHero from "../../components/course-public/course-details/CourseDetailsHero.jsx"
import CourseDetailsSkeleton from "../../components/course-public/course-details/CourseDetailsSkeleton.jsx"
import CourseInstructor from "../../components/course-public/course-details/CourseInstructor.jsx"
import CoursePreviewModal from "../../components/course-public/course-details/CoursePreviewModal.jsx"
import CoursePurchaseCard from "../../components/course-public/course-details/CoursePurchaseCard.jsx"

const CourseDetailsPage = () => {
    const { courseId } = useParams()
    const navigate = useNavigate()

    const {
        fetchCurrentCourse,
        currentCourse,
        isCurrentCourseLoading,
        isCurrentCourseError,
        currentCourseError,
    } = useCourse()

    const { startEnrollment, isStartingEnrollment } = useEnrollmentWorkflow()

    const [previewLecture, setPreviewLecture] = useState(null)
    const [enrollmentError, setEnrollmentError] = useState(null)

    const loadCourse = useCallback(async () => {
        if (!courseId) {
            return
        }

        await fetchCurrentCourse(courseId)
    }, [courseId, fetchCurrentCourse])

    useEffect(() => {
        loadCourse()
    }, [loadCourse])

    const handleEnroll = useCallback(
        async (selectedCourseId) => {
            if (!selectedCourseId || isStartingEnrollment) {
                return
            }

            setEnrollmentError(null)

            const result = await startEnrollment(selectedCourseId)

            if (!result.success) {
                setEnrollmentError(result.error)
                return
            }

            const order = result.data?.data

            if (!order?._id) {
                setEnrollmentError({
                    message: "Unable to start enrollment. Please try again.",
                })

                return
            }

            navigate(`/checkout/${order._id}`, {
                state: {
                    order,
                },
            })
        },
        [isStartingEnrollment, startEnrollment, navigate]
    )

    const handlePreviewLecture = useCallback((lecture) => {
        if (!lecture?.isPreviewFree || !lecture?.video?.url) {
            return
        }

        setPreviewLecture(lecture)
    }, [])

    const handleClosePreview = useCallback(() => {
        setPreviewLecture(null)
    }, [])

    if (isCurrentCourseLoading) {
        return <CourseDetailsSkeleton />
    }

    if (isCurrentCourseError) {
        return (
            <main className="min-h-screen bg-background-base px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <ErrorState error={currentCourseError} />
                </div>
            </main>
        )
    }

    if (!currentCourse) {
        return (
            <main className="min-h-screen bg-background-base px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <ActionError message="Course could not be found." />
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-background-base">
            {enrollmentError && (
                <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
                    <ActionError error={enrollmentError} />
                </div>
            )}

            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-7xl
                    grid-cols-1
                    gap-10
                    lg:grid-cols-[minmax(0,1fr)_360px]
                    lg:px-8
                "
            >
                <div className="min-w-0">
                    <CourseDetailsHero course={currentCourse} />

                    <div
                        className="
                            px-4
                            py-10
                            sm:px-6
                            lg:px-0
                            lg:py-12
                        "
                    >
                        <div className="space-y-12">
                            <CourseDetailsContent course={currentCourse} />

                            <CourseCurriculum
                                sections={currentCourse?.sections}
                                statistics={currentCourse?.statistics}
                                onPreviewLecture={handlePreviewLecture}
                            />

                            <CourseInstructor
                                instructor={currentCourse?.instructor}
                            />
                        </div>
                    </div>
                </div>

                <aside
                    className="
                        hidden
                        lg:block
                        lg:pt-12
                    "
                >
                    <CoursePurchaseCard
                        course={currentCourse}
                        onEnroll={handleEnroll}
                        isEnrolling={isStartingEnrollment}
                    />
                </aside>
            </div>

            <div
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    pb-10
                    sm:px-6
                    lg:hidden
                "
            >
                <CoursePurchaseCard
                    course={currentCourse}
                    onEnroll={handleEnroll}
                    isEnrolling={isStartingEnrollment}
                />
            </div>

            <CoursePreviewModal
                lecture={previewLecture}
                onClose={handleClosePreview}
            />
        </main>
    )
}

export default CourseDetailsPage
