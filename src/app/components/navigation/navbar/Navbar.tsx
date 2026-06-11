import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <ul className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Button asChild variant="ghost">
                <Link href={href}>{label}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-2">
          <li>
            <Button asChild variant="outline">
              <a
                href="https://drive.google.com/file/d/1W_Lpz3W5KBd5UJkbq76ja9_E5T7s0Ec-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText />
                Resume
              </a>
            </Button>
          </li>
          <li>
            <Button asChild>
              <a href="mailto:alaricli@outlook.com?subject=Hello%20Alaric&body=Hello%20Alaric,">
                <Mail />
                Contact Me
              </a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
