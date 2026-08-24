import {useSelector } from "react-redux"

const ProtectedTestPage = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth)


    return (
        <div>
            <div>ProtectedTestPage</div>

            <p>
                Authenticated: {isAuthenticated ? "User Loged In" : "User is Logged out"}
            </p>

            <h3>
                User : {user?.username ?? "No User"}
            </h3>

        </div>
    )
}

export default ProtectedTestPage