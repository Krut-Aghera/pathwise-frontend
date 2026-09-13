import { useCallback, useEffect, useRef, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

import ActionError from "../../../components/ui/ActionError.jsx"

import useEnrollmentWorkflow from "../hooks/useEnrollmentWorkflow.js"

import CheckoutVerificationStatus from "../components/CheckoutVerificationStatus.jsx"

import { CHECKOUT_STATUS } from "../enrollmentWorkflowConstants.js"

const VERIFICATION_STATUS = {
    VERIFYING: "verifying",
    SUCCESS: "success",
    CANCELLED: "cancelled",
    FAILED: "failed",
}

const CheckoutVerificationPage = () => {
    const { orderId } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const { completeEnrollment, isCompletingEnrollment } =
        useEnrollmentWorkflow()

    const [verificationStatus, setVerificationStatus] = useState(
        VERIFICATION_STATUS.VERIFYING
    )

    const [verificationError, setVerificationError] = useState(null)

    const verificationStartedRef = useRef(false)

    /*
     * CheckoutPage passes the payment result and workflow
     * status through React Router state.
     *
     * Router state represents the current checkout attempt.
     * It is not used as an order-status source of truth.
     */
    const payment = location.state?.payment
    const checkoutStatus = location.state?.status
    const reason = location.state?.reason

    /*
     * Verify the Razorpay payment and complete enrollment.
     *
     * This function is called only for the successful
     * Razorpay checkout flow.
     */
    const verifyPayment = useCallback(async () => {
        if (!orderId || checkoutStatus !== CHECKOUT_STATUS.PAYMENT_PENDING) {
            return
        }

        if (
            !payment?.razorpayPaymentId ||
            !payment?.razorpayOrderId ||
            !payment?.razorpaySignature
        ) {
            setVerificationStatus(VERIFICATION_STATUS.FAILED)

            setVerificationError({
                message:
                    "Payment information is incomplete. Please return to the course and try again.",
            })

            return
        }

        if (verificationStartedRef.current) {
            return
        }

        verificationStartedRef.current = true

        setVerificationStatus(VERIFICATION_STATUS.VERIFYING)

        setVerificationError(null)

        const result = await completeEnrollment({
            orderId,
            razorpayPaymentId: payment.razorpayPaymentId,
            razorpayOrderId: payment.razorpayOrderId,
            razorpaySignature: payment.razorpaySignature,
        })

        if (!result.success) {
            setVerificationStatus(VERIFICATION_STATUS.FAILED)

            setVerificationError(result.error)

            return
        }

        setVerificationStatus(VERIFICATION_STATUS.SUCCESS)
    }, [orderId, checkoutStatus, payment, completeEnrollment])

    useEffect(() => {
        /*
         * Invalid order route.
         */
        if (!orderId) {
            setVerificationStatus(VERIFICATION_STATUS.FAILED)

            setVerificationError({
                message: "Invalid checkout order.",
            })

            return
        }

        /*
         * Razorpay was dismissed.
         *
         * CheckoutPage already attempted to cancel the
         * order, so there is no payment to verify.
         */
        if (
            checkoutStatus === CHECKOUT_STATUS.FAILED &&
            reason === "cancelled"
        ) {
            setVerificationStatus(VERIFICATION_STATUS.CANCELLED)

            setVerificationError(null)

            return
        }

        /*
         * Successful Razorpay payment.
         *
         * The payment state must match the exact contract
         * produced by CheckoutPage before verification
         * can begin.
         */
        if (checkoutStatus === CHECKOUT_STATUS.PAYMENT_PENDING) {
            verifyPayment()

            return
        }

        /*
         * Direct access, refresh, or malformed Router state.
         *
         * Razorpay payment credentials are intentionally
         * required from the checkout navigation state.
         */
        setVerificationStatus(VERIFICATION_STATUS.FAILED)

        setVerificationError({
            message:
                "Payment information is unavailable. Please return to the course and try again.",
        })
    }, [orderId, checkoutStatus, reason, verifyPayment])

    const handleReturn = useCallback(() => {
        navigate("/dashboard")
    }, [navigate])

    /*
     * Keep the page from showing an incomplete state
     * while the route itself is invalid.
     */
    if (!orderId) {
        return (
            <main className="min-h-screen bg-background-base px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <ActionError message="Invalid checkout order." />
                </div>
            </main>
        )
    }

    const isVerifying = verificationStatus === VERIFICATION_STATUS.VERIFYING

    return (
        <main className="min-h-screen bg-background-base">
            <div
                className="
                    mx-auto
                    flex
                    min-h-screen
                    w-full
                    max-w-6xl
                    flex-col
                    items-center
                    justify-center
                    px-4
                    py-10
                    sm:px-6
                    lg:px-8
                "
            >
                <div className="mb-8 text-center">
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
                        Checkout
                    </p>

                    <h2
                        className="
                            mt-2
                            font-accent
                            text-2xl
                            font-semibold
                            text-text-primary
                            sm:text-3xl
                        "
                    >
                        Payment verification
                    </h2>
                </div>

                <CheckoutVerificationStatus
                    status={verificationStatus}
                    error={verificationError}
                />

                {!isVerifying && (
                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={handleReturn}
                            disabled={isCompletingEnrollment}
                            className="
                                rounded-lg
                                bg-accent-primary
                                px-5
                                py-2.5
                                font-body
                                text-sm
                                font-medium
                                text-white
                                transition
                                hover:opacity-90
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >
                            Return to dashboard
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}

export default CheckoutVerificationPage
