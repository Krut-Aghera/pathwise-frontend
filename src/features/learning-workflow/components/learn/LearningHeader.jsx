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
                border-border-subtle/80
                bg-background-base/95
                py-3
                shadow-[0_1px_0_rgba(255,255,255,0.02)]
                backdrop-blur-2xl
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
                    <div className="mb-1.5 flex items-center gap-2">
                        <span
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-accent-secondary
                                shadow-[0_0_8px_rgba(6,182,212,0.45)]
                            "
                        />

                        <p
                            className="
                                font-body
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-text-secondary
                            "
                        >
                            Learning
                        </p>
                    </div>

                    <h1
                        className="
                            truncate
                            font-accent
                            text-sm
                            font-semibold
                            leading-tight
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
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.12em]
                                text-text-muted
                            "
                        >
                            Progress
                        </p>

                        <p
                            className="
                                mt-1
                                font-body
                                text-xs
                                font-medium
                                text-text-secondary
                            "
                        >
                            {completedLectures} of {totalLectures} lectures
                        </p>
                    </div>

                    <div
                        className={`
        relative
        flex
        h-11
        w-11.5
        items-center
        justify-center
        rounded-[10px]
        border
        ${
            isCourseComplete
                ? "border-status-success/30 bg-status-success/10"
                : "border-border-subtle bg-background-surface/80"
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
                                size={20}
                                strokeWidth={2}
                                className="text-status-success"
                            />
                        ) : (
                            <>
                                <svg
                                    viewBox="0 0 36 36"
                                    className="
                    absolute
                    h-9
                    w-9
                    -rotate-90
                "
                                >
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="14"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-background-elevated"
                                    />

                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="14"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
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
                    tracking-tight
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
