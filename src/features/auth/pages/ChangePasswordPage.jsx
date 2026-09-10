import { useNavigate } from "react-router-dom"

import ChangePasswordForm from "../components/form/ChangePasswordForm.jsx"

import useAuthManagement from "../hooks/useAuthManagement.js"
import { changePasswordValidationRules } from "../authValidation.js"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const ChangePasswordPage = () => {
    const navigate = useNavigate()

    const { userChangePassword, isChangePasswordLoading } = useAuthManagement()

    // Submit

    const handleSubmit = async (formData) => {
        await userChangePassword(formData)

        navigate("/auth/login")
    }

    // Cancel

    const handleCancel = () => {
        navigate("/dashboard")
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Render

    return (
        <div
            className="
                w-full
                px-4
                sm:px-6
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-md
                "
            >
                {/* Page Header */}

                <div
                    className="
                        mb-8
                        text-center
                    "
                >
                    <h1
                        className="
                            font-accent
                            text-2xl
                            font-semibold
                            tracking-tight
                            text-text-primary

                            sm:text-3xl
                        "
                    >
                        Change your password
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-2
                            max-w-full
                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        "
                    >
                        Update your password to keep your Pathwise account
                        secure.
                    </p>
                </div>

                {/* Change Password Card */}

                <section
                    className="
                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface
                        p-5
                        shadow-lg

                        sm:p-7
                    "
                >
                    <ChangePasswordForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        loading={isChangePasswordLoading}
                        validationRules={changePasswordValidationRules}
                    />
                </section>
            </div>
        </div>
    )
}

export default ChangePasswordPage
