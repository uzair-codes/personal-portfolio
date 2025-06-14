import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Pause, Play } from 'lucide-react';

const About = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  return (
    <section id={id} className="scroll-mt-24 py-20 bg-white dark:bg-gray-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mt-2 w-16 h-1 bg-blue-600 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-5 gap-8 items-center">
          {/* 🔷 Video with same style as image */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate={controls}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-2xl animate-pulse"></div>
              
              <video
                src="/asserts/my-avatar.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="relative z-10 w-full h-full object-cover rounded-xl"
                ref={(video) => {
                  if (video) {
                    if (isPlaying) {
                      video.play().catch(() => {});
                    } else {
                      video.pause();
                    }
                  }
                }}
              />
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-2 right-2 z-20 p-1 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </motion.div>

          {/* 🔷 Text Content */}
          <motion.div
            variants={variants}
            initial="hidden"
            animate={controls}
            className="md:col-span-3 space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Who I Am
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
              I’m a recent Electrical Engineering graduate from UET Peshawar with a deep passion for modern technologies like AI, Cloud Computing, and Software-Defined Networking (SDN). I’ve led impactful projects, including implementing Cisco Viptela SD-WAN for Smart City Networks and building an AI-powered wheat market forecasting tool using LSTM.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
              I’ve gained professional experience through my roles at Huawei and PTCL, where I worked on real-world DWDM and LAN networks, gaining hands-on expertise with tools like iMaster U2000 and Cisco Packet Tracer.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
              I combine engineering discipline with a drive for innovation. My goal is to contribute to intelligent infrastructure through smart technologies and to always stay curious, creative, and collaborative. I love transforming ideas into intuitive, human-centered digital experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
              When I’m not coding, you can find me exploring the latest tech trends, enjoying new books, creative designs, or networking with other curious minds in tech communities.
            </motion.p>

            {/* Quick Info Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Name:</h4>
                <p className="text-gray-600 dark:text-gray-400">Syed Uzair</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400">suzair.5525@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Location:</h4>
                <p className="text-gray-600 dark:text-gray-400">Abbottabad, Pakistan</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-400">Immediately Available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
