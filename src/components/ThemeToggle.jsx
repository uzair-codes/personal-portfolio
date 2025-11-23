// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Moon, Sun } from 'lucide-react';

// // ThemeToggle Component - Drop-in replacement for your current toggle
// function ThemeToggle({ theme, toggleTheme }) {
//   const [isAnimating, setIsAnimating] = useState(false);
//   const buttonRef = useRef(null);
//   const [circleCenter, setCircleCenter] = useState({ x: 0, y: 0 });
//   const [maxRadius, setMaxRadius] = useState(0);

//   // Calculate circle center and maximum radius needed to cover screen
//   const calculateCircleParams = () => {
//     if (!buttonRef.current) return;

//     const rect = buttonRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;

//     // Calculate maximum distance to any corner
//     const distances = [
//       Math.hypot(centerX, centerY), // top-left
//       Math.hypot(window.innerWidth - centerX, centerY), // top-right
//       Math.hypot(centerX, window.innerHeight - centerY), // bottom-left
//       Math.hypot(window.innerWidth - centerX, window.innerHeight - centerY), // bottom-right
//     ];

//     const radius = Math.max(...distances);

//     setCircleCenter({ x: centerX, y: centerY });
//     setMaxRadius(radius);
//   };

//   // Update circle parameters on resize
//   useEffect(() => {
//     calculateCircleParams();
//     window.addEventListener('resize', calculateCircleParams);
//     return () => window.removeEventListener('resize', calculateCircleParams);
//   }, []);

//   const handleToggle = () => {
//     if (isAnimating) return;
    
//     calculateCircleParams();
//     setIsAnimating(true);

//     const isLightToDark = theme === 'light';

//     if (isLightToDark) {
//       // Light → Dark: Apply theme at 85% of animation (527ms of 620ms)
//       setTimeout(() => {
//         toggleTheme();
//       }, 527);

//       // Reset animation state after completion
//       setTimeout(() => {
//         setIsAnimating(false);
//       }, 620);
//     } else {
//       // Dark → Light: Apply theme after animation completes
//       setTimeout(() => {
//         toggleTheme();
//         setIsAnimating(false);
//       }, 620);
//     }
//   };

//   return (
//     <>
//       {/* Circular Overlay */}
//       <AnimatePresence>
//         {isAnimating && (
//           <motion.div
//             key="theme-overlay"
//             initial={{
//               clipPath: theme === 'light' 
//                 ? `circle(0px at ${circleCenter.x}px ${circleCenter.y}px)`
//                 : `circle(${maxRadius}px at ${circleCenter.x}px ${circleCenter.y}px)`,
//             }}
//             animate={{
//               clipPath: theme === 'light'
//                 ? `circle(${maxRadius}px at ${circleCenter.x}px ${circleCenter.y}px)`
//                 : `circle(0px at ${circleCenter.x}px ${circleCenter.y}px)`,
//             }}
//             transition={{
//               duration: 0.62,
//               ease: [0.22, 1, 0.36, 1], // Telegram's easing curve
//             }}
//             style={{
//               willChange: 'clip-path',
//             }}
//             className={`fixed inset-0 z-[100] pointer-events-none ${
//               theme === 'light' 
//                 ? 'bg-gray-900' // Dark background for light → dark
//                 : 'bg-white' // Light background for dark → light
//             }`}
//           />
//         )}
//       </AnimatePresence>

//       {/* Toggle Button */}
//       <button
//         ref={buttonRef}
//         onClick={handleToggle}
//         disabled={isAnimating}
//         className="relative p-2 rounded-full bg-secondary-bg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50"
//         aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           {theme === 'light' ? (
//             <motion.div
//               key="moon"
//               initial={{ rotate: 45, scale: 0.8, opacity: 0 }}
//               animate={{ rotate: 0, scale: 1, opacity: 1 }}
//               exit={{ rotate: -45, scale: 1.1, opacity: 0 }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 300,
//                 damping: 20,
//               }}
//             >
//               <Moon size={20} className="text-gray-700" />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="sun"
//               initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
//               animate={{ rotate: 0, scale: 1, opacity: 1 }}
//               exit={{ rotate: 45, scale: 1.1, opacity: 0 }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 300,
//                 damping: 20,
//               }}
//             >
//               <Sun size={20} className="text-yellow-400" />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </button>
//     </>
//   );
// }

// // Demo App to showcase the toggle
// export default function App() {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//       {/* Demo Navigation Bar */}
//       <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//               Syed Uzair Shah
//             </div>
            
//             <div className="flex items-center space-x-6">
//               <span className="text-sm text-gray-600 dark:text-gray-300">
//                 Click the toggle →
//               </span>
//               <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Demo Content */}
//       <main className="pt-24 pb-12 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//             Telegram-Style Theme Toggle
//           </h1>
          
//           <div className="prose dark:prose-invert max-w-none">
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
//               This theme toggle replicates Telegram's signature circular reveal animation:
//             </p>
            
//             <ul className="space-y-2 text-gray-700 dark:text-gray-300">
//               <li>✨ <strong>Circular reveal/retract</strong> with precise easing (cubic-bezier)</li>
//               <li>🎯 <strong>Perfect timing:</strong> Theme switches at 85% during light→dark</li>
//               <li>🔄 <strong>Smooth icon transitions</strong> with spring physics</li>
//               <li>📱 <strong>Fully responsive</strong> - works on all screen sizes</li>
//               <li>⚡ <strong>GPU accelerated</strong> with will-change optimization</li>
//             </ul>

//             <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
//               <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//                 Implementation Details
//               </h3>
//               <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//                 <li><strong>Light → Dark:</strong> Circle expands from toggle, theme switches at 527ms (85% of 620ms)</li>
//                 <li><strong>Dark → Light:</strong> Circle retracts to toggle, theme switches after 620ms</li>
//                 <li><strong>Easing:</strong> cubic-bezier(0.22, 1, 0.36, 1) - Telegram's exact curve</li>
//                 <li><strong>Icon Animation:</strong> Spring physics (stiffness: 300, damping: 20)</li>
//                 <li><strong>Center Calculation:</strong> Dynamic based on button position</li>
//               </ul>
//             </div>

//             <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
//                 <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Light Mode Active</h4>
//                 <p className="text-sm text-blue-800 dark:text-blue-200">
//                   Shows moon icon. Click to expand dark circle from center.
//                 </p>
//               </div>
              
//               <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
//                 <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Dark Mode Active</h4>
//                 <p className="text-sm text-purple-800 dark:text-purple-200">
//                   Shows sun icon. Click to retract light circle to center.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }