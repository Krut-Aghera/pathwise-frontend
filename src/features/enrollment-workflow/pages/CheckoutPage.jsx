import { useCallback, useEffect, useRef, useState } from "react"
import {
    useBlocker,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom"

import ActionError from "../../../components/ui/ActionError.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"

import useEnrollmentWorkflow from "../hooks/useEnrollmentWorkflow.js"
import { getRazorpay } from "../../../app/payment/razorpay.js"

import CheckoutHeader from "../components/CheckoutHeader.jsx"
import CheckoutOrderSummary from "../components/CheckoutOrderSummary.jsx"
import CheckoutPaymentCard from "../components/CheckoutPaymentCard.jsx"
import CheckoutPaymentStatus from "../components/CheckoutPaymentStatus.jsx"
import CheckoutSecurityNote from "../components/CheckoutSecurityNote.jsx"

import {
    CHECKOUT_STATUS,
    ORDER_STATUS,
} from "../enrollmentWorkflowConstants.js"

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_API_KEY

const CheckoutPage = () => {
    const { orderId } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const {
        initializePayment,
        getEnrollmentOrder,
        cancelEnrollment,
        isInitializingPayment,
        isFetchingEnrollmentOrder,
        isCancellingEnrollment,
    } = useEnrollmentWorkflow()

    const [checkoutStatus, setCheckoutStatus] = useState(CHECKOUT_STATUS.IDLE)

    const [checkoutError, setCheckoutError] = useState(null)

    const paymentSucceededRef = useRef(false)
    const navigationInProgressRef = useRef(false)
    const checkoutLeavingRef = useRef(false)

    /*
     * Router state is only a display snapshot.
     *
     * It must not be used as the authoritative order
     * status because the backend may change the order.
     */
    const order = location.state?.order

    /*
     * Fetch the current order and cancel it only when the
     * server confirms that it is still pending.
     *
     * This is the single cancellation decision point used
     * by both Header Back and browser navigation.
     */
    const cancelPendingOrder = useCallback(async () => {
        const currentOrderResult = await getEnrollmentOrder(orderId)

        if (!currentOrderResult.success) {
            return currentOrderResult
        }

        const currentOrder = currentOrderResult.data?.data

        if (currentOrder?.status !== ORDER_STATUS.PENDING) {
            return {
                success: true,
                data: currentOrderResult.data,
            }
        }

        return cancelEnrollment(orderId)
    }, [orderId, getEnrollmentOrder, cancelEnrollment])

    /*
     * React Router navigation blocker.
     *
     * Router state is only used to determine whether a
     * checkout may contain a pending order.
     *
     * The actual cancellation decision is made against
     * the current server-side order.
     */
    const shouldBlockNavigation = useCallback(() => {
        if (
            navigationInProgressRef.current ||
            checkoutLeavingRef.current ||
            paymentSucceededRef.current
        ) {
            return false
        }

        if (
            checkoutStatus === CHECKOUT_STATUS.PAYMENT_PENDING ||
            checkoutStatus === CHECKOUT_STATUS.VERIFYING
        ) {
            return true
        }

        return order?.status === ORDER_STATUS.PENDING
    }, [checkoutStatus, order?.status])

    const blocker = useBlocker(shouldBlockNavigation)

    /*
     * Navigate to the verification page.
     */
    const navigateToVerification = useCallback(
        (state) => {
            navigationInProgressRef.current = true

            navigate(`/checkout/${orderId}/verify`, {
                state,
            })
        },
        [navigate, orderId]
    )

    /*
     * Leave Checkout through the Header Back button.
     */
    const leaveCheckout = useCallback(async () => {
        if (
            !orderId ||
            !order ||
            checkoutLeavingRef.current ||
            isCancellingEnrollment ||
            isFetchingEnrollmentOrder
        ) {
            return false
        }

        checkoutLeavingRef.current = true

        const result = await cancelPendingOrder()

        if (!result.success) {
            checkoutLeavingRef.current = false

            setCheckoutStatus(CHECKOUT_STATUS.FAILED)

            setCheckoutError(result.error)

            return false
        }

        /*
         * The navigation is intentional and checkoutLeavingRef
         * remains true so useBlocker does not intercept it.
         */
        navigate(-1)

        return true
    }, [
        orderId,
        order,
        isCancellingEnrollment,
        isFetchingEnrollmentOrder,
        cancelPendingOrder,
        navigate,
    ])

    /*
     * Handle browser Back / forward navigation.
     *
     * React Router has already blocked the navigation.
     */
    useEffect(() => {
        if (blocker.state !== "blocked") {
            return
        }

        /*
         * Payment is active. Do not allow browser navigation
         * to bypass Razorpay's own dismissal flow.
         */
        if (
            checkoutStatus === CHECKOUT_STATUS.PAYMENT_PENDING ||
            checkoutStatus === CHECKOUT_STATUS.VERIFYING
        ) {
            blocker.reset()
            return
        }

        /*
         * Navigation was intentionally started by Checkout.
         */
        if (navigationInProgressRef.current || paymentSucceededRef.current) {
            blocker.proceed()
            return
        }

        /*
         * Another navigation attempt is already being handled.
         */
        if (checkoutLeavingRef.current) {
            return
        }

        const handleBlockedNavigation = async () => {
            checkoutLeavingRef.current = true

            const result = await cancelPendingOrder()

            if (!result.success) {
                checkoutLeavingRef.current = false

                setCheckoutStatus(CHECKOUT_STATUS.FAILED)

                setCheckoutError(result.error)

                blocker.reset()

                return
            }

            /*
             * Continue the exact browser navigation
             * originally requested by the user.
             */
            blocker.proceed()
        }

        handleBlockedNavigation()
    }, [blocker, checkoutStatus, cancelPendingOrder])

    /*
     * Header Back button.
     */
    const handleBack = useCallback(async () => {
        if (
            isInitializingPayment ||
            isFetchingEnrollmentOrder ||
            isCancellingEnrollment ||
            navigationInProgressRef.current
        ) {
            return
        }

        /*
         * Payment succeeded, so verification is already
         * taking over the workflow.
         */
        if (paymentSucceededRef.current) {
            return
        }

        await leaveCheckout()
    }, [
        isInitializingPayment,
        isFetchingEnrollmentOrder,
        isCancellingEnrollment,
        leaveCheckout,
    ])

    /*
     * Razorpay checkout was dismissed.
     *
     * The user has entered the payment flow, so cancel the
     * pending order and show the cancelled verification state.
     */
    const handlePaymentDismissed = useCallback(async () => {
        if (
            paymentSucceededRef.current ||
            navigationInProgressRef.current ||
            checkoutLeavingRef.current
        ) {
            return
        }

        checkoutLeavingRef.current = true

        setCheckoutStatus(CHECKOUT_STATUS.FAILED)

        setCheckoutError(null)

        const result = await cancelEnrollment(orderId)

        if (!result.success) {
            checkoutLeavingRef.current = false

            setCheckoutError(result.error)

            return
        }

        navigateToVerification({
            status: CHECKOUT_STATUS.FAILED,
            reason: "cancelled",
        })
    }, [orderId, cancelEnrollment, navigateToVerification])

    /*
     * Initialize Razorpay payment.
     */
    const handlePayment = useCallback(async () => {
        if (
            !orderId ||
            isInitializingPayment ||
            isCancellingEnrollment ||
            isFetchingEnrollmentOrder ||
            navigationInProgressRef.current
        ) {
            return
        }

        setCheckoutError(null)

        setCheckoutStatus(CHECKOUT_STATUS.INITIALIZING)

        const result = await initializePayment(orderId)

        if (!result.success) {
            setCheckoutStatus(CHECKOUT_STATUS.FAILED)

            setCheckoutError(result.error)

            return
        }

        const paymentData = result.data?.data

        const providerOrderId = paymentData?.providerOrderId

        const amount = paymentData?.amount
        const currency = paymentData?.currency

        if (!providerOrderId || !amount || !currency) {
            setCheckoutStatus(CHECKOUT_STATUS.FAILED)

            setCheckoutError({
                message: "Unable to initialize payment. Please try again.",
            })

            return
        }

        if (!RAZORPAY_KEY_ID) {
            setCheckoutStatus(CHECKOUT_STATUS.FAILED)

            setCheckoutError({
                message:
                    "Payment configuration is unavailable. Please try again later.",
            })

            return
        }

        try {
            const Razorpay = getRazorpay()

            const razorpay = new Razorpay({
                key: RAZORPAY_KEY_ID,
                amount,
                currency,
                order_id: providerOrderId,
                name: "Pathwise",

                description:
                    order?.courseDetails?.title ??
                    order?.course?.title ??
                    "Course enrollment",

                handler: (response) => {
                    if (
                        !response?.razorpay_payment_id ||
                        !response?.razorpay_order_id ||
                        !response?.razorpay_signature
                    ) {
                        setCheckoutStatus(CHECKOUT_STATUS.FAILED)

                        setCheckoutError({
                            message:
                                "Payment response was incomplete. Please try again.",
                        })

                        return
                    }

                    /*
                     * Payment succeeded.
                     *
                     * Checkout must never cancel the order
                     * after this point.
                     */
                    paymentSucceededRef.current = true

                    setCheckoutError(null)

                    setCheckoutStatus(CHECKOUT_STATUS.VERIFYING)

                    navigateToVerification({
                        status: CHECKOUT_STATUS.PAYMENT_PENDING,

                        payment: {
                            razorpayPaymentId: response.razorpay_payment_id,

                            razorpayOrderId: response.razorpay_order_id,

                            razorpaySignature: response.razorpay_signature,
                        },
                    })
                },

                modal: {
                    ondismiss: handlePaymentDismissed,
                },
            })

            setCheckoutStatus(CHECKOUT_STATUS.PAYMENT_PENDING)

            razorpay.open()
        } catch (error) {
            setCheckoutStatus(CHECKOUT_STATUS.FAILED)

            setCheckoutError({
                message: error?.message ?? "Unable to open payment checkout.",
            })
        }
    }, [
        orderId,
        order,
        isInitializingPayment,
        isCancellingEnrollment,
        isFetchingEnrollmentOrder,
        initializePayment,
        navigateToVerification,
        handlePaymentDismissed,
    ])

    /*
     * Invalid route.
     */
    if (!orderId) {
        return (
            <main className="min-h-screen bg-background-base px-4 py-10">
                <div className="mx-auto max-w-3xl">
                    <ActionError message="Invalid checkout order." />
                </div>
            </main>
        )
    }

    /*
     * Checkout was opened without order information.
     */
    if (!order) {
        return (
            <main className="min-h-screen bg-background-base px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <ErrorState
                        error={{
                            message:
                                "Checkout information is unavailable. Please return to the course and try again.",
                        }}
                    />
                </div>
            </main>
        )
    }

    const isProcessing =
        isInitializingPayment ||
        isFetchingEnrollmentOrder ||
        isCancellingEnrollment ||
        checkoutStatus === CHECKOUT_STATUS.PAYMENT_PENDING ||
        checkoutStatus === CHECKOUT_STATUS.VERIFYING

    return (
        <main className="min-h-screen bg-background-base">
            <CheckoutHeader onBack={handleBack} disabled={isProcessing} />

            <div
                className="
                    mx-auto
                    w-full
                    max-w-6xl
                    px-4
                    py-8
                    sm:px-6
                    sm:py-10
                    lg:px-8
                    lg:py-12
                "
            >
                <div className="mb-8">
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

                    <h1
                        className="
                            mt-2
                            font-accent
                            text-2xl
                            font-semibold
                            text-text-primary
                            sm:text-3xl
                        "
                    >
                        Complete your enrollment
                    </h1>

                    <p
                        className="
                            mt-2
                            max-w-2xl
                            font-body
                            text-sm
                            leading-relaxed
                            text-text-secondary
                        "
                    >
                        Review your order and continue to secure payment.
                    </p>
                </div>

                {checkoutError && (
                    <div className="mb-6">
                        <CheckoutPaymentStatus
                            status={CHECKOUT_STATUS.FAILED}
                            error={checkoutError}
                        />
                    </div>
                )}

                {!checkoutError &&
                    checkoutStatus !== CHECKOUT_STATUS.FAILED && (
                        <div className="mb-6">
                            <CheckoutPaymentStatus status={checkoutStatus} />
                        </div>
                    )}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        lg:grid-cols-[minmax(0,1fr)_380px]
                        lg:items-start
                    "
                >
                    <div className="space-y-6">
                        <CheckoutOrderSummary order={order} />

                        <CheckoutSecurityNote />
                    </div>

                    <CheckoutPaymentCard
                        onPayment={handlePayment}
                        isInitializing={isInitializingPayment}
                        disabled={isProcessing}
                    />
                </div>
            </div>
        </main>
    )
}

export default CheckoutPage
