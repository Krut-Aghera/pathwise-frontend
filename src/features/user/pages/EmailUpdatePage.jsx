import { useNavigate } from "react-router-dom"

import useUser from "../hooks/useUser.js"
import userValidationRules from "../userValidations.js"
import EmailUpdateForm from "../components/forms/EmailUpdateForm.jsx"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const EmailChangePage = () => {
    const navigate = useNavigate()

    const { requestEmailChange, isRequestingEmailChange } = useUser()

    // Submit

    const handleSubmit = async (formData) => {
        return await requestEmailChange(formData)
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
                        Change your email
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
                        Update your email address to keep your Pathwise account
                        information current.
                    </p>
                </div>

                {/* Email Change Card */}

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
                    <EmailUpdateForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        loading={isRequestingEmailChange}
                        validationRules={userValidationRules.emailChangeRequest}
                    />
                </section>
            </div>
        </div>
    )
}

export default EmailChangePage
