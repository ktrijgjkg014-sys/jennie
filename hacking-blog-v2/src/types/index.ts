// User and Authentication Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin' | 'vip';
  subscription?: {
    type: 'free' | 'premium' | 'vip';
    expiresAt?: string;
    features: string[];
  };
  createdAt: string;
  lastLogin?: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    language: string;
    emailUpdates: boolean;
  };
  stats: {
    articlesRead: number;
    commentsMade: number;
    videosWatched: number;
    totalTimeSpent: number; // in minutes
  };
}

// Article Types
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  publishDate: string;
  lastModified: string;
  readTime: number;
  featured: boolean;
  premium: boolean;
  isVipContent: boolean;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
    credentials?: string[];
  };
  coverImage?: string;
  views: number;
  likes: number;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  metadata: {
    estimatedCompletionTime: number; // in minutes
    prerequisites?: string[];
    learningObjectives?: string[];
    tools?: string[];
  };
}

// Comment System Types
export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  user: {
    name: string;
    avatar?: string;
    role: 'user' | 'admin' | 'vip';
  };
  content: string;
  createdAt: string;
  updatedAt?: string;
  parentId?: string; // for replies
  likes: number;
  isLiked?: boolean;
  isDeleted: boolean;
  isReported: boolean;
  replies?: Comment[];
  moderation: {
    isApproved: boolean;
    moderatedBy?: string;
    moderatedAt?: string;
    reason?: string;
  };
}

// View Tracking Types
export interface ViewEvent {
  id: string;
  articleId: string;
  userId?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
  duration?: number; // time spent on page in seconds
  referrer?: string;
  isUnique: boolean;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: number;
  price: {
    regular: number;
    vip: number;
    currency: string;
  };
  rating: number;
  students: number;
  reviews: CourseReview[];
  instructor: {
    name: string;
    avatar?: string;
    bio?: string;
    credentials?: string[];
    social: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  };
  modules: CourseModule[];
  coverImage?: string;
  featured: boolean;
  premium: boolean;
  isVipContent: boolean;
  tags: string[];
  certification: {
    available: boolean;
    name: string;
    requirements: string[];
  };
  requirements: string[];
  whatYoullLearn: string[];
  targetAudience: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  order: number;
  duration: string;
  lessons: {
    id: string;
    title: string;
    description?: string;
    duration: string;
    type: 'video' | 'text' | 'quiz' | 'exercise' | 'assignment';
    isFree: boolean;
    isVipContent: boolean;
    completed?: boolean;
    resources?: {
      name: string;
      url: string;
      type: 'pdf' | 'code' | 'link' | 'video';
    }[];
  }[];
}

export interface CourseReview {
  id: string;
  userId: string;
  user: {
    name: string;
    avatar?: string;
    role: 'user' | 'vip';
  };
  rating: number;
  comment: string;
  createdAt: string;
  helpful: number;
  isVerified: boolean;
}

// Video Types
export interface Video {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  videoId: string;
  duration: string;
  publishDate: string;
  views: number;
  likes: number;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  featured: boolean;
  premium: boolean;
  isVipContent: boolean;
  thumbnail?: string;
  playlist?: VideoPlaylist;
  chapter?: {
    number: number;
    title: string;
  };
  course?: {
    id: string;
    title: string;
  };
  transcript?: {
    available: boolean;
    url?: string;
  };
  quality: {
    resolutions: string[];
    hasSubtitles: boolean;
  };
}

export interface VideoPlaylist {
  id: string;
  title: string;
  description: string;
  videoCount: number;
  totalDuration: string;
  coverImage?: string;
  category: string;
  isVipContent: boolean;
  createdBy: {
    name: string;
    avatar?: string;
  };
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  articleCount: number;
  color: string;
  icon: string;
  featured: boolean;
  isVipContent: boolean;
  parentCategory?: string;
  subcategories?: Category[];
}

// Pagination Types
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Search Types
export interface SearchFilters {
  query?: string;
  category?: string;
  difficulty?: string;
  premium?: boolean;
  vip?: boolean;
  dateFrom?: string;
  dateTo?: string;
  tags?: string[];
  sortBy?: 'relevance' | 'date' | 'views' | 'rating' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

// VIP Features
export interface VIPFeatures {
  exclusiveContent: boolean;
  earlyAccess: boolean;
  privateDiscord: boolean;
  weeklyLiveStreams: boolean;
  downloadableResources: boolean;
  personalMentoring: boolean;
  advancedCourses: boolean;
  prioritySupport: boolean;
}

// Notification Settings
export interface NotificationSettings {
  email: {
    newArticles: boolean;
    courseUpdates: boolean;
    replies: boolean;
    marketing: boolean;
  };
  push: {
    newContent: boolean;
    achievements: boolean;
    reminders: boolean;
  };
  vip: {
    exclusiveContent: boolean;
    liveStreamAlerts: boolean;
    communityUpdates: boolean;
  };
}

// Contact Form Types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'general' | 'course' | 'collaboration' | 'bug-report' | 'feedback' | 'vip-inquiry';
  isVip: boolean;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon: any;
  description?: string;
  external?: boolean;
  vipOnly?: boolean;
  premium?: boolean;
}

// UI Component Types
export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
  pagination?: PaginationInfo;
}

export interface Feature {
  icon: any;
  title: string;
  description: string;
  href?: string;
  vipOnly?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
  isVip?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  skills: string[];
  vipMentor?: boolean;
}

export interface Stats {
  label: string;
  value: string;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  vipOnly?: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'vip' | 'premium';
  timestamp: string;
  read: boolean;
  action?: {
    label: string;
    href: string;
  };
  vipOnly?: boolean;
}

// Legacy types for compatibility
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type UserRole = 'user' | 'admin' | 'vip';
export type ContentType = 'article' | 'course' | 'video';
export type SubscriptionType = 'free' | 'premium' | 'vip';