import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {
  const fullText = 'Syed Uzair Shah';
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Animation timings
  const typingSpeed = 120; // ms per character
  const totalTypingTime = fullText.length * typingSpeed / 1000; // in seconds
  const rectangleAnimationTime = totalTypingTime; // synchronized with typing
  const fadeDelay = 0.8; // delay after animations complete
  const fadeDuration = 0.6;

  useEffect(() => {
    let typingTimeout;
    let finishTimeout;

    // Typing animation
    const startTyping = () => {
      let index = 0;

      const typeNextChar = () => {
        if (index < fullText.length) {
          setText(fullText.substring(0, index + 1));
          index++;
          typingTimeout = setTimeout(typeNextChar, typingSpeed);
        } else {
          // Typing is done, hide cursor after a brief delay
          setTimeout(() => setShowCursor(false), 300);
        }
      };

      typeNextChar();
    };

    // Start typing immediately
    startTyping();

    // Finish the splash screen after all animations complete
    const totalDuration = (totalTypingTime + fadeDelay + fadeDuration) * 1000;
    finishTimeout = setTimeout(() => {
      if (typeof onFinish === 'function') {
        onFinish();
      }
    }, totalDuration);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish, fullText.length, typingSpeed, totalTypingTime, fadeDelay, fadeDuration]);

  // Paths for two L-shapes starting at top-left (10, 8)
  const lShape1 = 'M 10 8 H 270 V 52'; // Top-right to bottom-right
  const lShape2 = 'M 10 8 V 52 H 270'; // Bottom-left to bottom-right

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: totalTypingTime + fadeDelay,
        duration: fadeDuration,
        ease: 'easeInOut',
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="relative w-80 h-20 flex items-center justify-center">
        {/* Animated rectangle with two L-shapes */}
        <svg
          viewBox="0 0 280 60"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rectGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* L-shape 1: Top-right to bottom-right */}
          <motion.path
            d={lShape1}
            fill="none"
            stroke="url(#rectGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: rectangleAnimationTime,
              ease: 'easeOut',
            }}
          />

          {/* L-shape 2: Bottom-left to bottom-right */}
          <motion.path
            d={lShape2}
            fill="none"
            stroke="url(#rectGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: rectangleAnimationTime,
              ease: 'easeOut',
            }}
          />
        </svg>

        {/* Text with typing animation and cursor */}
        <div className="relative z-10 font-mono text-3xl font-semibold">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {text}
          </span>
          {showCursor && (
            <span className="ml-1 text-blue-500 animate-blink">|</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;