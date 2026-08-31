import {
    useFetchSectionLecturesQuery,
    useFetchInstructorLectureQuery,
    useFetchStudentLectureQuery,
} from "../lectureApi.js"


const useLecture = ({
    sectionId,
    lectureId,
    studentLectureId,
} = {}) => {

    ///////////////////////////////////////////////////////////////
    // Fetch section lectures

    const {
        data: sectionLecturesResponse,
        isLoading: isLecturesLoading,
        isFetching: isLecturesFetching,
        isSuccess: isLecturesSuccess,
        isError: isLecturesError,
        error: lecturesError,
        refetch: refetchLectures,
    } = useFetchSectionLecturesQuery(
        sectionId,
        {
            skip: !sectionId,
        }
    )


    ///////////////////////////////////////////////////////////////
    // Fetch instructor lecture

    const {
        data: instructorLectureResponse,
        isLoading: isLectureLoading,
        isFetching: isLectureFetching,
        isSuccess: isLectureSuccess,
        isError: isLectureError,
        error: lectureError,
        refetch: refetchLecture,
    } = useFetchInstructorLectureQuery(
        lectureId,
        {
            skip: !lectureId,
        }
    )


    ///////////////////////////////////////////////////////////////
    // Fetch student lecture

    const {
        data: studentLectureResponse,
        isLoading: isStudentLectureLoading,
        isFetching: isStudentLectureFetching,
        isSuccess: isStudentLectureSuccess,
        isError: isStudentLectureError,
        error: studentLectureError,
        refetch: refetchStudentLecture,
    } = useFetchStudentLectureQuery(
        studentLectureId,
        {
            skip: !studentLectureId,
        }
    )


    ///////////////////////////////////////////////////////////////
    // Data

    const lectures =
        sectionLecturesResponse?.data ??
        sectionLecturesResponse ??
        []


    const lecture =
        instructorLectureResponse?.data ??
        instructorLectureResponse ??
        null


    const studentLecture =
        studentLectureResponse?.data ??
        studentLectureResponse ??
        null


    ///////////////////////////////////////////////////////////////
    // Return

    return {

        ///////////////////////////////////////////////////////////
        // Section lectures

        lectures,

        isLecturesLoading,
        isLecturesFetching,
        isLecturesSuccess,
        isLecturesError,
        lecturesError,
        refetchLectures,


        ///////////////////////////////////////////////////////////
        // Instructor lecture

        lecture,

        isLectureLoading,
        isLectureFetching,
        isLectureSuccess,
        isLectureError,
        lectureError,
        refetchLecture,


        ///////////////////////////////////////////////////////////
        // Student lecture

        studentLecture,

        isStudentLectureLoading,
        isStudentLectureFetching,
        isStudentLectureSuccess,
        isStudentLectureError,
        studentLectureError,
        refetchStudentLecture,
    }
}


export default useLecture