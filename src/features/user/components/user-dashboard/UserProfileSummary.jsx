import { CalendarDays, Mail, UserRound } from "lucide-react"

import useSession from "../../../auth/hooks/useSession"

const UserProfileSummary = () => {
    const { user } = useSession()

    const joinedDate = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
          })
        : "—"

    const information = [
        {
            label: "Username",
            value: user?.username || "—",
            icon: UserRound,
            accent: "text-accent-primary",
            background: "bg-accent-primary/10",
            border: "border-accent-primary/20",
        },
        {
            label: "Email",
            value: user?.email || "—",
            icon: Mail,
            accent: "text-accent-secondary",
            background: "bg-accent-secondary/10",
            border: "border-accent-secondary/20",
        },
        {
            label: "Member since",
            value: joinedDate,
            icon: CalendarDays,
            accent: "text-accent-unique",
            background: "bg-accent-unique/10",
            border: "border-accent-unique/20",
        },
    ]

    return (
        <section
            className="
            overflow-hidden
            rounded-2xl
            border
            border-border-subtle
            bg-background-surface
        "
        >
            {/* Heading */}

            <div
                className="
                border-b
                border-border-subtle
                px-5
                py-4

                sm:px-6
            "
            >
                <p
                    className="
                    font-body
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-text-muted
                "
                >
                    Profile
                </p>

                <h2
                    className="
                    mt-1
                    font-accent
                    text-sm
                    font-semibold
                    text-text-primary
                "
                >
                    Your account information
                </h2>
            </div>

            {/* Information */}

            <div
                className="
                grid
                grid-cols-1

                sm:grid-cols-3
            "
            >
                {information.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <div
                            key={item.label}
                            className={`
                                flex
                                items-center
                                gap-4
                                px-5
                                py-5

                                sm:px-6

                                ${
                                    index !== 0
                                        ? "border-t border-border-subtle sm:border-l sm:border-t-0"
                                        : ""
                                }
                            `}
                        >
                            <div
                                className={`
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border
                                ${item.border}
                                ${item.background}
                                ${item.accent}
                            `}
                            >
                                <Icon size={17} strokeWidth={1.9} />
                            </div>

                            <div className="min-w-0">
                                <p
                                    className="
                                    font-body
                                    text-[11px]
                                    text-text-muted
                                "
                                >
                                    {item.label}
                                </p>

                                <p
                                    className="
                                    mt-1
                                    truncate
                                    font-body
                                    text-sm
                                    font-medium
                                    text-text-primary
                                "
                                >
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default UserProfileSummary
