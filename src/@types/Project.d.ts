export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: ProjectLink[];
}
