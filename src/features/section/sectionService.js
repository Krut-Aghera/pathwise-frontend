import httpClient from "../../services/http/httpClient";


const createSection = async (courseId, data) => {
    const response = await httpClient.post(
        `/sections/course/${courseId}`,
        data
    )

    return response.data
}


const updateSection = async (sectionId, data) => {
    const response = await httpClient.patch(
        `/sections/${sectionId}`,
        data
    )

    return response.data
}


const removeSection = async (sectionId) => {
    const response = await httpClient.delete(
        `/sections/${sectionId}`
    )

    return response.data
}


const reorderSections = async (courseId, sections) => {
    const response = await httpClient.patch(
        `/sections/course/${courseId}/reorder`,
        {
            sections,
        }
    )

    return response.data
}


const publishSection = async (sectionId) => {
    const response = await httpClient.patch(
        `/sections/${sectionId}/publish`
    )

    return response.data
}


const saveSectionAsDraft = async (sectionId) => {
    const response = await httpClient.patch(
        `/sections/${sectionId}/draft`
    )

    return response.data
}


const fetchInstructorSection = async (sectionId) => {
    const response = await httpClient.get(
        `/sections/${sectionId}`
    )

    return response.data
}


const fetchCourseSections = async (courseId) => {
    const response = await httpClient.get(
        `/sections/course/${courseId}`
    )

    return response.data
}


export {
    createSection,
    updateSection,
    removeSection,
    reorderSections,
    publishSection,
    saveSectionAsDraft,
    fetchInstructorSection,
    fetchCourseSections,
}