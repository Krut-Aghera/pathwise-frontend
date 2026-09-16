import { AtSign, CalendarDays, UserRound } from "lucide-react"
import useSession from "../../../auth/hooks/useSession"

const UserProfileSummary = () => {
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
                overflow-hidden
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-5
                    px-5
                    py-5

                    sm:px-6
                    sm:py-5

                    md:flex-row
                    md:items-center
                    md:justify-between
                "
            >
                {/* Identity */}
                <div className="flex min-w-0 items-center gap-4">
                    <div
                        className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-accent-primary/25
                            bg-accent-primary/10
                            text-accent-primary
                        "
                    >
                        <UserRound size={23} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                        <p
                            className="
                                font-body
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-accent-primary
                            "
                        >
                            Profile
                        </p>

                        <h1
                            className="
                                mt-1
                                truncate
                                font-accent
                                text-lg
                                font-semibold
                                tracking-tight
                                text-text-primary

                                sm:text-xl
                            "
                        >
                            {user?.username || "User"}
                        </h1>

                        <div
                            className="
                                mt-1
                                flex
                                min-w-0
                                items-center
                                gap-1.5
                                font-body
                                text-xs
                                text-text-secondary
                            "
                        >
                            <AtSign
                                size={13}
                                className="shrink-0 text-text-muted"
                            />

                            <span className="truncate">
                                {user?.email || "No email available"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Member since */}
                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-3
                        border-t
                        border-border-subtle
                        pt-4

                        md:border-l
                        md:border-t-0
                        md:pl-6
                        md:pt-0
                    "
                >
                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-background-elevated
                            text-accent-unique
                        "
                    >
                        <CalendarDays size={17} strokeWidth={1.7} />
                    </div>

                    <div>
                        <p
                            className="
                                font-body
                                text-[10px]
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
                                text-sm
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

export default UserProfileSummary
