import {
    useState,
} from "react"

import {
    useNavigate,
    useParams,
} from "react-router-dom"


import useLecture
    from "../hooks/useLecture.js"

import useLectureManagement
    from "../hooks/useLectureManagement.js"

import useLectureVideo
    from "../hooks/useLectureVideo.js"


import LectureManageHeader
    from "../components/lecture-manage/LectureManageHeader.jsx"

import LectureManageInformation
    from "../components/lecture-manage/LectureManageInformation.jsx"

import LectureManageVideo
    from "../components/lecture-manage/LectureManageVideo.jsx"

import LectureManageActions
    from "../components/lecture-manage/LectureManageActions.jsx"

import LectureRemoveDialog
    from "../components/lecture-manage/LectureRemoveDialog.jsx"


import ErrorState
    from "../../../components/ui/ErrorState.jsx"
import LectureDetailsLoadingSkeleton from "../components/lecture-manage/LectureDetailsLoadingSkeleton.jsx"


const LectureDetailsPage = () => {

    console.log("WORKING")
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
    // Lecture management

    const {
        updateLecture,
        removeLecture,

        isUpdating,
        isRemoving,
    } = useLectureManagement()


    ///////////////////////////////////////////////////////////////
    // Lecture video

    const {
        uploadLectureVideo,
        removeLectureVideo,

        isUploading,
        isRemoving: isRemovingVideo,
    } = useLectureVideo()


    ///////////////////////////////////////////////////////////////
    // Remove dialog

    const [
        isRemoveDialogOpen,
        setIsRemoveDialogOpen,
    ] = useState(false)


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
    // Busy state

    const isBusy =
        isUpdating ||
        isRemoving ||
        isUploading ||
        isRemovingVideo


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
    // Edit lecture

    const handleEdit = () => {

        if (
            !courseId ||
            !sectionId ||
            !lectureId
        ) {
            return
        }


        clearActionError()


        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/lectures/${lectureId}/edit`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Remove lecture

    const handleRemove = () => {

        if (
            !lecture?._id ||
            isBusy
        ) {
            return
        }


        clearActionError()


        setIsRemoveDialogOpen(true)
    }


    ///////////////////////////////////////////////////////////////
    // Cancel remove

    const handleCancelRemove = () => {

        if (isRemoving) {
            return
        }


        setIsRemoveDialogOpen(false)
    }


    ///////////////////////////////////////////////////////////////
    // Confirm remove

    const handleConfirmRemove = async () => {

        if (
            !lecture?._id ||
            isRemoving
        ) {
            return
        }


        clearActionError()


        const result =
            await removeLecture(
                lecture._id,
                sectionId
            )


        if (!result?.success) {

            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to remove this lecture."
                )
            )


            return
        }


        setIsRemoveDialogOpen(false)


        ///////////////////////////////////////////////////////////
        // Return to section management page

        navigate(
            `/instructor/courses/${courseId}/sections/${sectionId}/manage`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Upload video

    const handleUploadVideo = async (
        video
    ) => {

        if (
            !lecture?._id ||
            !video ||
            isBusy
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


        if (!result?.success) {

            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to upload lecture video."
                )
            )


            return
        }


        ///////////////////////////////////////////////////////////
        // Refresh lecture

        await refetchLecture()
    }


    ///////////////////////////////////////////////////////////////
    // Remove video

    const handleRemoveVideo = async () => {

        if (
            !lecture?._id ||
            isBusy
        ) {
            return
        }


        clearActionError()


        const result =
            await removeLectureVideo(
                lecture._id,
                sectionId
            )


        if (!result?.success) {

            setActionError(
                getErrorMessage(
                    result?.error,
                    "Unable to remove lecture video."
                )
            )


            return
        }


        ///////////////////////////////////////////////////////////
        // Refresh lecture

        await refetchLecture()
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
        <>

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

                {/* Header */}

                <LectureManageHeader
                    lecture={lecture}
                />


                {/* Action error */}

                {actionError && (

                    <div className="
                        mt-5

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


                {/* Main content */}

                <div className="
                    mt-6

                    grid
                    grid-cols-1
                    gap-6

                    lg:grid-cols-[minmax(0,1fr)_360px]
                ">

                    {/* Main column */}

                    <div className="
                        min-w-0
                        space-y-6
                    ">

                        <LectureManageInformation
                            lecture={lecture}
                        />


                        <LectureManageVideo
                            lecture={lecture}
                            onUpload={handleUploadVideo}
                            onRemove={handleRemoveVideo}
                            isUploading={isUploading}
                            isRemoving={isRemovingVideo}
                        />

                    </div>


                    {/* Sidebar */}

                    <aside className="
                        min-w-0
                    ">

                        <LectureManageActions
                            onEdit={handleEdit}
                            onRemove={handleRemove}
                            loading={isBusy}
                        />

                    </aside>

                </div>

            </main>


            {/* Remove lecture dialog */}

            <LectureRemoveDialog
                lecture={lecture}
                open={isRemoveDialogOpen}
                loading={isRemoving}
                onConfirm={handleConfirmRemove}
                onCancel={handleCancelRemove}
            />

        </>
    )
}


export default LectureDetailsPage
