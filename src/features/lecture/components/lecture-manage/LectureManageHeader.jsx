import {
    ArrowLeft,
    FileVideo,
} from "lucide-react"

import {
    RESOURCE_STATUS,
} from "../../../../constants/resourceConstants.js"


const LectureManageHeader = ({
    lecture,
    onBack,
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


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <header className="
            rounded-xl
            border
            border-border-subtle

            bg-background-surface

            p-5

            sm:p-6
        ">

            {/* Back */}

            <button
                type="button"
                onClick={onBack}
                className="
                    inline-flex
                    items-center
                    gap-2

                    font-body
                    text-xs
                    font-medium
                    text-text-muted

                    transition-colors
                    duration-200

                    hover:text-text-primary

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent-primary
                    focus-visible:ring-offset-2
                "
            >

                <ArrowLeft size={15} />

                Back to Section

            </button>


            {/* Lecture header */}

            <div className="
                mt-5

                flex
                items-start
                gap-4
            ">

                {/* Icon */}

                <div className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-lg

                    bg-accent-primary/10
                    text-accent-primary
                ">

                    <FileVideo
                        size={20}
                    />

                </div>


                {/* Content */}

                <div className="
                    min-w-0
                    flex-1
                ">

                    {/* Meta */}

                    <div className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                    ">

                        <span className="
                            font-body
                            text-xs
                            font-medium
                            text-text-muted
                        ">
                            Lecture {lecture.order}
                        </span>


                        <span className="
                            text-border-subtle
                        ">
                            •
                        </span>


                        <span className={`
                            font-body
                            text-xs
                            font-semibold

                            ${
                                isPublished
                                    ? "text-status-success"
                                    : "text-status-warning"
                            }
                        `}>
                            {
                                isPublished
                                    ? "Published"
                                    : "Draft"
                            }
                        </span>

                    </div>


                    {/* Title */}

                    <h1 className="
                        mt-1.5

                        break-words

                        font-accent
                        text-xl
                        font-semibold
                        leading-7
                        text-text-primary

                        sm:text-2xl
                    ">
                        {lecture.title}
                    </h1>


                    {/* Description */}

                    {lecture.description && (

                        <p className="
                            mt-2

                            max-w-3xl

                            whitespace-pre-line

                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        ">
                            {lecture.description}
                        </p>

                    )}

                </div>

            </div>

        </header>
    )
}


export default LectureManageHeader