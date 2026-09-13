import { CreditCard, LockKeyhole, ShieldCheck } from "lucide-react"
import Button from "../../../components/ui/Button"

const CheckoutPaymentCard = ({
    onPayment,
    isInitializing = false,
    disabled = false,
}) => {
    const isDisabled = disabled || isInitializing

    return (
        <section
            className="
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
                bg-background-elevated
            "
        >
            <div
                className="
                    border-b
                    border-border-subtle
                    px-5
                    py-4
                "
            >
                <div className="flex items-center gap-2">
                    <CreditCard size={17} className="text-accent-secondary" />

                    <h2
                        className="
                            font-accent
                            text-base
                            font-semibold
                            text-text-primary
                        "
                    >
                        Payment
                    </h2>
                </div>
            </div>

            <div className="p-5">
                <div
                    className="
                        rounded-lg
                        border
                        border-border-subtle
                        bg-background-surface
                        p-4
                    "
                >
                    <div className="flex items-start gap-3">
                        <ShieldCheck
                            size={18}
                            className="
                                mt-0.5
                                shrink-0
                                text-status-success
                            "
                        />

                        <div>
                            <p
                                className="
                                    font-body
                                    text-sm
                                    font-medium
                                    text-text-primary
                                "
                            >
                                Secure payment
                            </p>

                            <p
                                className="
                                    mt-1
                                    font-body
                                    text-xs
                                    leading-relaxed
                                    text-text-secondary
                                "
                            >
                                Complete your payment securely through Cashfree.
                            </p>
                        </div>
                    </div>
                </div>

                <Button
                    type="button"
                    onClick={onPayment}
                    loading={isInitializing}
                    loadingText="Preparing payment..."
                    disabled={isDisabled}
                    className="
                        mt-5
                        h-11
                        w-full
                        rounded-lg
                        font-semibold
                        text-white
                    "
                >
                    Proceed to payment
                </Button>

                <div
                    className="
                        mt-3
                        flex
                        items-center
                        justify-center
                        gap-1.5
                        font-body
                        text-[11px]
                        text-text-muted
                    "
                >
                    <LockKeyhole size={11} />
                    Payments are securely processed by Cashfree
                </div>
            </div>
        </section>
    )
}

export default CheckoutPaymentCard
