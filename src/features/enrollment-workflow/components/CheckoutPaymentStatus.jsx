import {
    AlertCircle,
    CheckCircle2,
    CreditCard,
    LoaderCircle,
} from "lucide-react"

import {
    CHECKOUT_MESSAGES,
    CHECKOUT_STATUS,
} from "../enrollmentWorkflowConstants.js"

const STATUS_CONFIG = {
    [CHECKOUT_STATUS.IDLE]: {
        icon: CreditCard,
        title: "Ready for payment",
        message: "Your order is ready. Continue to secure payment.",
        iconClass: "text-text-secondary",
        iconBackgroundClass: "bg-background-elevated",
    },

    [CHECKOUT_STATUS.INITIALIZING]: {
        icon: LoaderCircle,
        title: "Preparing payment",
        message: CHECKOUT_MESSAGES.INITIALIZING_PAYMENT,
        animate: true,
        iconClass: "text-accent-primary",
        iconBackgroundClass: "bg-accent-primary/10",
    },

    [CHECKOUT_STATUS.PAYMENT_PENDING]: {
        icon: CreditCard,
        title: "Payment in progress",
        message: CHECKOUT_MESSAGES.PAYMENT_PROCESSING,
        iconClass: "text-accent-secondary",
        iconBackgroundClass: "bg-accent-secondary/10",
    },

    [CHECKOUT_STATUS.VERIFYING]: {
        icon: LoaderCircle,
        title: "Verifying payment",
        message: CHECKOUT_MESSAGES.VERIFYING_PAYMENT,
        animate: true,
        iconClass: "text-accent-unique",
        iconBackgroundClass: "bg-accent-unique/10",
    },

    [CHECKOUT_STATUS.SUCCESS]: {
        icon: CheckCircle2,
        title: "Payment successful",
        message: CHECKOUT_MESSAGES.PAYMENT_SUCCESS,
        iconClass: "text-status-success",
        iconBackgroundClass: "bg-status-success/10",
    },

    [CHECKOUT_STATUS.FAILED]: {
        icon: AlertCircle,
        title: "Payment failed",
        message: CHECKOUT_MESSAGES.PAYMENT_FAILED,
        iconClass: "text-status-danger",
        iconBackgroundClass: "bg-status-danger/10",
    },
}

const CheckoutPaymentStatus = ({
    status = CHECKOUT_STATUS.IDLE,
    error = null,
}) => {
    const config = STATUS_CONFIG[status] ?? STATUS_CONFIG[CHECKOUT_STATUS.IDLE]

    const Icon = config.icon

    const message = error?.message ?? config.message

    return (
        <section
            className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                px-4
                py-4
                sm:px-5
            "
        >
            <div className="flex items-start gap-3">
                <div
                    className={`
                        mt-0.5
                        shrink-0
                        rounded-full
                        p-2
                        ${config.iconBackgroundClass}
                    `}
                >
                    <Icon
                        size={18}
                        className={`
                            ${config.iconClass}
                            ${config.animate ? "animate-spin" : ""}
                        `}
                    />
                </div>

                <div className="min-w-0">
                    <h2
                        className="
                            font-body
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                    >
                        {config.title}
                    </h2>

                    <p
                        className="
                            mt-1
                            font-body
                            text-sm
                            leading-relaxed
                            text-text-secondary
                        "
                    >
                        {message}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CheckoutPaymentStatus
