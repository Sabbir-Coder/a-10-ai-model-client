import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdRocketLaunch, MdLogin, MdArrowForward } from 'react-icons/md';

const GetStarted = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden flex items-center justify-center min-h-[600px]" id="get-started">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
          alt="AI Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A14] via-[#0B0A14]/90 to-[#0B0A14]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold tracking-widest mb-6 backdrop-blur-sm">
            UNLOCK THE FUTURE
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white font-display tracking-tight leading-tight">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">AI Journey</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Ready to explore the infinite possibilities of Artificial Intelligence?
            Join a community of innovators managing, sharing, and evolving the next generation of neural models.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to='/auth/register' className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
            <button className="relative flex items-center gap-3 bg-[#0B0A14] hover:bg-[#161423] text-white font-bold px-10 py-5 rounded-full transition-all duration-200 border border-white/10 group-hover:scale-105">
              <span>Register Now</span>
              <MdRocketLaunch className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-purple-400" />
            </button>
          </Link>

          <Link to='/auth/login' className="group">
            <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold px-10 py-5 rounded-full backdrop-blur-md border border-white/10 transition-all duration-200 group-hover:scale-105 hover:border-white/30 hover:shadow-lg hover:shadow-white/5">
              <span>Log In</span>
              <MdLogin className="text-xl group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-10 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {/* Trust badges or simple text can go here */}
          <p className="text-sm text-gray-500 uppercase tracking-widest">Powered by Advanced Neural Networks</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;