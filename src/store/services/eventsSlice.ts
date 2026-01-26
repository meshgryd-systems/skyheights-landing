import { API_ROUTES, RTK_TAGS } from "@/constants";
import { Event, EventFilterParams, PaginatedResponse } from "@/types";
import { apiSlice } from "./apiSlice";

export const eventsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query<PaginatedResponse<Event>, EventFilterParams>({
            query: (params) => {
                return {
                    url: `${API_ROUTES.PUBLIC.EVENTS.LIST}`,
                    params,
                    method: "GET"
                };
            },
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: () => [{ type: RTK_TAGS.EVENT, id: "LIST" }]
        }),

        getUpcomingEvents: builder.query<PaginatedResponse<Event>, EventFilterParams>({
            query: (params) => {
                return {
                    url: `${API_ROUTES.PUBLIC.EVENTS.UPCOMING}`,
                    params,
                    method: "GET"
                };
            },
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: () => [{ type: RTK_TAGS.EVENT, id: "UPCOMING" }]
        }),

        getPastEvents: builder.query<PaginatedResponse<Event>, EventFilterParams>({
            query: (params) => {
                return {
                    url: `${API_ROUTES.PUBLIC.EVENTS.PAST}`,
                    params,
                    method: "GET"
                };
            },
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: () => [{ type: RTK_TAGS.EVENT, id: "PAST" }]
        }),

        getEventsByCategory: builder.query<
            PaginatedResponse<Event>,
            { category: string } & EventFilterParams
        >({
            query: ({ category, ...params }) => {
                return {
                    url: API_ROUTES.PUBLIC.EVENTS.BY_CATEGORY.replace(":category", category),
                    params,
                    method: "GET"
                };
            },
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: (result, error, { category }) => [
                { type: RTK_TAGS.EVENT, id: `CATEGORY_${category}` }
            ]
        }),

        getEventById: builder.query<Event, string>({
            query: (id) => ({
                url: API_ROUTES.PUBLIC.EVENTS.DETAIL.replace(":id", id),
                method: "GET"
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: (result, error, id) => [{ type: RTK_TAGS.EVENT, id }]
        }),

        getEventBySlug: builder.query<Event, string>({
            query: (slug) => ({
                url: API_ROUTES.PUBLIC.EVENTS.DETAIL_BY_SLUG.replace(":slug", slug),
                method: "GET"
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: (result, error, slug) => [
                { type: RTK_TAGS.EVENT, id: slug }
            ]
        })
    })
});

export const {
    useGetEventsQuery,
    useGetUpcomingEventsQuery,
    useGetPastEventsQuery,
    useGetEventsByCategoryQuery,
    useGetEventByIdQuery,
    useGetEventBySlugQuery
} = eventsApi;
