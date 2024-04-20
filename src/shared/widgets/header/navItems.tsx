"use client";

import { navItems } from "@/configs/constant";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavItems = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isActive, setActive] = useState("/");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setIsScroll(window.scrollY > 0);
      }, 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathName = usePathname();
  useEffect(() => {
    setActive(pathName);
  }, [pathName, isActive, setActive]);

  return (
    <div
      className={`w-full  bg-[#fff] ${
        isScroll ? "top-0 fixed z-[10]  shadow-md" : ""
      }`}
    >
      <Navbar
        className="border-b-0 md:relative pt-3"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="sm:hidden ">
          <NavbarBrand className="">
            <p className="font-bold text-inherit  ">VILLA</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex items-center gap-7">
          <NavbarBrand>
            <p className="font-bold text-inherit text-[28px]  ">VILLA</p>
          </NavbarBrand>
          {navItems.map((i: NavItem, index: number) => (
            <NavbarMenuItem key={index}>
              <Link
                className={`leading-[40px]
                ${isActive === i.url ? "text-[#f35525]" : "text-[#000]"}`}
                href={i.url}
                size="lg"
                onClick={() => setActive(i.url)}
              >
                {i.title}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="z-[11]">
            <span className="fa fa-calendar button-img" />
            <Button className="schedule-style">Schedule a visit</Button>
          </div>
        </NavbarContent>
        <NavbarMenu>
          {navItems.map((i: NavItem, index: number) => (
            <NavbarMenuItem key={index}>
              <Link
                className={`w-full
                ${isActive === i.url ? "text-[#f35525]" : "text-[#000]"}`}
                href={i.url}
                size="lg"
                onClick={() => setActive(i.url)}
              >
                {i.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavItems;
