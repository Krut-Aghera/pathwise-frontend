import { ArrowRight, GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"

import useSession from "../../../auth/hooks/useSession"
import { USER_ROLE } from "../../userConstants"

const UserInstructorAccessCard = () => {
    const { user } = useSession()

    const hasInstructorAccess =
        user?.role === USER_ROLE.INSTRUCTOR || user?.role === USER_ROLE.ADMIN

    return (
        <div
            className="
                rounded-xl
                border
                border-border-subtle
                bg-background-elevated
                p-3.5
            "
        >
            <div className="flex items-center gap-3">
                <div
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-accent-unique/10
                        text-accent-unique
                    "
                >
                    <GraduationCap size={18} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <p
                            className="
                                font-body
                                text-sm
                                font-medium
                                text-text-primary
                            "
                        >
                            {hasInstructorAccess
                                ? "Instructor workspace"
                                : "Become an instructor"}
                        </p>

                        <span
                            className="
                                rounded-full
                                bg-accent-unique/10
                                px-2
                                py-0.5
                                font-body
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-accent-unique
                            "
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
                            ? "Manage your instructor workspace."
                            : "Apply for access to create and manage courses."}
                    </p>
                </div>

                <Link
                    to={
                        hasInstructorAccess
                            ? "/instructor/dashboard"
                            : "/user/instructor-access"
                    }
                    className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-border-subtle
                        bg-background-surface
                        text-text-secondary
                        transition-all
                        duration-200
                        hover:border-accent-primary/40
                        hover:text-accent-primary
                    "
                    aria-label={
                        hasInstructorAccess
                            ? "Open instructor workspace"
                            : "Become an instructor"
                    }
                >
                    <ArrowRight size={15} />
                </Link>
            </div>
        </div>
    )
}

export default UserInstructorAccessCard
