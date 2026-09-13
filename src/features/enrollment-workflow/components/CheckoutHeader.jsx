import { ArrowLeft, ShieldCheck } from "lucide-react"
import Button from "../../../components/ui/Button"

const CheckoutHeader = ({ onBack, disabled = false }) => {
    return (
        <header
            className="
                border-b
                border-border-subtle
                bg-background-surface
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    min-h-16
                    w-full
                    max-w-6xl
                    items-center
                    justify-between
                    gap-4
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                <Button
                    type="button"
                    onClick={onBack}
                    disabled={disabled}
                    className="
                        bg-transparent!
                        px-0
                        text-text-secondary
                        hover:bg-transparent!
                        hover:text-text-primary
                    "
                >
                    <ArrowLeft size={16} />

                    <span>Back</span>
                </Button>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        font-body
                        text-xs
                        text-text-secondary
                    "
                >
                    <ShieldCheck size={15} className="text-status-success" />
                    Secure checkout
                </div>
            </div>
        </header>
    )
}

export default CheckoutHeader
