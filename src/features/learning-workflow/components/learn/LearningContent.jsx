import LecturePlayer from "./LecturePlayer"

const LearningContent = ({
    courseId,
    lecture,
    selectedLecture,
    progress,
    isLoading = false,
    isReady = false,
    onProgressUpdated,
    onLectureCompleted,
}) => {
    return (
        <section
            className="
                order-1
                min-h-0
                min-w-0
                w-full
                flex-1
                overflow-hidden
                bg-background-base
                lg:order-2
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    min-h-0
                    w-full
                    max-w-full
                    flex-1
                    flex-col
                    justify-center
                    px-3
                    py-3
                    sm:max-w-180
                    sm:px-5
                    sm:py-4
                    md:max-w-220
                    md:px-6
                    md:py-5
                    lg:max-w-250
                    lg:px-6
                    lg:py-6
                    xl:max-w-270
                "
            >
                <LecturePlayer
                    courseId={courseId}
                    lecture={lecture}
                    selectedLecture={selectedLecture}
                    progress={progress}
                    isLoading={isLoading}
                    isReady={isReady}
                    onProgressUpdated={onProgressUpdated}
                    onLectureCompleted={onLectureCompleted}
                />
            </div>
        </section>
    )
}

export default LearningContent
