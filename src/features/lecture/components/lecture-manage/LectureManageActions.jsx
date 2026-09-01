import {
    Pencil,
    Trash2,
    ChevronRight,
    Upload,
    RotateCcw,
} from "lucide-react"


import {
    RESOURCE_STATUS,
} from "../../../../constants/resourceConstants.js"


const LectureManageActions = ({
    lecture,

    onEdit,
    onRemove,

    onPublish,
    onSaveDraft,

    loading = false,
}) => {

    ///////////////////////////////////////////////////////////////
    // Guard

    if (!lecture) {
        return null
    }


    ///////////////////////////////////////////////////////////////
    // Status

    const isPublished =
        lecture.status === RESOURCE_STATUS.PUBLISHED


    const isDraft =
        lecture.status === RESOURCE_STATUS.DRAFT


    ///////////////////////////////////////////////////////////////
    // Video

    const hasVideo =
        Boolean(lecture.video?.url)


    ///////////////////////////////////////////////////////////////
    // Publish disabled

    const publishDisabled =
        loading ||
        !hasVideo


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <section className="
            overflow-hidden

            rounded-xl
            border
            border-border-subtle

            bg-background-surface
        ">

            {/* Header */}

            <div className="
                border-b
                border-border-subtle

                px-5
                py-4
            ">

                <h2 className="
                    font-accent
                    text-base
                    font-semibold
                    text-text-primary
                ">
                    Lecture Actions
                </h2>

                <p className="
                    mt-0.5

                    font-body
                    text-xs
                    text-text-muted
                ">
                    Manage this lecture.
                </p>

            </div>


            {/* Actions */}

            <div className="
                divide-y
                divide-border-subtle
            ">

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

                        hover:bg-background-elevated

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-accent-primary

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >

                    <span className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center

                        rounded-lg

                        bg-accent-primary/10
                        text-accent-primary
                    ">

                        <Pencil size={16} />

                    </span>


                    <span className="
                        min-w-0
                        flex-1
                    ">

                        <span className="
                            block

                            font-body
                            text-sm
                            font-semibold
                            text-text-primary
                        ">
                            Edit Lecture
                        </span>

                        <span className="
                            mt-0.5
                            block

                            font-body
                            text-xs
                            text-text-muted
                        ">
                            Update lecture details and settings.
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
                            group-hover:text-text-primary
                        "
                    />

                </button>


                {/* Publish */}

                {isDraft && (

                    <button
                        type="button"
                        onClick={onPublish}
                        disabled={publishDisabled}
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

                            hover:bg-status-success/5

                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-inset
                            focus-visible:ring-status-success

                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >

                        <span className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center

                            rounded-lg

                            bg-status-success/10
                            text-status-success
                        ">

                            <Upload size={16} />

                        </span>


                        <span className="
                            min-w-0
                            flex-1
                        ">

                            <span className="
                                block

                                font-body
                                text-sm
                                font-semibold
                                text-text-primary
                            ">
                                Publish Lecture
                            </span>

                            <span className="
                                mt-0.5
                                block

                                font-body
                                text-xs
                                text-text-muted
                            ">
                                {hasVideo
                                    ? "Make this lecture available to students."
                                    : "Upload a video before publishing this lecture."
                                }
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

                            hover:bg-status-warning/5

                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-inset
                            focus-visible:ring-status-warning

                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >

                        <span className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center

                            rounded-lg

                            bg-status-warning/10
                            text-status-warning
                        ">

                            <RotateCcw size={16} />

                        </span>


                        <span className="
                            min-w-0
                            flex-1
                        ">

                            <span className="
                                block

                                font-body
                                text-sm
                                font-semibold
                                text-text-primary
                            ">
                                Save as Draft
                            </span>

                            <span className="
                                mt-0.5
                                block

                                font-body
                                text-xs
                                text-text-muted
                            ">
                                Remove this lecture from the published curriculum.
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

                        hover:bg-status-danger/5

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-status-danger

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >

                    <span className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center

                        rounded-lg

                        bg-status-danger/10
                        text-status-danger
                    ">

                        <Trash2 size={16} />

                    </span>


                    <span className="
                        min-w-0
                        flex-1
                    ">

                        <span className="
                            block

                            font-body
                            text-sm
                            font-semibold
                            text-text-primary
                        ">
                            Remove Lecture
                        </span>

                        <span className="
                            mt-0.5
                            block

                            font-body
                            text-xs
                            text-text-muted
                        ">
                            Remove this lecture from the curriculum.
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


export default LectureManageActions