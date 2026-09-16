import { useNavigate } from "react-router-dom"

import useUser from "../hooks/useUser.js"
import InstructorAccessForm from "../components/forms/InstructorAccessForm.jsx"

const InstructorAccessPage = () => {
    const navigate = useNavigate()

    const { requestInstructorAccess, isRequestingInstructorAccess } = useUser()

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async () => {
        return await requestInstructorAccess()
    }

    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {
        navigate("/dashboard")
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <div className="w-full px-4 sm:px-6">
            <div className="mx-auto w-full max-w-140">
                <div className="mb-6 text-center">
                    <h1 className="font-accent text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                        Become an instructor
                    </h1>

                    <p className="mx-automt-2 max-w-full font-body text-sm leading-6 text-text-secondary">
                        Request instructor access to start creating and managing
                        courses on Pathwise.
                    </p>
                </div>

                <section className="rounded-xl border border-border-subtle bg-background-surface p-5 shadow-lg sm:p-7">
                    <InstructorAccessForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        loading={isRequestingInstructorAccess}
                    />
                </section>
            </div>
        </div>
    )
}

export default InstructorAccessPage
