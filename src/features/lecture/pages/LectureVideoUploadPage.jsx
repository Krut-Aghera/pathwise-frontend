import {
    useState,
} from "react"

import {
    useNavigate,
    useParams,
} from "react-router-dom"


import useLecture from "../hooks/useLecture.js"
import useLectureVideo from "../hooks/useLectureVideo.js"
import LectureVideoUploadForm from "../components/form/LectureVideoUploadForm.jsx"
import ErrorState from "../../../components/ui/ErrorState.jsx"
import LectureDetailsLoadingSkeleton from "../components/lecture-manage/LectureDetailsLoadingSkeleton.jsx"


const LectureVideoUploadPage = () => {

    ///////////////////////////////////////////////////////////////
    // Route params

    const {
        courseId,
        sectionId,
        lectureId,
    } = useParams()


    ///////////////////////////////////////////////////////////////
    // Navigation

    const navigate =
        useNavigate()


    ///////////////////////////////////////////////////////////////
    // Lecture

    const {
        lecture,

        isLectureLoading,
        isLectureError,
        lectureError,

        refetchLecture,
    } = useLecture({
        lectureId,
    })


    ///////////////////////////////////////////////////////////////
    // Lecture video

    const {
        uploadLectureVideo,

        isUploading,

        resetUpload,
    } = useLectureVideo()


    ///////////////////////////////////////////////////////////////
    // Action error

    const [
        actionError,
        setActionError,
    ] = useState(null)


    ///////////////////////////////////////////////////////////////
    // Loading

    const isLoading =
        isLectureLoading


    ///////////////////////////////////////////////////////////////
    // Error helper

    const getErrorMessage = (
        error,
        fallback
    ) => {

        return (
            error?.errors?.[0]?.message ||
            error?.message ||
            fallback
        )
    }


    ///////////////////////////////////////////////////////////////
    // Clear action error

    const clearActionError = () => {

        setActionError(null)
    }


    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {

        if (isUploading) {
            return
        }


        resetUpload()


        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lectureId}`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Upload video

    const handleSubmit = async (
        video
    ) => {

        if (
            !lecture?._id ||
            !video ||
            isUploading
        ) {
            return
        }


        clearActionError()


        const result =
            await uploadLectureVideo(
                lecture._id,
                video,
                sectionId
            )


        ///////////////////////////////////////////////////////////
        // Upload failed

        if (!result?.success) {

            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to upload lecture video."
                )
            )


            return result
        }


        ///////////////////////////////////////////////////////////
        // Refresh lecture

        await refetchLecture()


        ///////////////////////////////////////////////////////////
        // Return to lecture details

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lectureId}/manage`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Loading state

    if (isLoading) {

        return (
            <LectureDetailsLoadingSkeleton />
        )
    }


    ///////////////////////////////////////////////////////////////
    // Error state

    if (
        isLectureError ||
        !lecture
    ) {

        const message =
            isLectureError
                ? getErrorMessage(
                    lectureError,
                    "Unable to load this lecture."
                )
                : "The requested lecture could not be found."


        return (
            <main className="
                mx-auto
                w-full
                max-w-7xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <ErrorState
                    title="Unable to load lecture"
                    message={message}
                    onRetry={refetchLecture}
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <main className="
            mx-auto
            w-full
            max-w-4xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        ">

            {/* Header */}

            <div className="mb-6">

                <h1 className="
                    font-accent
                    text-xl
                    font-semibold
                    text-text-primary

                    sm:text-2xl
                ">
                    Upload Lecture Video
                </h1>


                <p className="
                    mt-1

                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">
                    Upload the video students will watch for this lecture.
                </p>

            </div>


            {/* Action error */}

            {actionError && (

                <div className="
                    mb-5

                    rounded-lg
                    border
                    border-status-danger/30

                    bg-status-danger/10

                    px-4
                    py-3
                ">

                    <p className="
                        font-body
                        text-sm
                        font-medium
                        text-status-danger
                    ">
                        {actionError}
                    </p>

                </div>

            )}


            {/* Upload form */}

            <LectureVideoUploadForm
                lecture={lecture}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                loading={isUploading}
            />

        </main>
    )
}


export default LectureVideoUploadPage
