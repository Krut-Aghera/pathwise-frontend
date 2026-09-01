import axiosClient from "./axiosClient"


const axiosBaseQuery = ({ baseUrl } = {}) => {

    return async ({
        url,
        method,
        data,
        params,
    }) => {

        try {

            const result =
                await axiosClient({

                    url: `${baseUrl}${url}`,

                    method,
                    data,
                    params,

                })


            return {
                data: result.data,
            }

        } catch (error) {

            return {
                error: {
                    status: error.statusCode,
                    message: error.message,
                    errors: error.errors,
                },
            }
        }
    }
}


export default axiosBaseQuery