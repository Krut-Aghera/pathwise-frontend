import { configureStore } from "@reduxjs/toolkit"

import authApi from "../../features/auth/authApi"
import userApi from "../../features/user/userApi"
import courseApi from "../../features/course/courseApi"
import sectionApi from "../../features/section/sectionApi"
import lectureApi from "../../features/lecture/lectureApi"
import enrollmentApi from "../../features/enrollment-workflow/enrollmentApi"
import orderApi from "../../features/enrollment-workflow/orderApi"
import paymentApi from "../../features/enrollment-workflow/paymentApi"
import progressApi from "../../features/learning-workflow/progressApi"

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [courseApi.reducerPath]: courseApi.reducer,
        [sectionApi.reducerPath]: sectionApi.reducer,
        [lectureApi.reducerPath]: lectureApi.reducer,
        [enrollmentApi.reducerPath]: enrollmentApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
        [progressApi.reducerPath]: progressApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            courseApi.middleware,
            sectionApi.middleware,
            lectureApi.middleware,
            enrollmentApi.middleware,
            orderApi.middleware,
            paymentApi.middleware,
            progressApi.middleware
        ),
})

export default store
