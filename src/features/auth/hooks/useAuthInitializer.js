import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { getCurrentUser } from "../../user/services/user.service.js"
import {
    setAuthSession,
    clearAuthSession,
    setAuthInitializationComplete
} from "../state/authSlice.js"


const useAuthInitializer = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        const initializeAuth = async () => {

            try {
                const response = await getCurrentUser()
                dispatch(setAuthSession(response.data))

            } catch {
                dispatch(clearAuthSession())

            } finally {
                dispatch(setAuthInitializationComplete())

            }
        }

        initializeAuth()

    }, [dispatch])

}

export default useAuthInitializer