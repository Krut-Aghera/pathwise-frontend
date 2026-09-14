import { CheckCircle2, CirclePlay } from "lucide-react"

const LearningProgress = ({ progressMeta }) => {
    const completed = progressMeta?.completedLectures ?? 0

    const total = progressMeta?.totalLectures ?? 0

    const percentage = progressMeta?.progressPercentage ?? 0

    return (
        <div
            className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface
                p-4
            "
        >
            <div
                className="
                    flex
                    items-center
                    justify-between
                    gap-4
                "
            >
                <div>
                    <p
                        className="
                            font-body
                            text-xs
                            font-medium
                            text-text-secondary
                        "
                    >
                        Your progress
                    </p>

                    <p
                        className="
                            mt-1
                            font-accent
                            text-lg
                            font-semibold
                            text-text-primary
                        "
                    >
                        {Math.round(percentage)}%
                    </p>
                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        font-body
                        text-xs
                        text-text-secondary
                    "
                >
                    <CheckCircle2
                        size={14}
                        className="
                            text-status-success
                        "
                    />

                    <span>
                        {completed} / {total}
                    </span>

                    <CirclePlay
                        size={14}
                        className="
                            ml-1
                            text-text-muted
                        "
                    />
                </div>
            </div>

            <div
                className="
                    mt-4
                    h-1.5
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
                        duration-500
                    "
                    style={{
                        width: `${Math.min(percentage, 100)}%`,
                    }}
                />
            </div>
        </div>
    )
}

export default LearningProgress
