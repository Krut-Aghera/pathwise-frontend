import useOrder from "./useOrder.js"
import usePayment from "./usePayment.js"

const useEnrollmentWorkflow = () => {
    const {
        createOrder,
        getOrder,
        cancelOrder,
        isCreating: isCreatingOrder,
        isFetchingOrder: isFetchingEnrollmentOrder,
        isCancelling: isCancellingOrder,
    } = useOrder()

    const {
        createPayment,
        verifyPayment,
        isCreating: isCreatingPayment,
        isVerifying: isVerifyingPayment,
    } = usePayment()

    ///////////////////////////////////////////////////////////////
    // Start enrollment
    //
    // Creates the pending order.

    const startEnrollment = async (courseId) => {
        const result = await createOrder(courseId)

        if (!result.success) {
            return result
        }

        return {
            success: true,
            data: result.data,
        }
    }

    ///////////////////////////////////////////////////////////////
    // Get enrollment order
    //
    // Fetches the current server-side order state.

    const getEnrollmentOrder = async (orderId) => {
        const result = await getOrder(orderId)

        if (!result.success) {
            return result
        }

        return {
            success: true,
            data: result.data,
        }
    }

    ///////////////////////////////////////////////////////////////
    // Initialize payment
    //
    // Creates the payment provider order and returns
    // the provider payment order details.

    const initializePayment = async (orderId) => {
        const result = await createPayment(orderId)

        if (!result.success) {
            return result
        }

        return {
            success: true,
            data: result.data,
        }
    }

    ///////////////////////////////////////////////////////////////
    // Complete enrollment
    //
    // Verifies the Razorpay payment on the backend.
    // Backend completes the order and creates the enrollment
    // after successful verification.

    const completeEnrollment = async ({
        orderId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
    }) => {
        const result = await verifyPayment({
            orderId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        })

        if (!result.success) {
            return result
        }

        return {
            success: true,
            data: result.data,
        }
    }

    ///////////////////////////////////////////////////////////////
    // Cancel enrollment order
    //
    // Cancels the pending order.

    const cancelEnrollment = async (orderId) => {
        const result = await cancelOrder(orderId)

        if (!result.success) {
            return result
        }

        return {
            success: true,
            data: result.data,
        }
    }

    return {
        // Operations
        startEnrollment,
        getEnrollmentOrder,
        initializePayment,
        completeEnrollment,
        cancelEnrollment,

        // Loading
        isStartingEnrollment: isCreatingOrder,
        isFetchingEnrollmentOrder,
        isInitializingPayment: isCreatingPayment,
        isCompletingEnrollment: isVerifyingPayment,
        isCancellingEnrollment: isCancellingOrder,

        isLoading:
            isCreatingOrder ||
            isFetchingEnrollmentOrder ||
            isCreatingPayment ||
            isVerifyingPayment ||
            isCancellingOrder,
    }
}

export default useEnrollmentWorkflow
