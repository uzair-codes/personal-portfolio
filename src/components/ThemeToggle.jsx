// ThemeToggle.jsx
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  const btnRef = useRef(null);

  const handleClick = () => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const isDark = theme === "light";

    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: isDark ? "::view-transition-new(root)" : "::view-transition-old(root)",
        }
      );
    });
  };

  return (
    <motion.button
      ref={btnRef}
      onClick={handleClick}
      className="relative z-50 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-blue-400 shadow-md"
      whileTap={{ scale: 0.9, rotate: 90 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Moon size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sun size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}