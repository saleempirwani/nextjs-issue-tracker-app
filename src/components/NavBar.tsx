"use client";

import { NAV_LINKS } from "@/data/mock";
import { Avatar, Popover, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
  const pathname = usePathname();

  const onLogout = () => {};

  const renderAvatar = () => (
    <Popover.Root>
      <Popover.Trigger>
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
      </Popover.Trigger>
      <Popover.Content>
        <Text as="p">msr.piwani.dev@gmail.com</Text>
        <Popover.Close>
          <Text color="red" className="cursor-pointer" onClick={onLogout}>
            Logout
          </Text>
        </Popover.Close>
      </Popover.Content>
    </Popover.Root>
  );

  return (
    <nav className="flex items-center justify-between mb-5 px-5 h-14 border-b ">
      <div className="flex items-center space-x-6">
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
      </div>
      {renderAvatar()}
    </nav>
  );
};

export default NavBar;
