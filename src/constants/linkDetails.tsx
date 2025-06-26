import { ArrowUpRight, Package, Play } from "lucide-react";
import { ElementType } from "react";
import { FaGithub } from "react-icons/fa";

import type { ProjectLinkType } from "@/@types/Project";

export const linkDetails: Record<
  ProjectLinkType,
  { icon: ElementType; label: string }
> = {
  github: { icon: FaGithub, label: "GitHub" },
  site: { icon: ArrowUpRight, label: "Website" },
  playStore: { icon: Play, label: "Play Store" },
  pubDev: { icon: Package, label: "pub.dev" },
  goDev: { icon: Package, label: "go.dev" },
};
