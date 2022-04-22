import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }) => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.5 }}
      className="overflow-x-hidden bg-white dark:bg-black"
    >
      <div className="container max-w-screen-lg mx-auto">
        <div className="px-4 lg:px-0">{children}</div>
      </div>
    </motion.main>
  );
};

export default Layout;
