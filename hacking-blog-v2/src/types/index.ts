export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'
  readTime: number
  image?: string
  featured?: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  level: 'Principiante' | 'Intermedio' | 'Avanzado'
  duration: string
  price: number
  originalPrice?: number
  currency: string
  rating: number
  students: number
  lessons: number
  modules: CourseModule[]
  prerequisites: string[]
  learningOutcomes: string[]
  skills: string[]
  image: string
  featured: boolean
  published: boolean
  category: string
}

export interface CourseModule {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  duration: string
  order: number
}

export interface Lesson {
  id: string
  title: string
  description: string
  type: 'video' | 'text' | 'quiz' | 'lab' | 'assignment'
  duration: string
  order: number
  content?: string
  videoUrl?: string
  resources?: string[]
  completed?: boolean
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  type: 'general' | 'course' | 'collaboration' | 'bug-report' | 'feedback'
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'student' | 'instructor' | 'admin'
  createdAt: string
  preferences: {
    theme: 'light' | 'dark' | 'system'
    language: string
    notifications: boolean
  }
}

export interface SearchFilters {
  query: string
  category: string
  difficulty: string
  tags: string[]
  dateRange: {
    start?: string
    end?: string
  }
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
  pagination?: PaginationInfo
}

export interface NavItem {
  name: string
  href: string
  icon: any
  description?: string
  external?: boolean
}

export interface Feature {
  icon: any
  title: string
  description: string
  href?: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  avatar?: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
  skills: string[]
}

export interface Stats {
  label: string
  value: string
  change?: {
    value: number
    type: 'increase' | 'decrease'
  }
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  timestamp: string
  read: boolean
  action?: {
    label: string
    href: string
  }
}