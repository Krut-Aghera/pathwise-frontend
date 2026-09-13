import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const paymentApi = createApi({
    reducerPath: "paymentApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/payments",
    }),

    tagTypes: ["Payment"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Create payment

        // POST /payments/orders/:orderId
        createPayment: builder.mutation({
            query: (orderId) => ({
                url: `/orders/${orderId}`,
                method: "POST",
            }),

            invalidatesTags: ["Payment"],
        }),

        ///////////////////////////////////////////////////////////////
        // Verify payment

        // POST /payments/orders/:orderId/verify
        verifyPayment: builder.mutation({
            query: ({
                orderId,
                razorpayPaymentId,
                razorpayOrderId,
                razorpaySignature,
            }) => ({
                url: `/orders/${orderId}/verify`,
                method: "POST",
                data: {
                    razorpay_payment_id: razorpayPaymentId,
                    razorpay_order_id: razorpayOrderId,
                    razorpay_signature: razorpaySignature,
                },
            }),

            invalidatesTags: ["Payment"],
        }),
    }),
})

export const { useCreatePaymentMutation, useVerifyPaymentMutation } = paymentApi

export default paymentApi
