import { API_ROUTES, RTK_TAGS } from "@/constants";
import {
    Announcement,
    PaginatedResponse
} from "@/types";
import { apiSlice } from "./apiSlice";

export const announcementApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAnnouncements: builder.query<
            PaginatedResponse<Announcement>,
            any
        >({
            query: (params) => {
                return {
                    url: `${API_ROUTES.PUBLIC.ANNOUNCEMENTS.LIST}`,
                    params,
                    method: "GET"
                };
            },
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: () => [{ type: RTK_TAGS.ANNOUNCEMENT, id: "LIST" }]
        }),

        getAnnouncementById: builder.query<Announcement, string>({
            query: (id) => ({
                url: API_ROUTES.PUBLIC.ANNOUNCEMENTS.DETAIL.replace(":id", id),
                method: "GET"
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: (result, error, id) => [
                { type: RTK_TAGS.ANNOUNCEMENT, id }
            ]
        }),

        createAnnouncement: builder.mutation<
            Announcement,
            Partial<Announcement>
        >({
            query: (data) => ({
                url: `${API_ROUTES.PUBLIC.ANNOUNCEMENTS.LIST}`,
                method: "POST",
                body: data
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            invalidatesTags: () => [{ type: RTK_TAGS.ANNOUNCEMENT, id: "LIST" }]
        }),

        updateAnnouncement: builder.mutation<
            Announcement,
            { id: string; data: Partial<Announcement> }
        >({
            query: ({ id, data }) => ({
                url: API_ROUTES.PUBLIC.ANNOUNCEMENTS.DETAIL.replace(":id", id),
                method: "PUT",
                body: data
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            invalidatesTags: (result, error, { id }) => [
                { type: RTK_TAGS.ANNOUNCEMENT, id },
                { type: RTK_TAGS.ANNOUNCEMENT, id: "LIST" }
            ]
        }),

        deleteAnnouncement: builder.mutation<void, string>({
            query: (id) => ({
                url: API_ROUTES.PUBLIC.ANNOUNCEMENTS.DETAIL.replace(":id", id),
                method: "DELETE"
            }),
            invalidatesTags: (result, error, id) => [
                { type: RTK_TAGS.ANNOUNCEMENT, id },
                { type: RTK_TAGS.ANNOUNCEMENT, id: "LIST" }
            ]
        }),

        sendAnnouncement: builder.mutation<Announcement, string>({
            query: (id) => ({
                url: API_ROUTES.PUBLIC.ANNOUNCEMENTS.SEND.replace(":id", id),
                method: "POST"
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            invalidatesTags: (result, error, id) => [
                { type: RTK_TAGS.ANNOUNCEMENT, id },
                { type: RTK_TAGS.ANNOUNCEMENT, id: "LIST" }
            ]
        }),

        cancelAnnouncement: builder.mutation<Announcement, string>({
            query: (id) => ({
                url: API_ROUTES.PUBLIC.ANNOUNCEMENTS.CANCEL.replace(":id", id),
                method: "POST"
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            invalidatesTags: (result, error, id) => [
                { type: RTK_TAGS.ANNOUNCEMENT, id },
                { type: RTK_TAGS.ANNOUNCEMENT, id: "LIST" }
            ]
        })
    })
});

export const {
    useGetAnnouncementsQuery,
    useGetAnnouncementByIdQuery,
    useCreateAnnouncementMutation,
    useUpdateAnnouncementMutation,
    useDeleteAnnouncementMutation,
    useSendAnnouncementMutation,
    useCancelAnnouncementMutation
} = announcementApi;
