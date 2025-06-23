import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Dante Zulli",
  EMAIL: "dantezulli2004@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_EDUCATION_ON_HOMEPAGE: 1,
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Una colección de artículos sobre temas que me apasionan, y sobre mi vida como desarrollador.",
};

export const HOME: Metadata = {
  TITLE: "Dante Zulli",
  DESCRIPTION: "Hola! Soy Dante Zulli. Sean bienvenidos a mi portfolio.",
};

export const WORK: Metadata = {
  TITLE: "Experiencia Laboral",
  DESCRIPTION: "Donde trabajé y qué hice.",
};

export const EDUCATION: Metadata = {
  TITLE: "Educación y Certificaciones",
  DESCRIPTION: "Mis estudios, cursos y certificaciones.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Una colección de mis proyectos. Con links a los repositorios y demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/DanteZulli"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/dante-zulli",
  }
];
