// src/components/ThemeToggle.jsx
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/**
 * Props:
 * - theme: "light" | "dark"
 * - setTheme: function to set theme ("light" or "dark")
 *
 * Usage:
 * <ThemeToggle theme={theme} setTheme={setTheme} />
 *
 * This component will handle the circular reveal/retract animation
 * and toggle the documentElement.classList.dark class as appropriate.
 */

export default function ThemeToggle({ theme, setTheme }) {
  const btnRef = useRef(null);
  const [overlay, setOverlay] = useState(null); // { cx, cy, radius, mode } or null
  const [animating, setAnimating] = useState(false);

  const calcCircle = (x, y) => {
    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    return Math.ceil(Math.sqrt(maxX * maxX + maxY * maxY));
  };

  const handleClick = () => {
    if (animating || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = calcCircle(cx, cy);

    const isLight = theme === "light";

    if (isLight) {
      // Light -> Dark: expand overlay from 0 -> radius, set theme immediately
      setOverlay({ cx, cy, radius, mode: "expand", color: "#0f172a" }); // target background for dark
      setAnimating(true);
      // toggle theme right away (so underlying UI becomes dark while overlay covers transition)
      document.documentElement.classList.add("dark");
      setTheme("dark");
      // overlay will auto-remove on animationComplete
    } else {
      // Dark -> Light: shrink overlay from radius -> 0, set theme at animation end
      // We'll start overlay full (radius) so we can shrink it into the button.
      setOverlay({ cx, cy, radius, mode: "shrink", color: "#f3f4f6" }); // target background for light
      setAnimating(true);
      // do NOT change theme now; change at end of animation
    }
  };

  // called after overlay animation finished to clean up state & possibly finalize theme toggle
  const onOverlayComplete = (mode) => {
    if (mode === "expand") {
      // animation finished after expanding to full screen -> simply remove overlay
      setOverlay(null);
      setAnimating(false);
    } else {
      // shrink completed -> switch theme to light now, remove overlay
      document.documentElement.classList.remove("dark");
      setTheme("light");
      setOverlay(null);
      setAnimating(false);
    }
  };

  return (
    <>
      {/* Button */}
      <button
        ref={btnRef}
        onClick={handleClick}
        aria-label="Toggle theme"
        className="relative z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-md focus:outline-none
                   bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-300
                   hover:scale-[1.03] transition-transform duration-200"
        title="Toggle theme"
        disabled={animating}
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="moon"
              initial={{ rotate: -40, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 40, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.36, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <Moon size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 40, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -40, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.36, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <Sun size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Overlay that uses clip-path driven by CSS variables for a smooth circle animation */}
      <AnimatePresence>
        {overlay && (
          <motion.div
            key={`${overlay.mode}-${overlay.radius}-${overlay.cx}-${overlay.cy}`}
            // initial depends on mode:
            initial={
              overlay.mode === "expand"
                ? { ["--r"]: "0px" } // expand from zero
                : { ["--r"]: `${overlay.radius}px` } // start full and shrink
            }
            animate={{
              // animate --r variable to target
              ["--r"]:
                overlay.mode === "expand" ? `${overlay.radius}px` : "0px",
            }}
            transition={{
              duration: 0.62,
              ease: [0.22, 1, 0.36, 1], // slightly bouncy-ish ease (telegram-like)
            }}
            // style contains cx/cy and background color
            style={{
              // CSS variables used by clip-path inside .theme-circle-overlay
              ["--cx"]: `${overlay.cx}px`,
              ["--cy"]: `${overlay.cy}px`,
              ["--bg"]: overlay.color,
              // set initial --r fallback
              ["--r"]: overlay.mode === "expand" ? "0px" : `${overlay.radius}px`,
            }}
            onAnimationComplete={() => onOverlayComplete(overlay.mode)}
            className="theme-circle-overlay fixed inset-0 pointer-events-none z-[80] overflow-hidden"
          >
            {/* an inner element that actually paints the background color and uses clip-path */}
            <div className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
