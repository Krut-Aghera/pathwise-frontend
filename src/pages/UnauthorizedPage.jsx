import { Link } from "react-router-dom"
import {
    ArrowLeft,
    ArrowRight,
    CircleAlert,
    Home,
    ShieldAlert,
} from "lucide-react"

const UnauthorizedPage = () => {
    return (
        <main
            className="
            flex
            min-h-[calc(100vh-5rem)]
            items-center
            justify-center
            bg-background-base
            px-4
            py-12
            sm:px-6
        "
        >
            <div
                className="
                w-full
                max-w-xl
                text-center
            "
            >
                {/* Icon */}

                <div
                    className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-status-warning/20
                    bg-status-warning/5
                    text-status-warning
                    shadow-lg
                    shadow-status-warning/5
                "
                >
                    <ShieldAlert size={30} strokeWidth={1.8} />
                </div>

                {/* Error code */}

                <p
                    className="
                    mt-8
                    font-compact
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-status-warning
                "
                >
                    Error 403
                </p>

                {/* Heading */}

                <h1
                    className="
                    mt-3
                    font-accent
                    text-3xl
                    font-bold
                    tracking-tight
                    text-text-primary
                    sm:text-4xl
                "
                >
                    Access restricted
                </h1>

                {/* Description */}

                <p
                    className="
                    mx-auto
                    mt-4
                    max-w-md
                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                    sm:text-base
                "
                >
                    You don't have permission to access this page. If you
                    believe this is a mistake, make sure you're signed in with
                    the correct account.
                </p>

                {/* Notice */}

                <div
                    className="
                    mx-auto
                    mt-6
                    flex
                    max-w-md
                    items-start
                    gap-3
                    rounded-lg
                    border
                    border-border-subtle
                    bg-background-surface
                    px-4
                    py-3
                    text-left
                "
                >
                    <CircleAlert
                        size={17}
                        className="
                            mt-0.5
                            shrink-0
                            text-text-muted
                        "
                    />

                    <p
                        className="
                        font-body
                        text-xs
                        leading-5
                        text-text-muted
                    "
                    >
                        Pathwise protects restricted resources using role-based
                        authorization and authenticated access.
                    </p>
                </div>

                {/* Actions */}

                <div
                    className="
                    mt-8
                    flex
                    flex-col
                    items-stretch
                    justify-center
                    gap-3
                    sm:flex-row
                    sm:items-center
                "
                >
                    <Link
                        to="/"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            bg-accent-primary
                            px-5
                            py-2.5
                            font-body
                            text-sm
                            font-medium
                            text-text-primary
                            transition
                            hover:opacity-90
                            active:brightness-90
                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/30
                        "
                    >
                        <Home size={16} />
                        Go home
                    </Link>

                    <Link
                        to="/courses"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-md
                            border
                            border-border-subtle
                            bg-background-surface
                            px-5
                            py-2.5
                            font-body
                            text-sm
                            font-medium
                            text-text-secondary
                            transition
                            hover:bg-background-elevated
                            hover:text-text-primary
                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/30
                        "
                    >
                        Browse courses
                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Back */}

                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="
                        mx-auto
                        mt-6
                        inline-flex
                        cursor-pointer
                        items-center
                        gap-1.5
                        rounded-md
                        px-2
                        py-1
                        font-body
                        text-xs
                        text-text-muted
                        transition
                        hover:text-text-secondary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent-primary/30
                    "
                >
                    <ArrowLeft size={14} />
                    Go back
                </button>
            </div>
        </main>
    )
}

export default UnauthorizedPage
