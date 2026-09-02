import store from "../../store/store"
import { rotateTokens } from "../../../features/auth/authService"
import { clearAuthSession } from "../../../features/auth/authSlice"
import {
    AUTH_INTERCEPTOR_CONFIG,
    AUTH_ERROR_CODES,
} from "../../../features/auth/authConstants"

let tokenRotationPromise = null

const authInterceptor = async (error, axiosClient) => {
    const originalRequest = error.config

    // no original request
    if (!originalRequest) {
        return Promise.reject(error)
    }

    // never rotate the token-rotation request itself
    if (originalRequest.url === AUTH_INTERCEPTOR_CONFIG.ROTATE_ENDPOINT) {
        return Promise.reject(error)
    }

    // determine whether this 401 requires token rotation
    const statusCode = error.response?.status
    const errorCode = error.response?.data?.code

    const shouldRotate =
        statusCode === 401 &&
        (errorCode === AUTH_ERROR_CODES.ACCESS_TOKEN_EXPIRED ||
            errorCode === AUTH_ERROR_CODES.ACCESS_TOKEN_MISSING)

    // all other errors pass through
    if (!shouldRotate) {
        return Promise.reject(error)
    }

    // retry the original request only once
    if (originalRequest[AUTH_INTERCEPTOR_CONFIG.RETRY_FLAG]) {
        return Promise.reject(error)
    }

    originalRequest[AUTH_INTERCEPTOR_CONFIG.RETRY_FLAG] = true

    // rotate tokens
    // multiple simultaneous 401 requests share one rotation
    try {
        if (!tokenRotationPromise) {
            tokenRotationPromise = rotateTokens().finally(() => {
                tokenRotationPromise = null
            })
        }

        await tokenRotationPromise
    } catch (rotationError) {
        // refresh token is no longer valid
        store.dispatch(clearAuthSession())

        return Promise.reject(rotationError)
    }

    // retry original request with newly issued tokens

    return axiosClient(originalRequest)
}

export default authInterceptor
