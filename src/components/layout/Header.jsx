import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { BookOpen, Heart, UserRound, ShieldCheck } from "lucide-react"
import useSession from "../../features/auth/hooks/useSession"

import pathwise_main_logo from "../../assets/pathwise_main_logo.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { user, isAuthenticated } = useSession()

    const isAdmin = user?.role === "admin"

    const closeMobileMenu = () => {
        setIsMenuOpen(false)
    }

    const navLinkClass = ({ isActive }) => `
        rounded-md
        px-2
        py-1.5
        font-body
        text-sm
        transition

        ${
            isActive
                ? `
                    font-medium
                    text-text-primary
                `
                : `
                    text-text-secondary
                    hover:text-text-primary
                `
        }
    `

    const mobileNavLinkClass = ({ isActive }) => `
        rounded-md
        px-3
        py-2.5
        font-body
        text-sm
        transition

        ${
            isActive
                ? `
                    bg-background-elevated
                    font-medium
                    text-text-primary
                `
                : `
                    text-text-secondary
                    hover:bg-background-elevated
                    hover:text-text-primary
                `
        }
    `

    return (
        <header
            className="
            sticky
            top-0
            z-50
            border-b
            border-border-subtle
            bg-background-base/70
            py-2
            backdrop-blur-md
        "
        >
            <div
                className="
                mx-auto
                flex
                h-16
                w-full
                max-w-7xl
                items-center
                justify-between
                px-4
                sm:px-6
                lg:px-8
            "
            >
                {/* Brand */}

                <Link
                    to="/"
                    aria-label="Pathwise home"
                    onClick={closeMobileMenu}
                    className="
                        flex
                        shrink-0
                        items-center
                        rounded-md
                    "
                >
                    <img
                        src={pathwise_main_logo}
                        alt="Pathwise"
                        className="w-32 sm:w-36"
                    />
                </Link>

                {/* Desktop navigation */}

                <nav
                    className="
                    hidden
                    items-center
                    gap-5
                    md:flex
                "
                >
                    <NavLink to="/" end className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/courses" className={navLinkClass}>
                        Courses
                    </NavLink>

                    <NavLink to="/about" className={navLinkClass}>
                        About Pathwise
                    </NavLink>
                </nav>

                {/* Desktop actions */}

                <div
                    className="
                    hidden
                    items-center
                    gap-2
                    md:flex
                "
                >
                    {!isAuthenticated ? (
                        <>
                            <Link
                                to="/auth/login"
                                className="
                                    rounded-md
                                    px-4
                                    py-2
                                    font-body
                                    text-sm
                                    font-medium
                                    text-text-secondary
                                    transition
                                    hover:text-text-primary
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-accent-primary/30
                                "
                            >
                                Log in
                            </Link>

                            <Link
                                to="/auth/signup"
                                className="
                                    rounded-md
                                    bg-accent-primary
                                    px-4
                                    py-2
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
                                Get Started
                            </Link>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/my-learning"
                                className={({ isActive }) => `
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-md
                                    px-3
                                    py-2
                                    font-body
                                    text-sm
                                    font-medium
                                    transition

                                    ${
                                        isActive
                                            ? `
                                                bg-background-surface
                                                text-text-primary
                                            `
                                            : `
                                                text-text-secondary
                                                hover:bg-background-surface
                                                hover:text-text-primary
                                            `
                                    }
                                `}
                            >
                                <BookOpen
                                    size={17}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />
                                My Learning
                            </NavLink>

                            {/* Admin panel */}

                            {isAdmin && (
                                <NavLink
                                    to="/admin/dashboard"
                                    className={({ isActive }) => `
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-md
                                        px-3
                                        py-2
                                        font-body
                                        text-sm
                                        font-medium
                                        transition

                                        ${
                                            isActive
                                                ? `
                                                    bg-accent-primary/10
                                                    text-accent-primary
                                                `
                                                : `
                                                    text-text-secondary
                                                    hover:bg-background-surface
                                                    hover:text-accent-primary
                                                `
                                        }
                                    `}
                                >
                                    <ShieldCheck
                                        size={17}
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                    />
                                    Admin Panel
                                </NavLink>
                            )}

                            <NavLink
                                to="/wishlist"
                                aria-label="Wishlist"
                                title="Wishlist"
                                className={({ isActive }) => `
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-md
                                    p-2
                                    transition

                                    ${
                                        isActive
                                            ? `
                                                bg-background-surface
                                                text-text-primary
                                            `
                                            : `
                                                text-text-secondary
                                                hover:bg-background-surface
                                                hover:text-text-primary
                                            `
                                    }
                                `}
                            >
                                <Heart
                                    size={18}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />
                            </NavLink>

                            <NavLink
                                to="/dashboard"
                                aria-label="User Dashboard"
                                title="User Dashboard"
                                className={({ isActive }) => `
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-md
                                    p-2
                                    transition

                                    ${
                                        isActive
                                            ? `
                                                bg-background-surface
                                                text-text-primary
                                            `
                                            : `
                                                text-text-secondary
                                                hover:bg-background-surface
                                                hover:text-text-primary
                                            `
                                    }
                                `}
                            >
                                <UserRound
                                    size={18}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />
                            </NavLink>
                        </>
                    )}
                </div>

                {/* Mobile menu button */}

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((current) => !current)}
                    aria-label={
                        isMenuOpen ? "Close navigation" : "Open navigation"
                    }
                    aria-expanded={isMenuOpen}
                    className="
                        rounded-md
                        border
                        border-border-subtle
                        bg-background-surface
                        p-2
                        text-text-secondary
                        transition
                        hover:text-text-primary
                        active:brightness-90
                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent-primary/30
                        md:hidden
                        cursor-pointer
                    "
                >
                    <span className="block h-0.5 w-5 bg-current" />
                    <span className="mt-1 block h-0.5 w-5 bg-current" />
                    <span className="mt-1 block h-0.5 w-5 bg-current" />
                </button>
            </div>

            {/* Mobile navigation */}

            {isMenuOpen && (
                <div
                    className="
                    border-t
                    border-border-subtle
                    bg-background-surface
                    px-4
                    py-5
                    md:hidden
                "
                >
                    <nav
                        className="
                        flex
                        flex-col
                        gap-1
                    "
                    >
                        <NavLink
                            to="/"
                            end
                            onClick={closeMobileMenu}
                            className={mobileNavLinkClass}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/courses"
                            onClick={closeMobileMenu}
                            className={mobileNavLinkClass}
                        >
                            Courses
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={closeMobileMenu}
                            className={mobileNavLinkClass}
                        >
                            About Pathwise
                        </NavLink>

                        {/* Authenticated mobile actions */}

                        {isAuthenticated ? (
                            <div
                                className="
                                mt-3
                                grid
                                grid-cols-3
                                gap-2
                                border-t
                                border-border-subtle
                                pt-4
                            "
                            >
                                <NavLink
                                    to="/my-learning"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) => `
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        gap-1.5
                                        rounded-md
                                        border
                                        px-2
                                        py-3
                                        transition

                                        ${
                                            isActive
                                                ? `
                                                    border-accent-primary/30
                                                    bg-background-base
                                                    text-text-primary
                                                `
                                                : `
                                                    border-border-subtle
                                                    bg-background-base
                                                    text-text-secondary
                                                    hover:text-text-primary
                                                `
                                        }
                                    `}
                                >
                                    <BookOpen size={18} strokeWidth={1.8} />

                                    <span className="text-xs font-medium">
                                        Learning
                                    </span>
                                </NavLink>

                                {isAdmin && (
                                    <NavLink
                                        to="/admin/dashboard"
                                        onClick={closeMobileMenu}
                                        className={({ isActive }) => `
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                            gap-1.5
                                            rounded-md
                                            border
                                            px-2
                                            py-3
                                            transition

                                            ${
                                                isActive
                                                    ? `
                                                        border-accent-primary/30
                                                        bg-accent-primary/10
                                                        text-accent-primary
                                                    `
                                                    : `
                                                        border-border-subtle
                                                        bg-background-base
                                                        text-text-secondary
                                                        hover:text-accent-primary
                                                    `
                                            }
                                        `}
                                    >
                                        <ShieldCheck
                                            size={18}
                                            strokeWidth={1.8}
                                        />

                                        <span className="text-xs font-medium">
                                            Admin
                                        </span>
                                    </NavLink>
                                )}

                                <NavLink
                                    to="/wishlist"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) => `
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        gap-1.5
                                        rounded-md
                                        border
                                        px-2
                                        py-3
                                        transition

                                        ${
                                            isActive
                                                ? `
                                                    border-accent-primary/30
                                                    bg-background-base
                                                    text-text-primary
                                                `
                                                : `
                                                    border-border-subtle
                                                    bg-background-base
                                                    text-text-secondary
                                                    hover:text-text-primary
                                                `
                                        }
                                    `}
                                >
                                    <Heart size={18} strokeWidth={1.8} />

                                    <span className="text-xs font-medium">
                                        Wishlist
                                    </span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) => `
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        gap-1.5
                                        rounded-md
                                        border
                                        px-2
                                        py-3
                                        transition

                                        ${
                                            isActive
                                                ? `
                                                    border-accent-primary/30
                                                    bg-background-base
                                                    text-text-primary
                                                `
                                                : `
                                                    border-border-subtle
                                                    bg-background-base
                                                    text-text-secondary
                                                    hover:text-text-primary
                                                `
                                        }
                                    `}
                                >
                                    <UserRound size={18} strokeWidth={1.8} />

                                    <span className="text-xs font-medium">
                                        Account
                                    </span>
                                </NavLink>
                            </div>
                        ) : (
                            /* Guest mobile actions */

                            <div
                                className="
                                mt-3
                                flex
                                gap-3
                                border-t
                                border-border-subtle
                                pt-4
                            "
                            >
                                <Link
                                    to="/auth/login"
                                    onClick={closeMobileMenu}
                                    className="
                                        flex-1
                                        rounded-md
                                        border
                                        border-border-subtle
                                        px-4
                                        py-2.5
                                        text-center
                                        font-body
                                        text-sm
                                        text-text-secondary
                                        transition
                                        hover:text-text-primary
                                    "
                                >
                                    Log in
                                </Link>

                                <Link
                                    to="/auth/signup"
                                    onClick={closeMobileMenu}
                                    className="
                                        flex-1
                                        rounded-md
                                        bg-accent-primary
                                        px-4
                                        py-2.5
                                        text-center
                                        font-body
                                        text-sm
                                        font-medium
                                        text-text-primary
                                        transition
                                        hover:opacity-90
                                        active:brightness-90
                                    "
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header