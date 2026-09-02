import axiosClient from "../axiosClient"
import authInterceptor from "./authInterceptor"
import errorInterceptor from "./errorInterceptor"

const setupInterceptors = () => {
    axiosClient.interceptors.response.use(
        (response) => response,
        (error) => authInterceptor(error, axiosClient)
    )

    axiosClient.interceptors.response.use(
        (response) => response,
        errorInterceptor
    )
}

export default setupInterceptors
