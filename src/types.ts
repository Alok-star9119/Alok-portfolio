export interface Project {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  tags: string[];
  image: string;
  problem: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoType: 'petri_net' | 'multi_agent' | 'sentiment' | 'geodata';
  deepDive: {
    architecture: string;
    dataset: string;
    conformanceOrAccuracy: string;
    codeSnippet: string;
    pipelineSteps: string[];
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  type: 'Hackathon' | 'Certification' | 'Engineering' | 'Internship';
  award?: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
  coursework: string[];
  badge?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
}

export interface PostItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  category: string;
  tags: string[];
  contentSnippet: string;
  link?: string;
}

