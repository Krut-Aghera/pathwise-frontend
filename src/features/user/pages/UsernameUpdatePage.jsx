import { useNavigate } from "react-router-dom"

import userValidationRules from "../userValidations"
import useUser from "../hooks/useUser"
import UsernameUpdateForm from "../components/forms/UsernameUpdateForm"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const UsernameUpdatePage = () => {
    const navigate = useNavigate()

    const { currentUser, updateUsername, isUpdateUsernameLoading } = useUser()

    // Submit

    const handleSubmit = async (formData) => {
        await updateUsername(formData)
        navigate("/dashboard")
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
                        Update your username
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
                        Change the name displayed on your Pathwise account.
                    </p>
                </div>

                {/* Username Update Card */}

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
                    <UsernameUpdateForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        loading={isUpdateUsernameLoading}
                        validationRules={userValidationRules.usernameUpdate}
                        currentUsername={currentUser?.username ?? ""}
                    />
                </section>
            </div>
        </div>
    )
}

export default UsernameUpdatePage
