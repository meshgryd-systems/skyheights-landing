import { format } from "date-fns";

/**
 * Formats a date string into the specified format.
 * @param dateStr - The date string to format.
 * @param formatStr - The format string.
 * @returns The formatted date string.
 */
export function formatDateUtil(
    dateStr: string,
    formatStr: string = "yyyy-MM-dd HH:mm:ss"
): string {
    const date = new Date(dateStr);
    return format(date, formatStr);
}
