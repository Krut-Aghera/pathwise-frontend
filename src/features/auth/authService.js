import httpClient from "../../app/network/httpClient"


const signup = async (userData) => {
    const response = await httpClient.post(
        "/auth/users",
        userData
    )

    return response.data
}

const login = async (credentials) => {
    const response = await httpClient.post(
        "/auth/sessions",
        credentials
    )

    return response.data
}

const logout = async () => {
    const response = await httpClient.post(
        "/auth/sessions/current"
    )

    return response.data
}

const rotateTokens = async () => {
    const response = await httpClient.post(
        "/auth/tokens/rotate"
    )

    return response.data
}

const requestPasswordReset = async (data) => {
    const response = await httpClient.post(
        "/auth/password-reset",
        data
    )

    return response.data
}

const resetPassword = async (token, data) => {
    const response = await httpClient.post(
        `/auth/password-reset/confirm/${token}`,
        data
    )

    return response.data
}

const confirmEmailVerification = async (token) => {
    const response = await httpClient.post(
        `/auth/email-verification/confirm/${token}`
    )

    return response.data
}

const requestEmailVerification = async () => {
    const response = await httpClient.post(
        "/auth/email-verification"
    )

    return response.data
}

const changePassword = async (data) => {
    const response = await httpClient.patch(
        "/auth/password",
        data
    )

    return response.data
}


export {
    signup,
    login,
    logout,
    rotateTokens,
    requestEmailVerification,
    confirmEmailVerification,
    requestPasswordReset,
    resetPassword,
    changePassword
}