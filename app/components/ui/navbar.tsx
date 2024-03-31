"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

import { IconHome, IconMessage, IconUser, IconKeyboard, IconBook , IconRocket   } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/",
      icon: <IconKeyboard className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/",
      icon: (
        <IconRocket className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Blogs",
      link: "/",
      icon: (
        <IconBook  className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav className="p-4" navItems={navItems} />
    </div>
  );
}

