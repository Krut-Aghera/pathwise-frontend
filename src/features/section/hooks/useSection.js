import {
    useFetchCourseSectionsQuery,
    useFetchInstructorSectionQuery,
} from "../sectionApi.js"

const useSection = ({ courseId, sectionId } = {}) => {
    // Fetch course sections
    const {
        data: courseSectionsResponse,
        isLoading: isSectionsLoading,
        isFetching: isSectionsFetching,
        isSuccess: isSectionsSuccess,
        isError: isSectionsError,
        error: sectionsError,
        refetch: refetchSections,
    } = useFetchCourseSectionsQuery(courseId, {
        skip: !courseId,
    })

    // Fetch instructor section
    const {
        data: instructorSectionResponse,
        isLoading: isSectionLoading,
        isFetching: isSectionFetching,
        isSuccess: isSectionSuccess,
        isError: isSectionError,
        error: sectionError,
        refetch: refetchSection,
    } = useFetchInstructorSectionQuery(sectionId, {
        skip: !sectionId,
    })

    // Data
    const sections =
        courseSectionsResponse?.data ?? courseSectionsResponse ?? []

    const section =
        instructorSectionResponse?.data ?? instructorSectionResponse ?? null

    return {
        // Course sections
        sections,

        isSectionsLoading,
        isSectionsFetching,

        isSectionsSuccess,

        isSectionsError,
        sectionsError,

        refetchSections,

        // Instructor section
        section,

        isSectionLoading,
        isSectionFetching,

        isSectionSuccess,

        isSectionError,
        sectionError,

        refetchSection,
    }
}

export default useSection
