export type UserRole = 'superadmin' | 'admin' | 'client';

export type ServiceCategory = 'legal' | 'nutrition';

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type BlogCategory = 'derecho' | 'nutricion' | 'salud_sociedad';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  role: UserRole;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ServiceCategory;
  duration_minutes: number;
  price: number;
  is_active: boolean;
  features?: string[];
}

export interface AvailabilitySlot {
  id: string;
  day_of_week: number; // 0=Sunday, 1=Monday, etc.
  start_time: string; // "09:00"
  end_time: string; // "14:00"
  category: ServiceCategory;
  is_active: boolean;
}

export interface Appointment {
  id: string;
  client_id: string;
  client_name?: string;
  client_email?: string;
  client_phone?: string;
  service_id: string;
  service?: ServiceItem;
  start_time: string;
  end_time: string;
  status: AppointmentStatus;
  notes?: string;
  client_notes?: string;
  meeting_url?: string;
  created_at: string;
}

export interface ClientRecord {
  id: string;
  client_id: string;
  category: ServiceCategory;
  title: string;
  content: string;
  attachments?: { name: string; url: string; size?: string }[];
  created_by?: string;
  created_at: string;
  updated_at?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author_id?: string;
  author_name?: string;
  cover_image?: string;
  reading_time_minutes: number;
  is_published: boolean;
  published_at: string;
}
