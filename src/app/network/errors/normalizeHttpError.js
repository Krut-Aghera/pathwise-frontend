import HttpError from "./httpError";

const normalizeHttpError = (error) => {

    if (error instanceof HttpError) {
        return error
    }

    if (error.response) {
        const errorResponseData = error.response.data

        return new HttpError({
            statusCode:
                errorResponseData?.statusCode ??
                error.response.status,

            code:
                errorResponseData?.code ??
                null,

            message:
                errorResponseData?.message ??
                "Something went wrong.",

            errors:
                errorResponseData?.errors ??
                [],

            details:
                errorResponseData?.details ??
                null,
        })
    }

    if (error.request) {
        return new HttpError({
            message: "Unable to connect to the server.",
        })
    }

    return new HttpError({
        message:
            error.message ||
            "Something went wrong.",
    })
}

export default normalizeHttpError