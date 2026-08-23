import httpClient from "../../../services/http/httpClient.js"


const getCurrentUser = async () => {
    const response = await httpClient.get("/users/me")
    return response.data
}


export {
    getCurrentUser
}