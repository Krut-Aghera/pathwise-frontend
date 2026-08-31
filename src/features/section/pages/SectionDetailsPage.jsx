import { useState } from "react"

import {
    useNavigate,
    useParams,
} from "react-router-dom"


import {
    RESOURCE_STATUS,
} from "../../../constants/resourceConstants.js"


import ErrorState
    from "../../../components/ui/ErrorState.jsx"


import Button
    from "../../../components/ui/Button.jsx"


import useSection
    from "../hooks/useSection.js"


import useSectionState
    from "../hooks/useSectionState.js"


import useSectionManagement
    from "../hooks/useSectionManagement.js"


import InstructorCourseSectionRemoveDialog
    from "../components/InstructorCourseSectionRemoveDialog.jsx"


const SectionDetailsPage = () => {

    const navigate = useNavigate()

    const {
        sectionId,
    } = useParams()


    ///////////////////////////////////////////////////////////////
    // Section

    const {
        section,
        isSectionLoading,
        isSectionError,
        sectionError,
        refetchSection,
    } = useSection({
        sectionId,
    })


    ///////////////////////////////////////////////////////////////
    // Section state

    const {
        publishSection,
        saveSectionAsDraft,

        isPublishing,
        isSavingDraft,

        publishError,
        draftError,

        resetPublish,
        resetDraft,
    } = useSectionState()


    ///////////////////////////////////////////////////////////////
    // Section management

    const {
        removeSection,

        isRemoving,
    } = useSectionManagement()


    ///////////////////////////////////////////////////////////////
    // Dialog

    const [
        showRemoveDialog,
        setShowRemoveDialog,
    ] = useState(false)


    ///////////////////////////////////////////////////////////////
    // Action error

    const [
        actionError,
        setActionError,
    ] = useState(null)


    ///////////////////////////////////////////////////////////////
    // Course

    const courseId =
        section?.course?._id ||
        section?.course


    ///////////////////////////////////////////////////////////////
    // Status

    const isPublished =
        section?.status === RESOURCE_STATUS.PUBLISHED


    ///////////////////////////////////////////////////////////////
    // Action loading

    const isActionLoading =
        isPublishing ||
        isSavingDraft ||
        isRemoving


    ///////////////////////////////////////////////////////////////
    // Error message helper

    const getErrorMessage = (
        error,
        fallback
    ) => {

        return (
            error?.errors?.[0]?.message ||
            error?.message ||
            fallback
        )
    }


    ///////////////////////////////////////////////////////////////
    // Clear action error

    const clearActionError = () => {

        setActionError(null)

        resetPublish()
        resetDraft()
    }


    ///////////////////////////////////////////////////////////////
    // Back to course

    const handleBack = () => {

        if (!courseId) {
            return
        }


        if (isActionLoading) {
            return
        }


        navigate(
            `/instructor/courses/${courseId}`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Edit section

    const handleEdit = () => {

        if (
            !courseId ||
            !section?._id ||
            isActionLoading
        ) {
            return
        }


        clearActionError()


        navigate(
            `/instructor/courses/${courseId}/sections/${section._id}/edit`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Publish section

    const handlePublish = async () => {

        if (
            !section?._id ||
            isActionLoading
        ) {
            return
        }


        clearActionError()


        const result =
            await publishSection(
                section._id
            )


        if (!result?.success) {

            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to publish this section."
                )
            )

            return
        }


        ///////////////////////////////////////////////////////////
        // Refresh section after successful publish

        await refetchSection()
    }


    ///////////////////////////////////////////////////////////////
    // Save section as draft

    const handleSaveAsDraft = async () => {

        if (
            !section?._id ||
            isActionLoading
        ) {
            return
        }


        clearActionError()


        const result =
            await saveSectionAsDraft(
                section._id
            )


        if (!result?.success) {

            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to save this section as draft."
                )
            )

            return
        }


        ///////////////////////////////////////////////////////////
        // Refresh section after successful draft update

        await refetchSection()
    }


    ///////////////////////////////////////////////////////////////
    // Open remove dialog

    const handleRemove = () => {

        if (
            !section?._id ||
            isActionLoading
        ) {
            return
        }


        clearActionError()


        setShowRemoveDialog(true)
    }


    ///////////////////////////////////////////////////////////////
    // Cancel remove

    const handleCancelRemove = () => {

        if (isRemoving) {
            return
        }


        setShowRemoveDialog(false)
    }


    ///////////////////////////////////////////////////////////////
    // Confirm remove

    const handleConfirmRemove = async () => {

        if (
            !section?._id ||
            !courseId ||
            isActionLoading
        ) {
            return
        }


        clearActionError()


        const result =
            await removeSection(
                section._id,
                courseId
            )


        if (!result?.success) {

            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to remove this section."
                )
            )

            return
        }


        setShowRemoveDialog(false)


        navigate(
            `/instructor/courses/${courseId}`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Loading

    if (isSectionLoading) {

        return (
            <main className="
                mx-auto
                w-full
                max-w-3xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <div className="
                    flex
                    min-h-80
                    items-center
                    justify-center

                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface
                ">

                    <p className="
                        font-body
                        text-sm
                        text-text-muted
                    ">

                        Loading section...

                    </p>

                </div>

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Error

    if (
        isSectionError ||
        !section
    ) {

        const message =
            isSectionError
                ? getErrorMessage(
                    sectionError,
                    "Unable to load this section."
                )
                : "The requested section could not be found."


        return (
            <main className="
                mx-auto
                w-full
                max-w-3xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <ErrorState
                    title="Unable to load section"
                    message={message}
                    onRetry={refetchSection}
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <>

            <main className="
                mx-auto
                w-full
                max-w-3xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                {/* Back */}

                <button
                    type="button"
                    onClick={handleBack}
                    disabled={isActionLoading}
                    className="
                        mb-6

                        font-body
                        text-sm
                        font-medium
                        text-text-secondary

                        transition-colors
                        hover:text-text-primary

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >

                    ← Back to Course

                </button>


                {/* Header */}

                <header className="mb-6">

                    <div className="
                        flex
                        flex-wrap
                        items-center
                        gap-3
                    ">

                        <span className="
                            rounded-md
                            border
                            border-border-subtle
                            bg-background-elevated

                            px-2
                            py-1

                            font-body
                            text-xs
                            font-semibold
                            text-text-muted
                        ">

                            Section {section.order}

                        </span>


                        <span className={`
                            rounded-md
                            border
                            px-2
                            py-1

                            font-body
                            text-xs
                            font-semibold

                            ${isPublished
                                ? `
                                    border-status-success/30
                                    bg-status-success/10
                                    text-status-success
                                `
                                : `
                                    border-status-warning/30
                                    bg-status-warning/10
                                    text-status-warning
                                `
                            }
                        `}>

                            {isPublished
                                ? "Published"
                                : "Draft"
                            }

                        </span>

                    </div>


                    <h1 className="
                        mt-3

                        font-accent
                        text-2xl
                        font-semibold
                        text-text-primary

                        sm:text-3xl
                    ">

                        {section.title}

                    </h1>


                    <p className="
                        mt-2

                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    ">

                        Manage this course section and its publication status.

                    </p>

                </header>


                {/* Action error */}

                {actionError && (

                    <div className="
                        mb-6

                        rounded-lg
                        border
                        border-status-danger/30
                        bg-status-danger/10

                        px-4
                        py-3
                    ">

                        <p className="
                            font-body
                            text-sm
                            font-medium
                            text-status-danger
                        ">

                            {actionError}

                        </p>

                    </div>

                )}


                {/* Section information */}

                <section className="
                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface

                    p-5

                    sm:p-6
                ">

                    <div className="
                        flex
                        flex-col
                        gap-6
                    ">

                        {/* Title */}

                        <div>

                            <p className="
                                font-body
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-text-muted
                            ">

                                Section Title

                            </p>


                            <p className="
                                mt-2

                                font-accent
                                text-lg
                                font-semibold
                                text-text-primary
                            ">

                                {section.title}

                            </p>

                        </div>


                        {/* Status */}

                        <div>

                            <p className="
                                font-body
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-text-muted
                            ">

                                Status

                            </p>


                            <p className="
                                mt-2

                                font-body
                                text-sm
                                font-medium
                                text-text-secondary
                            ">

                                {isPublished
                                    ? "This section is currently published."
                                    : "This section is currently saved as a draft."
                                }

                            </p>

                        </div>


                        {/* Actions */}

                        <div className="
                            flex
                            flex-wrap
                            gap-3

                            border-t
                            border-border-subtle
                            pt-5
                        ">

                            {/* Edit */}

                            <Button
                                type="button"
                                onClick={handleEdit}
                                disabled={isActionLoading}
                            >

                                Edit Section

                            </Button>


                            {/* Publish / Draft */}

                            {isPublished ? (

                                <Button
                                    type="button"
                                    onClick={handleSaveAsDraft}
                                    disabled={isActionLoading}
                                >

                                    {isSavingDraft
                                        ? "Saving..."
                                        : "Save as Draft"
                                    }

                                </Button>

                            ) : (

                                <Button
                                    type="button"
                                    onClick={handlePublish}
                                    disabled={isActionLoading}
                                >

                                    {isPublishing
                                        ? "Publishing..."
                                        : "Publish Section"
                                    }

                                </Button>

                            )}


                            {/* Remove */}

                            <Button
                                type="button"
                                onClick={handleRemove}
                                disabled={isActionLoading}
                                className="
                                    border
                                    border-status-danger/30

                                    bg-status-danger/10
                                    text-status-danger

                                    hover:bg-status-danger/20
                                "
                            >

                                Remove Section

                            </Button>

                        </div>

                    </div>

                </section>

            </main>


            {/* Remove dialog */}

            <InstructorCourseSectionRemoveDialog
                section={section}
                open={showRemoveDialog}
                loading={isRemoving}
                onConfirm={handleConfirmRemove}
                onCancel={handleCancelRemove}
            />

        </>
    )
}


export default SectionDetailsPage