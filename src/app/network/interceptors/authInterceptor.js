import store from "../../store/store"

import userApi from "../../../features/user/userApi"
import { rotateTokens } from "../../../features/auth/authService"

import {
    AUTH_INTERCEPTOR_CONFIG,
    AUTH_ERROR_CODES,
} from "../../../features/auth/authConstants"

let tokenRotationPromise = null

const authInterceptor = async (error, axiosClient) => {
    const originalRequest = error.config

    // No original request
    if (!originalRequest) {
        return Promise.reject(error)
    }

    // Never rotate the token-rotation request itself
    if (originalRequest.url === AUTH_INTERCEPTOR_CONFIG.ROTATE_ENDPOINT) {
        return Promise.reject(error)
    }

    // Determine whether this 401 requires token rotation
    const statusCode = error.response?.status
    const errorCode = error.response?.data?.code

    const shouldRotate =
        statusCode === 401 &&
        (errorCode === AUTH_ERROR_CODES.ACCESS_TOKEN_EXPIRED ||
            errorCode === AUTH_ERROR_CODES.ACCESS_TOKEN_MISSING)

    // All other errors pass through
    if (!shouldRotate) {
        return Promise.reject(error)
    }

    // Retry the original request only once
    if (originalRequest[AUTH_INTERCEPTOR_CONFIG.RETRY_FLAG]) {
        return Promise.reject(error)
    }

    originalRequest[AUTH_INTERCEPTOR_CONFIG.RETRY_FLAG] = true

    // Rotate tokens
    // Multiple simultaneous 401 requests share one rotation
    try {
        if (!tokenRotationPromise) {
            tokenRotationPromise = rotateTokens().finally(() => {
                tokenRotationPromise = null
            })
        }

        await tokenRotationPromise
    } catch (rotationError) {
        // Refresh token is no longer valid.
        // Destroy the current client session without
        // resetting the active RTK Query subscription.

        store.dispatch(
            userApi.util.upsertQueryData("getCurrentUser", undefined, {
                data: null,
            })
        )

        return Promise.reject(rotationError)
    }

    // Retry original request with newly issued tokens
    return axiosClient(originalRequest)
}

export default authInterceptor
