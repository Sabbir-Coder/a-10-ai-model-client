import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Testimonials = () => {
    return (
        <section className="py-20 mt-20 px-6 bg-[#0B0A14] overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                        <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">Community Love</span>
                    </motion.div>

                    <SectionTitle title="Trusted by" highlight="Researchers" suffix="& Builders" />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-sm md:text-base leading-relaxed"
                    >
                        Join thousands of data scientists and engineers who rely on our platform to discover, deploy, and scale their machine learning models.
                    </motion.p>
                </div>

                {/* Featured Testimonial */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group max-w-4xl mx-auto"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative p-8 rounded-2xl bg-[#161423] border border-white/5 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                            <div className="flex items-center gap-4">
                                <img
                                    alt="Sarah Chen"
                                    className="w-16 h-16 rounded-full object-cover ring-2 ring-indigo-500/20"
                                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop"
                                />
                                <div>
                                    <h3 className="font-bold text-white text-lg font-display">Sarah Chen</h3>
                                    <p className="text-sm text-indigo-400 font-medium">Lead AI Architect @ TechFlow</p>
                                </div>
                            </div>
                            <FaQuoteLeft className="text-indigo-500/20 text-4xl" />
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed italic mb-6">
                            "The neural architecture visualization tools are absolutely game-changing. We've cut our model prototyping time by 40% since switching to this platform. It's not just a repository; it's a complete ecosystem."
                        </p>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-sm" />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Recent Feedback & Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Feedback Carousel (Left) */}
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                        <div className="flex justify-between items-end px-1">
                            <h3 className="text-xl font-bold font-display text-white">Recent Feedback</h3>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-gray-400">
                                    <FaArrowLeft className="text-sm" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-500 transition-colors">
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-[#161423] p-6 rounded-xl border border-white/5 shadow-sm flex flex-col justify-between hover:border-indigo-500/30 transition-colors group"
                            >
                                <div>
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-xs" />
                                        ))}
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors">
                                        "Finding pretrained models for niche NLP tasks used to be a nightmare. This platform made it effortless. The documentation integration is superb."
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                    <img alt="Marcus J." className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-white">Marcus J.</h4>
                                        <p className="text-xs text-gray-500">NLP Researcher</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#161423] p-6 rounded-xl border border-white/5 shadow-sm flex flex-col justify-between hover:border-indigo-500/30 transition-colors group"
                            >
                                <div>
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(4)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-xs" />
                                        ))}
                                        <FaStar className="text-gray-600 text-xs" />
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors">
                                        "The community support here is unmatched. I posted a question about YOLOv8 implementation and got help within minutes."
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                    <img alt="Elena R." className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-white">Elena R.</h4>
                                        <p className="text-xs text-gray-500">Computer Vision Eng.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Stats & CTA (Right) */}
                    <div className="col-span-12 lg:col-span-4 space-y-4 pt-12">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-[#161423] p-6 rounded-2xl text-center border border-white/5 hover:bg-white/5 transition-colors"
                            >
                                <p className="text-3xl font-bold font-display text-indigo-400">10k+</p>
                                <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider font-semibold">Active Users</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-[#161423] p-6 rounded-2xl text-center border border-white/5 hover:bg-white/5 transition-colors"
                            >
                                <p className="text-3xl font-bold font-display text-pink-500">4.9/5</p>
                                <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider font-semibold">Avg Rating</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden text-center group"
                        >
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black opacity-10 blur-xl"></div>

                            <h3 className="relative text-white font-bold text-xl mb-2 font-display">Ready to join them?</h3>
                            <p className="relative text-white/80 text-sm mb-6 max-w-xs mx-auto">Start exploring and managing your AI models today.</p>

                            <button className="relative bg-white text-indigo-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full">
                                Get Started Free
                            </button>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
