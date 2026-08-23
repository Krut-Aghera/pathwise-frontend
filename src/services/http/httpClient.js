import axiosClient from "./axiosClient.js"

const httpClient = {

    get(url, config) {
        return axiosClient.get(url, config)
    },

    post(url, data, config) {
        return axiosClient.post(url, data, config)
    },

    patch(url, data, config) {
        return axiosClient.patch(url, data, config)
    },

    put(url, data, config) {
        return axiosClient.put(url, data, config)
    },

    delete(url, config) {
        return axiosClient.delete(url, config)
    },
}

export default httpClient