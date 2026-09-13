import {
    useCreateOrderMutation,
    useLazyFetchOrderQuery,
    useCancelOrderMutation,
} from "../orderApi.js"

const useOrder = () => {
    const [
        createOrderMutation,
        {
            isLoading: isCreating,
            isSuccess: isCreateSuccess,
            isError: isCreateError,
            error: createError,
            reset: resetCreate,
        },
    ] = useCreateOrderMutation()

    const [
        fetchOrder,
        { isFetching: isFetchingOrder, error: fetchOrderError },
    ] = useLazyFetchOrderQuery()

    const [
        cancelOrderMutation,
        {
            isLoading: isCancelling,
            isSuccess: isCancelSuccess,
            isError: isCancelError,
            error: cancelError,
            reset: resetCancel,
        },
    ] = useCancelOrderMutation()

    ///////////////////////////////////////////////////////////////
    // Create order

    const createOrder = async (courseId) => {
        try {
            const result = await createOrderMutation({
                course: courseId,
            }).unwrap()

            return {
                success: true,
                data: result,
            }
        } catch (error) {
            return {
                success: false,
                error,
            }
        }
    }

    ///////////////////////////////////////////////////////////////
    // Fetch order

    const getOrder = async (orderId) => {
        try {
            const result = await fetchOrder(orderId).unwrap()

            return {
                success: true,
                data: result,
            }
        } catch (error) {
            return {
                success: false,
                error,
            }
        }
    }

    ///////////////////////////////////////////////////////////////
    // Cancel order

    const cancelOrder = async (orderId) => {
        try {
            const result = await cancelOrderMutation(orderId).unwrap()

            return {
                success: true,
                data: result,
            }
        } catch (error) {
            return {
                success: false,
                error,
            }
        }
    }

    return {
        // Operations
        createOrder,
        getOrder,
        cancelOrder,

        // Loading
        isCreating,
        isFetchingOrder,
        isCancelling,

        isLoading: isCreating || isFetchingOrder || isCancelling,

        // Success
        isCreateSuccess,
        isCancelSuccess,

        // Error
        isCreateError,
        isCancelError,

        createError,
        fetchOrderError,
        cancelError,

        // Reset
        resetCreate,
        resetCancel,
    }
}

export default useOrder
