export interface Skills {
  technical: string[];
  softSkills: string[];
}

export interface WorkExperience {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}

export interface Education {
  degreeName: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  cgpa: number;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  demoLink: string;
}

export interface Certificate {
  name: string;
  link: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Position {
  position: string;
  organization: string;
  startDate: string,
  endDate: string,
  contributions: string;
}

export interface Publication {
  title: string;
  conference: string;
  authors: string;
  date: string;
  link: string;
}

export interface ResumeData {
  name: string;
  email: string;
  mobile: string;
  linkedin: string;
  github: string;
  portfolio: string;
  location: string;
  summary: string;
  skills: Skills;
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  certifications: Certificate[];
  achievements: Achievement[];
  positionOfResponsibility: Position[];
  publications: Publication[];
}

export type ResumeArrayFields = {
  education: Education;
  workExperience: WorkExperience;
  projects: Project;
  certifications: Certificate;
  achievements: Achievement;
  positionOfResponsibility: Position;
  publications: Publication;
};

export type ResumeArrayKeys = keyof ResumeArrayFields;
