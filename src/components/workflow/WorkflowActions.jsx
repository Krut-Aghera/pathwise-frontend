import { ChevronRight, Pencil, RotateCcw, Trash2, Upload } from "lucide-react"

import { RESOURCE_STATUS } from "../../constants/resourceConstants.js"

const WorkflowActions = ({
    status,

    onEdit,
    onRemove,

    onPublish,
    onPublishInvalid,
    onSaveDraft,

    loading = false,

    resourceName = "Resource",
    resourceDescription = `Manage this ${resourceName.toLowerCase()}.`,

    publishEnabled = false,
    publishDisabledMessage = `Complete this ${resourceName.toLowerCase()} before publishing.`,

    editDescription = `Update ${resourceName.toLowerCase()} details and settings.`,
    publishDescription = `Make this ${resourceName.toLowerCase()} available to students.`,
    draftDescription = `Remove this ${resourceName.toLowerCase()} from the published curriculum.`,
    removeDescription = `Remove this ${resourceName.toLowerCase()} from the curriculum.`,
}) => {
    /*
     * Guard
     */

    if (!status) {
        return null
    }

    /*
     * Status
     */

    const isPublished = status === RESOURCE_STATUS.PUBLISHED
    const isDraft = status === RESOURCE_STATUS.DRAFT

    /*
     * Action state
     */

    const isPublishDisabled = loading || !publishEnabled

    /*
     * Publish handler
     *
     * The native `disabled` attribute protects the
     * normal UI.
     *
     * This handler provides an additional defensive
     * check if the disabled attribute is manually
     * removed through browser DevTools.
     */

    const handlePublishClick = () => {
        if (loading) {
            return
        }

        if (!publishEnabled) {
            onPublishInvalid?.(publishDisabledMessage)
            return
        }

        onPublish?.()
    }

    /*
     * Render
     */

    return (
        <section
            className="
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            {/* Header */}

            <div
                className="
                    border-b
                    border-border-subtle
                    px-5
                    py-4
                "
            >
                <h2
                    className="
                        font-accent
                        text-base
                        font-semibold
                        text-text-primary
                    "
                >
                    {resourceName} Actions
                </h2>

                <p
                    className="
                        mt-0.5
                        font-body
                        text-xs
                        text-text-muted
                    "
                >
                    {resourceDescription}
                </p>
            </div>

            {/* Actions */}

            <div className="divide-y divide-border-subtle">
                {/* Edit */}

                <button
                    type="button"
                    onClick={onEdit}
                    disabled={loading}
                    className="
                        group
                        flex
                        w-full
                        items-center
                        gap-3
                        px-5
                        py-4
                        text-left
                        transition-colors
                        duration-200
                        active:bg-accent-primary/3
                        hover:bg-accent-primary/5
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-accent-primary
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        cursor-pointer
                    "
                >
                    <span
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-accent-primary/10
                            text-accent-primary
                        "
                    >
                        <Pencil size={16} />
                    </span>

                    <span className="min-w-0 flex-1">
                        <span
                            className="
                                block
                                font-body
                                text-sm
                                font-semibold
                                text-text-primary
                            "
                        >
                            Edit {resourceName}
                        </span>

                        <span
                            className="
                                mt-0.5
                                block
                                font-body
                                text-xs
                                text-text-muted
                            "
                        >
                            {editDescription}
                        </span>
                    </span>

                    <ChevronRight
                        size={16}
                        className="
                            shrink-0
                            text-text-muted
                            transition-transform
                            duration-200
                            group-hover:translate-x-0.5
                            group-hover:text-accent-primary
                        "
                    />
                </button>

                {/* Publish */}

                {isDraft && (
                    <button
                        type="button"
                        onClick={handlePublishClick}
                        disabled={isPublishDisabled}
                        className="
                            group
                            flex
                            w-full
                            items-center
                            gap-3
                            px-5
                            py-4
                            text-left
                            transition-colors
                            duration-200
                            active:bg-status-success/3
                            hover:bg-status-success/5
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-inset
                            focus-visible:ring-status-success
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            cursor-pointer
                        "
                    >
                        <span
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-status-success/10
                                text-status-success
                            "
                        >
                            <Upload size={16} />
                        </span>

                        <span className="min-w-0 flex-1">
                            <span
                                className="
                                    block
                                    font-body
                                    text-sm
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                Publish {resourceName}
                            </span>

                            <span
                                className="
                                    mt-0.5
                                    block
                                    font-body
                                    text-xs
                                    text-text-muted
                                "
                            >
                                {publishEnabled
                                    ? publishDescription
                                    : publishDisabledMessage}
                            </span>
                        </span>

                        <ChevronRight
                            size={16}
                            className="
                                shrink-0
                                text-text-muted
                                transition-transform
                                duration-200
                                group-hover:translate-x-0.5
                                group-hover:text-status-success
                            "
                        />
                    </button>
                )}

                {/* Save as Draft */}

                {isPublished && (
                    <button
                        type="button"
                        onClick={onSaveDraft}
                        disabled={loading}
                        className="
                            group
                            flex
                            w-full
                            items-center
                            gap-3
                            px-5
                            py-4
                            text-left
                            transition-colors
                            duration-200
                            active:bg-status-warning/3
                            hover:bg-status-warning/5
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-inset
                            focus-visible:ring-status-warning
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            cursor-pointer
                        "
                    >
                        <span
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-status-warning/10
                                text-status-warning
                            "
                        >
                            <RotateCcw size={16} />
                        </span>

                        <span className="min-w-0 flex-1">
                            <span
                                className="
                                    block
                                    font-body
                                    text-sm
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                Save as Draft
                            </span>

                            <span
                                className="
                                    mt-0.5
                                    block
                                    font-body
                                    text-xs
                                    text-text-muted
                                "
                            >
                                {draftDescription}
                            </span>
                        </span>

                        <ChevronRight
                            size={16}
                            className="
                                shrink-0
                                text-text-muted
                                transition-transform
                                duration-200
                                group-hover:translate-x-0.5
                                group-hover:text-status-warning
                            "
                        />
                    </button>
                )}

                {/* Remove */}

                <button
                    type="button"
                    onClick={onRemove}
                    disabled={loading}
                    className="
                        group
                        flex
                        w-full
                        items-center
                        gap-3
                        px-5
                        py-4
                        text-left
                        transition-colors
                        duration-200
                        active:bg-status-danger/3
                        hover:bg-status-danger/5
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-status-danger
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        cursor-pointer
                    "
                >
                    <span
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-status-danger/10
                            text-status-danger
                        "
                    >
                        <Trash2 size={16} />
                    </span>

                    <span className="min-w-0 flex-1">
                        <span
                            className="
                                block
                                font-body
                                text-sm
                                font-semibold
                                text-text-primary
                            "
                        >
                            Remove {resourceName}
                        </span>

                        <span
                            className="
                                mt-0.5
                                block
                                font-body
                                text-xs
                                text-text-muted
                            "
                        >
                            {removeDescription}
                        </span>
                    </span>

                    <ChevronRight
                        size={16}
                        className="
                            shrink-0
                            text-text-muted
                            transition-transform
                            duration-200
                            group-hover:translate-x-0.5
                            group-hover:text-status-danger
                        "
                    />
                </button>
            </div>
        </section>
    )
}

export default WorkflowActions
