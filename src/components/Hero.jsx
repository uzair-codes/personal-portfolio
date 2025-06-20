import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ id }) => {
  return (
    <section 
      id={id}
      className="relative scroll-mt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="text-center px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
        >
          Uzair Niaz
        </motion.h1>

        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300"
        >
          Electrical Engineering Graduate | AI & Cloud Enthusiast
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
        >
          I’m passionate about leveraging cloud technologies and artificial intelligence to solve real-world problems. Let’s connect and build something innovative together.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium border border-gray-300 dark:border-gray-600 transition-transform transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
        </motion.div>
      </div>

      {/* Animated Down Arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
        className="absolute bottom-16 text-blue-600 dark:text-blue-400 hover:text-purple-600 transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
