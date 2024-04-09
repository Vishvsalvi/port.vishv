"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

import { IconHome, IconKeyboard, IconBook , IconRocket   } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconKeyboard className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconRocket className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Blogs",
      link: "#blogs",
      icon: (
        <IconBook  className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full bg-transparent">
      <FloatingNav className="p-4" navItems={navItems} />
    </div>
  );
}

