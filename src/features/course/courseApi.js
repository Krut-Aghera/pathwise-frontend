import { createApi } from "@reduxjs/toolkit/query/react"

import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const courseApi = createApi({
    reducerPath: "courseApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/courses",
    }),

    tagTypes: ["Course"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Public course APIs

        // GET /courses
        fetchCourses: builder.query({
            query: ({
                page,
                limit,
                search,
                sortBy,
                sortOrder,
                level,
                language,
            } = {}) => ({
                url: "",
                method: "GET",
                params: {
                    page,
                    limit,
                    search,
                    sortBy,
                    sortOrder,
                    level,
                    language,
                },
            }),

            providesTags: ["Course"],
        }),

        // GET /courses/:courseId
        fetchCurrentCourse: builder.query({
            query: (courseId) => ({
                url: `/${courseId}`,
                method: "GET",
            }),

            providesTags: (result, error, courseId) => [
                {
                    type: "Course",
                    id: courseId,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Instructor course APIs

        // GET /courses/mine
        fetchInstructorCourses: builder.query({
            query: ({ page, limit } = {}) => ({
                url: "/mine",
                method: "GET",
                params: {
                    page,
                    limit,
                },
            }),

            providesTags: ["Course"],
        }),

        // GET /courses/mine/:courseId
        fetchInstructorCourse: builder.query({
            query: (courseId) => ({
                url: `/mine/${courseId}`,
                method: "GET",
            }),

            providesTags: (result, error, courseId) => [
                {
                    type: "Course",
                    id: courseId,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Create course

        // POST /courses
        createCourse: builder.mutation({
            query: (courseData) => ({
                url: "",
                method: "POST",
                data: courseData,
            }),

            invalidatesTags: ["Course"],
        }),

        ///////////////////////////////////////////////////////////////
        // Update course

        // PATCH /courses/:courseId
        updateCourse: builder.mutation({
            query: ({ courseId, courseData }) => ({
                url: `/${courseId}`,
                method: "PATCH",
                data: courseData,
            }),

            invalidatesTags: (result, error, { courseId }) => [
                {
                    type: "Course",
                    id: courseId,
                },
                "Course",
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Remove course

        // DELETE /courses/:courseId
        removeCourse: builder.mutation({
            query: (courseId) => ({
                url: `/${courseId}`,
                method: "DELETE",
            }),

            invalidatesTags: (result, error, courseId) => [
                {
                    type: "Course",
                    id: courseId,
                },
                "Course",
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Publish course

        // PATCH /courses/:courseId/publish
        publishCourse: builder.mutation({
            query: (courseId) => ({
                url: `/${courseId}/publish`,
                method: "PATCH",
            }),

            invalidatesTags: (result, error, courseId) => [
                {
                    type: "Course",
                    id: courseId,
                },
                "Course",
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Save course as draft

        // PATCH /courses/:courseId/draft
        saveCourseAsDraft: builder.mutation({
            query: (courseId) => ({
                url: `/${courseId}/draft`,
                method: "PATCH",
            }),

            invalidatesTags: (result, error, courseId) => [
                {
                    type: "Course",
                    id: courseId,
                },
                "Course",
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Update course thumbnail

        // PATCH /courses/:courseId/thumbnail
        updateCourseThumbnail: builder.mutation({
            query: ({ courseId, thumbnail }) => {
                const formData = new FormData()

                formData.append("thumbnail", thumbnail)

                return {
                    url: `/${courseId}/thumbnail`,
                    method: "PATCH",
                    data: formData,
                }
            },

            invalidatesTags: (result, error, { courseId }) => [
                {
                    type: "Course",
                    id: courseId,
                },
                "Course",
            ],
        }),
    }),
})

export const {
    // Public course queries
    useFetchCoursesQuery,
    useLazyFetchCoursesQuery,

    useFetchCurrentCourseQuery,
    useLazyFetchCurrentCourseQuery,

    // Instructor course queries
    useFetchInstructorCoursesQuery,
    useLazyFetchInstructorCoursesQuery,

    useFetchInstructorCourseQuery,
    useLazyFetchInstructorCourseQuery,

    // Course management
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useRemoveCourseMutation,

    // Course state
    usePublishCourseMutation,
    useSaveCourseAsDraftMutation,

    // Course thumbnail
    useUpdateCourseThumbnailMutation,
} = courseApi

export default courseApi
