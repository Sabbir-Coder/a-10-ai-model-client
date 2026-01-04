import { motion } from "framer-motion";

const SectionTitle = ({ title, highlight, suffix }) => {
    return (
        <div className="relative text-center mt-20 mb-16 px-4">
            {/* Main Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-rajdhani text-blue-800 uppercase tracking-wider relative inline-block z-10"
            >
                {title}
                {highlight && (
                    <span className="text-transparent px-3 bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black">
                        {highlight}
                    </span>
                )}
                {suffix}

                {/* Decorative underlines */}
                <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[2px] bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                ></motion.div>
            </motion.h2>

            {/* Decorative Background "Ghost" Text */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-5xl md:text-8xl font-black text-white/5 uppercase tracking-[0.2em] pointer-events-none select-none -z-10 blur-[1px] whitespace-nowrap overflow-hidden"
            >
                {highlight || title}
            </motion.div>
        </div>
    );
};

export default SectionTitle;
