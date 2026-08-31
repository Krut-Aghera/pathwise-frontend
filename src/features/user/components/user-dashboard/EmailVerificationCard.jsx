import {
    CheckCircle2,
    Mail,
    ShieldAlert,
} from "lucide-react"
import useSession from "../../../auth/hooks/useSession"
import Button from "../../../../components/ui/Button"

const EmailVerificationCard = () => {

    const { user } = useSession()


    if (user?.isEmailVerified) {

        return (
            <section className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-status-success/20
                bg-background-surface
                p-5
            ">

                <div className="
                    absolute
                    right-0
                    top-0
                    h-24
                    w-24
                    rounded-full
                    bg-status-success/5
                    blur-2xl
                " />


                <div className="
                    relative
                    flex
                    items-start
                    gap-4
                ">

                    <div className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-status-success/20
                        bg-status-success/10
                        text-status-success
                    ">
                        <CheckCircle2 size={20} />
                    </div>


                    <div className="min-w-0">

                        <div className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                        ">

                            <h3 className="
                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary
                            ">
                                Email verified
                            </h3>

                            <span className="
                                rounded-full
                                bg-status-success/10
                                px-2
                                py-0.5
                                font-body
                                text-[10px]
                                font-medium
                                text-status-success
                            ">
                                Verified
                            </span>

                        </div>


                        <p className="
                            mt-1.5
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                        ">
                            Your email address is verified and
                            your account is fully active.
                        </p>

                    </div>

                </div>

            </section>
        )
    }


    return (
        <section className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-status-warning/20
            bg-background-surface
            p-5
        ">

            <div className="
                absolute
                right-0
                top-0
                h-28
                w-28
                rounded-full
                bg-status-warning/5
                blur-3xl
            " />


            <div className="
                relative
                flex
                flex-col
                gap-5
            ">

                <div className="
                    flex
                    items-start
                    gap-4
                ">

                    <div className="
                        relative
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-status-warning/20
                        bg-status-warning/10
                        text-status-warning
                    ">

                        <span className="
                            absolute
                            inset-0
                            rounded-xl
                            bg-status-warning/10
                            animate-ping
                        "/>

                        <ShieldAlert
                            size={20}
                            className="relative z-10"
                        />

                    </div>


                    <div>

                        <div className="
                            flex
                            items-center
                            gap-2
                        ">

                            <h3 className="
                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary
                            ">
                                Verify your email
                            </h3>

                            <span className="
                                rounded-full
                                bg-status-warning/10
                                px-2
                                py-0.5
                                font-body
                                text-[10px]
                                font-medium
                                text-status-warning
                            ">
                                Action required
                            </span>

                        </div>


                        <p className="
                            mt-1.5
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                        ">
                            Verify your email to unlock all
                            Pathwise features and keep your
                            account secure.
                        </p>

                    </div>

                </div>


                <Button
                    type="button"
                    className="
                        w-full
                        bg-status-warning
                        text-background-base
                        hover:opacity-90

                        sm:w-auto
                        sm:self-end
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