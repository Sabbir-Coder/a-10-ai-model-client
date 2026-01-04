import { MdEmail, MdForum, MdSend, MdPerson, MdAlternateEmail, MdLabel, MdExpandMore } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const ContactPage = () => {
    return (
        <div className="min-h-screen relative overflow-hidden  bg-[#0B0A14] mt-12 text-gray-100 font-inter">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-[#1e1b4b] to-[#0f0c15] opacity-100 z-0 pointer-events-none"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 z-0"></div>
            <div className="absolute bottom-[20%] -left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 z-0"></div>

            <main className="relative z-10 px-6 py-12 flex flex-col items-center">
                <div className="mb-10 text-center max-w-lg mx-auto">
                    <span className="inline-block py-1 px-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-widest mb-4">
                        SUPPORT & INQUIRIES
                    </span>
                    <SectionTitle title="Get in" highlight="Touch" suffix="" />
                    <p className="text-gray-400 text-sm leading-relaxed mt-4">
                        Have a question about neural architectures or need custom model training? We're here to help you achieve your AI goals.
                    </p>
                </div>

                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <a href="mailto:support@aimodel.com" className="group p-6 rounded-2xl bg-[#161423]/70 backdrop-blur-xl border border-white/5 hover:bg-white/5 transition-all text-center flex flex-col items-center gap-3 shadow-lg hover:shadow-purple-500/10">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                            <MdEmail className="text-2xl" />
                        </div>
                        <div>
                            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Email Us</span>
                            <span className="text-sm font-semibold text-white tracking-wide">support@aimodel.com</span>
                        </div>
                    </a>

                    <a href="#" className="group p-6 rounded-2xl bg-[#161423]/70 backdrop-blur-xl border border-white/5 hover:bg-white/5 transition-all text-center flex flex-col items-center gap-3 shadow-lg hover:shadow-blue-500/10">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                            <MdForum className="text-2xl" />
                        </div>
                        <div>
                            <span className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Live Chat</span>
                            <span className="text-sm font-semibold text-green-400 tracking-wide">Online Now</span>
                        </div>
                    </a>
                </div>

                {/* Form Section */}
                <div className="w-full max-w-2xl bg-[#161423]/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-900/10 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white font-exo">
                        <MdSend className="text-purple-500" /> Send a Message
                    </h2>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide" htmlFor="name">Full Name</label>
                            <div className="relative">
                                <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                                    placeholder="Ex. Sarah Connor"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <MdAlternateEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide" htmlFor="subject">Subject</label>
                            <div className="relative">
                                <MdLabel className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                                <select
                                    id="subject"
                                    className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:bg-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all text-sm appearance-none cursor-pointer"
                                >
                                    <option className="bg-[#161423]">General Inquiry</option>
                                    <option className="bg-[#161423]">Model Licensing</option>
                                    <option className="bg-[#161423]">Technical Support</option>
                                    <option className="bg-[#161423]">Partnership</option>
                                </select>
                                <MdExpandMore className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 ml-1 uppercase tracking-wide" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                                placeholder="How can we help you achieve your AI goals?"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                            Send Message
                            <MdSend className="group-hover:translate-x-1 transition-transform text-lg" />
                        </button>
                    </form>
                </div>

                <div className="mt-16 text-center">
                    <span className="text-xs font-bold text-gray-500 mb-6 block uppercase tracking-widest">Connect With Us</span>
                    <div className="flex gap-4 justify-center">
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                            <FaFacebookF className="text-xl" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110">
                            <FaInstagram className="text-xl" />
                        </a>
                    </div>

                    <div className="mt-10">
                        <p className="text-gray-500 text-sm mb-2">Looking for something else?</p>
                        <a href="#" className="text-purple-400 font-bold text-sm hover:text-purple-300 transition-colors">Visit Help Center →</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
