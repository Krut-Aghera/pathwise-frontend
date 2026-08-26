import {
    ArrowRight,
    GraduationCap,
    Rocket,
} from "lucide-react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { USER_ROLE } from "../../../constants/userConstants"


const InstructorAccessCard = () => {

    const { user } = useSelector(state => state.auth)

    const hasInstructorAccess =
        user?.role === USER_ROLE.INSTRUCTOR ||
        user?.role === USER_ROLE.ADMIN

    return (
        <section className="
            rounded-xl
            border
            border-accent-secondary/20
            bg-accent-secondary/5
            p-5
        ">

            <div className="
                flex
                flex-col
                gap-5

                sm:flex-row
                sm:items-center
                sm:justify-between
            ">

                {/* Content */}

                <div className="
                    flex
                    items-start
                    gap-4
                ">

                    {/* Icon */}

                    <div className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-accent-secondary/20
                        bg-accent-secondary/10
                        text-accent-secondary
                    ">
                        {hasInstructorAccess ? (
                            <Rocket size={19} />
                        ) : (
                            <GraduationCap size={19} />
                        )}
                    </div>


                    {/* Text */}

                    <div>

                        <h2 className="
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                        ">
                            {hasInstructorAccess
                                ? "Your instructor workspace"
                                : "Become an instructor"
                            }
                        </h2>


                        <p className="
                            mt-1
                            max-w-xl
                            font-body
                            text-xs
                            leading-5
                            text-text-secondary
                        ">
                            {hasInstructorAccess
                                ? "Your instructor access is ready. Continue to your workspace to create and manage your courses."
                                : "Turn your knowledge into courses and share what you know with other learners on Pathwise."
                            }
                        </p>

                    </div>

                </div>


                {/* Action */}

                <Link
                    to={
                        hasInstructorAccess
                            ? "/instructor/dashboard"
                            : "/instructor/access"
                    }
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-md
                        border
                        border-accent-secondary/20
                        bg-accent-secondary/10
                        px-4
                        py-2
                        font-body
                        text-sm
                        font-medium
                        transition    
                        text-accent-secondary
                        hover:border-accent-secondary/40
                        hover:bg-accent-secondary/15
                        hover:shadow-sm
                    "
                >
                    {hasInstructorAccess
                        ? "Go to instructor dashboard"
                        : "Become an instructor"
                    }

                    <ArrowRight size={15} />

                </Link>

            </div>

        </section>
    )
}


export default InstructorAccessCard