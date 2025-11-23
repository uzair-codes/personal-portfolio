import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';

const Blog = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const blogPosts = [
    {
      id: 1,
      title: "Cisco Viptela SD-WAN implementation for Smart Cities",
      excerpt: "Explore how SD-WAN improves connectivity, security, and scalability in smart city infrastructure.",
      date: "Jan 1, 2025",
      readTime: "15 min read",
      image: "/asserts/SDN%20topology.png", // Correct path for public folder
      category: "Software Defined Networking",
    },
  ];

  return (
    <section id={id} className="scroll-mt-24 py-20 bg-white dark:bg-gray-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Latest Articles
          </motion.h2>
          <motion.div
            className="mt-2 w-16 h-1 bg-blue-600 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I share thoughts and experiences on SDN, Cloud, and Artificial Intelligence.
          </motion.p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          initial="hidden"
          animate={controls}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-1">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-4">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Read More →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;