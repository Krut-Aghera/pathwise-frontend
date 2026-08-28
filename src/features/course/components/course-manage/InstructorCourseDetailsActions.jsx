import {
    Edit3,
    Eye,
    PlayCircle,
    Trash2,
} from "lucide-react"

import { Link } from "react-router-dom"

import Button from "../../../../components/ui/Button"

import { RESOURCE_STATUS } from "../../../../constants/resourceConstants.js"


const InstructorCourseDetailsActions = ({
    course,
    onPublish,
    onDraft,
    onRemove,
}) => {

    const isPublished =
        course?.status === RESOURCE_STATUS.PUBLISHED


    return (
        <section className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface

            p-4

            sm:p-5
        ">

            <div className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:flex-wrap
                sm:items-center
            ">

                {/* Edit */}

                <Link
                    to={`/instructor/courses/${course?._id}/edit`}
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2

                        rounded-md

                        px-4
                        py-2

                        font-body
                        text-sm
                        font-medium

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
                    "
                >

                    <Edit3 size={15} />

                    Edit Course

                </Link>


                {/* Publish / Draft */}

                {isPublished ? (

                    <Button
                        type="button"
                        onClick={() => onDraft?.(course)}
                        className="
                            border
                            border-status-warning/30

                            bg-status-warning/10

                            text-status-warning

                            hover:bg-status-warning/20
                        "
                    >

                        Save as Draft

                    </Button>

                ) : (

                    <Button
                        type="button"
                        onClick={() => onPublish?.(course)}
                    >

                        <PlayCircle size={15} />

                        Publish Course

                    </Button>

                )}


                {/* Remove */}

                <Button
                    type="button"
                    onClick={() => onRemove?.(course)}
                    className="
                        border
                        border-status-danger/30

                        bg-status-danger/10

                        text-status-danger

                        hover:bg-status-danger/20
                    "
                >

                    <Trash2 size={15} />

                    Remove Course

                </Button>


                {/* Public course */}

                {isPublished && (
                    <Link
                        to={`/courses/${course?._id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2

                            rounded-md

                            px-4
                            py-2

                            font-body
                            text-sm
                            font-medium
                            text-text-muted

                            transition-colors
                            duration-200

                            hover:text-text-secondary
                        "
                    >

                        <Eye size={15} />

                        View Public Course

                    </Link>
                )}

            </div>

        </section>
    )
}


export default InstructorCourseDetailsActions
