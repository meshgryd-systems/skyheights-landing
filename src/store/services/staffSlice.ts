import { API_ROUTES, RTK_TAGS } from "@/constants";
import {
  StaffMember,
  StaffFilterParams,
  PaginatedResponse
} from "@/types";
import { apiSlice } from "./apiSlice";

export const staffApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStaff: builder.query<
      PaginatedResponse<StaffMember>,
      StaffFilterParams
    >({
      query: (params) => {
        return {
          url: `${API_ROUTES.PUBLIC.STAFF.LIST}`,
          params,
          method: "GET"
        };
      },
      transformResponse: (response: any) => {
        return response?.response || response;
      },
      providesTags: () => [{ type: RTK_TAGS.STAFF, id: "LIST" }]
    }),

    getStaffById: builder.query<StaffMember, string>({
      query: (id) => ({
        url: API_ROUTES.PUBLIC.STAFF.DETAIL.replace(":id", id),
        method: "GET"
      }),
      transformResponse: (response: any) => {
        return response?.response || response;
      },
      providesTags: (result, error, id) => [{ type: RTK_TAGS.STAFF, id }]
    }),

    getStaffBySlug: builder.query<StaffMember, string>({
      query: (slug) => ({
        url: API_ROUTES.PUBLIC.STAFF.DETAIL_BY_SLUG.replace(":slug", slug),
        method: "GET"
      }),
      transformResponse: (response: any) => {
        return response?.response || response;
      },
      providesTags: (result, error, slug) => [{ type: RTK_TAGS.STAFF, id: slug }]
    })
  })
});

export const {
  useGetStaffQuery,
  useGetStaffByIdQuery,
  useGetStaffBySlugQuery
} = staffApi;
