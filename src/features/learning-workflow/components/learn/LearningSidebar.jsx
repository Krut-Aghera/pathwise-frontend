import LearningSection from "./LearningSection"

const LearningSidebar = ({
    sections = [],
    selectedLectureId,
    progress,
    progressMeta,
    onLectureSelect,
}) => {
    const completedLectures = progressMeta?.completedLectures ?? 0

    const totalLectures = progressMeta?.totalLectures ?? 0

    return (
        <aside
            className="
                w-full
                shrink-0
                border-b
                border-border-subtle
                bg-background-surface
                lg:w-[22rem]
                lg:border-b-0
                lg:border-r
            "
        >
            <div
                className="
                    max-h-[calc(100vh-4.25rem)]
                    overflow-y-auto
                    scrollbar-thin
                "
            >
                {/* Sidebar heading */}

                <div
                    className="
                        border-b
                        border-border-subtle
                        px-5
                        py-5
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
                                    font-accent
                                    text-sm
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                Course content
                            </p>

                            <p
                                className="
                                    mt-1
                                    font-body
                                    text-xs
                                    text-text-secondary
                                "
                            >
                                {completedLectures} of {totalLectures} completed
                            </p>
                        </div>

                        <span
                            className="
                                rounded-full
                                border
                                border-border-subtle
                                bg-background-elevated
                                px-2.5
                                py-1
                                font-body
                                text-[10px]
                                font-medium
                                text-text-secondary
                            "
                        >
                            {totalLectures} lectures
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
                                width: `${
                                    progressMeta?.progressPercentage ?? 0
                                }%`,
                            }}
                        />
                    </div>
                </div>

                {/* Sections */}

                <div>
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
