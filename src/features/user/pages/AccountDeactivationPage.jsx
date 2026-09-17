import { useState } from "react"
import { useNavigate } from "react-router-dom"

import useUser from "../hooks/useUser.js"
import userValidationRules from "../userValidations.js"
import AccountDeactivationForm from "../components/forms/AccountDeactivationForm.jsx"
import ConfirmAccountDeactivationContent from "../components/user-management/ConfirmAccountDeactivationContent.jsx"

const AccountDeactivationPage = () => {
    const navigate = useNavigate()

    const {
        requestAccountDeactivation,
        isRequestingAccountDeactivation,
        confirmAccountDeactivation,
        isConfirmingAccountDeactivation,
    } = useUser()

    const [isOtpStage, setIsOtpStage] = useState(false)

    ///////////////////////////////////////////////////////////////
    // Request deactivation

    const handleRequestDeactivation = async (formData) => {
        const response = await requestAccountDeactivation(formData)

        setIsOtpStage(true)

        return response
    }

    ///////////////////////////////////////////////////////////////
    // Confirm deactivation

    const handleConfirmDeactivation = async (formData) => {
        const response = await confirmAccountDeactivation(formData)

        navigate("/auth/login", {
            replace: true,
        })

        return response
    }

    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {
        navigate("/dashboard")
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <div className="w-full px-4 sm:px-6 ">
            <div className="mx-auto w-full  max-w-md">
                {!isOtpStage && (
                    <div className="mb-6 text-center">
                        <h1 className="font-accent text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                            Deactivate your account
                        </h1>

                        <p className="mx-auto mt-2 max-w-full font-body text-sm leading-6 text-text-secondary">
                            This action will be permanently deactive you account
                        </p>
                    </div>
                )}

                <section className="rounded-xl border border-border-subtle bg-background-surface p-5 shadow-lg sm:p-7">
                    {!isOtpStage ? (
                        <AccountDeactivationForm
                            onSubmit={handleRequestDeactivation}
                            onCancel={handleCancel}
                            loading={isRequestingAccountDeactivation}
                            validationRules={
                                userValidationRules.accountDeactivationRequest
                            }
                        />
                    ) : (
                        <ConfirmAccountDeactivationContent
                            onSubmit={handleConfirmDeactivation}
                            loading={isConfirmingAccountDeactivation}
                            validationRules={
                                userValidationRules.accountDeactivationConfirmation
                            }
                        />
                    )}
                </section>
            </div>
        </div>
    )
}

export default AccountDeactivationPage
