import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../../features/auth/state/authSlice"
import courseApi from "../../features/course/courseApi"

const store = configureStore({
    reducer: {
        auth: authReducer,

        [courseApi.reducerPath]: courseApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            courseApi.middleware
        ),
})

export default store