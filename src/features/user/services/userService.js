import httpClient from "../../../app/network/httpClient"


const getCurrentUser = async () => {
    const response = await httpClient.get("/users/me")
    return response.data
}


export {
    getCurrentUser
}