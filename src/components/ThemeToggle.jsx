import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center p-1 transition-colors duration-300"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className={`w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md ${
          theme === "light"
            ? "bg-yellow-500"
            : "bg-blue-500"
        }`}
      >
        {theme === "light" ? (
          <Sun size={14} />
        ) : (
          <Moon size={14} />
        )}
      </motion.div>
    </motion.button>
  );
}
