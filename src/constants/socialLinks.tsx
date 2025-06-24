import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

import { SocialLink } from "@/@types/SocialLink";

export const socialLinks: SocialLink[] = [
  {
    href: "mailto:matiasdario75@gmail.com",
    label: "E-mail",
    subLabel: "matiasdario75@gmail.com",
    icon: <FiMail className="h-6 w-6" />,
  },
  {
    href: "https://www.linkedin.com/in/dariomatias-dev/",
    label: "LinkedIn",
    subLabel: "dariomatias-dev",
    icon: <FiLinkedin className="h-6 w-6" />,
  },
  {
    href: "https://github.com/dariomatias-dev",
    label: "GitHub",
    subLabel: "dariomatias-dev",
    icon: <FiGithub className="h-6 w-6" />,
  },
  {
    href: "https://www.instagram.com/dariomatias_dev/",
    label: "Instagram",
    subLabel: "@dariomatias_dev",
    icon: <FiInstagram className="h-6 w-6" />,
  },
];
