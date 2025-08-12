import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  const btnRef = useRef(null);
  const [circleData, setCircleData] = useState(null);

  const handleClick = () => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate maximum radius to cover viewport
    const maxX = Math.max(centerX, window.innerWidth - centerX);
    const maxY = Math.max(centerY, window.innerHeight - centerY);
    const radius = Math.sqrt(maxX ** 2 + maxY ** 2);

    setCircleData({ x: centerX, y: centerY, radius });

    toggleTheme();
  };

  return (
    <>
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

      {/* Expanding / retracting circle */}
      <AnimatePresence>
        {circleData && (
          <motion.div
            key={theme} // Trigger on theme change
            initial={{
              width: 0,
              height: 0,
              x: circleData.x,
              y: circleData.y,
              translateX: "-50%",
              translateY: "-50%",
              borderRadius: "50%",
              backgroundColor:
                theme === "light" ? "#111827" : "#F3F4F6", // dark → light colors
            }}
            animate={{
              width: circleData.radius * 2,
              height: circleData.radius * 2,
              x: circleData.x,
              y: circleData.y,
              translateX: "-50%",
              translateY: "-50%",
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            exit={{
              width: 0,
              height: 0,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            className="fixed top-0 left-0 z-40"
            onAnimationComplete={() => setCircleData(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
