export const getRazorpay = () => {
    if (!window.Razorpay) {
        throw new Error(
            "Razorpay checkout is currently unavailable. Please try again."
        )
    }

    return window.Razorpay
}
