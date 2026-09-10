import {
    ArrowRight,
    AtSign,
    KeyRound,
    LogOut,
    Trash2,
    UserRound,
} from "lucide-react"

const UserAccountManagement = ({
    onLogout,
    isLogoutLoading,
    onChangePassword,
}) => {
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
            {/* Header */}

            <div
                className="
                border-b
                border-border-subtle
                px-5
                py-5

                sm:px-6
                "
            >
                <h2
                    className="
                    font-accent
                    text-base
                    font-semibold
                    text-text-primary
                    "
                >
                    Account management
                </h2>

                <p
                    className="
                    mt-1
                    max-w-2xl
                    font-body
                    text-xs
                    leading-5
                    text-text-muted
                    "
                >
                    Manage your account information, security, and active
                    session.
                </p>
            </div>

            {/* Personal information */}

            <div>
                <UserAccountManagementSectionTitle>
                    Personal information
                </UserAccountManagementSectionTitle>

                <div>
                    <UserAccountManagementOption
                        icon={UserRound}
                        title="Username"
                        description="Change the name displayed across Pathwise."
                        accent="primary"
                    />

                    <UserAccountManagementOption
                        icon={AtSign}
                        title="Email address"
                        description="Change the email address associated with your account."
                        accent="secondary"
                    />
                </div>
            </div>

            {/* Security */}

            <div className="border-t border-border-subtle">
                <UserAccountManagementSectionTitle>
                    Security
                </UserAccountManagementSectionTitle>

                <UserAccountManagementOption
                    icon={KeyRound}
                    title="Password"
                    description="Update your password to keep your account secure."
                    accent="unique"
                    onClick={onChangePassword}
                />
            </div>

            {/* Session */}

            <div className="border-t border-border-subtle">
                <UserAccountManagementSectionTitle>
                    Session
                </UserAccountManagementSectionTitle>

                <button
                    type="button"
                    onClick={onLogout}
                    disabled={isLogoutLoading}
                    className="
                    group
                    flex
                    w-full
                    items-center
                    gap-4
                    px-5
                    py-4
                    text-left
                    transition-colors
                    duration-200

                    hover:bg-background-elevated

                    focus:outline-none
                    focus-visible:bg-background-elevated

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    sm:px-6
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
                        border-accent-primary/20
                        bg-accent-primary/10
                        text-accent-primary
                        "
                    >
                        <LogOut size={17} strokeWidth={1.9} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <h3
                            className="
                            font-accent
                            text-sm
                            font-medium
                            text-text-primary
                            "
                        >
                            {isLogoutLoading ? "Signing out..." : "Sign out"}
                        </h3>

                        <p
                            className="
                            mt-0.5
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                            "
                        >
                            {isLogoutLoading
                                ? "Ending your current Pathwise session..."
                                : "Sign out from your current Pathwise session."}
                        </p>
                    </div>

                    <ArrowRight
                        size={16}
                        className="
                        shrink-0
                        text-text-muted
                        transition-all
                        duration-200

                        group-hover:translate-x-1
                        group-hover:text-text-primary
                        "
                    />
                </button>
            </div>

            {/* Danger zone */}

            <div
                className="
                border-t
                border-status-danger/15
                bg-status-danger/5
                "
            >
                <div
                    className="
                    px-5
                    py-5

                    sm:px-6
                    "
                >
                    <div
                        className="
                        flex
                        items-center
                        gap-2.5
                        "
                    >
                        <Trash2
                            size={15}
                            strokeWidth={1.9}
                            className="text-status-danger"
                        />

                        <h3
                            className="
                            font-accent
                            text-sm
                            font-semibold
                            text-status-danger
                            "
                        >
                            Danger zone
                        </h3>
                    </div>

                    <p
                        className="
                        mt-1
                        max-w-2xl
                        font-body
                        text-xs
                        leading-5
                        text-text-secondary
                        "
                    >
                        Permanent actions that can affect your account and
                        cannot be undone.
                    </p>
                </div>

                <div
                    className="
                    border-t
                    border-status-danger/10
                    px-5
                    py-5

                    sm:px-6
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
                        <div className="min-w-0">
                            <h3
                                className="
                                font-accent
                                text-sm
                                font-medium
                                text-text-primary
                                "
                            >
                                Delete account
                            </h3>

                            <p
                                className="
                                mt-1
                                max-w-2xl
                                font-body
                                text-xs
                                leading-5
                                text-text-secondary
                                "
                            >
                                Permanently remove your Pathwise account and
                                associated data.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="
                            inline-flex
                            shrink-0
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            border
                            border-status-danger/25
                            bg-status-danger/10
                            px-4
                            py-2.5
                            font-body
                            text-xs
                            font-semibold
                            text-status-danger
                            transition-all
                            duration-200

                            hover:border-status-danger/40
                            hover:bg-status-danger/15

                            focus:outline-none
                            focus:ring-2
                            focus:ring-status-danger/20
                            "
                        >
                            Delete account
                            <ArrowRight size={14} strokeWidth={1.9} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const UserAccountManagementSectionTitle = ({ children }) => {
    return (
        <div
            className="
            px-5
            pb-2
            pt-5

            sm:px-6
            "
        >
            <h3
                className="
                font-accent
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-text-muted
                "
            >
                {children}
            </h3>
        </div>
    )
}

const UserAccountManagementOption = ({
    icon: Icon,
    title,
    description,
    accent,
    onClick,
}) => {
    const accentClasses = {
        primary: {
            icon: `
                border-accent-primary/20
                bg-accent-primary/10
                text-accent-primary
            `,
            hover: "hover:bg-accent-primary/5",
        },

        secondary: {
            icon: `
                border-accent-secondary/20
                bg-accent-secondary/10
                text-accent-secondary
            `,
            hover: "hover:bg-accent-secondary/5",
        },

        unique: {
            icon: `
                border-accent-unique/20
                bg-accent-unique/10
                text-accent-unique
            `,
            hover: "hover:bg-accent-unique/5",
        },
    }

    const classes = accentClasses[accent]

    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                group
                flex
                w-full
                items-center
                gap-4
                px-5
                py-4
                text-left
                transition-colors
                duration-200

                ${classes.hover}

                focus:outline-none
                focus-visible:bg-background-elevated

                sm:px-6
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
                ${classes.icon}
                `}
            >
                <Icon size={17} strokeWidth={1.9} />
            </div>

            <div className="min-w-0 flex-1">
                <h4
                    className="
                    font-accent
                    text-sm
                    font-medium
                    text-text-primary
                    "
                >
                    {title}
                </h4>

                <p
                    className="
                    mt-0.5
                    font-body
                    text-xs
                    leading-5
                    text-text-secondary
                    "
                >
                    {description}
                </p>
            </div>

            <ArrowRight
                size={16}
                className="
                shrink-0
                text-text-muted
                transition-all
                duration-200

                group-hover:translate-x-1
                group-hover:text-text-primary
                "
            />
        </button>
    )
}

export default UserAccountManagement
