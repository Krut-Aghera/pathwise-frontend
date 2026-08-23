import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div>
            <h1>AUTH PAGES</h1>
            <Outlet />
        </div>
    )
}

export default AuthLayout