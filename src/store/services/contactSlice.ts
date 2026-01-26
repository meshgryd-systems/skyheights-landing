import { API_ROUTES, RTK_TAGS } from "@/constants";
import { apiSlice } from "./apiSlice";

export interface ContactFormData {
  email: string;
  name?: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: string[];
}

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitContact: builder.mutation<ContactResponse, ContactFormData>({
      query: (data) => ({
        url: API_ROUTES.PUBLIC.CONTACT.SUBMIT,
        method: "POST",
        body: data
      }),
      transformResponse: (response: any) => {
        return response?.response || response;
      }
    })
  })
});

export const { useSubmitContactMutation } = contactApi;
