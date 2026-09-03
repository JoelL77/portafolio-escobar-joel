import { Technology } from "./technology.interface";

export interface Project {

  id: number;

  title: string;

  subtitle: string;

  description: string;

  image: string;

  type: 'Personal' | 'Profesional' | 'Freelance' | 'Universidad';

  technologies: Technology[];

  featured: boolean;

  demo?: string;

  github?: string;

  role?: string;

  duration?: string;

  status?: string;

  challenge?: string;

  solution?: string;

  results?: string;

  tasks?: string[];

  gallery?: string[];

}