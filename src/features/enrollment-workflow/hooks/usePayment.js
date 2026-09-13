import {
    useCreatePaymentMutation,
    useVerifyPaymentMutation,
} from "../paymentApi.js"

const usePayment = () => {
    const [
        createPaymentMutation,
        {
            isLoading: isCreating,
            isSuccess: isCreateSuccess,
            isError: isCreateError,
            error: createError,
            reset: resetCreate,
        },
    ] = useCreatePaymentMutation()

    const [
        verifyPaymentMutation,
        {
            isLoading: isVerifying,
            isSuccess: isVerifySuccess,
            isError: isVerifyError,
            error: verifyError,
            reset: resetVerify,
        },
    ] = useVerifyPaymentMutation()

    ///////////////////////////////////////////////////////////////
    // Create payment

    const createPayment = async (orderId) => {
        try {
            const result = await createPaymentMutation(orderId).unwrap()

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
    // Verify payment

    const verifyPayment = async ({
        orderId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
    }) => {
        try {
            const result = await verifyPaymentMutation({
                orderId,
                razorpayPaymentId,
                razorpayOrderId,
                razorpaySignature,
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

    return {
        createPayment,
        verifyPayment,

        isCreating,
        isVerifying,
        isLoading: isCreating || isVerifying,

        isCreateSuccess,
        isVerifySuccess,

        isCreateError,
        isVerifyError,

        createError,
        verifyError,

        resetCreate,
        resetVerify,
    }
}

export default usePayment
