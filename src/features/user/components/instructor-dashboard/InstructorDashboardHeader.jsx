import { AtSign, CalendarDays, LayoutDashboard, UserRound } from "lucide-react"

import useSession from "../../../auth/hooks/useSession"

const InstructorDashboardHeader = () => {
    const { user } = useSession()

    const joinedDate = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
          })
        : "—"

    return (
        <section
            className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            {/* Subtle accent glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-accent-secondary/5
                    blur-3xl
                "
            />

            <div
                className="
                    relative
                    flex
                    flex-col
                    gap-4
                    px-4
                    py-4

                    sm:px-5

                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    lg:gap-5
                    lg:px-6
                    lg:py-5
                "
            >
                {/* Left content */}
                <div
                    className="
                        flex
                        min-w-0
                        items-center
                        gap-3.5
                    "
                >
                    {/* Instructor icon */}
                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-accent-secondary/25
                            bg-accent-secondary/10
                            text-accent-secondary
                            shadow-[0_0_24px_rgba(99,102,241,0.08)]
                        "
                    >
                        <LayoutDashboard size={21} strokeWidth={1.7} />
                    </div>

                    {/* Identity content */}
                    <div
                        className="
                            min-w-0
                            flex-1
                        "
                    >
                        {/* Dashboard title + tag */}
                        <div
                            className="
                                flex
                                min-w-0
                                flex-wrap
                                items-center
                                gap-2
                            "
                        >
                            <h1
                                className="
                                    min-w-0
                                    truncate
                                    font-accent
                                    text-lg
                                    font-semibold
                                    tracking-tight
                                    text-text-primary

                                    sm:text-xl
                                "
                            >
                                Instructor Dashboard
                            </h1>

                            <span
                                className="
                                    shrink-0
                                    rounded-full
                                    border
                                    border-accent-secondary/20
                                    bg-accent-secondary/5
                                    px-2
                                    py-0.5
                                    font-body
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.12em]
                                    text-accent-secondary
                                "
                            >
                                Instructor
                            </span>
                        </div>

                        {/* Username + Email */}
                        <div
                            className="
                                mt-1.5
                                flex
                                min-w-0
                                flex-wrap
                                items-center
                                gap-x-3
                                gap-y-1
                                font-body
                            "
                        >
                            {/* Username */}
                            <span
                                className="
                                    flex
                                    min-w-0
                                    max-w-45
                                    items-center
                                    gap-1.5
                                    text-[14px]
                                    font-medium
                                    capitalize
                                    text-text-primary

                                    sm:max-w-60
                                "
                            >
                                <UserRound
                                    size={13}
                                    strokeWidth={1.8}
                                    className="
                                        shrink-0
                                        text-accent-secondary
                                    "
                                />

                                <span className="truncate">
                                    {user?.username || "Instructor"}
                                </span>
                            </span>

                            {/* Divider */}
                            <span
                                className="
                                    hidden
                                    h-3.5
                                    w-px
                                    bg-border-subtle

                                    sm:block
                                "
                            />

                            {/* Email */}
                            <span
                                className="
                                    flex
                                    min-w-0
                                    max-w-full
                                    items-center
                                    gap-1.5
                                    text-xs
                                    text-text-secondary
                                "
                            >
                                <AtSign
                                    size={12}
                                    strokeWidth={1.8}
                                    className="
                                        shrink-0
                                        text-accent-secondary
                                    "
                                />

                                <span className="truncate">
                                    {user?.email || "No email available"}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right metadata — unchanged */}
                <div
                    className="
                        flex
                        w-fit
                        shrink-0
                        items-center
                        gap-2.5
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-elevated
                        px-3
                        py-2
                    "
                >
                    <div
                        className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-accent-unique/10
                            text-accent-unique
                        "
                    >
                        <CalendarDays size={15} strokeWidth={1.7} />
                    </div>

                    <div>
                        <p
                            className="
                                font-body
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                                text-text-muted
                            "
                        >
                            Member since
                        </p>

                        <p
                            className="
                                mt-0.5
                                font-body
                                text-xs
                                font-medium
                                text-text-primary
                            "
                        >
                            {joinedDate}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InstructorDashboardHeader
