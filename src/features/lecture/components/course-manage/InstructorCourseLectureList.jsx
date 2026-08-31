import {
    FileVideo,
} from "lucide-react"

import {
    useNavigate,
} from "react-router-dom"

import {
    useFetchSectionLecturesQuery,
} from "../../lectureApi.js"

import InstructorCourseLectureItem
    from "./InstructorCourseLectureItem.jsx"

import ErrorState
    from "../../../../components/ui/ErrorState.jsx"


const InstructorCourseLectureList = ({
    course,
    section,
    enabled = true,
}) => {

    const navigate = useNavigate()


    ///////////////////////////////////////////////////////////////
    // Section ID

    const sectionId =
        section?._id


    ///////////////////////////////////////////////////////////////
    // Fetch lectures

    const {
        data: lecturesResponse,
        isLoading,
        isFetching,
        isError,
        error,
        refetch,
    } = useFetchSectionLecturesQuery(
        sectionId,
        {
            skip:
                !sectionId ||
                !enabled,
        }
    )


    ///////////////////////////////////////////////////////////////
    // Data

    const lectures =
        lecturesResponse?.data ??
        lecturesResponse ??
        []


    ///////////////////////////////////////////////////////////////
    // Error message

    const errorMessage =
        error?.errors?.[0]?.message ||
        error?.message ||
        "Unable to load lectures."


    ///////////////////////////////////////////////////////////////
    // Manage lecture

    const handleManageLecture = (
        lecture
    ) => {

        if (
            !course?._id ||
            !section?._id ||
            !lecture?._id
        ) {
            return
        }


        navigate(
            `/instructor/courses/${course._id}/sections/${section._id}/lectures/${lecture._id}/manage`
        )
    }


    ///////////////////////////////////////////////////////////////
    // Loading

    if (isLoading) {

        return (
            <div className="
                space-y-2
                py-2
            ">

                {[1, 2].map((item) => (

                    <div
                        key={item}
                        className="
                            flex
                            items-center
                            gap-3

                            rounded-md
                            border
                            border-border-subtle
                            bg-background-surface

                            px-3
                            py-3

                            animate-pulse
                        "
                    >

                        <div className="
                            h-8
                            w-8
                            shrink-0
                            rounded-md
                            bg-background-elevated
                        " />

                        <div className="
                            h-3
                            w-40
                            rounded
                            bg-background-elevated
                        " />

                    </div>

                ))}

            </div>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Error

    if (isError) {

        return (
            <div className="py-2">

                <ErrorState
                    title="Unable to load lectures"
                    message={errorMessage}
                    onRetry={refetch}
                />

            </div>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Empty

    if (lectures.length === 0) {

        return (
            <div className="
                flex
                items-center
                gap-3

                px-2
                py-4
            ">

                <FileVideo
                    size={16}
                    className="
                        shrink-0
                        text-text-muted
                    "
                />

                <div>

                    <p className="
                        font-body
                        text-xs
                        font-medium
                        text-text-secondary
                    ">
                        No lectures yet.
                    </p>

                    <p className="
                        mt-0.5
                        font-body
                        text-[11px]
                        text-text-muted
                    ">
                        Add a lecture to start building this section.
                    </p>

                </div>

            </div>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <div className="
            space-y-2
        ">

            {isFetching && (
                <div className="
                    px-2
                    pb-1

                    font-body
                    text-[10px]
                    text-text-muted
                    bg-red-400
                ">
                    Updating lectures...
                </div>
            )}


            {lectures.map(
                (lecture) => (

                    <InstructorCourseLectureItem
                        key={lecture._id}
                        lecture={lecture}
                        onManageLecture={
                            handleManageLecture
                        }
                    />

                )
            )}

        </div>
    )
}


export default InstructorCourseLectureList