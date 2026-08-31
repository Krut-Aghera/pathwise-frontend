import {
    ArrowUpRight,
    Sparkles,
} from "lucide-react"
import useSession from "../../../auth/hooks/useSession"

const DashboardHeader = () => {

    const { user } = useSession()


    return (
        <header className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-border-subtle
            bg-background-surface
            px-5
            py-6

            sm:px-7
            sm:py-7
        ">

            {/* Decorative background */}

            <div className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-48
                w-48
                rounded-full
                bg-accent-primary/10
                blur-3xl
            " />

            <div className="
                pointer-events-none
                absolute
                bottom-0
                right-1/4
                h-20
                w-20
                rounded-full
                bg-accent-secondary/5
                blur-2xl
            " />


            <div className="
                relative
                flex
                flex-col
                gap-5

                sm:flex-row
                sm:items-end
                sm:justify-between
            ">

                <div>

                    <div className="
                        flex
                        items-center
                        gap-2
                        font-body
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-accent-primary
                    ">

                        <Sparkles size={14} />

                        Learning dashboard

                    </div>


                    <h1 className="
                        mt-3
                        font-accent
                        text-2xl
                        font-bold
                        tracking-tight
                        text-text-primary

                        sm:text-3xl
                    ">
                        Welcome back, {user?.username}
                    </h1>


                    <p className="
                        mt-2
                        max-w-xl
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    ">
                        Pick up where you left off, track your progress,
                        and manage your Pathwise account.
                    </p>

                </div>


                <div className="
                    hidden
                    items-center
                    gap-1.5
                    font-body
                    text-xs
                    text-text-muted

                    sm:flex
                ">

                    My dashboard

                    <ArrowUpRight size={14} />

                </div>

            </div>

        </header>
    )
}


export default DashboardHeader