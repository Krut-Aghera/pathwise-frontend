import { useForm } from "react-hook-form"

import FormActions from "../../../../components/form/FormActions"
import FormField from "../../../../components/form/FormField"
import PasswordInput from "../../../../components/form/PasswordInput"

const ChangePasswordForm = ({
    onSubmit,
    onCancel,
    loading = false,
    validationRules,
}) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            currentPassword: "",
            newPassword: "",
        },
    })

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        try {
            await onSubmit({
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword,
            })
        } catch (error) {
            /////////////////////////////////////////////////////////
            // Backend validation / password errors

            if (error?.statusCode === 400 || error?.statusCode === 401) {
                setError("root", {
                    type: "server",
                    message: error?.message,
                })

                return
            }

            /////////////////////////////////////////////////////////
            // General / unexpected error

            setError("root", {
                type: "server",
                message:
                    error?.message ||
                    "Unable to change your password. Please try again.",
            })
        }
    }

    ///////////////////////////////////////////////////////////////
    // Loading

    const isFormLoading = loading || isSubmitting

    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
            className="
                w-full
                space-y-5
            "
        >
            {/* General server error */}

            {errors.root?.message && (
                <div
                    role="alert"
                    className="
                        rounded-md
                        border
                        border-status-danger/30
                        bg-status-danger/5
                        px-3
                        py-2.5
                        font-body
                        text-sm
                        leading-5
                        text-status-danger
                    "
                >
                    {errors.root.message}
                </div>
            )}

            {/* Current password */}

            <FormField
                label="Current password"
                htmlFor="change-password-current"
                error={errors.currentPassword?.message}
                required
            >
                <PasswordInput
                    id="change-password-current"
                    autoComplete="current-password"
                    placeholder="Enter your current password"
                    error={Boolean(errors.currentPassword)}
                    aria-describedby={
                        errors.currentPassword
                            ? "change-password-current-error"
                            : undefined
                    }
                    {...register(
                        "currentPassword",
                        validationRules.currentPassword
                    )}
                />
            </FormField>

            {/* New password */}

            <FormField
                label="New password"
                htmlFor="change-password-new"
                error={errors.newPassword?.message}
                required
            >
                <PasswordInput
                    id="change-password-new"
                    autoComplete="new-password"
                    placeholder="Enter your new password"
                    error={Boolean(errors.newPassword)}
                    aria-describedby={
                        errors.newPassword
                            ? "change-password-new-error"
                            : undefined
                    }
                    {...register("newPassword", validationRules.newPassword)}
                />
            </FormField>

            {/* Actions */}

            <FormActions
                onCancel={onCancel}
                loading={isFormLoading}
                submitLabel="Change Password"
            />
        </form>
    )
}

export default ChangePasswordForm
