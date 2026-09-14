const LectureInfo = ({ lecture, progressMeta }) => {
    if (!lecture) {
        return null
    }

    return (
        <div
            className="
                mt-7
                border-b
                border-border-subtle
                pb-7
            "
        >
            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    gap-x-3
                    gap-y-1.5
                "
            >
                <span
                    className="
                        font-body
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-accent-secondary
                    "
                >
                    Current lecture
                </span>

                {progressMeta && (
                    <span
                        className="
                            font-body
                            text-[11px]
                            text-text-muted
                        "
                    >
                        {progressMeta?.course?.completedLectures ?? 0} of{" "}
                        {progressMeta?.course?.totalLectures ?? 0} completed
                    </span>
                )}
            </div>

            <h2
                className="
                    mt-2
                    font-accent
                    text-xl
                    font-semibold
                    leading-snug
                    text-text-primary
                    sm:text-2xl
                "
            >
                {lecture.title}
            </h2>

            {lecture.description && (
                <p
                    className="
                        mt-3
                        max-w-4xl
                        font-body
                        text-sm
                        leading-7
                        text-text-secondary
                    "
                >
                    {lecture.description}
                </p>
            )}
        </div>
    )
}

export default LectureInfo
