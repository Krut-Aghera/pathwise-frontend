import axiosClient from "../../app/network/axiosClient"

const rotateTokens = async () => {
    const response = await axiosClient.post("/auth/tokens/rotate")
    return response.data
}

export { rotateTokens }
