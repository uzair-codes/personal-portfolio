import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

const Resume = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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

  const education = [
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      institution: 'University of Engineering and Technology Peshawar, Pakistan',
      year: '2019 - 2023',
      description:
        'Graduated with core knowledge in Electrical Engineering, algorithms, and systems. Led and participated in multiple innovative technical projects and competitions.',
    },
  ];

  const experience = [
    {
      position: 'FBB ON Engineer',
      company: 'Huawei Pakistan',
      year: 'Sep 2023 – Dec 2023',
      description:
        'Worked on broadband service assurance and optical networks. Specialized in troubleshooting and customer issue resolution in FTTx deployments.',
    },
    {
      position: 'Trainee Engineer',
      company: 'Pakistan Telecommunication Company Limited (PTCL)',
      year: 'Sep 2022 – Nov 2022',
      description:
        'Gained hands-on exposure to telecom switching, fiber optics, and real-world LAN/WAN infrastructure. Shadowed experts and supported live field operations.',
    },
  ];

  return (
    <section id={id} className="scroll-mt-24 py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Resume
          </motion.h2>
          <motion.div variants={itemVariants} className="mt-2 w-16 h-1 bg-blue-600 mx-auto" />
          <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I am a passionate Electrical Engineer with real-world telecom experience and growing expertise in AI and Cloud. I love using technology to build innovative solutions.
          </motion.p>

          {/* Download Button with gradient and grow effect */}
          <motion.div variants={itemVariants} className="mt-8">
            <a
              href="/asserts/my-resume.pdf"
              download="Uzair-Resume.pdf"
              className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Timeline Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {/* Work Experience */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls}>
            <motion.div variants={itemVariants} className="flex items-center mb-8">
              <Briefcase size={24} className="text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Work Experience</h3>
            </motion.div>

            <div className="space-y-8">
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">{item.position}</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{item.company}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls}>
            <motion.div variants={itemVariants} className="flex items-center mb-8">
              <GraduationCap size={24} className="text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </motion.div>

            <div className="space-y-8">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">{item.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{item.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;