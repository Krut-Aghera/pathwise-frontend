import { Check, Circle, Play } from "lucide-react"

import formatDuration from "../../../../utils/format-media-duration"

const LearningLectureItem = ({
    lecture,
    selected = false,
    progress,
    onSelect,
}) => {
    const lectureProgress = progress?.lectures?.find(
        (item) => item.lecture?.toString() === lecture._id?.toString()
    )

    const isCompleted = lectureProgress?.isCompleted ?? false

    const watchedDuration = lectureProgress?.watchedDuration ?? 0

    const duration = lecture?.duration ?? 0

    const progressPercentage =
        duration > 0 ? Math.min((watchedDuration / duration) * 100, 100) : 0

    return (
        <button
            type="button"
            onClick={() => onSelect?.(lecture._id)}
            className={`
                group
                relative
                flex
                w-full
                items-start
                gap-3
                rounded-lg
                px-3
                py-3
                text-left
                transition
                cursor-pointer
                ${
                    selected
                        ? "bg-accent-primary/10 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.14)]"
                        : "hover:bg-background-elevated/50"
                }
            `}
        >
            {/* Active indicator */}

            {selected && (
                <span
                    className="
                        absolute
                        left-0
                        top-2.5
                        bottom-2.5
                        w-0.5
                        rounded-r-full
                        bg-accent-primary
                    "
                />
            )}

            {/* Status icon */}

            <div className="mt-0.5 shrink-0">
                {isCompleted ? (
                    <span
                        className="
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-status-success/20
                            bg-status-success/10
                        "
                    >
                        <Check
                            size={11}
                            strokeWidth={2.5}
                            className="text-status-success"
                        />
                    </span>
                ) : selected ? (
                    <span
                        className="
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            bg-accent-primary/15
                            ring-1
                            ring-accent-primary/20
                        "
                    >
                        <Play
                            size={9}
                            fill="currentColor"
                            className="
                                translate-x-[0.5px]
                                text-accent-primary
                            "
                        />
                    </span>
                ) : (
                    <Circle
                        size={18}
                        strokeWidth={1.5}
                        className="
                            text-text-muted
                            transition
                            group-hover:text-text-secondary
                        "
                    />
                )}
            </div>

            {/* Lecture details */}

            <div className="min-w-0 flex-1">
                <p
                    className={`
                        truncate
                        font-body
                        text-[13px]
                        leading-5
                        ${
                            selected
                                ? "font-medium text-text-primary"
                                : "text-text-secondary group-hover:text-text-primary"
                        }
                    `}
                >
                    {lecture.title}
                </p>

                <div
                    className="
                        mt-1.5
                        flex
                        items-center
                        gap-2
                        font-body
                        text-[10px]
                        font-medium
                        text-text-muted
                    "
                >
                    <span>{formatDuration(duration)}</span>

                    {progressPercentage > 0 && !isCompleted && (
                        <>
                            <span className="text-border-subtle">•</span>

                            <span>{Math.round(progressPercentage)}%</span>
                        </>
                    )}

                    {isCompleted && (
                        <>
                            <span className="text-border-subtle">•</span>

                            <span
                                className="
                                    text-status-success
                                "
                            >
                                Completed
                            </span>
                        </>
                    )}
                </div>

                {/* Lecture progress */}

                {progressPercentage > 0 && !isCompleted && (
                    <div
                        className="
                            mt-2.5
                            h-0.5
                            overflow-hidden
                            rounded-full
                            bg-background-elevated
                        "
                    >
                        <div
                            className="
                                h-full
                                rounded-full
                                bg-accent-primary
                                transition-all
                            "
                            style={{
                                width: `${progressPercentage}%`,
                            }}
                        />
                    </div>
                )}
            </div>
        </button>
    )
}

export default LearningLectureItem
