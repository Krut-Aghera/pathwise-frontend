import httpClient from "../../services/http/httpClient";

// Create course
const createCourse = async (courseData) => {
    const response = await httpClient.post(
        "/courses",
        courseData
    )

    return response.data
}


// Update course details
const updateCourse = async (courseId, courseData) => {
    const response = await httpClient.patch(
        `/courses/${courseId}`,
        courseData
    )

    return response.data
}


// Update course thumbnail
const updateThumbnail = async (courseId, formData) => {
    const response = await httpClient.patch(
        `/courses/${courseId}/thumbnail`,
        formData
    )

    return response.data
}


// Remove course
const removeCourse = async (courseId) => {
    const response = await httpClient.delete(
        `/courses/${courseId}`
    )

    return response.data
}


// Save course as draft
const saveCourseAsDraft = async (courseId) => {
    const response = await httpClient.patch(
        `/courses/${courseId}/draft`
    )

    return response.data
}


// Publish course
const publishCourse = async (courseId) => {
    const response = await httpClient.patch(
        `/courses/${courseId}/publish`
    )

    return response.data
}


// Fetch one instructor-owned course
const fetchInstructorCourse = async (courseId) => {
    const response = await httpClient.get(
        `/courses/mine/${courseId}`
    )

    return response.data
}


// Fetch instructor's courses
const fetchInstructorCourses = async (params) => {
    const response = await httpClient.get(
        "/courses/mine",
        {
            params,
        }
    )

    return response.data
}


// Fetch public courses
const fetchCourses = async (params) => {
    const response = await httpClient.get(
        "/courses",
        {
            params,
        }
    )

    return response.data
}


// Fetch one public course
const fetchCurrentCourse = async (courseId) => {
    const response = await httpClient.get(
        `/courses/${courseId}`
    )

    return response.data
}


export {
    createCourse,
    updateCourse,
    updateThumbnail,
    removeCourse,
    saveCourseAsDraft,
    publishCourse,
    fetchInstructorCourse,
    fetchInstructorCourses,
    fetchCourses,
    fetchCurrentCourse,
}