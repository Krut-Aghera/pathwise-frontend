import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

import {
    useUpdateCourseThumbnailMutation,
} from "../../courseApi.js"

import CourseThumbnailUpload
    from "../create-course/CourseThumbnailUpload.jsx"

import Button
    from "../../../../components/ui/Button.jsx"


const CourseThumbnailEditForm = ({
    courseId,
    currentThumbnail,
    onSuccess,
    onCancel,
    validationRules,
}) => {

    const globalErrorRef = useRef(null)


    ///////////////////////////////////////////////////////////////
    // Mutation

    const [
        updateCourseThumbnail,
        {
            isLoading: isUpdating,
        },
    ] = useUpdateCourseThumbnailMutation()


    ///////////////////////////////////////////////////////////////
    // Form

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({

        defaultValues: {
            thumbnail: null,
        },

        mode: "onBlur",

        shouldFocusError: true,
    })


    ///////////////////////////////////////////////////////////////
    // Global error scroll

    useEffect(() => {

        if (!errors.root?.message) {
            return
        }


        requestAnimationFrame(() => {

            globalErrorRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })

            globalErrorRef.current?.focus()

        })

    }, [errors.root?.message])


    ///////////////////////////////////////////////////////////////
    // Submit

    const handleFormSubmit = async (formData) => {

        clearErrors("root")


        const thumbnailFile =
            formData.thumbnail?.[0]


        if (!thumbnailFile) {
            return
        }


        ///////////////////////////////////////////////////////////
        // Update thumbnail

        try {

            await updateCourseThumbnail({

                courseId,

                thumbnail: thumbnailFile,

            }).unwrap()


            /////////////////////////////////////////////////////////
            // Success

            onSuccess()

        } catch (error) {

            /////////////////////////////////////////////////////////
            // Backend validation errors

            if (
                error?.statusCode === 400 &&
                Array.isArray(error?.errors)
            ) {

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


            /////////////////////////////////////////////////////////
            // General server error

            setError("root", {

                type: "server",

                message:
                    error?.message ||
                    "Unable to update course thumbnail. Please try again.",
            })

        }

    }


    ///////////////////////////////////////////////////////////////
    // Loading

    const isFormLoading =
        isUpdating ||
        isSubmitting


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
            className="space-y-6"
        >

            {/* Global server error */}

            {errors.root?.message && (

                <div
                    ref={globalErrorRef}
                    role="alert"
                    tabIndex={-1}
                    className="
                        scroll-mt-6

                        rounded-lg
                        border
                        border-status-danger/30
                        bg-status-danger/10
                        px-4
                        py-3

                        font-body
                        text-sm
                        leading-5
                        text-status-danger

                        focus:outline-none
                        focus:ring-2
                        focus:ring-status-danger/20
                    "
                >
                    {errors.root.message}
                </div>

            )}


            {/* Thumbnail */}

            <CourseThumbnailUpload
                register={register}
                errors={errors}
                currentThumbnail={currentThumbnail}
                validationRules={validationRules}
            />


            {/* Actions */}

            <div className="
                flex
                flex-col-reverse
                gap-3

                border-t
                border-border-subtle
                pt-5

                sm:flex-row
                sm:justify-end
            ">

                {/* Cancel */}

                <Button
                    type="button"
                    onClick={onCancel}
                    disabled={isFormLoading}
                    className="
                        w-full

                        border
                        border-border-subtle

                        bg-background-elevated
                        text-text-secondary

                        transition-all
                        duration-200

                        hover:border-text-muted
                        hover:bg-background-surface
                        hover:text-text-primary

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-border-subtle
                        focus-visible:ring-offset-2

                        sm:w-auto
                    "
                >
                    Cancel
                </Button>


                {/* Update */}

                <Button
                    type="submit"
                    loading={isFormLoading}
                    disabled={isFormLoading}
                    className="
                        w-full

                        border
                        border-status-success

                        bg-status-success
                        text-background-base

                        shadow-sm

                        transition-all
                        duration-200

                        hover:opacity-90
                        hover:shadow-md

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-status-success
                        focus-visible:ring-offset-2

                        sm:w-auto
                    "
                >
                    Update Thumbnail
                </Button>

            </div>

        </form>
    )
}


export default CourseThumbnailEditForm