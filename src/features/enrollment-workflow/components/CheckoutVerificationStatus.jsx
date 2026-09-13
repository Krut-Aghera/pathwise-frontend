import { AlertCircle, CheckCircle2, LoaderCircle, XCircle } from "lucide-react"

const STATUS_CONFIG = {
    verifying: {
        icon: LoaderCircle,
        title: "Verifying your payment",
        message:
            "Please wait while we securely verify your payment and complete your enrollment.",
        iconClass: "text-accent-unique",
        iconBackgroundClass: "bg-accent-unique/10",
        animate: true,
    },

    success: {
        icon: CheckCircle2,
        title: "Enrollment successful",
        message:
            "Your payment has been verified and you are now enrolled in this course.",
        iconClass: "text-status-success",
        iconBackgroundClass: "bg-status-success/10",
    },

    cancelled: {
        icon: XCircle,
        title: "Payment cancelled",
        message:
            "Your payment was cancelled and the order has not been completed.",
        iconClass: "text-status-warning",
        iconBackgroundClass: "bg-status-warning/10",
    },

    failed: {
        icon: AlertCircle,
        title: "Payment verification failed",
        message:
            "We could not verify your payment. Your enrollment has not been completed.",
        iconClass: "text-status-danger",
        iconBackgroundClass: "bg-status-danger/10",
    },
}

const CheckoutVerificationStatus = ({ status, error = null }) => {
    const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.failed

    const Icon = config.icon

    const message = error?.message ?? config.message

    return (
        <section
            className="
                mx-auto
                w-full
                max-w-xl
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
                px-6
                py-8
                sm:px-8
                sm:py-10
            "
        >
            <div className="flex flex-col items-center text-center">
                <div
                    className={`
                        rounded-full
                        p-4
                        ${config.iconBackgroundClass}
                    `}
                >
                    <Icon
                        size={28}
                        className={`
                            ${config.iconClass}
                            ${config.animate ? "animate-spin" : ""}
                        `}
                    />
                </div>

                <h1
                    className="
                        mt-5
                        font-accent
                        text-2xl
                        font-semibold
                        text-text-primary
                        sm:text-3xl
                    "
                >
                    {config.title}
                </h1>

                <p
                    className="
                        mt-3
                        max-w-md
                        font-body
                        text-sm
                        leading-relaxed
                        text-text-secondary
                    "
                >
                    {message}
                </p>
            </div>
        </section>
    )
}

export default CheckoutVerificationStatus
