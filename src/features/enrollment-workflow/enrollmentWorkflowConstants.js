export const CHECKOUT_STATUS = {
    IDLE: "idle",
    INITIALIZING: "initializing",
    PAYMENT_PENDING: "payment_pending",
    VERIFYING: "verifying",
    SUCCESS: "success",
    FAILED: "failed",
}

export const ORDER_STATUS = {
    PENDING: "PENDING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    CANCELLED: "CANCELLED",
    EXPIRED: "EXPIRED",
}

export const CHECKOUT_MESSAGES = {
    INITIALIZING_PAYMENT: "Preparing secure payment...",
    PAYMENT_PROCESSING: "Payment is being processed...",
    VERIFYING_PAYMENT: "Verifying your payment...",
    PAYMENT_SUCCESS: "Payment successful.",
    PAYMENT_FAILED: "Payment could not be completed.",
}
