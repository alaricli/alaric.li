import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/alaricli/",
    label: "LinkedIn",
    icon: FaLinkedin,
    hoverClass: "group-hover:text-[#0A66C2]",
  },
  {
    href: "https://github.com/alaricli",
    label: "GitHub",
    icon: FaGithub,
    hoverClass: "group-hover:text-[#2d333b]",
  },
  {
    href: "https://www.x.com/alaric__li",
    label: "X (Twitter)",
    icon: FaXTwitter,
    hoverClass: "group-hover:text-[#2d2d2d]",
  },
  {
    href: "https://www.instagram.com/alaric_li_/",
    label: "Instagram",
    icon: FaInstagram,
    hoverClass: "group-hover:text-[#E1306C]",
  },
];

export default function Home() {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center text-center">
        <Avatar className="size-40 ring-2 ring-border md:size-48">
          <AvatarImage src="/me_squared.JPEG" alt="Portrait of Alaric Li" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <h1 className="mt-6 text-4xl font-bold tracking-tight">Alaric Li</h1>
        <div className="mt-3 flex flex-col gap-0.5 text-muted-foreground">
          <span>software engineer @ea</span>
          <span>prev: sap</span>
          <span>ubc business + cs</span>
        </div>
        <ul className="mt-6 flex items-center gap-1">
          {socialLinks.map(({ href, label, icon: Icon, hoverClass }) => (
            <li key={label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon-lg" className="group">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className={`size-5 transition-colors duration-200 ${hoverClass}`} />
                      <span className="sr-only">{label}</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
