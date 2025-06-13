import { motion } from 'framer-motion';

const Hero = ({ id }) => {
  return (
    <section 
      id={id}
      className="scroll-mt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
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
            className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto md:mx-0"
          >
            I’m passionate about leveraging cloud technologies and artificial intelligence to solve real-world problems. Let’s connect and build something innovative together.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
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
        </motion.div>

        {/* Profile Image with Glow Hover */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-10 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 rounded-full overflow-hidden bg-white shadow-md transform transition-transform duration-500 hover:scale-105 hover:shadow-blue-500/40 hover:ring-4 hover:ring-blue-400/30">
              <img
                src="/asserts/me.jpg"
                alt="Uzair Niaz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
