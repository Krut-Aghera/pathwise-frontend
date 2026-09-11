import { Outlet } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import ScrollToTop from "../components/layout/ScrollToTop"

const AppLayout = () => {
    return (
        <div>
            <ScrollToTop />
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default AppLayout
