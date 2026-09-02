import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import "./index.css"
import App from "./App.jsx"
import store from "./app/store/store.js"
import setupInterceptors from "./app/network/interceptors/setupInterceptors.js"

setupInterceptors()

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
)
