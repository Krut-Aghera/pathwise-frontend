import { ArrowUpRight, Sparkles } from "lucide-react"

import { Link } from "react-router-dom"

import useSession from "../../../auth/hooks/useSession"

const UserDashboardHeader = () => {
    const { user } = useSession()

    const firstName = user?.username?.trim()?.split(/\s+/)[0] || "there"

    return (
        <section
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-border-subtle
            bg-background-surface
            px-5
            py-7

            sm:px-7
            sm:py-8

            lg:px-9
            lg:py-10
        "
        >
            {/* Decorative background */}

            <div
                className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-accent-primary/10
                blur-3xl
            "
            />

            <div
                className="
                pointer-events-none
                absolute
                -bottom-24
                left-1/3
                h-48
                w-48
                rounded-full
                bg-accent-unique/5
                blur-3xl
            "
            />

            {/* Content */}

            <div
                className="
                relative
                flex
                flex-col
                gap-7

                lg:flex-row
                lg:items-end
                lg:justify-between
            "
            >
                <div className="max-w-2xl">
                    <div
                        className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-accent-primary/20
                        bg-accent-primary/5
                        px-3
                        py-1.5
                        font-body
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-accent-primary
                    "
                    >
                        <Sparkles size={13} />
                        Learning dashboard
                    </div>

                    <h1
                        className="
                        mt-5
                        font-accent
                        text-3xl
                        font-bold
                        tracking-tight
                        text-text-primary

                        sm:text-4xl
                    "
                    >
                        Welcome back, {firstName}.
                    </h1>

                    <p
                        className="
                        mt-3
                        max-w-xl
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary

                        sm:text-[15px]
                    "
                    >
                        Keep building your skills, stay on top of your progress,
                        and make your next step count.
                    </p>
                </div>

                <Link
                    to="/courses"
                    className="
                        group
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-xl
                        bg-accent-primary
                        px-4
                        py-2.5
                        font-body
                        text-xs
                        font-semibold
                        text-white
                        transition-all
                        duration-200

                        hover:brightness-110
                        active:scale-[0.98]

                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent-primary/30
                    "
                >
                    Explore courses
                    <ArrowUpRight
                        size={15}
                        className="
                            transition-transform
                            duration-200

                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                        "
                    />
                </Link>
            </div>
        </section>
    )
}

export default UserDashboardHeader
