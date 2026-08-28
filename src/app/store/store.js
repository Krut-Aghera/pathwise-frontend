import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../../features/auth/state/authSlice"
import courseApi from "../../features/course/courseApi"
import sectionApi from "../../features/section/sectionApi"

const store = configureStore({
    reducer: {
        auth: authReducer,

        [courseApi.reducerPath]: courseApi.reducer,
        [sectionApi.reducerPath]: sectionApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            courseApi.middleware,
            sectionApi.middleware,
        ),
})

export default store