import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import App from './App.jsx'
import store from './app/store/store.js'
import setupInterceptors from './services/http/interceptors/setupInterceptors.js'


setupInterceptors()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
