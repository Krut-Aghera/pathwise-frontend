import { useFetchStudentEnrollmentsQuery } from "../enrollmentApi.js"

const useEnrollment = () => {
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        useFetchStudentEnrollmentsQuery()

    return {
        enrollments: data?.data ?? [],

        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,

        refetch,
    }
}

export default useEnrollment
