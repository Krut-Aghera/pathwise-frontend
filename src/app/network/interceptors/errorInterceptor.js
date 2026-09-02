import normalizeHttpError from "../errors/normalizeHttpError"

const errorInterceptor = (error) => {
    return Promise.reject(normalizeHttpError(error))
}

export default errorInterceptor
