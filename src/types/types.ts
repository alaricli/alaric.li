import type { ReactElement } from "react";

export interface SocialLink {
  href: string;
  icon: ReactElement;
  label: string;
  hoverColor: string;
}
