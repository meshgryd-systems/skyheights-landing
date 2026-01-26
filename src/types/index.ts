export enum NEWS_STATUS {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived"
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status: NEWS_STATUS;
  featuredImage?: {
    url: string;
    publicId: string;
  };
  viewsCount: number;
  isFeatured: boolean;
  publishedAt?: string;
  tags?: string[];
  metadata?: Record<string, string>;
  createdAt?: string;
  updatedAt?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface FilterParams<T> {
  page?: number;
  limit?: number;
  sort?: keyof T;
  search?: string;
}

// File Types (used by Gallery and Staff)
export interface File {
  id: string;
  url: string;
  publicId: string;
  filename?: string;
  mimeType?: string;
  size?: number;
  createdAt?: string;
  updatedAt?: string;
}

// Gallery Types
export enum GALLERY_STATUS {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived"
}

export enum GALLERY_TYPE {
  IMAGE = "image",
  VIDEO = "video"
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  type: GALLERY_TYPE;
  mediaId: string;
  media: File;
  category?: string;
  status: GALLERY_STATUS;
  displayOrder: number;
  isFeatured: boolean;
  viewsCount: number;
  tags?: string[];
  metadata?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
}

export interface GalleryFilterParams extends FilterParams<GalleryItem> {
  category?: string;
  type?: GALLERY_TYPE;
  status?: GALLERY_STATUS;
  featured?: boolean;
  tags?: string[];
}

// Staff Types
export enum STAFF_STATUS {
  ACTIVE = "active",
  INACTIVE = "inactive"
}

export interface StaffMember {
  id: string;
  firstName: string;
  lastName: string;
  bio?: string;
  position: string;
  email?: string;
  phoneNumber?: string;
  status: STAFF_STATUS;
  photoId?: string;
  photo?: File;
  displayOrder: number;
  isFeatured: boolean;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    [key: string]: any;
  };
  metadata?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
}

export interface StaffFilterParams extends FilterParams<StaffMember> {
  status?: STAFF_STATUS;
  position?: string;
  featured?: boolean;
  search?: string;
}

// Helper type for computed staff properties
export interface StaffMemberWithComputed extends StaffMember {
  fullName: string; // firstName + lastName
  category?: "leadership" | "teaching" | "support"; // Can be derived from position or metadata
  department?: string; // Can be derived from metadata
}

// Event Types
export enum EVENT_STATUS {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived",
  CANCELLED = "cancelled"
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  status: EVENT_STATUS;
  displayOrder: number;
  isFeatured: boolean;
  category?: string;
  tags?: string[];
  metadata?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventFilterParams extends FilterParams<Event> {
  status?: EVENT_STATUS;
  category?: string;
  featured?: boolean;
  upcoming?: boolean; // Filter for future events
  startDate?: string; // Filter events from this date
  endDate?: string; // Filter events until this date
  tags?: string[];
}