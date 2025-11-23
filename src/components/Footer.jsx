import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { SiHuggingface } from 'react-icons/si';

const Footer = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="bg-gray-100 dark:bg-gray-800 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Syed Uzair Shah
          </span>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-6">
            {/* Icon wrapper with glow effect */}
            {[
              {
                href: "https://github.com/uzair-codes",
                Icon: Github,
                label: "GitHub"
              },
              {
                href: "https://www.linkedin.com/in/syed-uzair-niaz-ali-shah/",
                Icon: Linkedin,
                label: "LinkedIn"
              },
              {
                href: "https://huggingface.co/uzair-codes",
                Icon: SiHuggingface,
                label: "Hugging Face"
              }
            ].map(({ href, Icon, label }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative inline-flex items-center justify-center transition-transform transform hover:scale-125"
              >
                {/* Glow background on hover */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-md bg-gradient-to-r from-blue-500 to-purple-600"></span>

                {/* Actual icon */}
                <span className="relative z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                  <Icon
                    size={24}
                    className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300"
                  />
                </span>
              </a>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm text-gray-500 dark:text-gray-400"
          >
            &copy; {new Date().getFullYear()} Syed Uzair Niaz Ali Shah. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;