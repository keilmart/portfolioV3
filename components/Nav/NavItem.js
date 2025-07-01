import Link from "next/link";

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
export default NavItem;
