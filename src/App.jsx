import AppRouter from "./app/router/AppRouter"
import useAuthInitializer from "./features/auth/hooks/useAuthInitializer"

const App = () => {
    useAuthInitializer()
    return < AppRouter />
}

export default App