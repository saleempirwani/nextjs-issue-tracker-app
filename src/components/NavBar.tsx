"use client";

import { NAV_LINKS } from "@/data/mock";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="flex space-x-6 mb-5 px-5 h-14 border-b items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {NAV_LINKS.map((navLink, index) => (
          <li
            key={index}
            className={twMerge(
              "text-zinc-500 hover:text-zinc-800 transition-colors",
              pathname === navLink.link && "text-zinc-900"
            )}
          >
            <Link href={navLink.link}>{navLink.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
