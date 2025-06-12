import { useEffect, useState } from "react"; // Import necessary hooks
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

import ThemeToggle from "./ThemeToggle";
import { CircleIcon } from "./NavIcons/Index";

const Nav = () => {
  const router = useRouter();

  const NavItem = ({ item }) => {
    return (
      <Link key={item.name} href={item.href}>
        <a
          className={`text-sm py-1 hover:bg-gray-100 hover:border-b dark:hover:bg-transparent dark:hover:text-syncWave ${
            item.isActive
              ? "text-syncWave hover:text-syncWave  hover:border-syncWave dark:text-syncWave dark:hover:text-syncWave"
              : "text-secondary hover:text-primary hover:border-gray-700 dark:hover:border-white dark:text-slate-200"
          }`}>
          {item.name}
        </a>
      </Link>
    );
  };

  const navigation = [
    { name: "Home", href: "/#", isActive: router.pathname === "/" },
    { name: "About", href: "/about", isActive: router.pathname === "/about" },
  ];

  return (
    <nav
      className={`sticky top-0 z-30 bg-white dark:bg-darkModeDetail ${
        router.pathname === "/budget" ? "" : "border-b border-primary dark:border-b-0"
      }`}>
      <div
        className={`flex items-center justify-between w-full px-2.5 py-3 mx-auto sm:px-4 transition-all duration-500 ease-in-out container max-w-screen-xl lg:px-8 `}>
        <div className="z-10 flex flex-row items-center justify-center text-sm antialiased font-semibold leading-3 tracking-wide text-primary dark:text-slate-200">
          <Link href="/">
            <a className="flex">
              <CircleIcon />
              <div className="flex items-center justify-center pl-navX pt-navY">
                <span
                  className={`text-base antialiased tracking-tight sm:text-lg font-montserrat tracking dark:tracking-normal `}>
                  Keil Martin
                </span>
              </div>
            </a>
          </Link>
        </div>

        <div className="flex items-center">
          <div className="space-x-2.5 sm:space-x-5">
            {navigation.map((item) => (
              <NavItem item={item} key={item.name} />
            ))}
          </div>
          <div className="flex ml-3 sm:ml-5">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
