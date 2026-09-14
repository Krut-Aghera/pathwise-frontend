import LectureInfo from "./LectureInfo"
import LecturePlayer from "./LecturePlayer"

const LearningContent = ({
    courseId,
    lecture,
    selectedLecture,
    progress,
    progressMeta,
    isLoading = false,
    isReady = false,
    onProgressUpdated,
    onLectureCompleted,
}) => {
    return (
        <section
            className="
                min-w-0
                flex-1
                bg-background-base
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-5
                    sm:px-6
                    sm:py-7
                    lg:px-10
                    lg:py-8
                    xl:px-12
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

                <LectureInfo
                    lecture={lecture ?? selectedLecture}
                    progressMeta={progressMeta}
                />
            </div>
        </section>
    )
}

export default LearningContent
