"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./toggle-dark-mode";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="containe-r flex items-center justify-between py-4">
        <Link href="#" className="text-2xl font-bold">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-squre.png"
              alt="Darawan Omar"
              className="rounded-full size-6"
              width={48}
              height={48}
            />
            <span>Mr Dev</span>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors duration-500 ease-in-out hover:shadow-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="max-md:hidden">
          <ThemeToggle />
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] bg-white dark:bg-black"
          >
            <SheetTitle className="flex justify-between mr-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo-squre.png"
                  alt="Darawan Omar"
                  className="rounded-full size-6"
                  width={48}
                  height={48}
                />
                <span>Darawan Omar</span>
              </div>

              <ThemeToggle />
            </SheetTitle>

            <nav className="flex flex-col space-y-4 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <SheetDescription className="mt-10">
              &copy; {new Date().getFullYear()} Darawan Omar. All rights
              reserved.
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
