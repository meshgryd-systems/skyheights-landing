// Simple encryption utilities for demo purposes
// In production, use a proper encryption library

export const encryptData = (data: string): string => {
  if (typeof window === "undefined") return "";
  try {
    return btoa(data);
  } catch {
    return "";
  }
};

export const decryptData = (data: string | null): string => {
  if (!data || typeof window === "undefined") return "";
  try {
    return atob(data);
  } catch {
    return "";
  }
};
