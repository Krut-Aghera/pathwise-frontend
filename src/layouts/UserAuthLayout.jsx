import { Outlet } from "react-router-dom"

import UserAuthHeader from "../components/layout/UserAuthHeader"

const UserAuthLayout = () => {
    return (
        <div
            className="
                flex
                h-screen
                flex-col
                overflow-hidden
                bg-background-base
            "
        >
            <UserAuthHeader />

            <main
                className="
                    flex
                    min-h-0
                    flex-1
                    items-center
                    justify-center
                    overflow-y-auto

                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                "
            >
                <Outlet />
            </main>
        </div>
    )
}

export default UserAuthLayout
