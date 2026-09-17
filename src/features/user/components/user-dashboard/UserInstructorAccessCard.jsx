import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"

import useSession from "../../../auth/hooks/useSession"
import { USER_ROLE } from "../../userConstants"

const UserInstructorAccessCard = ({ fullWidth = false }) => {
    const { user } = useSession()

    const hasInstructorAccess =
        user?.role === USER_ROLE.INSTRUCTOR || user?.role === USER_ROLE.ADMIN

    return (
        <div
            className={`
                rounded-xl
                border
                border-border-subtle
                bg-background-elevated
                p-3.5
                ${fullWidth ? "sm:p-4" : ""}
            `}
        >
            <div
                className={`
                    flex
                    min-w-0
                    gap-3

                    ${fullWidth ? "flex-col" : "items-center"}
                `}
            >
                {/* Top content */}
                <div className="flex min-w-0 items-center gap-3">
                    {/* Icon */}
                    <div
                        className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            sm:h-10
                            sm:w-10

                            ${
                                hasInstructorAccess
                                    ? "bg-accent-secondary/10 text-accent-secondary"
                                    : "bg-accent-unique/10 text-accent-unique"
                            }
                        `}
                    >
                        <GraduationCap size={18} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <p
                                className="
                                    font-body
                                    text-sm
                                    font-medium
                                    leading-5
                                    text-text-primary
                                "
                            >
                                {hasInstructorAccess
                                    ? "Instructor workspace"
                                    : "Become an instructor"}
                            </p>

                            <span
                                className={`
                                    rounded-full
                                    px-2
                                    py-0.5
                                    font-body
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-wider

                                    ${
                                        hasInstructorAccess
                                            ? "bg-accent-secondary/10 text-accent-secondary"
                                            : "bg-accent-unique/10 text-accent-unique"
                                    }
                                `}
                            >
                                {hasInstructorAccess ? "Active" : "Available"}
                            </span>
                        </div>

                        <p
                            className="
                                mt-0.5
                                font-body
                                text-[11px]
                                leading-4
                                text-text-secondary
                            "
                        >
                            {hasInstructorAccess
                                ? "Manage your courses, lectures, and instructor workspace."
                                : "Apply for access to create and manage courses."}
                        </p>
                    </div>

                    {/* Compact action when not full width */}
                    {!fullWidth && (
                        <>
                            {hasInstructorAccess ? (
                                <Link
                                    to="/instructor/dashboard"
                                    className="
                                        inline-flex
                                        h-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-lg
                                        border
                                        border-accent-secondary/30
                                        bg-accent-secondary/10
                                        px-3
                                        font-body
                                        text-xs
                                        font-medium
                                        text-accent-secondary
                                        transition-all
                                        duration-200
                                        hover:border-accent-secondary/50
                                        hover:bg-accent-secondary/15
                                        active:scale-[0.98]
                                    "
                                >
                                    <span>Instructor dashboard</span>

                                    <ExternalLink size={14} strokeWidth={1.8} />
                                </Link>
                            ) : (
                                <Link
                                    to="/user/instructor-access"
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-accent-unique/40
                                        bg-accent-unique/10
                                        text-text-secondary
                                        transition-all
                                        duration-200
                                        hover:border-accent-unique/50
                                        hover:bg-accent-unique/15
                                        hover:text-accent-unique
                                        active:scale-[0.98]
                                        active:border-accent-unique/20
                                        active:bg-accent-unique/5
                                    "
                                    aria-label="Become an instructor"
                                >
                                    <ArrowRight size={15} strokeWidth={1.8} />
                                </Link>
                            )}
                        </>
                    )}
                </div>

                {/* Full-width action at bottom */}
                {fullWidth && (
                    <div className="flex justify-end pt-3">
                        {hasInstructorAccess ? (
                            <Link
                                to="/instructor/dashboard"
                                className="
                    inline-flex
                    h-9
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-accent-secondary/30
                    bg-accent-secondary/10
                    px-3.5
                    font-body
                    text-xs
                    font-medium
                    text-accent-secondary
                    transition-all
                    duration-200
                    hover:border-accent-secondary/50
                    hover:bg-accent-secondary/15
                    active:scale-[0.98]
                "
                            >
                                <span>Instructor dashboard</span>

                                <ExternalLink size={14} strokeWidth={1.8} />
                            </Link>
                        ) : (
                            <Link
                                to="/user/instructor-access"
                                className="
                    inline-flex
                    h-8
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-accent-unique/40
                    bg-accent-unique/10
                    px-3
                    font-body
                    text-[11px]
                    font-medium
                    text-accent-unique
                    transition-all
                    duration-200
                    hover:border-accent-unique/50
                    hover:bg-accent-unique/15
                    active:scale-[0.98]
                "
                            >
                                <span>Become an instructor</span>

                                <ArrowRight size={14} strokeWidth={1.8} />
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserInstructorAccessCard
