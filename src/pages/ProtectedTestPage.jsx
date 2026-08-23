import { useDispatch, useSelector } from "react-redux"
import { setAuthSession } from "../features/auth/state/authSlice"
import { Navigate } from "react-router-dom"


const ProtectedTestPage = () => {

    const dispatch = useDispatch()
    const { isAuthenticated, user } = useSelector(state => state.auth)

    const handleLogin = () => {
        dispatch(setAuthSession({
            _id: "123",
            username: "test_student",
            email: "student@test.com",
            role: "student",
            isEmailVerified: true,
            isActive: true,
        }))
    }

    return (
        <div>
            <div>ProtectedTestPage</div>

            <p>
                Authenticated: {isAuthenticated ? "User Loged In" : "User is Logged out"}
            </p>

            <h3>
                User : {user?.username ?? "No User"}
            </h3>

            <button onClick={handleLogin}>
                Set Auth Session
            </button>
        </div>
    )
}

export default ProtectedTestPage