import {
    CheckCircle2,
    Mail,
    ShieldAlert,
} from "lucide-react"

import Button from "../../../components/ui/Button"
import { useSelector } from "react-redux"


const EmailVerificationCard = () => {

    const {user} = useSelector(state => state.auth)


    if (user?.isEmailVerified) {
        return (
            <section
                className="
                    rounded-xl
                    border
                    border-status-success/20
                    bg-status-success/5
                    p-5
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
                            rounded-lg
                            border
                            border-status-success/20
                            bg-status-success/10
                            text-status-success
                        "
                    >
                        <CheckCircle2 size={19} />
                    </div>


                    <div>

                        <h2
                            className="
                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary
                            "
                        >
                            Email verified
                        </h2>

                        <p
                            className="
                                mt-1
                                font-body
                                text-xs
                                leading-5
                                text-text-secondary
                            "
                        >
                            Your email address has been verified.
                            Your account is ready to use all granted resources.
                        </p>

                    </div>

                </div>

            </section>
        )
    }


    return (
        <section
            className="
                rounded-xl
                border
                border-status-warning/25
                bg-status-warning/5
                p-5
            "
        >

            <div
                className="
                    flex
                    flex-col
                    gap-4

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

                    {/* Warning icon */}

                    <div
                        className="
                            relative
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-status-warning/20
                            bg-status-warning/10
                            text-status-warning
                        "
                    >

                        {/* Animated glow */}

                        <span
                            className="
                                absolute
                                inset-0
                                rounded-lg
                                bg-status-warning/10
                                animate-ping
                            "
                        />

                        {/* Icon */}

                        <ShieldAlert
                            size={19}
                            className="
                                relative
                                z-10
                            "
                        />

                    </div>


                    <div>

                        <h2
                            className="
                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary
                            "
                        >
                            Verify your email
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
                            Verify your email address to unlock
                            all Pathwise features and keep your
                            account secure.
                        </p>

                    </div>

                </div>


                <Button
                    type="button"
                    className="
                        shrink-0
                        bg-status-warning
                        text-background-base
                        hover:opacity-90
                    "
                >
                    <Mail size={15} />
                    Verify Email
                </Button>

            </div>

        </section>
    )
}


export default EmailVerificationCard