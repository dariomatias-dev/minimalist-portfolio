import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

import { SocialLink } from "@/@types/SocialLink";

export const socialLinks: SocialLink[] = [
  {
    href: "matiasdario75@gmail.com",
    label: "E-mail",
    subLabel: "matiasdario75@gmail.com",
    icon: FiMail,
  },
  {
    href: "https://www.linkedin.com/in/dariomatias-dev/",
    label: "LinkedIn",
    subLabel: "dariomatias-dev",
    icon: FiLinkedin,
  },
  {
    href: "https://github.com/dariomatias-dev",
    label: "GitHub",
    subLabel: "dariomatias-dev",
    icon: FiGithub,
  },
  {
    href: "https://www.instagram.com/dariomatias_dev/",
    label: "Instagram",
    subLabel: "@dariomatias_dev",
    icon: FiInstagram,
  },
];
