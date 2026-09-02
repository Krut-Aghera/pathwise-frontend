import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isAuthenticated: false,
    isAuthInitializing: true,
}

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setAuthSession: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
        },

        clearAuthSession: (state) => {
            state.user = null
            state.isAuthenticated = false
        },

        setAuthInitializationComplete: (state) => {
            state.isAuthInitializing = false
        },
    },
})

export const {
    setAuthSession,
    clearAuthSession,
    setAuthInitializationComplete,
} = authSlice.actions

export default authSlice.reducer
