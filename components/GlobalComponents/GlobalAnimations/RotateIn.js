import { motion } from "framer-motion";

const RotateIn = ({ children }) => {
  return (
    <motion.div
      className="hidden overflow-hidden md:block md:w-40 md:h-40"
      initial={{ rotate: 11 }}
      animate={{ rotate: 0 }}
      transition={{ type: "spring", bounce: 0.25, mass: 2 }}>
      {children}
    </motion.div>
  );
};

export default RotateIn;
