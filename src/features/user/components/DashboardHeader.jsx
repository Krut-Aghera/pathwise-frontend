import { useSelector } from "react-redux"


const DashboardHeader = () => {

    const user = useSelector(
        state => state.auth.user
    )


    return (
        <div className="
            space-y-2
        ">

            <p className="
                font-body
                text-sm
                text-text-muted
            ">
                Your learning space
            </p>

            <h1 className="
                font-accent
                text-2xl
                font-bold
                tracking-tight
                text-text-primary

                sm:text-3xl
            ">
                Welcome back, {user?.username}
            </h1>

            <p className="
                max-w-2xl
                font-body
                text-sm
                leading-6
                text-text-secondary
            ">
                Continue learning, manage your account,
                and keep track of your Pathwise journey.
            </p>

        </div>
    )
}


export default DashboardHeader