"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlignRight, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

import nav_logo from "../assets/nav_logo.png";
import nav_logo_dark_mode from "../assets/nav_logo_dark_mode.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Templates", path: "/templates" },
    {
      name: "AI Assistant",
      subItems: [
        {
          title: "Resume Suggestions",
          path: "/ai/resume-suggestions",
          description:
            "Enhance bullet points, add role-specific keywords, and improve phrasing for better impact.",
        },
        {
          title: "Cover Letter Generator",
          path: "/ai/cover-letter",
          description:
            "Generate personalized cover letters based on your resume and job description.",
        },
        {
          title: "Visual Enhancer",
          path: "/ai/visual-enhancer",
          description:
            "Automatically suggest improved resume layouts and formatting that match your content.",
        },
        {
          title: "Interview Q&A",
          path: "/ai/interview",
          description:
            "Get common interview questions and suggested answers tailored to your resume and role.",
        },
      ],
    },
  ];

  const navLinkClass = (path: string) =>
    `block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      pathname === path
        ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white"
        : "text-muted-foreground hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {hasMounted && (
            <Image
              src={isDarkMode ? nav_logo_dark_mode : nav_logo}
              alt="ATS Forge"
              className="w-28"
              priority
            />
          )}
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-2">
              {navItems.map((item) =>
                item.subItems ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-accent-foreground px-4 py-2 text-sm rounded-md">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 bg-popover rounded-md shadow-xl w-fit ">
                      <ul className="grid gap-4 md:grid-cols-2 w-[500px] lg:w-[430px]">
                        {item.subItems.map((sub) => (
                          <li
                            key={sub.title}
                            className="group bg-muted/30 hover:bg-muted p-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                          >
                            <Link href={sub.path} className="block space-y-1">
                              <h3 className="text-sm font-semibold text-primary group-hover:underline">
                                {sub.title}
                              </h3>
                              <p className="text-xs text-muted-foreground leading-snug">
                                {sub.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.path}>
                    <Link href={item.path} className={navLinkClass(item.path)}>
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-semibold transition"
          >
            Login
          </Link>

          <ModeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <ModeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="focus:outline-none"
          >
            {mobileOpen ? <X size={24} /> : <AlignRight size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-background border-r shadow-xl transform transition-transform duration-300 z-40 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <Image
            src={isDarkMode ? nav_logo_dark_mode : nav_logo}
            alt="ATS Forge"
            className="w-24"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-muted-foreground"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map((item) =>
            item.subItems ? (
              <Accordion key={item.name} type="single" collapsible>
                <AccordionItem value={item.name}>
                  <AccordionTrigger className="text-muted-foreground hover:text-accent-foreground px-4 py-2 text-sm rounded-md">
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      {item.subItems.map((sub) => (
                        <li key={sub.path}>
                          <Link
                            href={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="block text-md font-normal text-muted-foreground hover:text-primary transition"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={navLinkClass(item.path)}
              >
                {item.name}
              </Link>
            )
          )}

          <Link
            href="/login"
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md font-semibold text-center transition"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-30 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
