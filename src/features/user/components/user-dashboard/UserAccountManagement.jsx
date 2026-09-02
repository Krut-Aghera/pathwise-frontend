import { ArrowRight, AtSign, KeyRound, Trash2, UserRound } from "lucide-react"

const UserAccountManagement = () => {
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
            {/* Personal information */}

            <div>
                <div
                    className="
                    border-b
                    border-border-subtle
                    px-5
                    py-4

                    sm:px-6
                "
                >
                    <h3
                        className="
                        font-accent
                        text-sm
                        font-semibold
                        text-text-primary
                    "
                    >
                        Personal information
                    </h3>

                    <p
                        className="
                        mt-1
                        font-body
                        text-xs
                        leading-5
                        text-text-muted
                    "
                    >
                        Manage the information associated with your account.
                    </p>
                </div>

                <div>
                    <UserAccountManagementOption
                        icon={UserRound}
                        title="Update username"
                        description="Change the name displayed across Pathwise."
                        accent="primary"
                    />

                    <UserAccountManagementOption
                        icon={AtSign}
                        title="Update email address"
                        description="Change the email address associated with your account."
                        accent="secondary"
                    />
                </div>
            </div>

            {/* Security */}

            <div
                className="
                border-t
                border-border-subtle
            "
            >
                <div
                    className="
                    border-b
                    border-border-subtle
                    px-5
                    py-4

                    sm:px-6
                "
                >
                    <h3
                        className="
                        font-accent
                        text-sm
                        font-semibold
                        text-text-primary
                    "
                    >
                        Security
                    </h3>

                    <p
                        className="
                        mt-1
                        font-body
                        text-xs
                        leading-5
                        text-text-muted
                    "
                    >
                        Keep your account credentials secure.
                    </p>
                </div>

                <UserAccountManagementOption
                    icon={KeyRound}
                    title="Change password"
                    description="Update your password to keep your account secure."
                    accent="unique"
                />
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
                    py-4

                    sm:px-6
                "
                >
                    <div
                        className="
                        flex
                        items-center
                        gap-2
                    "
                    >
                        <Trash2 size={15} className="text-status-danger" />

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
                        font-body
                        text-xs
                        leading-5
                        text-text-secondary
                    "
                    >
                        These actions can affect your account permanently.
                    </p>
                </div>

                <div
                    className="
                    border-t
                    border-status-danger/10
                    px-5
                    py-4

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
                        <div>
                            <h4
                                className="
                                font-accent
                                text-sm
                                font-semibold
                                text-text-primary
                            "
                            >
                                Permanently delete account
                            </h4>

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
                                associated account data. This action cannot be
                                undone.
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
                            <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const UserAccountManagementOption = ({
    icon: Icon,
    title,
    description,
    accent,
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
            className={`
                group
                flex
                w-full
                items-center
                gap-4
                border-b
                border-border-subtle
                px-5
                py-4
                text-left
                transition-colors
                duration-200

                last:border-b-0

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
                    transition-transform
                    duration-200

                    group-hover:translate-x-1
                    group-hover:text-text-primary
                "
            />
        </button>
    )
}

export default UserAccountManagement
