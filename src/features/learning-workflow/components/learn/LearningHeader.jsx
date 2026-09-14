import { CheckCircle2 } from "lucide-react"

const LearningHeader = ({ course, progressMeta }) => {
    const progressPercentage = progressMeta?.course?.progressPercentage ?? 0

    const completedLectures = progressMeta?.course?.completedLectures ?? 0

    const totalLectures = progressMeta?.course?.totalLectures ?? 0

    const isCourseComplete =
        totalLectures > 0 && completedLectures === totalLectures

    return (
        <header
            className="
                sticky
                top-0
                z-40
                border-b
                border-border-subtle
                bg-background-base/90
                backdrop-blur-xl
                py-3
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    min-h-17
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                {/* Course identity */}

                <div className="min-w-0">
                    <p
                        className="
                            mb-1
                            font-body
                            text-[12px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-accent-secondary
                        "
                    >
                        Learning
                    </p>

                    <h1
                        className="
                            truncate
                            font-accent
                            text-sm
                            font-semibold
                            text-text-primary
                            sm:text-lg
                        "
                    >
                        {course?.title ?? "Course"}
                    </h1>
                </div>

                {/* Progress */}

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-4
                        sm:gap-5
                    "
                >
                    <div className="hidden text-right sm:block">
                        <p
                            className="
                                font-body
                                text-xs
                                text-text-secondary
                            "
                        >
                            Course progress
                        </p>

                        <p
                            className="
                                mt-0.5
                                font-body
                                text-xs
                                font-medium
                                text-text-primary
                            "
                        >
                            {completedLectures} of {totalLectures} lectures
                        </p>
                    </div>

                    <div
                        className={`
                            relative
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            ${
                                isCourseComplete
                                    ? "border-status-success/40 bg-status-success/10"
                                    : "border-border-subtle bg-background-surface"
                            }
                        `}
                        title={
                            isCourseComplete
                                ? "Course completed"
                                : `${Math.round(progressPercentage)}% complete`
                        }
                    >
                        {isCourseComplete ? (
                            <CheckCircle2
                                size={21}
                                strokeWidth={2}
                                className="text-status-success"
                            />
                        ) : (
                            <>
                                <svg
                                    viewBox="0 0 36 36"
                                    className="
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        -rotate-90
                                    "
                                >
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-background-elevated"
                                    />

                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeDasharray="94.2"
                                        strokeDashoffset={
                                            94.2 -
                                            (94.2 *
                                                Math.min(
                                                    progressPercentage,
                                                    100
                                                )) /
                                                100
                                        }
                                        className="
                                            text-accent-primary
                                            transition-all
                                            duration-500
                                        "
                                    />
                                </svg>

                                <span
                                    className="
                                        relative
                                        font-body
                                        text-[10px]
                                        font-semibold
                                        text-text-primary
                                    "
                                >
                                    {Math.round(progressPercentage)}
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default LearningHeader
