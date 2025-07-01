import { motion } from "framer-motion";

const AnimateBlock = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotate: 17,
      }}
      animate={{
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", bounce: 0.35, mass: 2 },
      }}
      transition={{ type: "spring" }}
      whileTap={{ rotate: 20, scale: 0.95 }}
      whileHover={{ scale: 1.025 }}
      className="z-20 mx-auto rounded-lg cursor-pointer shadow-art active:shadow-art-active hover:shadow-art-hover dark:shadow-none dark:bg-darkModeDetail">
      {children}
    </motion.div>
  );
};

export default AnimateBlock;
