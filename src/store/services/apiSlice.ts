import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG } from "@/constants/api";
import { RTK_TAGS } from "@/constants";
import { getAccessTokenFromCookie } from "@/utils/helpers";

const baseQuery = fetchBaseQuery({
  baseUrl: API_CONFIG.baseUrl || "/api",
  prepareHeaders: (headers) => {
    if (typeof window !== "undefined") {
      try {
        const accessToken = getAccessTokenFromCookie();
        if (accessToken) {
          headers.set("authorization", `Bearer ${accessToken}`);
        }
      } catch (error) {
        console.error("Error getting access token:", error);
      }
    }
    return headers;
  }
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: Object.values(RTK_TAGS),
  endpoints: () => ({})
});
