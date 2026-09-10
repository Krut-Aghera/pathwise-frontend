import { Link } from "react-router-dom"

import pathwise_main_logo from "../../assets/pathwise_main_logo.png"

const UserAuthHeader = () => {
    return (
        <header
            className="
            sticky
            top-0
            z-50
            border-b
            border-border-subtle
            bg-background-base/70
            py-2
            backdrop-blur-md
        "
        >
            <div
                className="
                mx-auto
                flex
                h-16
                w-full
                max-w-7xl
                items-center
                px-4

                sm:px-6
                lg:px-8
            "
            >
                {/* Brand */}

                <Link
                    to="/"
                    aria-label="Pathwise home"
                    className="
                        flex
                        shrink-0
                        items-center
                        rounded-md
                        focus:outline-none
                        focus:ring-2
                        focus:ring-accent-primary/30
                    "
                >
                    <img
                        src={pathwise_main_logo}
                        alt="Pathwise"
                        className="w-32 sm:w-36"
                    />
                </Link>
            </div>
        </header>
    )
}

export default UserAuthHeader
