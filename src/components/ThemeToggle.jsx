// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeToggle({ theme, setTheme }) {
//   const btnRef = useRef(null);
//   const [overlay, setOverlay] = useState(null); // { cx, cy, radius, mode, color } or null
//   const [animating, setAnimating] = useState(false);

//   const calcCircle = (x, y) => {
//     const maxX = Math.max(x, window.innerWidth - x);
//     const maxY = Math.max(y, window.innerHeight - y);
//     return Math.ceil(Math.sqrt(maxX ** 2 + maxY ** 2));
//   };

//   const handleClick = () => {
//     if (animating || !btnRef.current) return;

//     const rect = btnRef.current.getBoundingClientRect();
//     const cx = rect.left + rect.width / 2;
//     const cy = rect.top + rect.height / 2;
//     const radius = calcCircle(cx, cy);

//     const isLight = theme === "light";

//     setAnimating(true);

//     if (isLight) {
//       // Light -> Dark
//       setOverlay({
//         cx,
//         cy,
//         radius,
//         mode: "expand",
//         color: "#0f172a", // Your portfolio's dark mode bg color
//       });

//       // Flip theme just before circle fully covers (~85% into animation)
//       setTimeout(() => {
//         document.documentElement.classList.add("dark");
//         setTheme("dark");
//       }, 520); // match Telegram timing

//     } else {
//       // Dark -> Light
//       setOverlay({
//         cx,
//         cy,
//         radius,
//         mode: "shrink",
//         color: "#f3f4f6", // Your portfolio's light mode bg color
//       });

//       // Flip theme just after shrink finishes
//       setTimeout(() => {
//         document.documentElement.classList.remove("dark");
//         setTheme("light");
//       }, 620);
//     }
//   };

//   const onOverlayComplete = () => {
//     setOverlay(null);
//     setAnimating(false);
//   };

//   return (
//     <>
//       {/* Toggle button */}
//       <button
//         ref={btnRef}
//         onClick={handleClick}
//         aria-label="Toggle theme"
//         className="relative z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-md
//                    bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-300
//                    hover:scale-[1.05] transition-transform duration-200"
//         disabled={animating}
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           {theme === "light" ? (
//             <motion.div
//               key="moon"
//               initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
//               animate={{ rotate: 0, opacity: 1, scale: 1 }}
//               exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//                 duration: 0.36
//               }}
//               className="flex items-center justify-center"
//             >
//               <Moon size={18} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="sun"
//               initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
//               animate={{ rotate: 0, opacity: 1, scale: 1 }}
//               exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//                 duration: 0.36
//               }}
//               className="flex items-center justify-center"
//             >
//               <Sun size={18} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </button>

//       {/* Overlay circle animation */}
//       <AnimatePresence>
//         {overlay && (
//           <motion.div
//             key={`${overlay.mode}-${overlay.cx}-${overlay.cy}`}
//             initial={{
//               "--r": overlay.mode === "expand" ? "0px" : `${overlay.radius}px`,
//             }}
//             animate={{
//               "--r": overlay.mode === "expand" ? `${overlay.radius}px` : "0px",
//             }}
//             transition={{
//               duration: 0.62,
//               ease: [0.22, 1, 0.36, 1], // Telegram's cubic ease
//             }}
//             style={{
//               "--cx": `${overlay.cx}px`,
//               "--cy": `${overlay.cy}px`,
//               "--bg": overlay.color,
//               "--r": overlay.mode === "expand" ? "0px" : `${overlay.radius}px`,
//             }}
//             onAnimationComplete={onOverlayComplete}
//             className="theme-circle-overlay fixed inset-0 z-40 pointer-events-none"
//           >
//             <div className="w-full h-full" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
