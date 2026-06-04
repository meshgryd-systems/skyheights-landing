import { API_ROUTES, RTK_TAGS } from "@/constants";
import { Testimonial, FilterParams, PaginatedResponse } from "@/types";
import { apiSlice } from "./apiSlice";

export const testimonialsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query<
      PaginatedResponse<Testimonial>,
      FilterParams<Testimonial> | void
    >({
      query: (params) => ({
        url: API_ROUTES.PUBLIC.TESTIMONIALS.LIST,
        params: params ?? { limit: 6 },
        method: "GET"
      }),
      transformResponse: (response: any) => response?.response || response,
      providesTags: () => [{ type: RTK_TAGS.TESTIMONIAL, id: "LIST" }]
    })
  })
});

export const { useGetTestimonialsQuery } = testimonialsApi;
