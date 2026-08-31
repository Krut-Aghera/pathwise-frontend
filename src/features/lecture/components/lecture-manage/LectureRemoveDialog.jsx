import {
    AlertTriangle,
    X,
} from "lucide-react"

import Button
    from "../../../../components/ui/Button.jsx"


const LectureRemoveDialog = ({
    lecture,
    open = false,
    loading = false,
    onConfirm,
    onCancel,
}) => {

    ///////////////////////////////////////////////////////////////
    // Closed

    if (!open || !lecture) {
        return null
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <div
            className="
                fixed
                inset-0
                z-50

                flex
                items-center
                justify-center

                bg-black/50

                px-4
                py-6
            "
            role="presentation"
            onMouseDown={(event) => {

                if (
                    event.target === event.currentTarget &&
                    !loading
                ) {
                    onCancel?.()
                }

            }}
        >

            {/* Dialog */}

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="lecture-remove-title"
                aria-describedby="lecture-remove-description"
                className="
                    w-full
                    max-w-md

                    rounded-xl
                    border
                    border-border-subtle

                    bg-background-surface

                    p-5

                    shadow-2xl

                    sm:p-6
                "
                onMouseDown={(event) =>
                    event.stopPropagation()
                }
            >

                {/* Header */}

                <div className="
                    flex
                    items-start
                    justify-between
                    gap-4
                ">

                    <div className="
                        flex
                        items-start
                        gap-3
                    ">

                        <div className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center

                            rounded-full

                            bg-status-danger/10
                            text-status-danger
                        ">

                            <AlertTriangle size={19} />

                        </div>


                        <div className="min-w-0">

                            <h2
                                id="lecture-remove-title"
                                className="
                                    font-accent
                                    text-lg
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                Remove Lecture
                            </h2>

                            <p
                                id="lecture-remove-description"
                                className="
                                    mt-1

                                    font-body
                                    text-sm
                                    leading-5
                                    text-text-secondary
                                "
                            >
                                Are you sure you want to remove this lecture?
                            </p>

                        </div>

                    </div>


                    {/* Close */}

                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        aria-label="Close dialog"
                        className="
                            shrink-0

                            rounded-md
                            p-1.5

                            text-text-muted

                            transition-colors
                            duration-200

                            hover:bg-background-elevated
                            hover:text-text-primary

                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-accent-primary

                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >

                        <X size={18} />

                    </button>

                </div>


                {/* Lecture name */}

                <div className="
                    mt-5

                    rounded-lg
                    border
                    border-border-subtle

                    bg-background-elevated

                    px-4
                    py-3
                ">

                    <p className="
                        break-words

                        font-body
                        text-sm
                        font-medium
                        text-text-primary
                    ">
                        {lecture.title}
                    </p>

                </div>


                {/* Warning */}

                <p className="
                    mt-4

                    font-body
                    text-xs
                    leading-5
                    text-text-muted
                ">
                    Removing this lecture will hide it from the course
                    curriculum. This action cannot be undone from this page.
                </p>


                {/* Actions */}

                <div className="
                    mt-6

                    flex
                    flex-col-reverse
                    gap-3

                    sm:flex-row
                    sm:justify-end
                ">

                    <Button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        className="
                            w-full

                            border
                            border-border-subtle

                            bg-background-elevated
                            text-text-secondary

                            hover:bg-background-surface
                            hover:text-text-primary

                            sm:w-auto
                        "
                    >
                        Cancel
                    </Button>


                    <Button
                        type="button"
                        onClick={onConfirm}
                        loading={loading}
                        disabled={loading}
                        className="
                            w-full

                            border
                            border-status-danger

                            bg-status-danger
                            text-background-base

                            hover:opacity-90

                            sm:w-auto
                        "
                    >
                        Remove Lecture
                    </Button>

                </div>

            </div>

        </div>
    )
}


export default LectureRemoveDialog
