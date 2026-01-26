import { toast } from "sonner";
import { STORAGE_KEYS } from "@/constants/storage";
import { encryptData, decryptData } from "@/utils/encryptData";

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ErrorNotification = (message: string, description?: string) => {
  if (typeof window !== "undefined") {
    console.error(message);
    toast.error(message, {
      description: description
    });
  }
};

export const SuccessNotification = (message: string, description?: string) => {
  if (typeof window !== "undefined") {
    console.log(message);
    toast.success(message, {
      description: description
    });
  }
};

/**
 * Get cookie value by name
 */
export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
};

/**
 * Set cookie with encryption and expiration
 */
export const setCookie = (
  name: string,
  value: string,
  maxAge: number = 7 * 24 * 60 * 60
): void => {
  if (typeof document === "undefined") return;
  const isSecure = window.location.protocol === "https:";
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Lax${isSecure ? "; Secure" : ""
    }`;
};

/**
 * Clear cookie by name
 */
export const clearCookie = (name: string): void => {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
};

/**
 * Set authentication cookie for middleware
 */
export const setAuthCookie = () => {
  if (typeof document !== "undefined") {
    const maxAge = 7 * 24 * 60 * 60;
    setCookie(STORAGE_KEYS.USER_INFO, "authenticated", maxAge);
  }
};

/**
 * Set access token in cookie
 */
export const setAccessTokenCookie = (token: string): void => {
  if (typeof document !== "undefined") {
    const encryptedToken = encryptData(token);
    const maxAge = 7 * 24 * 60 * 60;
    setCookie(STORAGE_KEYS.ACCESS_TOKEN, encryptedToken, maxAge);
  }
};

/**
 * Set refresh token in cookie
 */
export const setRefreshTokenCookie = (token: string): void => {
  if (typeof document !== "undefined") {
    const encryptedToken = encryptData(token);
    const maxAge = 30 * 24 * 60 * 60;
    setCookie(STORAGE_KEYS.REFRESH_TOKEN, encryptedToken, maxAge);
  }
};

/**
 * Get access token from cookie
 */
export const getAccessTokenFromCookie = (): string | null => {
  if (typeof document === "undefined") return null;
  const encryptedToken = getCookie(STORAGE_KEYS.ACCESS_TOKEN);
  if (!encryptedToken) return null;
  try {
    return decryptData(encryptedToken);
  } catch {
    return null;
  }
};

/**
 * Get refresh token from cookie
 */
export const getRefreshTokenFromCookie = (): string | null => {
  if (typeof document === "undefined") return null;
  const encryptedToken = getCookie(STORAGE_KEYS.REFRESH_TOKEN);
  if (!encryptedToken) return null;
  try {
    return decryptData(encryptedToken);
  } catch {
    return null;
  }
};

/**
 * Clear authentication cookies
 */
export const clearAuthCookie = () => {
  if (typeof document !== "undefined") {
    clearCookie(STORAGE_KEYS.USER_INFO);
    clearCookie(STORAGE_KEYS.ACCESS_TOKEN);
    clearCookie(STORAGE_KEYS.REFRESH_TOKEN);
  }
};
