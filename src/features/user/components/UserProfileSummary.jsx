import {
    CalendarDays,
    Mail,
    UserRound,
} from "lucide-react"

import { useSelector } from "react-redux"


const UserProfileSummary = () => {

    const user = useSelector(
        state => state.auth.user
    )


    return (
        <section className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            p-5
        ">

            <div className="
                grid
                grid-cols-1
                gap-5

                sm:grid-cols-3
            ">

                <div className="
                    flex
                    items-center
                    gap-3
                ">

                    <UserRound
                        size={17}
                        className="text-accent-primary"
                    />

                    <div>
                        <p className="
                            font-body
                            text-xs
                            text-text-muted
                        ">
                            Username
                        </p>

                        <p className="
                            mt-0.5
                            font-body
                            text-sm
                            text-text-primary
                        ">
                            {user?.username}
                        </p>
                    </div>

                </div>


                <div className="
                    flex
                    items-center
                    gap-3
                ">

                    <Mail
                        size={17}
                        className="text-accent-secondary"
                    />

                    <div>
                        <p className="
                            font-body
                            text-xs
                            text-text-muted
                        ">
                            Email
                        </p>

                        <p className="
                            mt-0.5
                            truncate
                            font-body
                            text-sm
                            text-text-primary
                        ">
                            {user?.email}
                        </p>
                    </div>

                </div>


                <div className="
                    flex
                    items-center
                    gap-3
                ">

                    <CalendarDays
                        size={17}
                        className="text-accent-unique"
                    />

                    <div>
                        <p className="
                            font-body
                            text-xs
                            text-text-muted
                        ">
                            Joined
                        </p>

                        <p className="
                            mt-0.5
                            font-body
                            text-sm
                            text-text-primary
                        ">
                            August 12, 2026
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}


export default UserProfileSummary