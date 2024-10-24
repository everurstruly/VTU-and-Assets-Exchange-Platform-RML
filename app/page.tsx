"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/app/primitives";
import { GithubIcon } from "@/lib/icons";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import React from "react";
import NextLink from "next/link";
import { BrandName } from "./(pwa)/navigation-top";
import { ThemeSwitch } from "@/app/theme-switch";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { HeartFilledIcon, SearchIcon } from "@/lib/icons";
import clsx from "clsx";
import {
  ChevronRightIcon,
  ChevronsRight,
  ChevronsRightIcon,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <TopNavigation />

      <main className="flex-grow">
        <section id="hero" className="pt-20 md:pt-28 pb-20 px-4">
          <div className="mx-auto max-w-lg sm:max-w-[900px] lg:max-w-2xl">
            <h1 className="mb-6 text-3xl font-semibold text-center text-white sm:text-5xl">
              Trade, <span className="text-success">Earn</span>, Vibe:
              <br />
              <span className="inline-block pt-2">
                Your Go-To Platform for{" "}
                <span className="text-primary">Giftcards</span>, Crypto, and{" "}
                <span className="text-warning">Music</span>!
              </span>
            </h1>
            <p className="mx-auto mb-9 max-w-[500px] md:text-lg text-center">
              Trade, earn rewards, and immerse yourself in a vibrant digital
              marketplace tailored to your interests.
            </p>
            <Button
              as={Link}
              color="primary"
              variant="solid"
              size="lg"
              href="/register"
              radius="md" 
              className="block w-fit h-auto py-3 mx-auto"
            >
              Register with us Today!
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-4 px-4 grid place-content-center">
        <Link
          isExternal
          href="https://t.me/everurstruly"
          title="Development team portfolio website"
          className="text-default-600 font-mono font-medium flex items-center gap-x-2"
        >
          Developed by
          <span className="text-primary font-semibold">YoursTruly</span>
        </Link>
      </footer>
    </div>
  );
}

const TopNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Blog", href: "gistnaija.com" },
    { title: "FAQ", href: "/#faq" },
    { title: "Contact us", href: "/" },
    { title: "Sponsor us", href: "/sponsor" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} classNames={{ wrapper: "px-4" }}>
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <NavbarBrand>
          <BrandName className="sm:text-xl" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-x-6" justify="end">
        {menuItems.map(({ title, href }, id) => {
          return (
            <NavbarItem key={id}>
              <Link
                color="foreground"
                href={href}
                size="md"
                className="px-2 py-2 font-medium"
              >
                {title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Start here!
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ title, href }, id) => (
          <NavbarMenuItem key={id}>
            <Link
              href={href}
              color="foreground"
              className="flex justify-between items-center gap-x-2 w-full py-2 font-medium"
            >
              {title}
              <ChevronRightIcon className="" />
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
