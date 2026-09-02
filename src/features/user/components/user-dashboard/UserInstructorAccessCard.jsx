import { ArrowRight, GraduationCap, Rocket } from "lucide-react"

import { Link } from "react-router-dom"

import { USER_ROLE } from "../../userConstants"
import useSession from "../../../auth/hooks/useSession"

const UserInstructorAccessCard = () => {
    const { user } = useSession()

    const hasInstructorAccess =
        user?.role === USER_ROLE.INSTRUCTOR || user?.role === USER_ROLE.ADMIN

    return (
        <section
            className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-accent-secondary/20
            bg-background-surface
            p-5
        "
        >
            <div
                className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-28
                w-28
                rounded-full
                bg-accent-secondary/8
                blur-3xl
            "
            />

            <div
                className="
                relative
                flex
                flex-col
                gap-5
            "
            >
                <div
                    className="
                    flex
                    items-start
                    gap-4
                "
                >
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
                        border-accent-secondary/20
                        bg-accent-secondary/10
                        text-accent-secondary
                    "
                    >
                        {hasInstructorAccess ? (
                            <Rocket size={20} strokeWidth={1.9} />
                        ) : (
                            <GraduationCap size={20} strokeWidth={1.9} />
                        )}
                    </div>

                    <div className="min-w-0">
                        <div
                            className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
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
                                {hasInstructorAccess
                                    ? "Instructor workspace"
                                    : "Become an instructor"}
                            </h3>

                            {hasInstructorAccess && (
                                <span
                                    className="
                                    rounded-full
                                    bg-accent-secondary/10
                                    px-2
                                    py-0.5
                                    font-body
                                    text-[10px]
                                    font-medium
                                    text-accent-secondary
                                "
                                >
                                    Active
                                </span>
                            )}
                        </div>

                        <p
                            className="
                            mt-1.5
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                        "
                        >
                            {hasInstructorAccess
                                ? "Create courses, manage your content, and continue building your instructor workspace."
                                : "Share your knowledge with learners by creating and publishing courses on Pathwise."}
                        </p>
                    </div>
                </div>

                <Link
                    to={
                        hasInstructorAccess
                            ? "/instructor/dashboard"
                            : "/instructor/access"
                    }
                    className="
                        group
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        border-accent-secondary/20
                        bg-accent-secondary/10
                        px-4
                        py-2.5
                        font-body
                        text-xs
                        font-semibold
                        text-accent-secondary
                        transition-all
                        duration-200

                        hover:border-accent-secondary/40
                        hover:bg-accent-secondary/15

                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent-secondary/20

                        sm:w-auto
                        sm:self-end
                    "
                >
                    {hasInstructorAccess
                        ? "Open instructor dashboard"
                        : "Become an instructor"}

                    <ArrowRight
                        size={15}
                        className="
                            transition-transform
                            duration-200

                            group-hover:translate-x-0.5
                        "
                    />
                </Link>
            </div>
        </section>
    )
}

export default UserInstructorAccessCard
