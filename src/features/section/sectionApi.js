import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const sectionApi = createApi({
    reducerPath: "sectionApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/sections",
    }),

    tagTypes: ["Section"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Instructor section APIs

        // GET /sections/course/:courseId
        fetchCourseSections: builder.query({
            query: (courseId) => ({
                url: `/course/${courseId}`,
                method: "GET",
            }),

            providesTags: (result, error, courseId) => [
                {
                    type: "Section",
                    id: `COURSE-${courseId}`,
                },
            ],
        }),

        // GET /sections/:sectionId
        fetchInstructorSection: builder.query({
            query: (sectionId) => ({
                url: `/${sectionId}`,
                method: "GET",
            }),

            providesTags: (result, error, sectionId) => [
                {
                    type: "Section",
                    id: sectionId,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Create section

        // POST /sections/course/:courseId
        createSection: builder.mutation({
            query: ({ courseId, sectionData }) => ({
                url: `/course/${courseId}`,
                method: "POST",
                data: sectionData,
            }),

            invalidatesTags: (result, error, { courseId }) => [
                {
                    type: "Section",
                    id: `COURSE-${courseId}`,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Reorder course sections

        // PATCH /sections/course/:courseId/reorder
        reorderSections: builder.mutation({
            query: ({ courseId, sections }) => ({
                url: `/course/${courseId}/reorder`,
                method: "PATCH",
                data: {
                    sections,
                },
            }),

            invalidatesTags: (result, error, { courseId }) => [
                {
                    type: "Section",
                    id: `COURSE-${courseId}`,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Update section

        // PATCH /sections/:sectionId
        updateSection: builder.mutation({
            query: ({ sectionId, sectionData }) => ({
                url: `/${sectionId}`,
                method: "PATCH",
                data: sectionData,
            }),

            invalidatesTags: (result, error, { sectionId, courseId }) => [
                {
                    type: "Section",
                    id: sectionId,
                },
                {
                    type: "Section",
                    id: `COURSE-${courseId}`,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Publish section

        // PATCH /sections/:sectionId/publish
        publishSection: builder.mutation({
            query: (sectionId) => ({
                url: `/${sectionId}/publish`,
                method: "PATCH",
            }),

            invalidatesTags: (result, error, sectionId) => [
                {
                    type: "Section",
                    id: sectionId,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Save section as draft

        // PATCH /sections/:sectionId/draft
        saveSectionAsDraft: builder.mutation({
            query: (sectionId) => ({
                url: `/${sectionId}/draft`,
                method: "PATCH",
            }),

            invalidatesTags: (result, error, sectionId) => [
                {
                    type: "Section",
                    id: sectionId,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Remove section

        // DELETE /sections/:sectionId
        removeSection: builder.mutation({
            query: ({ sectionId }) => ({
                url: `/${sectionId}`,
                method: "DELETE",
            }),

            invalidatesTags: (result, error, { sectionId, courseId }) => [
                {
                    type: "Section",
                    id: sectionId,
                },
                {
                    type: "Section",
                    id: `COURSE-${courseId}`,
                },
            ],
        }),
    }),
})

export const {
    useFetchCourseSectionsQuery,
    useFetchInstructorSectionQuery,

    useCreateSectionMutation,
    useReorderSectionsMutation,
    useUpdateSectionMutation,
    usePublishSectionMutation,
    useSaveSectionAsDraftMutation,
    useRemoveSectionMutation,
} = sectionApi

export default sectionApi
