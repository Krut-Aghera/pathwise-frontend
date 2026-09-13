import { LockKeyhole, ShieldCheck } from "lucide-react"

const CheckoutSecurityNote = () => {
    return (
        <div
            className="
                rounded-lg
                border
                border-border-subtle
                bg-background-surface
                px-4
                py-3
            "
        >
            <div className="flex items-start gap-3">
                <ShieldCheck
                    size={17}
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
                            text-xs
                            font-medium
                            text-text-primary
                        "
                    >
                        Safe and secure checkout
                    </p>

                    <p
                        className="
                            mt-1
                            font-body
                            text-[11px]
                            leading-relaxed
                            text-text-muted
                        "
                    >
                        Your payment details are handled securely by the payment
                        provider. Pathwise does not store your card or UPI
                        credentials.
                    </p>
                </div>
            </div>

            <div
                className="
                    mt-2.5
                    flex
                    items-center
                    gap-1.5
                    font-body
                    text-[10px]
                    text-text-muted
                "
            >
                <LockKeyhole size={10} />
                Secure payment processing
            </div>
        </div>
    )
}

export default CheckoutSecurityNote
