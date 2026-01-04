import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Link } from 'react-router';

// Import images
import slider1 from '/slider-1.png';
import slider2 from '/slider-2.png';
import slider3 from '/slider-3.png';

const SLIDER_DATA = [
    {
        id: 1,
        title: "Advancing",
        highlight: "Human",
        subTitle: "Progress",
        description: "Pioneering the next generation of autonomous systems to elevate human potential and redefine what is possible in robotics.",
        dataset: "Robotics",
        framework: "PyTorch",
        useCase: "Automation",
        image: slider1,
        color: "#A855F7" // Purple
    },
    {
        id: 2,
        title: "Neural",
        highlight: "Network",
        subTitle: "Architecture",
        description: "Building sophisticated neural architectures that mimic the human brain to solve complex problems with unprecedented accuracy.",
        dataset: "Cortex-V",
        framework: "TensorFlow",
        useCase: "Deep Learning",
        image: slider2,
        color: "#3B82F6" // Blue
    },
    {
        id: 3,
        title: "Future",
        highlight: "Autonomous",
        subTitle: "Agents",
        description: "Creating intelligent agents capable of independent decision making and adaptation in dynamic real-world environments.",
        dataset: "Synth-IA",
        framework: "JAX",
        useCase: "AI Agents",
        image: slider3,
        color: "#EC4899" // Pink
    }
];

const Banner = () => {
    const swiperRef = useRef(null);

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.9 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
    };

    return (
        <section className="relative mt-13 h-[55vh] min-h-[470px] w-full overflow-hidden bg-[#0F0716] font-rajdhani flex flex-col justify-center">
            {/* Background Mesh & Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] opacity-30"></div>
            </div>
            {/* Triangular decorative shape */}
            <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-b from-purple-900/10 to-transparent triangle-shape z-0 pointer-events-none backdrop-blur-[1px]"></div>

            <Swiper
                modules={[Navigation, Autoplay, Pagination, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="h-full w-full"
            >
                {SLIDER_DATA.map((item) => (
                    <SwiperSlide key={item.id}>
                        {({ isActive }) => (
                            <div className="container mx-auto px-6 h-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between relative z-10">

                                {/* Text Content */}
                                <div className="w-full md:w-1/2 text-left z-20 space-y-4 md:space-y-6 pb-24 md:pb-0 flex flex-col justify-center">
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={{
                                                    hidden: { opacity: 0 },
                                                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                                                }}
                                            >
                                                <motion.h1 variants={textVariants} className="font-exo text-4xl md:text-4xl lg:text-6xl font-black leading-[0.9] text-white uppercase tracking-tighter drop-shadow-2xl">
                                                    {item.title} <br />
                                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                                                        {item.highlight}
                                                    </span> <br />
                                                    {item.subTitle}
                                                </motion.h1>

                                                <motion.p variants={textVariants} className="text-gray-300 max-w-lg leading-relaxed font-medium text-sm md:text-xl mt-4 md:mt-6 border-l-4 border-purple-500 pl-4">
                                                    {item.description}
                                                </motion.p>

                                                <motion.div variants={textVariants} className="flex gap-3 mt-4 md:mt-6">
                                                    <span className="px-3 py-1 text-[10px] md:text-xs font-bold tracking-[0.2em] text-cyan-400 border border-cyan-500/30 rounded uppercase bg-cyan-900/10 backdrop-blur-md">
                                                        {item.dataset}
                                                    </span>
                                                    <span className="px-3 py-1 text-[10px] md:text-xs font-bold tracking-[0.2em] text-pink-400 border border-pink-500/30 rounded uppercase bg-pink-900/10 backdrop-blur-md">
                                                        {item.framework}
                                                    </span>
                                                </motion.div>

                                                <motion.div variants={textVariants} className="mt-8 md:mt-10">
                                                    <Link to="#" className="group relative inline-flex items-center gap-4 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-bold tracking-widest uppercase text-xs md:text-sm transition-all duration-300 hover:bg-purple-500 hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] clip-path-button">
                                                        <span className="relative z-10 flex items-center gap-2">
                                                            View Collections
                                                            <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                                        </span>
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Image Content */}
                                <div className="w-full md:w-1/2 h-[40vh] md:h-full relative flex items-center justify-center mt-20 md:mt-0">
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={imageVariants}
                                                className="relative w-full h-full flex items-center justify-center p-4"
                                            >
                                                {/* Glowing ring behind image */}
                                                <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                                <div className="absolute w-[320px] h-[320px] md:w-[540px] md:h-[540px] border border-dashed border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                                                <motion.img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="relative z-10 w-auto h-[80%] max-h-[700px] object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.3)] mask-image-gradient"
                                                    animate={{ y: [0, -20, 0] }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Footer/Navigation Area */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0F0716] to-transparent z-20 pointer-events-none"></div>

            <div className="absolute bottom-10 right-10 z-30 flex items-center gap-8">
                {/* Pagination Dots Custom */}
                <div className="flex gap-2">
                    {SLIDER_DATA.map((_, index) => (
                        <div key={index} className="w-2 h-2 rounded-full bg-white/20"></div>
                    ))}
                </div>

                <div className="flex items-center gap-4 pointer-events-auto">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 group"
                    >
                        <span className="material-icons group-hover:-translate-x-0.5 transition-transform">west</span>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 group"
                    >
                        <span className="material-icons group-hover:translate-x-0.5 transition-transform">east</span>
                    </button>
                </div>
            </div>

            {/* Social / Tech Stack indicators */}
            <div className="absolute bottom-10 left-10 z-30 hidden md:flex flex-col gap-4">
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-purple-500 to-transparent mx-auto"></div>
                <span className="writing-vertical-rl text-xs font-bold tracking-[0.3em] text-white/50 uppercase transform rotate-180">
                    Scroll Down
                </span>
            </div>

        </section>
    );
};

export default Banner;