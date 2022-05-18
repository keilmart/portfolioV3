import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { DarkModeToggle } from "tailwind-darkmode-toggle";
import { MoonStartClone } from "../../components/Homepage/HomepageIcons/Index";

const Nav = () => {
  const NavItem = ({ item }) => {
    return (
      <Link key={item.name} href={item.href}>
        <a
          className={`text-sm py-1 hover:bg-gray-100 hover:border-b dark:hover:bg-transparent dark:hover:text-syncWave ${
            item.isActive
              ? "text-syncWave hover:text-syncWave  hover:border-syncWave dark:text-syncWave dark:hover:text-syncWave"
              : "text-secondary hover:text-primary hover:border-gray-700 dark:hover:border-white dark:text-white"
          }`}
        >
          {item.name}
        </a>
      </Link>
    );
  };

  const router = useRouter();
  const navigation = [
    { name: "Home", href: "/#", isActive: router.pathname === "/" },
    { name: "About", href: "/about", isActive: router.pathname === "/about" },
  ];

  return (
    <nav className="sticky top-0 z-30 bg-white border-b border-primary dark:bg-darkMode">
      <div className="container flex items-center justify-between w-full max-w-screen-lg px-4 py-2 mx-auto lg:px-0 md:flex-row">
        <Link href="/">
          <a className="flex flex-row items-center justify-center text-sm antialiased font-semibold leading-3 tracking-wide text-primary dark:text-white">
            <MoonStartClone xmlns="http://www.w3.org/2000/svg" />
            <div className="pl-1">
              <span>
                Keil <br />
                Martin
              </span>
            </div>
          </a>
        </Link>
        <div className="flex items-center">
          <div className="space-x-5">
            {navigation.map((item) => (
              <NavItem item={item} key={item.name} />
            ))}
          </div>
          <DarkModeToggle
            className="ml-4 text-gray-600 sm:mx-4 w-7 h-7 dark:mb-0"
            xmlns="http://www.w3.org/2000/svg"
          />
          <div className="hidden sm:block">
            <p className="block text-sm pointer-events-none dark:hidden text-syncWave">
              Light Mode
            </p>
          </div>
          <div className="hidden sm:block">
            <p className="hidden text-sm pointer-events-none dark:block text-syncWave">
              Dark Mode
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
