import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      name: "Networking & Infrastructure",
      skills: [
        { name: "Cisco Routing", level: 85 },
        { name: "Switching & VLANs", level: 80 },
        { name: "SD-WAN", level: 75 },
        { name: "Subnetting", level: 85 },
        { name: "Network Security", level: 70 },
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 },
        { name: "CI/CD", level: 60 },
        { name: "Firebase", level: 70 },
        { name: "Linux", level: 85 },
      ],
    },
    {
      name: "AI & Programming",
      skills: [
        { name: "Python", level: 80 },
        { name: "Machine Learning", level: 70 },
        { name: "Pandas/NumPy", level: 75 },
        { name: "TensorFlow", level: 60 },
        { name: "Streamlit", level: 65 },
      ],
    },
  ];

  const technologies = [
    'Cisco Packet Tracer', 'SD-WAN (Viptela)', 'AWS', 
    'Linux', 'Python', 'Terraform', 'Ansible', 'Jenkins',
    'Docker', 'Git & GitHub', 'CI/CD', 'GitHub Actions',
  ];

  return (
    <section id={id} className="scroll-mt-24 py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            My Skills
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mt-2 w-16 h-1 bg-blue-600 mx-auto"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I focus on Networking, Cloud, and Artificial Intelligence. I'm constantly learning and applying new tools and techniques to solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Skill Cards with Grow Hover */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies I Work With */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-10"
          >
            Technologies I Work With
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="relative group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105
                before:absolute before:inset-0 before:rounded-lg before:blur-md before:opacity-0 before:transition before:duration-500
                hover:before:opacity-100
                before:bg-gradient-to-r before:from-blue-500 before:to-purple-600"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 text-sm font-semibold mb-2 z-10">
                  {tech.charAt(0)}
                </div>
                <span className="text-gray-800 dark:text-gray-200 text-sm font-medium text-center z-10">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
