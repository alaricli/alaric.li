"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        {/* Desktop: nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Button asChild variant="ghost">
                <Link href={href}>{label}</Link>
              </Button>
            </li>
          ))}
        </ul>

        {/* Mobile: brand */}
        <span className="text-sm font-semibold md:hidden">Alaric Li</span>

        {/* Desktop: action buttons */}
        <ul className="hidden items-center gap-2 md:flex">
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

        {/* Mobile: hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto flex max-w-4xl flex-col gap-1 px-6 py-4">
            {navLinks.map(({ href, label }) => (
              <Button
                key={href}
                asChild
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setIsOpen(false)}
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t pt-3">
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://drive.google.com/file/d/1W_Lpz3W5KBd5UJkbq76ja9_E5T7s0Ec-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText />
                  Resume
                </a>
              </Button>
              <Button asChild className="w-full">
                <a
                  href="mailto:alaricli@outlook.com?subject=Hello%20Alaric&body=Hello%20Alaric,"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
