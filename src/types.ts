export interface PersonalInfo {
  name: string;
  nameEn: string;
  birthDate: string;
  age: number;
  phone: string;
  email: string;
  secondaryEmail?: string;
  address: string;
  githubUrl: string;
  role: string;
  status: string;
  summary: string;
  aboutStory: string[];
  profileImageUrl?: string;
}

export interface Education {
  id: string;
  school: string;
  major: string;
  degree?: string;
  period: string;
  status: string;
  gpa?: string;
  maxGpa?: string;
  description?: string;
  courses?: string[];
  achievements?: string[];
}

export interface AwardCertification {
  id: string;
  date: string;
  title: string;
  organization: string;
  type: 'award' | 'certification';
  badge: string;
  description?: string;
}

export interface TechStackCategory {
  category: 'Languages' | 'Frontend' | 'Backend' | 'Database & Tools';
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    description: string;
    iconName: string;
    tags?: string[];
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: 'Fullstack' | 'Frontend' | 'Backend' | 'System & AI';
  description: string;
  keyFeatures: string[];
  roleAndAchievements: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  metrics?: { label: string; value: string }[];
  architectureNote?: string;
  isFeatured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
