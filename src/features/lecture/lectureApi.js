import { createApi } from "@reduxjs/toolkit/query/react"

import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const lectureApi = createApi({
    reducerPath: "lectureApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/lectures",
    }),

    tagTypes: ["Lecture"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Instructor lecture APIs

        // GET /lectures/sections/:sectionId
        fetchSectionLectures: builder.query({
            query: (sectionId) => ({
                url: `/sections/${sectionId}`,
                method: "GET",
            }),

            providesTags: (result, error, sectionId) => [
                {
                    type: "Lecture",
                    id: `SECTION-${sectionId}`,
                },
            ],
        }),

        // GET /lectures/:lectureId
        fetchInstructorLecture: builder.query({
            query: (lectureId) => ({
                url: `/${lectureId}`,
                method: "GET",
            }),

            providesTags: (result, error, lectureId) => [
                {
                    type: "Lecture",
                    id: lectureId,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Create lecture

        // POST /lectures/sections/:sectionId
        createLecture: builder.mutation({
            query: ({ sectionId, lectureData }) => ({
                url: `/sections/${sectionId}`,
                method: "POST",
                data: lectureData,
            }),

            invalidatesTags: (result, error, { sectionId }) => [
                {
                    type: "Lecture",
                    id: `SECTION-${sectionId}`,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Update lecture

        // PATCH /lectures/:lectureId
        updateLecture: builder.mutation({
            query: ({ lectureId, lectureData }) => ({
                url: `/${lectureId}`,
                method: "PATCH",
                data: lectureData,
            }),

            invalidatesTags: (result, error, { lectureId, sectionId }) => [
                {
                    type: "Lecture",
                    id: lectureId,
                },

                ...(sectionId
                    ? [
                          {
                              type: "Lecture",
                              id: `SECTION-${sectionId}`,
                          },
                      ]
                    : []),
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Remove lecture

        // DELETE /lectures/:lectureId
        removeLecture: builder.mutation({
            query: ({ lectureId }) => ({
                url: `/${lectureId}`,
                method: "DELETE",
            }),

            invalidatesTags: (result, error, { lectureId, sectionId }) => [
                {
                    type: "Lecture",
                    id: lectureId,
                },

                ...(sectionId
                    ? [
                          {
                              type: "Lecture",
                              id: `SECTION-${sectionId}`,
                          },
                      ]
                    : []),
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Reorder section lectures

        // PATCH /lectures/sections/:sectionId/reorder
        reorderLectures: builder.mutation({
            query: ({ sectionId, lectures }) => ({
                url: `/sections/${sectionId}/reorder`,
                method: "PATCH",
                data: {
                    lectures,
                },
            }),

            invalidatesTags: (result, error, { sectionId }) => [
                {
                    type: "Lecture",
                    id: `SECTION-${sectionId}`,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Lecture video APIs

        // PATCH /lectures/:lectureId/video
        uploadLectureVideo: builder.mutation({
            query: ({ lectureId, video }) => {
                const formData = new FormData()

                formData.append("video", video)

                return {
                    url: `/${lectureId}/video`,
                    method: "PATCH",
                    data: formData,
                }
            },

            invalidatesTags: (result, error, { lectureId, sectionId }) => [
                {
                    type: "Lecture",
                    id: lectureId,
                },

                ...(sectionId
                    ? [
                          {
                              type: "Lecture",
                              id: `SECTION-${sectionId}`,
                          },
                      ]
                    : []),
            ],
        }),

        // DELETE /lectures/:lectureId/video
        removeLectureVideo: builder.mutation({
            query: ({ lectureId }) => ({
                url: `/${lectureId}/video`,
                method: "DELETE",
            }),

            invalidatesTags: (result, error, { lectureId, sectionId }) => [
                {
                    type: "Lecture",
                    id: lectureId,
                },

                ...(sectionId
                    ? [
                          {
                              type: "Lecture",
                              id: `SECTION-${sectionId}`,
                          },
                      ]
                    : []),
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Publish lecture

        // PATCH /lectures/:lectureId/publish
        publishLecture: builder.mutation({
            query: ({ lectureId }) => ({
                url: `/${lectureId}/publish`,
                method: "PATCH",
            }),

            invalidatesTags: (result, error, { lectureId, sectionId }) => [
                {
                    type: "Lecture",
                    id: lectureId,
                },

                ...(sectionId
                    ? [
                          {
                              type: "Lecture",
                              id: `SECTION-${sectionId}`,
                          },
                      ]
                    : []),
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Save lecture as draft

        // PATCH /lectures/:lectureId/draft
        saveLectureAsDraft: builder.mutation({
            query: ({ lectureId }) => ({
                url: `/${lectureId}/draft`,
                method: "PATCH",
            }),

            invalidatesTags: (result, error, { lectureId, sectionId }) => [
                {
                    type: "Lecture",
                    id: lectureId,
                },

                ...(sectionId
                    ? [
                          {
                              type: "Lecture",
                              id: `SECTION-${sectionId}`,
                          },
                      ]
                    : []),
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Student lecture API

        // GET /lectures/:lectureId/learn
        fetchStudentLecture: builder.query({
            query: (lectureId) => ({
                url: `/${lectureId}/learn`,
                method: "GET",
            }),

            providesTags: (result, error, lectureId) => [
                {
                    type: "Lecture",
                    id: `STUDENT-${lectureId}`,
                },
            ],
        }),
    }),
})

export const {
    useFetchSectionLecturesQuery,
    useFetchInstructorLectureQuery,

    useCreateLectureMutation,
    useUpdateLectureMutation,
    useRemoveLectureMutation,
    useReorderLecturesMutation,

    useUploadLectureVideoMutation,
    useRemoveLectureVideoMutation,

    usePublishLectureMutation,
    useSaveLectureAsDraftMutation,

    useFetchStudentLectureQuery,
} = lectureApi

export default lectureApi
