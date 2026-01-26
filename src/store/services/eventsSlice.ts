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
    useGetEventByIdQuery,
    useGetEventBySlugQuery
} = eventsApi;
