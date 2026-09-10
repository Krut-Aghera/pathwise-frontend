import { configureStore } from "@reduxjs/toolkit"

import authApi from "../../features/auth/authApi"
import userApi from "../../features/user/userApi"
import courseApi from "../../features/course/courseApi"
import sectionApi from "../../features/section/sectionApi"
import lectureApi from "../../features/lecture/lectureApi"

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [courseApi.reducerPath]: courseApi.reducer,
        [sectionApi.reducerPath]: sectionApi.reducer,
        [lectureApi.reducerPath]: lectureApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            courseApi.middleware,
            sectionApi.middleware,
            lectureApi.middleware
        ),
})

export default store
