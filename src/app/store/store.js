import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../../features/auth/authSlice"

import authApi from "../../features/auth/authApi"
import userApi from "../../features/user/userApi"
import courseApi from "../../features/course/courseApi"
import sectionApi from "../../features/section/sectionApi"

const store = configureStore({
    reducer: {
        auth: authReducer,

        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [courseApi.reducerPath]: courseApi.reducer,
        [sectionApi.reducerPath]: sectionApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            courseApi.middleware,
            sectionApi.middleware,
        ),
})

export default store