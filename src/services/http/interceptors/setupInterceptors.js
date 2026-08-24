import axiosClient from "../axiosClient.js"
import authInterceptor from "./authInterceptor.js"
import errorInterceptor from "./errorInterceptor.js"

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