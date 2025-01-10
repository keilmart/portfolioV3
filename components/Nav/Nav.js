import { useEffect, useState } from "react"; // Import necessary hooks
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

import Profile from "../Auth/Profile";
import ThemeToggle from "./ThemeToggle";
import { CircleIcon } from "./NavIcons/Index";

const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // State to track if we're on the client

  // This useEffect will run only on the client side
  useEffect(() => {
    setIsClient(true); // Set client flag to true once the component is mounted in the client
  }, []);

  // Only access window if we're on the client side
  const redirectUrl = isClient ? `${window.location.origin}/budget` : "";

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

  useEffect(() => {
    if (isClient) {
      console.log("redirectUrl:", redirectUrl); // Log the redirectUrl value
    }
  }, [isClient, redirectUrl]);

  return (
    <nav className="sticky top-0 z-30 bg-white border-b border-primary dark:bg-darkModeDetail dark:border-b-0">
      <div className="container flex items-center justify-between w-full max-w-screen-xl px-2.5 py-3 mx-auto sm:px-4 lg:px-8 md:flex-row">
        {/* Logo Section */}
        <div className="flex flex-row items-center justify-center text-sm antialiased font-semibold leading-3 tracking-wide text-primary dark:text-slate-200">
          <Link href="/">
            <a className="flex">
              <CircleIcon />
              <div className="flex items-center justify-center pl-navX pt-navY">
                <span className="text-base antialiased tracking-tight sm:text-lg font-montserrat tracking dark:tracking-normal">
                  TripleByte
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

          <div className="ml-4">
            <Profile />
            {!isAuthenticated &&
              isClient && ( // Only show sign-in button if on the client
                <button
                  onClick={() => loginWithRedirect({ redirect_uri: redirectUrl })}
                  className="btn-primary primary-grad">
                  Sign In
                </button>
              )}
            {isAuthenticated && (
              <button
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin, // Redirect to the root URL after logout
                    },
                  })
                }
                className="btn-primary primary-grad">
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
