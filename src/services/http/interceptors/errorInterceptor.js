import normalizeHttpError from "../errors/normalizeHttpError.js"

const errorInterceptor = (error) => {
    return Promise.reject(
        normalizeHttpError(error)
    )
}

export default errorInterceptor