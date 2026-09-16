import { useForm } from "react-hook-form"
import Input from "../../../../components/form/Input"
import FormField from "../../../../components/form/FormField"
import FormActions from "../../../../components/form/FormActions"

const UsernameUpdateForm = ({
    onSubmit,
    onCancel,
    loading = false,
    validationRules,
    currentUsername = "",
}) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            username: currentUsername,
        },
    })

    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {
        try {
            await onSubmit({
                username: formData.username,
            })
        } catch (error) {
            // Backend validation errors

            if (error?.statusCode === 400 && Array.isArray(error?.errors)) {
                error.errors.forEach(({ field, message }) => {
                    if (!field) {
                        return
                    }

                    setError(field, {
                        type: "server",
                        message,
                    })
                })

                return
            }

            // General / unexpected error

            setError("root", {
                type: "server",
                message:
                    error?.message ||
                    "Unable to update your username. Please try again.",
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

            {/* Username */}

            <FormField
                label="Username"
                htmlFor="username-update"
                error={errors.username?.message}
                required
            >
                <Input
                    id="username-update"
                    type="text"
                    autoComplete="username"
                    placeholder="Enter your username"
                    error={Boolean(errors.username)}
                    aria-describedby={
                        errors.username ? "username-update-error" : undefined
                    }
                    {...register("username", validationRules.username)}
                />
            </FormField>

            {/* Actions */}

            <FormActions
                onCancel={onCancel}
                loading={isFormLoading}
                submitLabel="Save Changes"
            />
        </form>
    )
}

export default UsernameUpdateForm
