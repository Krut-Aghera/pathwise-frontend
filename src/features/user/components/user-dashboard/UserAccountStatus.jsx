import useSession from "../../../auth/hooks/useSession"
import { USER_ROLE } from "../../userConstants"
import UserInstructorAccessCard from "./UserInstructorAccessCard"

const UserAccountStatus = () => {
    const { user } = useSession()
    const isUserInstructor =
        user?.role === USER_ROLE.INSTRUCTOR || USER_ROLE.ADMIN

    return (
        <section
            className="
                min-w-0
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            <div className="px-5 py-4 sm:px-6">
                <div>
                    <p
                        className={`
                            font-body
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            ${
                                isUserInstructor
                                    ? "text-accent-secondary"
                                    : "text-accent-unique"
                            }
                            
                        `}
                    >
                        Account status
                    </p>

                    <h2
                        className="
                            mt-1
                            font-accent
                            text-base
                            font-semibold
                            tracking-tight
                            text-text-primary

                            sm:text-lg
                        "
                    >
                        Instructor access
                    </h2>
                </div>

                <div className="mt-4">
                    <UserInstructorAccessCard fullWidth />
                </div>
            </div>
        </section>
    )
}

export default UserAccountStatus
