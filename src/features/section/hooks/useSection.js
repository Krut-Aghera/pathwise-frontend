import { useCallback } from "react"

import {
    useLazyFetchCourseSectionsQuery,
    useLazyFetchInstructorSectionQuery,
} from "../sectionApi.js"

const useSection = () => {
    // Course sections
    const [
        fetchCourseSectionsQuery,
        {
            data: courseSectionsResponse,
            isLoading: isSectionsLoading,
            isFetching: isSectionsFetching,
            isSuccess: isSectionsSuccess,
            isError: isSectionsError,
            error: sectionsError,
            reset: resetSections,
        },
    ] = useLazyFetchCourseSectionsQuery()

    // Instructor section
    const [
        fetchInstructorSectionQuery,
        {
            data: instructorSectionResponse,
            isLoading: isSectionLoading,
            isFetching: isSectionFetching,
            isSuccess: isSectionSuccess,
            isError: isSectionError,
            error: sectionError,
            reset: resetSection,
        },
    ] = useLazyFetchInstructorSectionQuery()

    ///////////////////////////////////////////////////////////////
    // Fetch course sections

    const fetchSections = useCallback(
        async (courseId) => {
            try {
                const result = await fetchCourseSectionsQuery(courseId).unwrap()

                return {
                    success: true,
                    data: result,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [fetchCourseSectionsQuery]
    )

    ///////////////////////////////////////////////////////////////
    // Fetch instructor section

    const fetchSection = useCallback(
        async (sectionId) => {
            try {
                const result =
                    await fetchInstructorSectionQuery(sectionId).unwrap()

                return {
                    success: true,
                    data: result,
                }
            } catch (error) {
                return {
                    success: false,
                    error,
                }
            }
        },
        [fetchInstructorSectionQuery]
    )

    ///////////////////////////////////////////////////////////////
    // Data

    const sections =
        courseSectionsResponse?.data ?? courseSectionsResponse ?? []

    const section =
        instructorSectionResponse?.data ?? instructorSectionResponse ?? null

    ///////////////////////////////////////////////////////////////
    // Overall state

    const isLoading = isSectionsLoading || isSectionLoading

    const isFetching = isSectionsFetching || isSectionFetching

    return {
        // Course sections
        fetchSections,
        sections,

        isSectionsLoading,
        isSectionsFetching,
        isSectionsSuccess,

        isSectionsError,
        sectionsError,

        resetSections,

        // Instructor section
        fetchSection,
        section,

        isSectionLoading,
        isSectionFetching,
        isSectionSuccess,

        isSectionError,
        sectionError,

        resetSection,

        // Overall state
        isLoading,
        isFetching,
    }
}

export default useSection
