import { AlertTriangle } from "lucide-react"

import Button from "../../../../components/ui/Button"

const UserDeactivateAccountCard = ({ onDeactivate, disabled = false }) => {
    return (
        <section
            className="
            rounded-2xl
            border
            border-status-danger/20
            bg-status-danger/5
            p-5

            sm:p-6
        "
        >
            <div
                className="
                flex
                flex-col
                gap-5

                sm:flex-row
                sm:items-center
                sm:justify-between
            "
            >
                <div
                    className="
                    flex
                    items-start
                    gap-4
                "
                >
                    <div
                        className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-status-danger/20
                        bg-status-danger/10
                        text-status-danger
                    "
                    >
                        <AlertTriangle size={19} strokeWidth={1.9} />
                    </div>

                    <div className="min-w-0">
                        <h2
                            className="
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                        >
                            Deactivate account
                        </h2>

                        <p
                            className="
                            mt-1
                            max-w-xl
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                        "
                        >
                            Temporarily disable your Pathwise account. Your
                            account data will remain associated with your
                            account.
                        </p>
                    </div>
                </div>

                <Button
                    type="button"
                    disabled={disabled}
                    onClick={onDeactivate}
                    className="
                        shrink-0
                        bg-status-danger
                        text-background-base
                        hover:opacity-90

                        sm:self-center
                    "
                >
                    Deactivate account
                </Button>
            </div>
        </section>
    )
}

export default UserDeactivateAccountCard
