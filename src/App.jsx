import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
// import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [targetSection, setTargetSection] = useState(null);
  const [isSplashDone, setIsSplashDone] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 64; // Matches h-16 (4rem)
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      setTargetSection(id);
      setActiveSection(id);
      
      if (menuOpen) {
        // For mobile menu, close menu first, then scroll after a short delay
        setMenuOpen(false);
        setTimeout(() => {
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }, 100); // Short delay to allow menu exit animation
      } else {
        // For desktop or direct clicks, scroll immediately
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (currentScroll / documentHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(currentScroll > 10);

      const navbarHeight = 64; // Matches h-16 (4rem)
      const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'blog', 'contact'];
      let inViewSection = null;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarHeight + 100 && rect.bottom >= navbarHeight) {
            inViewSection = section;
            break;
          }
        }
      }

      if (inViewSection) {
        const nextActive = targetSection || inViewSection;
        if (activeSection !== nextActive) {
          setActiveSection(nextActive);
        }
        if (targetSection && inViewSection === targetSection) {
          setTargetSection(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set correct active section on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, targetSection]);

  return (
    <>
      <style>
        {`
          .scroll-progress {
            height: 4px;
            background: linear-gradient(to right, #3B82F6, #8B5CF6);
            transition: width 0.3s ease-out;
          }

          .typing-logo span {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            border-right: 2px solid transparent;
            animation: typing 4s steps(20) infinite, blink-caret 0.75s step-end infinite;
          }

          @keyframes typing {
            0% { width: 0; }
            50% { width: 100%; }
            100% { width: 100%; }
          }

          @keyframes blink-caret {
            0%, 100% { border-color: transparent; }
            50% { border-color: #3B82F6; }
          }

          .nav-link-gradient {
            background: linear-gradient(to right, #3B82F6, #8B5CF6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 8px rgba(59, 130, 246, 0.5), 0 0 12px rgba(139, 92, 246, 0.3);
          }
        `}
      </style>

      <AnimatePresence>
        {!isSplashDone && (
          <SplashScreen key="splash" onFinish={() => setIsSplashDone(true)} />
        )}
      </AnimatePresence>

      {isSplashDone && (
        <div className="min-h-screen font-sans transition-colors duration-300">
          <div className="fixed top-0 left-0 w-full z-[60] scroll-progress" style={{ width: `${scrollProgress}%` }} />

          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
              isScrolled
                ? 'bg-transparent'
                : theme === 'dark' ? 'bg-primary-dark' : 'bg-navbar-light'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div
                  className="flex-shrink-0 cursor-pointer typing-logo"
                  onClick={() => scrollToSection('hero')}
                >
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to bg-clip-text text-transparent">
                    Syed Uzair Shah
                  </span>
                </div>

                <div className="hidden md:flex space-x-6">
                  {['hero', 'about', 'skills', 'projects', 'resume', 'blog', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`relative text-sm font-medium capitalize transition-colors duration-300 ${
                        activeSection === section
                          ? 'nav-link-gradient after:w-full'
                          : 'text-primary-text dark:text-gray-300 after:w-0'
                      } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-primary-gradient-from after:to-primary-gradient-to after:transition-all after:duration-300 hover:nav-link-gradient hover:after:w-full`}
                    >
                      {section === 'hero' ? 'Home' : section}
                    </button>
                  ))}
                </div>

                <div className="flex items-center">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-secondary-bg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                  </button>

                  <div className="ml-4 md:hidden">
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="p-2 rounded-full bg-secondary-bg dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                      aria-label="Main menu"
                    >
                      {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden"
                >
                  <div className="px-4 pt-4 pb-6 bg-navbar-light dark:bg-primary-dark space-y-2">
                    {['hero', 'about', 'skills', 'projects', 'resume', 'blog', 'contact'].map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`block w-full text-left px-4 py-2 text-base font-medium capitalize rounded transition-colors ${
                          activeSection === section
                            ? 'bg-primary-gradient-from text-white'
                            : 'text-primary-text dark:text-gray-200'
                        }`}
                      >
                        {section === 'hero' ? 'Home' : section}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>

          <main className="pt-16">
            <Hero id="hero" />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <Resume id="resume" />
            <Blog id="blog" />
            <Contact id="contact" />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;