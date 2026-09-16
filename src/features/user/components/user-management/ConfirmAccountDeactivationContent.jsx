import { useState } from "react"
import { KeyRound } from "lucide-react"
import { useForm } from "react-hook-form"
import Input from "../../../../components/form/Input"
import FormField from "../../../../components/form/FormField"
import Button from "../../../../components/ui/Button"

const ConfirmAccountDeactivationContent = ({
    onSubmit,
    loading = false,
    validationRules = {},
}) => {
    const [errorMessage, setErrorMessage] = useState("")

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
    })

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        if (loading) {
            return
        }

        setErrorMessage("")

        try {
            await onSubmit(formData)
        } catch (error) {
            console.log(error)
            const backendErrors = error?.errors

            if (Array.isArray(backendErrors)) {
                backendErrors.forEach((item) => {
                    if (item?.field && item?.message) {
                        setError(item.field, {
                            type: "server",
                            message: item.message,
                        })
                    }
                })
            }

            setErrorMessage(
                error?.errors[0]?.message ||
                    error?.message ||
                    "Unable to confirm account deactivation. Please try again."
            )
        }
    }

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-status-danger/20 bg-status-danger/10 text-status-danger">
                    <KeyRound size={27} strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 font-accent text-lg font-semibold text-text-primary">
                    Verify account deactivation
                </h2>

                <p className="mt-2 font-body text-sm leading-6 text-text-secondary">
                    Enter the 6-digit verification code sent to your verified
                    email address to permanently deactivate your account.
                </p>
            </div>

            {errorMessage ? (
                <div
                    role="alert"
                    className="rounded-lg border border-status-danger/30 bg-status-danger/5 px-4 py-3"
                >
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <p className="font-body text-sm font-medium text-status-danger">
                                Confirmation failed
                            </p>

                            <p className="mt-1 font-body text-xs leading-5 text-text-secondary">
                                {errorMessage}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="rounded-lg border border-status-success/50 bg-status-success/10 px-4 py-4">
                    <p className="font-body text-sm font-medium text-status-success">
                        Check your email
                    </p>

                    <p className="mt-1 font-body text-xs leading-5 text-text-secondary">
                        The verification code is valid for the period defined by
                        your account security settings. Do not share this code
                        with anyone.
                    </p>
                </div>
            )}

            <FormField
                label="Verification code"
                htmlFor="deactivation-otp"
                required
                error={errors.otp?.message}
            >
                <Input
                    id="deactivation-otp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    placeholder="Enter 6-digit code"
                    disabled={loading}
                    error={Boolean(errors.otp)}
                    {...register("otp", validationRules.otp)}
                />
            </FormField>

            <div className="border-t border-border-subtle pt-5">
                <Button
                    type="submit"
                    loading={loading}
                    disabled={loading}
                    className="
                        w-full
                        border
                        border-status-danger
                        bg-status-danger
                        text-text-primary
                        shadow-sm
                        transition-all
                        duration-200
                        hover:opacity-90
                        hover:shadow-md
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-status-danger
                        focus-visible:ring-offset-2
                    "
                >
                    Deactivate account
                </Button>
            </div>

            <div className="border-t border-border-subtle pt-5 text-center">
                <p className="font-body text-[11px] leading-5 text-text-muted">
                    Deactivating your account will sign you out of Pathwise.
                </p>
            </div>
        </form>
    )
}

export default ConfirmAccountDeactivationContent
