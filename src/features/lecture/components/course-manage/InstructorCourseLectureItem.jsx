import {
    FileVideo,
    LockKeyhole,
    Pencil,
    PlayCircle,
} from "lucide-react"

import {
    RESOURCE_STATUS,
} from "../../../../constants/resourceConstants.js"


const InstructorCourseLectureItem = ({
    lecture,
    onManageLecture,
}) => {

    ///////////////////////////////////////////////////////////////
    // Status

    const isPublished =
        lecture?.status === RESOURCE_STATUS.PUBLISHED


    ///////////////////////////////////////////////////////////////
    // Video

    const hasVideo =
        Boolean(lecture?.video?.url)


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <article className="
            flex
            items-center
            gap-4

            rounded-lg
            border
            border-border-subtle
            bg-background-surface

            px-4
            py-4

            sm:gap-5
            sm:px-5
            sm:py-4.5

            transition-colors
            duration-200

            hover:bg-background-base
        ">

            {/* Lecture icon */}

            <div className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-lg

                bg-accent-primary/10
                text-accent-primary
            ">

                <FileVideo size={17} />

            </div>


            {/* Lecture information */}

            <div className="
                min-w-0
                flex-1
            ">

                {/* Title row */}

                <div className="
                    flex
                    min-w-0
                    items-center
                    gap-2.5
                ">

                    <span className="
                        hidden
                        shrink-0

                        font-body
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-text-muted

                        sm:inline
                    ">
                        Lecture {lecture?.order}
                    </span>


                    <h4 className="
                        min-w-0
                        truncate

                        font-accent
                        text-sm
                        font-semibold
                        text-text-primary

                        sm:text-[15px]
                    ">
                        {lecture?.title}
                    </h4>

                </div>


                {/* Metadata */}

                <div className="
                    mt-2.5

                    flex
                    flex-wrap
                    items-center
                    gap-x-3
                    gap-y-2
                ">

                    {/* Lecture number - mobile */}

                    <span className="
                        shrink-0

                        font-body
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-text-muted

                        sm:hidden
                    ">
                        Lecture {lecture?.order}
                    </span>


                    {/* Status */}

                    <span className={`
                        rounded-md
                        border
                        px-2
                        py-1

                        font-body
                        text-[10px]
                        font-semibold

                        ${
                            isPublished
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
                        {
                            isPublished
                                ? "Published"
                                : "Draft"
                        }
                    </span>


                    {/* Video status */}

                    <span className="
                        inline-flex
                        items-center
                        gap-1.5

                        font-body
                        text-[10px]
                        text-text-muted
                    ">

                        {
                            hasVideo
                                ? (
                                    <>
                                        <PlayCircle size={12} />
                                        Video uploaded
                                    </>
                                )
                                : (
                                    <>
                                        <LockKeyhole size={12} />
                                        No video
                                    </>
                                )
                        }

                    </span>


                    {/* Preview */}

                    {lecture?.isPreviewFree && (

                        <span className="
                            rounded-md

                            bg-accent-secondary/10

                            px-2
                            py-1

                            font-body
                            text-[10px]
                            font-medium
                            text-accent-secondary
                        ">
                            Preview
                        </span>

                    )}

                </div>

            </div>


            {/* Manage */}

            <button
                type="button"
                onClick={() =>
                    onManageLecture?.(
                        lecture
                    )
                }
                className="
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-1.5

                    rounded-md

                    border
                    border-border-subtle

                    bg-background-elevated

                    px-3
                    py-2.5

                    font-body
                    text-xs
                    font-semibold
                    text-text-secondary

                    transition-all
                    duration-200

                    hover:border-accent-primary/40
                    hover:bg-accent-primary/10
                    hover:text-text-primary

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent-primary/30
                "
            >

                <Pencil size={14} />

                <span className="hidden sm:inline">
                    Manage
                </span>

            </button>

        </article>
    )
}


export default InstructorCourseLectureItem
