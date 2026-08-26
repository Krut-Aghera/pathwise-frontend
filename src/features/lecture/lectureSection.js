import httpClient from "../../services/http/httpClient";


// Create lecture
const createLecture = async (sectionId, lectureData) => {
    const response = await httpClient.post(
        `/lectures/sections/${sectionId}`,
        lectureData
    )

    return response.data
}


// Update lecture
const updateLecture = async (lectureId, lectureData) => {
    const response = await httpClient.patch(
        `/lectures/${lectureId}`,
        lectureData
    )

    return response.data
}


// Remove lecture
const removeLecture = async (lectureId) => {
    const response = await httpClient.delete(
        `/lectures/${lectureId}`
    )

    return response.data
}


// Reorder lectures
const reorderLectures = async (sectionId, lectures) => {
    const response = await httpClient.patch(
        `/lectures/sections/${sectionId}/reorder`,
        {
            lectures,
        }
    )

    return response.data
}


// Upload lecture video
const uploadLectureVideo = async (lectureId, video) => {
    const formData = new FormData()

    formData.append("video", video)

    const response = await httpClient.patch(
        `/lectures/${lectureId}/video`,
        formData
    )

    return response.data
}


// Remove lecture video
const removeLectureVideo = async (lectureId) => {
    const response = await httpClient.delete(
        `/lectures/${lectureId}/video`
    )

    return response.data
}


// Publish lecture
const publishLecture = async (lectureId) => {
    const response = await httpClient.patch(
        `/lectures/${lectureId}/publish`
    )

    return response.data
}


// Save lecture as draft
const saveLectureAsDraft = async (lectureId) => {
    const response = await httpClient.patch(
        `/lectures/${lectureId}/draft`
    )

    return response.data
}


// Fetch instructor lecture
const fetchInstructorLecture = async (lectureId) => {
    const response = await httpClient.get(
        `/lectures/${lectureId}`
    )

    return response.data
}


// Fetch all lectures of a section
const fetchSectionLectures = async (sectionId) => {
    const response = await httpClient.get(
        `/lectures/sections/${sectionId}`
    )

    return response.data
}


// Fetch student lecture
const fetchStudentLecture = async (lectureId) => {
    const response = await httpClient.get(
        `/lectures/${lectureId}/learn`
    )

    return response.data
}


export {
    createLecture,
    updateLecture,
    removeLecture,
    reorderLectures,
    uploadLectureVideo,
    removeLectureVideo,
    publishLecture,
    saveLectureAsDraft,
    fetchInstructorLecture,
    fetchSectionLectures,
    fetchStudentLecture,
}