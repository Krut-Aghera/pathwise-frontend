class HttpError extends Error {

    constructor({
        statusCode,
        code,
        message = "Something went wrong.",
        errors = [],
        details = null,
    }) {

        super(message)

        this.name = this.constructor.name
        this.statusCode = statusCode
        this.code = code
        this.errors = errors
        this.details = details

        Error.captureStackTrace(
            this,
            this.constructor
        )
    }

}

export default HttpError