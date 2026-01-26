import { API_ROUTES, RTK_TAGS } from "@/constants";
import {
  NewsArticle,
  FilterParams,
  PaginatedResponse,
  NEWS_STATUS
} from "@/types";
import { apiSlice } from "./apiSlice";

export interface NewsFilterParams extends FilterParams<NewsArticle> {
  status?: NEWS_STATUS;
}

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query<PaginatedResponse<NewsArticle>, NewsFilterParams>({
      query: (params) => {
        return {
          url: `${API_ROUTES.PUBLIC.NEWS.LIST}`,
          params,
          method: "GET"
        };
      },
      transformResponse: (response: any) => {
        return response?.response || response;
      },
      providesTags: () => [{ type: RTK_TAGS.NEWS, id: "LIST" }]
    }),

    getNewsById: builder.query<NewsArticle, string>({
      query: (id) => ({
        url: API_ROUTES.PUBLIC.NEWS.DETAIL.replace(":id", id),
        method: "GET"
      }),
      transformResponse: (response: any) => {
        return response?.response || response;
      },
      providesTags: (result, error, id) => [{ type: RTK_TAGS.NEWS, id }]
    }),

    getNewsBySlug: builder.query<NewsArticle, string>({
      query: (slug) => ({
        url: API_ROUTES.PUBLIC.NEWS.DETAIL_BY_SLUG.replace(":slug", slug),
        method: "GET"
      }),
      transformResponse: (response: any) => {
        return response?.response || response;
      },
      providesTags: (result, error, slug) => [{ type: RTK_TAGS.NEWS, id: slug }]
    })
  })
});

export const { useGetNewsQuery, useGetNewsByIdQuery, useGetNewsBySlugQuery } =
  newsApi;
