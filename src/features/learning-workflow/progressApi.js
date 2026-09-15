import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../../app/network/axiosBaseQuery"

const progressApi = createApi({
    reducerPath: "progressApi",

    baseQuery: axiosBaseQuery({
        baseUrl: "/progress/students",
    }),

    tagTypes: ["Progress"],

    endpoints: (builder) => ({
        ///////////////////////////////////////////////////////////////
        // Fetch course progress
        //
        // GET /progress/students/courses/:courseId

        fetchCourseProgress: builder.query({
            query: (courseId) => ({
                url: `/courses/${courseId}`,
                method: "GET",
            }),

            /*
             * Progress is user-specific and changes frequently while
             * the student is learning.
             *
             * When LearningPage unmounts, remove the unused cached
             * progress immediately so reopening the course fetches
             * the latest progress from the backend.
             */
            keepUnusedDataFor: 0,

            providesTags: (result, error, courseId) => [
                {
                    type: "Progress",
                    id: `COURSE-${courseId}`,
                },
            ],
        }),

        ///////////////////////////////////////////////////////////////
        // Initialize lecture progress
        //
        // POST /progress/students/courses/:courseId/lectures/:lectureId

        initializeLectureProgress: builder.mutation({
            query: ({ courseId, lectureId }) => ({
                url: `/courses/${courseId}/lectures/${lectureId}`,
                method: "POST",
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Update lecture progress
        //
        // PATCH /progress/students/courses/:courseId/lectures/:lectureId

        updateLectureProgress: builder.mutation({
            query: ({
                courseId,
                lectureId,
                lastPosition,
                watchedDuration,
            }) => ({
                url: `/courses/${courseId}/lectures/${lectureId}`,
                method: "PATCH",
                data: {
                    lastPosition,
                    watchedDuration,
                },
            }),
        }),

        ///////////////////////////////////////////////////////////////
        // Complete lecture
        //
        // POST /progress/students/courses/:courseId/lectures/:lectureId/complete

        completeLectureProgress: builder.mutation({
            query: ({ courseId, lectureId }) => ({
                url: `/courses/${courseId}/lectures/${lectureId}/complete`,
                method: "POST",
            }),
        }),
    }),
})

export const {
    useLazyFetchCourseProgressQuery,
    useFetchCourseProgressQuery,
    useInitializeLectureProgressMutation,
    useUpdateLectureProgressMutation,
    useCompleteLectureProgressMutation,
} = progressApi

export default progressApi
