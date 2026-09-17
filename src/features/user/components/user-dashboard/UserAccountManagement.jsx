import { AtSign, KeyRound, LogOut, ShieldAlert, UserRound } from "lucide-react"

import useSession from "../../../auth/hooks/useSession"

const UserAccountManagement = ({
    onLogout,
    isLogoutLoading,
    onChangePassword,
    onUpdateUsername,
    onUpdateEmail,
    onAccountDectivation,
}) => {
    const { user } = useSession()

    const options = [
        {
            label: "Username",
            description: user?.username || "Update username",
            icon: UserRound,
            onClick: onUpdateUsername,
            iconClass:
                "text-accent-primary bg-accent-primary/10 border border-accent-primary/30",
        },
        {
            label: "Email",
            description: user?.email || "Update email",
            icon: AtSign,
            onClick: onUpdateEmail,
            iconClass:
                "text-accent-secondary bg-accent-secondary/10 border border-accent-secondary/30",
        },
        {
            label: "Password",
            description: "Change your password",
            icon: KeyRound,
            onClick: onChangePassword,
            iconClass:
                "text-accent-unique bg-accent-unique/10 border border-accent-unique/30",
        },
        {
            label: "Sign out",
            description: "End current session",
            icon: LogOut,
            onClick: onLogout,
            loading: isLogoutLoading,
            iconClass:
                "text-status-danger bg-status-danger/10 border border-status-danger/30",
        },
    ]

    return (
        <div
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
                    grid
                    grid-cols-1

                    sm:grid-cols-2

                    xl:grid-cols-4
                "
            >
                {options.map((option, index) => {
                    const Icon = option.icon

                    return (
                        <button
                            key={option.label}
                            type="button"
                            disabled={option.loading}
                            onClick={option.onClick}
                            className={`
                                group
                                flex
                                min-w-0
                                cursor-pointer
                                items-center
                                gap-3
                                px-4
                                py-3.5
                                text-left
                                transition-colors
                                hover:bg-background-elevated
                                disabled:cursor-not-allowed
                                disabled:opacity-60

                                ${
                                    index !== options.length - 1
                                        ? "border-b border-border-subtle"
                                        : ""
                                }

                                sm:nth-[2n]:border-b-0

                                xl:border-b-0
                                xl:border-r
                                xl:border-border-subtle
                                xl:last:border-r-0
                            `}
                        >
                            <div
                                className={`
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    ${option.iconClass}
                                `}
                            >
                                <Icon size={17} strokeWidth={1.7} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p
                                    className="
                                        font-body
                                        text-xs
                                        font-semibold
                                        text-text-primary
                                    "
                                >
                                    {option.label}
                                </p>

                                <p
                                    className="
                                        mt-0.5
                                        truncate
                                        font-body
                                        text-[10px]
                                        text-text-muted
                                    "
                                >
                                    {option.description}
                                </p>
                            </div>

                            {option.loading && (
                                <span
                                    className="
                                        h-3.5
                                        w-3.5
                                        shrink-0
                                        animate-spin
                                        rounded-full
                                        border-2
                                        border-text-muted
                                        border-t-transparent
                                    "
                                />
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Danger zone */}
            <div
                className="
                    flex
                    flex-col
                    gap-4
                    border-t
                    border-status-danger/15
                    bg-status-danger/5
                    px-4
                    py-3.5

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:gap-6
                    sm:px-5
                "
            >
                {/* Danger information */}
                <div className="flex min-w-0 items-center gap-3">
                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-status-danger/20
                            bg-status-danger/10
                            text-status-danger
                        "
                    >
                        <ShieldAlert size={17} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                        <p
                            className="
                                font-body
                                text-xs
                                font-semibold
                                text-status-danger
                            "
                        >
                            Deactivate account
                        </p>

                        <p
                            className="
                                mt-0.5
                                font-body
                                text-[10px]
                                leading-4
                                text-text-secondary
                            "
                        >
                            Permanently deactivate your Pathwise account.
                        </p>
                    </div>
                </div>

                {/* Deactivation button */}
                <button
                    type="button"
                    onClick={onAccountDectivation}
                    className="
                        inline-flex
                        h-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        bg-status-danger
                        px-3.5
                        font-body
                        text-xs
                        font-semibold
                        text-background-elevated
                        transition-all
                        duration-200
                        hover:bg-status-danger/80
                        active:bg-status-danger/70
                        cursor-pointer

                        sm:w-auto
                    "
                >
                    Deactivate account
                </button>
            </div>
        </div>
    )
}

export default UserAccountManagement
