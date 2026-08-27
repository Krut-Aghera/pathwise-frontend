import {
    AlertTriangle,
    X,
} from "lucide-react"

import Button from "../../../../components/ui/Button"


const InstructorCourseRemoveDialog = ({
    course,
    open,
    loading = false,
    onConfirm,
    onCancel,
}) => {

    if (!open || !course) {
        return null
    }


    return (
        <div className="
            fixed
            inset-0
            z-50

            flex
            items-center
            justify-center

            bg-black/60

            px-4
            py-6
        ">

            {/* Dialog */}

            <div className="
                w-full
                max-w-md

                overflow-hidden

                rounded-xl
                border
                border-border-subtle
                bg-background-surface

                shadow-xl
            ">

                {/* Header */}

                <div className="
                    flex
                    items-start
                    justify-between

                    border-b
                    border-border-subtle

                    px-5
                    py-4
                ">

                    <div className="
                        flex
                        items-start
                        gap-3
                    ">

                        <div className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center

                            rounded-lg

                            border
                            border-status-danger/30
                            bg-status-danger/10
                            text-status-danger
                        ">

                            <AlertTriangle size={18} />

                        </div>


                        <div>

                            <h2 className="
                                font-accent
                                text-base
                                font-semibold
                                text-text-primary
                            ">
                                Remove Course
                            </h2>

                            <p className="
                                mt-1
                                font-body
                                text-xs
                                leading-5
                                text-text-secondary
                            ">
                                This action will remove the course from
                                your course management list.
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={loading}
                        aria-label="Close dialog"
                        className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center

                            cursor-pointer
                            rounded-md

                            text-text-muted

                            transition-colors
                            duration-200

                            hover:bg-background-elevated
                            hover:text-text-primary

                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >

                        <X size={17} />

                    </button>

                </div>


                {/* Content */}

                <div className="
                    px-5
                    py-5
                ">

                    <p className="
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    ">

                        Are you sure you want to remove{" "}

                        <span className="
                            font-medium
                            text-text-primary
                        ">
                            "{course.title}"
                        </span>

                        ?

                    </p>

                    <p className="
                        mt-2
                        font-body
                        text-xs
                        leading-5
                        text-text-muted
                    ">
                        You can no longer manage this course from your
                        instructor dashboard after removing it.
                    </p>

                </div>


                {/* Actions */}

                <div className="
                    flex
                    flex-col-reverse
                    gap-3

                    border-t
                    border-border-subtle

                    px-5
                    py-4

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
                            bg-transparent
                            text-text-secondary

                            transition-all
                            duration-200

                            hover:border-text-muted
                            hover:bg-background-elevated
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

                            sm:w-auto
                        "
                    >
                        Remove Course
                    </Button>

                </div>

            </div>

        </div>
    )
}


export default InstructorCourseRemoveDialog