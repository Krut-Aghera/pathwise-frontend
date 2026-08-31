import {
    AlertTriangle,
} from "lucide-react"
import Button from "../../../../components/ui/Button"


const DeactivateAccountCard = () => {

    return (
        <section className="
            rounded-xl
            border
            border-status-danger/20
            bg-status-danger/5
            p-5
        ">

            <div className="
                flex
                flex-col
                gap-4

                sm:flex-row
                sm:items-center
                sm:justify-between
            ">

                <div className="
                    flex
                    items-start
                    gap-4
                ">

                    <div className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-status-danger/20
                        bg-status-danger/10
                        text-status-danger
                    ">
                        <AlertTriangle size={19} />
                    </div>


                    <div>

                        <h2 className="
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        ">
                            Deactivate account
                        </h2>

                        <p className="
                            mt-1
                            max-w-xl
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                        ">
                            Temporarily disable your Pathwise account.
                            Your account data will remain associated
                            with your account.
                        </p>

                    </div>

                </div>


                <Button
                    type="button"
                    className="
                        shrink-0
                        bg-status-danger
                        hover:opacity-90
                    "
                >
                    Deactivate Account
                </Button>

            </div>

        </section>
    )
}


export default DeactivateAccountCard