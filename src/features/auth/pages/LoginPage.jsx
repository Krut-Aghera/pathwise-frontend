import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import * as authService from "../services/auth.service.js"
import { clearAuthSession, setAuthSession } from "../state/authSlice.js"


const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const handleLogin = async (e) => {

        e.preventDefault()

        if (!email || !password) {
            return
        }

        try {
            const response = await authService.login({
                email,
                password,
            })
            dispatch(setAuthSession(response.data))

        } catch (error) {

            dispatch(clearAuthSession())

        }
    }

    return (
        <div>

            <div>LoginPage</div>

            <form
                className="flex flex-col justify-center gap-2"
                onSubmit={handleLogin}
            >

                <input
                    type="email"
                    placeholder="email"
                    className="w-50 border rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="password"
                    className="w-50 border rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-50"
                >
                    Submit
                </button>

            </form>

            <div>
                <h1>User Details</h1>

                <p>
                    User: {user?.username}
                </p>

                <p>
                    Email: {user?.email}
                </p>
            </div>

        </div>
    )
}

export default LoginPage