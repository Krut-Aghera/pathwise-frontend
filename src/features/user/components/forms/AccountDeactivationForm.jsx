import { useState } from "react"
import { ShieldAlert } from "lucide-react"
import { useForm } from "react-hook-form"

import ConfirmDialog from "../../../../components/ui/ConfirmDialog.jsx"
import FormActions from "../../../../components/form/FormActions.jsx"
import FormField from "../../../../components/form/FormField.jsx"
import PasswordInput from "../../../../components/form/PasswordInput.jsx"

const AccountDeactivationForm = ({
    onSubmit,
    onCancel,
    loading = false,
    validationRules = {},
}) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
    })

    ///////////////////////////////////////////////////////////////
    // Open confirmation dialog

    const handleFormSubmit = () => {
        if (loading) {
            return
        }

        setErrorMessage("")
        setIsConfirmOpen(true)
    }

    ///////////////////////////////////////////////////////////////
    // Confirm request

    const handleConfirm = async () => {
        if (loading) {
            return
        }

        setErrorMessage("")

        try {
            await onSubmit({
                password: getValues("password"),
            })

            setIsConfirmOpen(false)
        } catch (error) {
            setErrorMessage(
                error?.message ||
                    "Unable to request account deactivation. Please try again."
            )

            setIsConfirmOpen(false)
        }
    }

    ///////////////////////////////////////////////////////////////
    // Cancel dialog

    const handleCancelConfirmation = () => {
        if (loading) {
            return
        }

        setIsConfirmOpen(false)
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <>
            <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="space-y-6"
            >
                <div className="flex flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-status-danger/20 bg-status-danger/10 text-status-danger">
                        <ShieldAlert size={27} strokeWidth={1.8} />
                    </div>

                    <h2 className="mt-5 font-accent text-lg font-semibold text-text-primary">
                        Deactivate account
                    </h2>

                    <p className="mt-2 font-body text-sm leading-6 text-text-secondary">
                        Enter your current password to continue. You will then
                        receive a verification code by email.
                    </p>
                </div>

                <div className="rounded-lg border border-status-warning/20 bg-status-warning/5 px-4 py-4">
                    <p className="font-body text-sm font-medium text-status-warning">
                        Before you continue
                    </p>

                    <p className="mt-1 font-body text-xs leading-5 text-text-secondary">
                        Account deactivation is a destructive action. Make sure
                        you want to deactivate this Pathwise account before
                        continuing.
                    </p>
                </div>

                <FormField
                    label="Current password"
                    htmlFor="deactivation-password"
                    required
                    error={errors.password?.message}
                >
                    <PasswordInput
                        id="deactivation-password"
                        autoComplete="current-password"
                        placeholder="Enter your current password"
                        disabled={loading}
                        error={Boolean(errors.password)}
                        {...register("password", validationRules.password)}
                    />
                </FormField>

                {errorMessage && (
                    <div
                        role="alert"
                        className="rounded-lg border border-status-danger/30 bg-status-danger/5 px-4 py-3"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="font-body text-sm font-medium text-status-danger">
                                    Deactivation request failed
                                </p>

                                <p className="mt-1 font-body text-xs leading-5 text-text-secondary">
                                    {errorMessage}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setErrorMessage("")}
                                className="shrink-0 font-body text-xs font-medium text-text-muted transition hover:text-text-primary focus:outline-none"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                )}

                <FormActions
                    onCancel={onCancel}
                    loading={loading}
                    submitLabel="Continue"
                    submitClassName="
                        border-status-danger
                        bg-status-danger
                        text-text-primary
                        focus-visible:ring-status-danger
                    "
                />
            </form>

            <ConfirmDialog
                open={isConfirmOpen}
                title="Deactivate your account?"
                subtitle="This action will begin the account deactivation process."
                message="A verification code will be sent to your email address. Your account will only be deactivated after the verification code is successfully confirmed."
                confirmLabel="Send verification code"
                cancelLabel="Go back"
                loading={loading}
                onConfirm={handleConfirm}
                onCancel={handleCancelConfirmation}
                variant="danger"
            />
        </>
    )
}

export default AccountDeactivationForm
