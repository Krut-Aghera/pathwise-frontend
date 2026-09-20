import { Clock3, LockKeyhole, ReceiptText } from "lucide-react"
import formatINR from "../../../utils/format-currency"


const formatExpiry = (expiresAt) => {
    if (!expiresAt) {
        return null
    }

    const date = new Date(expiresAt)

    if (Number.isNaN(date.getTime())) {
        return null
    }

    return date.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
    })
}

const isOrderExpired = (expiresAt) => {
    if (!expiresAt) {
        return false
    }

    const date = new Date(expiresAt)

    if (Number.isNaN(date.getTime())) {
        return false
    }

    return date.getTime() <= Date.now()
}

const CheckoutOrderSummary = ({ order }) => {
    const expiryTime = formatExpiry(order?.expiresAt)
    const expired = isOrderExpired(order?.expiresAt)

    const course = order?.courseDetails ?? order?.course

    const courseTitle =
        typeof course === "object" ? course?.title : "Course enrollment"

    const thumbnail = typeof course === "object" ? course?.thumbnail?.url : null

    return (
        <section
            className="
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            {/* Header */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-border-subtle
                    px-4
                    py-3.5
                "
            >
                <div className="flex items-center gap-2">
                    <ReceiptText size={16} className="text-accent-primary" />

                    <h2
                        className="
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                    >
                        Order summary
                    </h2>
                </div>

                <span
                    className="
                        font-body
                        text-[11px]
                        text-text-muted
                    "
                >
                    Secure checkout
                </span>
            </div>

            {/* Course */}
            <div className="p-4">
                <div className="flex gap-3">
                    <div
                        className="
                            h-18
                            w-26
                            shrink-0
                            overflow-hidden
                            rounded-md
                            border
                            border-text-secondary/20
                            bg-background-surface/50
                            p-1
                            shadow-sm
                        "
                    >
                        {thumbnail ? (
                            <img
                                src={thumbnail}
                                alt={courseTitle}
                                className="
                                    h-full
                                    w-full
                                    rounded-sm
                                    object-cover
                                "
                            />
                        ) : (
                            <div
                                className="
                                    flex
                                    h-full
                                    w-full
                                    items-center
                                    justify-center
                                    text-text-muted
                                "
                            >
                                <ReceiptText size={18} />
                            </div>
                        )}
                    </div>

                    <div className="min-w-0 py-0.5">
                        <p
                            className="
                                line-clamp-2
                                font-accent
                                text-sm
                                font-semibold
                                leading-snug
                                text-text-primary
                            "
                        >
                            {courseTitle}
                        </p>

                        <p
                            className="
                                mt-1
                                font-body
                                text-[11px]
                                text-text-muted
                            "
                        >
                            Lifetime access
                        </p>
                    </div>
                </div>

                {/* Pricing */}
                <div
                    className="
                        mt-4
                        border-t
                        border-border-subtle
                        pt-3
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            gap-4
                        "
                    >
                        <span
                            className="
                                font-body
                                text-xs
                                text-text-secondary
                            "
                        >
                            Course price
                        </span>

                        <span
                            className="
                                font-body
                                text-xs
                                text-text-primary
                            "
                        >
                            {formatINR(order?.amount, order?.currency)}
                        </span>
                    </div>

                    <div
                        className="
                            mt-2
                            flex
                            items-center
                            justify-between
                            gap-4
                        "
                    >
                        <span
                            className="
                                font-body
                                text-sm
                                font-medium
                                text-text-secondary
                            "
                        >
                            Total
                        </span>

                        <span
                            className="
                                font-accent
                                text-base
                                font-semibold
                                text-text-primary
                            "
                        >
                            {formatINR(order?.amount, order?.currency)}
                        </span>
                    </div>
                </div>

                {/* Expiry */}
                {expiryTime && (
                    <div
                        className={`
                            mt-3
                            flex
                            items-center
                            gap-1.5
                            rounded-md
                            border
                            px-2.5
                            py-2
                            ${
                                expired
                                    ? `
                                        border-status-danger/20
                                        bg-status-danger/10
                                    `
                                    : `
                                        border-status-warning/20
                                        bg-status-warning/10
                                    `
                            }
                        `}
                    >
                        <Clock3
                            size={13}
                            className={`
                                shrink-0
                                ${
                                    expired
                                        ? "text-status-danger"
                                        : "text-status-warning"
                                }
                            `}
                        />

                        <p
                            className="
                                font-body
                                text-[11px]
                                text-text-secondary
                            "
                        >
                            {expired ? (
                                <>
                                    Order expired.{" "}
                                    <span
                                        className="
                                            font-medium
                                            text-status-danger
                                        "
                                    >
                                        Please create a new order.
                                    </span>
                                </>
                            ) : (
                                <>
                                    Order expires at{" "}
                                    <span
                                        className="
                                            font-medium
                                            text-text-primary
                                        "
                                    >
                                        {expiryTime}
                                    </span>
                                </>
                            )}
                        </p>
                    </div>
                )}

                {/* Security */}
                <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-1.5
                        font-body
                        text-[10px]
                        text-text-muted
                    "
                >
                    <LockKeyhole size={11} />
                    Payment processed securely.
                </div>
            </div>
        </section>
    )
}

export default CheckoutOrderSummary
