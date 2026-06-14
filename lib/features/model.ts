// ── Shared types ─────────────────────────────────────────────────────────────
export type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  available: boolean;
  email: string;
  phone: string;
  location: string;
  currentLocation: string;
  cvUrl: string;
  socials: { github: string; linkedin: string; twitter: string; naukri: string; instagram: string };
};

export type Stat = { id: number; value: string; label: string; icon: string };

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  bg: string;
};

export type TechLove = { id: number; name: string; icon: string };

export type TechStack = {
  id: number;
  category: string;
  techs: string;
  color: string;
  icon: string;
};

export type Skill = { id: number; name: string; level: number; category: string };

export type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  category: string;
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
};

export type AboutMe = {
  story: string;
  mission: string;
  funFacts: string[];
  education: { degree: string; school: string; year: string }[];
};