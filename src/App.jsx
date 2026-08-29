import AppRouterConfiguration from "./app/routes/AppRouterConfiguration"
import useAuthInitializer from "./features/auth/hooks/useAuthInitializer"

const App = () => {
    useAuthInitializer()
    return <AppRouterConfiguration />
}

export default App