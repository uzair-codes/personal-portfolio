import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  const btnRef = useRef(null);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setCirclePosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    toggleTheme();
  };

  return (
    <>
      {/* Button */}
      <motion.button
        ref={btnRef}
        onClick={handleClick}
        whileTap={{ scale: 0.9 }}
        className="relative z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 shadow-md"
      >
        <motion.div
          key={theme}
          initial={{ rotate: 0, scale: 0.8 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {theme === "light" ? (
            <Moon size={20} className="text-blue-500" />
          ) : (
            <Sun size={20} className="text-yellow-400" />
          )}
        </motion.div>
      </motion.button>

      {/* Expanding / Retracting Circle */}
      <AnimatePresence>
        <motion.div
          key={theme}
          initial={{
            scale: theme === "light" ? 0 : 50,
            opacity: 1,
            x: circlePosition.x - window.innerWidth / 2,
            y: circlePosition.y - window.innerHeight / 2,
          }}
          animate={{
            scale: theme === "light" ? 50 : 0,
            opacity: theme === "light" ? 1 : 0,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`fixed top-0 left-0 w-[100vmax] h-[100vmax] rounded-full z-[50] ${
            theme === "light" ? "bg-gray-900" : "bg-white"
          }`}
        />
      </AnimatePresence>
    </>
  );
}
