import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail, Phone, MapPin, Send, Linkedin, Github, Copy
} from 'lucide-react';
import { SiHuggingface } from 'react-icons/si';

const Contact = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const [copied, setCopied] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id={id} className="scroll-mt-24 py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" animate={controls} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div initial="hidden" animate={controls} className="md:col-span-1 space-y-8">
            <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:suzair.5525@gmail.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      suzair.5525@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {["+92 302 8809178", "+92 318 1888008"].map((phone, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-600"
                          >
                            {phone}
                          </a>
                          <button onClick={() => copyToClipboard(phone)} className="hover:text-blue-600">
                            <Copy size={16} />
                          </button>
                          {copied === phone && (
                            <span className="text-xs text-green-500 ml-1">Copied!</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Abbottabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-10 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/uzair-codes" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:scale-110 transition transform duration-300 hover:text-white hover:bg-blue-500">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/syed-uzair-niaz-ali-shah/" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:scale-110 transition transform duration-300 hover:text-white hover:bg-blue-600">
                  <Linkedin size={20} />
                </a>
                <a href="https://huggingface.co/uzair-codes" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:scale-110 transition transform duration-300 hover:text-white hover:bg-yellow-400">
                  <SiHuggingface size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Formspree setup */}
          <motion.div initial="hidden" animate={controls} className="md:col-span-2">
            <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

              {submitSuccess && (
                <div className="p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded-lg mb-6">
                  Message sent! I’ll get back to you soon.
                </div>
              )}

              <form
                action="https://formspree.io/f/mzzgrowz"  // This must match your Formspree form ID
                method="POST"
                onSubmit={() => setSubmitSuccess(true)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                    <input type="text" name="name" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                    <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input type="text" name="subject" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <div>
                  <button type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 shadow-lg">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;