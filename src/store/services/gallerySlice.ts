import { API_ROUTES, RTK_TAGS } from "@/constants";
import {
    GalleryItem,
    GalleryFilterParams,
    PaginatedResponse
} from "@/types";
import { apiSlice } from "./apiSlice";

export const galleryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getGallery: builder.query<
            PaginatedResponse<GalleryItem>,
            GalleryFilterParams
        >({
            query: (params) => {
                return {
                    url: `${API_ROUTES.PUBLIC.GALLERY.LIST}`,
                    params,
                    method: "GET"
                };
            },
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: () => [{ type: RTK_TAGS.GALLERY, id: "LIST" }]
        }),

        getGalleryById: builder.query<GalleryItem, string>({
            query: (id) => ({
                url: API_ROUTES.PUBLIC.GALLERY.DETAIL.replace(":id", id),
                method: "GET"
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: (result, error, id) => [{ type: RTK_TAGS.GALLERY, id }]
        }),

        getGalleryBySlug: builder.query<GalleryItem, string>({
            query: (slug) => ({
                url: API_ROUTES.PUBLIC.GALLERY.DETAIL_BY_SLUG.replace(":slug", slug),
                method: "GET"
            }),
            transformResponse: (response: any) => {
                return response?.response || response;
            },
            providesTags: (result, error, slug) => [
                { type: RTK_TAGS.GALLERY, id: slug }
            ]
        })
    })
});

export const {
    useGetGalleryQuery,
    useGetGalleryByIdQuery,
    useGetGalleryBySlugQuery
} = galleryApi;
