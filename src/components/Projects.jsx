import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiHuggingface } from 'react-icons/si';

const Projects = ({ id }) => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const allProjects = [
    {
      id: 1,
      title: "TERMINEER",
      description: "Your Engineering Dictionary Demystified.",
      tags: ["AI", "Engineering"], // 🔥 Updated tag list
      demoLink: "https://huggingface.co/spaces/uzair-codes/TERMINEER",
      status: "complete",
    },
    {
      id: 2,
      title: "PowerCaster",
      description: "Smart energy load forecasting using time-series prediction.",
      tags: ["AI", "Energy"], // 🔥 Updated tag list
      demoLink: "https://huggingface.co/spaces/uzair-codes/PowerCaster",
      status: "complete",
    },
    {
      id: 3,
      title: "AI Media Transcriber Pro",
      description: "Transcribe and Summarize Audio/Video files.",
      tags: ["AI"], // 🔥 Updated tag list
      demoLink: "https://huggingface.co/spaces/uzair-codes/AI-Media-Transcriber-Pro",
      status: "complete",
    },
    {
      id: 4,
      title: "RAG APP",
      description: "Upload documents and retrieve information using AI.",
      tags: ["AI"],
      demoLink: "https://huggingface.co/spaces/uzair-codes/RAG-APP",
      status: "complete",
    },
    {
      id: 5,
      title: "BoltBot",
      description: "The Happiest Chatbot on Earth.",
      tags: ["AI"],
      demoLink: "https://huggingface.co/spaces/uzair-codes/BoltBot",
      status: "complete",
    },
    {
      id: 6,
      title: "AI Flood Forecast Assistant",
      description: "AI-powered assistant for predicting floods and managing disaster relief.",
      tags: ["AI"],
      status: "coming",
    },
  ];

  const tags = ['all', ...new Set(allProjects.flatMap(p => p.tags))];

  useEffect(() => {
    controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.tags.includes(filter)));
    }
  }, [filter]);

  return (
    <section id={id} className="scroll-mt-24 py-20 bg-white dark:bg-gray-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial="hidden" animate={controls} className="text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </motion.h2>
          <motion.div className="mt-2 w-16 h-1 bg-blue-600 mx-auto" />
          <motion.p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my AI, Cloud, and Networking projects. Built with real-world applications in mind.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mt-10">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 transform hover:scale-105 ${
                filter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                <span className="text-xl font-bold text-blue-700 dark:text-blue-300 text-center px-4 text-wrap">
                  {project.title}
                </span>

                {project.status === "coming" && (
                  <span className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold bg-yellow-400 text-black rounded-full">
                    Coming Soon
                  </span>
                )}

                {/* HuggingFace Icon */}
                {project.status === "complete" && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 left-2 p-2 bg-white dark:bg-gray-900 rounded-full text-yellow-600 dark:text-yellow-400 shadow-md hover:bg-yellow-100 dark:hover:bg-yellow-800 transition duration-300"
                    aria-label="Hugging Face Demo"
                  >
                    <SiHuggingface size={18} />
                  </a>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
