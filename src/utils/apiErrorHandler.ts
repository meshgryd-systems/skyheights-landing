import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { capitalize, ErrorNotification } from "./helpers";
import { apiSlice } from "@/store/services";

export interface ApiErrorData {
  message?: string;
  errors?: Record<string, string[]>;
}

export const isApiError = (error: unknown): error is any => {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof (error as FetchBaseQueryError).data === "object" &&
    (error as FetchBaseQueryError).data !== null
  );
};

export const getErrorMessage = (error: unknown): string => {
  if (isApiError(error)) {
    return error.data.message || "An error occurred";
  }
  return "An unexpected error occurred";
};

export const getFieldErrors = (error: unknown): Record<string, string[]> => {
  if (isApiError(error)) {
    return error.data.errors || {};
  }
  return {};
};

const extractValidationErrors = (error: any) => {
  if (error && Array.isArray(error)) {
    const details = error;
    const result: string[] = [];
    details.forEach((d: any) => {
      result.push(`${capitalize(d.path)} - ${d.message} `);
    });

    return result;
  }

  return undefined;
};

const handleError = (error: any) => {
  if (error?.message) {
    ErrorNotification(error.message);
    return error.message;
  }

  return undefined;
};

export const errorMiddleware: Middleware =
  ({ dispatch }) =>
    (next) =>
      (action: any) => {
        if (isRejectedWithValue(action)) {
          if (
            action.payload.status === 401 &&
            typeof window !== 'undefined' &&
            !window.location.pathname.includes("/auth/")
          ) {
            apiSlice.util.resetApiState();
            return next(action);
          }
          const errorData =
            action.payload.data?.error || action.payload.data?.data?.error;

          if (errorData?.details) {
            const validationErrors = extractValidationErrors(errorData?.details);
            action.payload.validationErrors = validationErrors;
            for (const error of validationErrors || []) {
              ErrorNotification(error);
            }
          } else {
            handleError(errorData);
          }
        }

        return next(action);
      };
