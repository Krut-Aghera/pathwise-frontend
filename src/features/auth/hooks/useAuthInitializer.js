import { useGetCurrentUserQuery } from "../../user/userApi.js"

const useAuthInitializer = () => {
    const {
        data: user,
        isLoading,
        isError,
        isSuccess,
    } = useGetCurrentUserQuery()

    return {
        user,
        isLoading,
        isError,
        isSuccess,
    }
}

export default useAuthInitializer
