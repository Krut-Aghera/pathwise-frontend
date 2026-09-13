import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const orderApi = createApi({
    reducerPath: "orderApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/orders/students",
    }),

    tagTypes: ["Order"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Create order

        // POST /orders/students
        createOrder: builder.mutation({
            query: ({ course }) => ({
                url: "",
                method: "POST",
                data: {
                    course,
                },
            }),

            invalidatesTags: ["Order"],
        }),

        ///////////////////////////////////////////////////////////////
        // Fetch order

        // GET /orders/students/:orderId
        fetchOrder: builder.query({
            query: (orderId) => ({
                url: `/${orderId}`,
                method: "GET",
            }),

            providesTags: (result, error, orderId) => [
                {
                    type: "Order",
                    id: orderId,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Cancel order

        // PATCH /orders/students/:orderId/cancel
        cancelOrder: builder.mutation({
            query: (orderId) => ({
                url: `/${orderId}/cancel`,
                method: "PATCH",
            }),

            invalidatesTags: ["Order"],
        }),
    }),
})

export const {
    useCreateOrderMutation,
    useLazyFetchOrderQuery,
    useCancelOrderMutation,
} = orderApi

export default orderApi
