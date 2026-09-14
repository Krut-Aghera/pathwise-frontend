import { useCallback } from "react"

import { useFetchStudentEnrollmentsQuery } from "../enrollmentApi.js"

const useEnrollment = () => {
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        useFetchStudentEnrollmentsQuery()

    const enrollments = data?.data ?? []

    const isEnrolled = useCallback(
        (courseId) => {
            if (!courseId) {
                return false
            }

            return enrollments.some(
                (enrollment) => enrollment.course?._id === courseId
            )
        },
        [enrollments]
    )

    return {
        enrollments,
        isEnrolled,

        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,

        refetch,
    }
}

export default useEnrollment
