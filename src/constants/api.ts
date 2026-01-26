// API endpoints
export const API_ROUTES = {
  // Forum
  PUBLIC: {
    NEWS: {
      LIST: "/public/news",
      DETAIL: "/public/news/:id",
      DETAIL_BY_SLUG: "/public/news/slug/:slug"
    },
    GALLERY: {
      LIST: "/public/gallery",
      DETAIL: "/public/gallery/:id",
      DETAIL_BY_SLUG: "/public/gallery/slug/:slug"
    },
    STAFF: {
      LIST: "/public/staff",
      DETAIL: "/public/staff/:id",
      DETAIL_BY_SLUG: "/public/staff/:slug"
    },
    EVENTS: {
      LIST: "/public/events",
      UPCOMING: "/public/events/upcoming",
      PAST: "/public/events/past",
      BY_CATEGORY: "/public/events/category/:category",
      DETAIL: "/public/events/:id",
      DETAIL_BY_SLUG: "/public/events/slug/:slug"
    },
    ANNOUNCEMENTS: {
      LIST: "/public/announcements",
      DETAIL: "/public/announcements/:id",
      SEND: "/public/announcements/:id/send",
      CANCEL: "/public/announcements/:id/cancel"
    },
    CONTACT: {
      SUBMIT: "/public/contact"
    }
  },
};

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  assetsUrl: process.env.NEXT_PUBLIC_API_ASSETS_URL,
  timeout: 60000
} as const;

export type ApiKey = keyof typeof API_ROUTES;
export type ApiEndpoint = (typeof API_ROUTES)[ApiKey] extends {
  [key: string]: string;
}
  ? (typeof API_ROUTES)[ApiKey][keyof (typeof API_ROUTES)[ApiKey]]
  : (typeof API_ROUTES)[ApiKey];
