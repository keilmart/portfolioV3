import Link from "next/link";
import { useRouter } from "next/router";
import { CircleIcon } from "./NavIcons/Index";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const NavItem = ({ item }) => {
    return (
      <Link key={item.name} href={item.href}>
        <a
          className={`text-sm py-1 hover:bg-gray-100 hover:border-b dark:hover:bg-transparent dark:hover:text-syncWave ${
            item.isActive
              ? "text-syncWave hover:text-syncWave  hover:border-syncWave dark:text-syncWave dark:hover:text-syncWave"
              : "text-secondary hover:text-primary hover:border-gray-700 dark:hover:border-white dark:text-slate-200"
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
    <nav className="sticky top-0 z-30 bg-white border-b border-primary dark:bg-darkModeDetail dark:border-b-0">
      <div className="container flex items-center justify-between w-full max-w-screen-lg px-4 py-3 mx-auto lg:px-0 md:flex-row">
        <div className="flex flex-row items-center justify-center text-sm antialiased font-semibold leading-3 tracking-wide text-primary dark:text-slate-200">
          <Link href="/">
            <a className="flex">
              <CircleIcon />
              <div className="flex items-center justify-center pl-[.3rem] pt-[.05rem]">
                <span className="tracking-tight font-montserrat text-[15px]">
                  Keil <br />
                  Martin
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="space-x-5">
            {navigation.map((item) => (
              <NavItem item={item} key={item.name} />
            ))}
          </div>
          <div className="flex ml-5">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
