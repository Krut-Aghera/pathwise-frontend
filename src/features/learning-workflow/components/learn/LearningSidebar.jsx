import LearningSection from "./LearningSection"

const LearningSidebar = ({
    sections = [],
    selectedLectureId,
    progress,
    progressMeta,
    onLectureSelect,
}) => {
    const completedLectures = progressMeta?.course?.completedLectures ?? 0

    const totalLectures = progressMeta?.course?.totalLectures ?? 0

    return (
        <aside
            className="
             order-2
        flex
        min-h-0
        w-full
        shrink-0
        flex-col
        border-t
        border-border-subtle
        bg-background-surface
        lg:order-1
        lg:w-88
        lg:border-r
        lg:border-t-0
            "
        >
            <div
                className="
                      min-h-0
        max-h-[42vh]
        flex-1
        overflow-y-auto
        scrollbar-thin
        scrollbar-track-transparent
        scrollbar-thumb-background-elevated
        lg:max-h-none
                "
            >
                {/* Sidebar heading */}

                <div
                    className="
                        border-b
        border-border-subtle
        bg-background-surface
        px-4
        py-3
        sm:px-5
        sm:py-4
        lg:py-5
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
                        <div className="min-w-0">
                            <p
                                className="
                                    font-accent
                                    text-sm
                                    font-semibold
                                    tracking-tight
                                    text-text-primary
                                "
                            >
                                Course content
                            </p>

                            <p
                                className="
                                    mt-1
                                    font-body
                                    text-[11px]
                                    text-text-muted
                                "
                            >
                                {completedLectures} of {totalLectures} completed
                            </p>
                        </div>

                        <span
                            className="
                                shrink-0
                                rounded-md
                                border
                                border-border-subtle
                                bg-background-elevated/60
                                px-2
                                py-1
                                font-body
                                text-[10px]
                                font-medium
                                text-text-secondary
                            "
                        >
                            {totalLectures}
                        </span>
                    </div>

                    <div
                        className="
                            mt-4
                            h-1
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
                                width: `${progressMeta?.course?.progressPercentage ?? 0}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Sections */}

                <div className="pb-3">
                    {sections.map((section, index) => (
                        <LearningSection
                            key={section._id}
                            section={section}
                            sectionNumber={index + 1}
                            selectedLectureId={selectedLectureId}
                            progress={progress}
                            onLectureSelect={onLectureSelect}
                        />
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default LearningSidebar
