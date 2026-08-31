import {
    Pencil,
    Trash2,
    ChevronRight,
} from "lucide-react"


const LectureManageActions = ({
    onEdit,
    onRemove,
    loading = false,
}) => {

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
                py-5

                sm:px-6
                sm:py-6
            ">

                <h2 className="
                    font-accent
                    text-lg
                    font-semibold
                    text-text-primary
                ">
                    Lecture Actions
                </h2>

                <p className="
                    mt-1.5

                    font-body
                    text-xs
                    leading-5
                    text-text-muted
                ">
                    Manage the lecture content and settings.
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
                        gap-4

                        px-5
                        py-5

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

                        sm:px-6
                    "
                >

                    {/* Icon */}

                    <span className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center

                        rounded-lg

                        bg-accent-primary/10
                        text-accent-primary

                        transition-colors
                        duration-200

                        group-hover:bg-accent-primary/15
                    ">

                        <Pencil size={17} />

                    </span>


                    {/* Content */}

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
                            mt-1
                            block

                            font-body
                            text-xs
                            leading-5
                            text-text-muted
                        ">
                            Update the lecture title, description,
                            preview settings, and other details.
                        </span>

                    </span>


                    {/* Arrow */}

                    <ChevronRight
                        size={17}
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
                        gap-4

                        px-5
                        py-5

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

                        sm:px-6
                    "
                >

                    {/* Icon */}

                    <span className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center

                        rounded-lg

                        bg-status-danger/10
                        text-status-danger

                        transition-colors
                        duration-200

                        group-hover:bg-status-danger/15
                    ">

                        <Trash2 size={17} />

                    </span>


                    {/* Content */}

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
                            mt-1
                            block

                            font-body
                            text-xs
                            leading-5
                            text-text-muted
                        ">
                            Remove this lecture from the course
                            curriculum.
                        </span>

                    </span>


                    {/* Arrow */}

                    <ChevronRight
                        size={17}
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
