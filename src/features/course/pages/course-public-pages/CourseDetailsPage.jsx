import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ActionError from "../../../../components/ui/ActionError.jsx"
import ErrorState from "../../../../components/ui/ErrorState.jsx"

import useCourse from "../../hooks/useCourse.js"

import CourseCurriculum from "../../components/course-public/course-details/CourseCurriculum.jsx"
import CourseDetailsContent from "../../components/course-public/course-details/CourseDetailsContent.jsx"
import CourseDetailsHero from "../../components/course-public/course-details/CourseDetailsHero.jsx"
import CourseDetailsSkeleton from "../../components/course-public/course-details/CourseDetailsSkeleton.jsx"
import CourseInstructor from "../../components/course-public/course-details/CourseInstructor.jsx"
import CoursePreviewModal from "../../components/course-public/course-details/CoursePreviewModal.jsx"
import CoursePurchaseCard from "../../components/course-public/course-details/CoursePurchaseCard.jsx"

const CourseDetailsPage = () => {
    const { courseId } = useParams()

    const {
        fetchCurrentCourse,
        currentCourse,
        isCurrentCourseLoading,
        isCurrentCourseError,
        currentCourseError,
    } = useCourse()

    const [previewLecture, setPreviewLecture] = useState(null)

    const loadCourse = useCallback(async () => {
        if (!courseId) {
            return
        }

        await fetchCurrentCourse(courseId)
    }, [courseId, fetchCurrentCourse])

    useEffect(() => {
        loadCourse()
    }, [loadCourse])

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
            {/* Desktop layout */}

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
                {/* Main column */}

                <div className="min-w-0">
                    <CourseDetailsHero
                        course={currentCourse}
                    />

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
                            <CourseDetailsContent
                                course={currentCourse}
                            />

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

                {/* Purchase card */}

                <aside
                    className="
                        hidden
                        lg:block
                        lg:pt-12
                    "
                >
                    <CoursePurchaseCard
                        course={currentCourse}
                    />
                </aside>
            </div>

            {/* Mobile purchase card */}

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
                />
            </div>

            {/* Preview modal */}

            <CoursePreviewModal
                lecture={previewLecture}
                onClose={handleClosePreview}
            />
        </main>
    )
}

export default CourseDetailsPage
