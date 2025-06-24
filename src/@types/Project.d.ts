export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: ProjectLinks;
}

export interface ProjectLinks {
  playStore?: string;
  github?: string;
  site?: string;
}
