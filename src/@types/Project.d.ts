export type ProjectLinkType =
  | "github"
  | "site"
  | "playStore"
  | "pubDev"
  | "goDev";

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: ProjectLink[];
}
