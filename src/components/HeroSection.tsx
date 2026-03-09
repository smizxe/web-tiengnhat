"use client";

import { motion, Variants } from "framer-motion";

export default function HeroSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Hiển thị lần lượt các con
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-pattern-dark flex items-center min-h-[90vh]">
            {/* Watermark */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.03, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[30vw] font-jp text-[#F5ECD7] select-none leading-none pointer-events-none"
            >
                学
            </motion.div>

            {/* Animated Petals (Giữ nguyên bằng CSS thuần vì Framer Motion infinite loop cho object bé tốn công sức render bằng JS hơn) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="petal" style={{ left: '10%', animationDuration: '12s', animationDelay: '0s' }}></div>
                <div className="petal" style={{ left: '30%', animationDuration: '15s', animationDelay: '3s', width: '8px', height: '8px' }}></div>
                <div className="petal" style={{ left: '50%', animationDuration: '18s', animationDelay: '1s', width: '14px', height: '14px' }}></div>
                <div className="petal" style={{ left: '70%', animationDuration: '14s', animationDelay: '5s' }}></div>
                <div className="petal" style={{ left: '90%', animationDuration: '16s', animationDelay: '2s', width: '10px', height: '10px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        className="max-w-xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-medium mb-6">
                            <iconify-icon icon="solar:star-fall-linear" stroke-width="1.5"></iconify-icon>
                            <span>Nền tảng học tiếng Nhật thế hệ mới</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl lg:leading-[1.15] tracking-tight font-jp font-semibold text-[#F5ECD7] mb-6">
                            Chinh Phục Tiếng Nhật —<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] to-[#ff4d5a]">Từng Bước, Đúng Hướng</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-base lg:text-lg text-[#F5ECD7]/70 mb-10 leading-relaxed font-medium">
                            Khóa học bài bản, đề thi thực chiến, flashcard thông minh — tất cả trong một nền tảng được thiết kế chuyên biệt cho học viên Việt Nam.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                            <button className="bg-[#C1121F] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#a00f1a] transition-all shadow-[0_0_20px_rgba(193,18,31,0.3)] hover:shadow-[0_0_30px_rgba(193,18,31,0.5)]">
                                Xem Khóa Học
                            </button>
                            <button className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#D4AF37]/10 transition-colors">
                                Học Thử Miễn Phí
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual (Mockup) */}
                    <motion.div
                        className="relative lg:h-[500px] hidden lg:block"
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        animate={{ opacity: 1, x: 0, rotate: 1 }}
                        transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.4 }} // Spring-like effect
                        whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <div className="absolute right-0 top-0 w-full max-w-md bg-[#F5ECD7] rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                            <div className="bg-white/50 backdrop-blur border-b border-black/5 p-4 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <span className="text-xs font-semibold text-[#0D1B2A]/50 font-jp tracking-wider">JLPT N2 PROGRESS</span>
                            </div>
                            <div className="p-6 space-y-6">
                                {/* Fake progress */}
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-[#0D1B2A] mb-2">
                                        <span>Từ vựng &amp; Kanji</span>
                                        <span>75%</span>
                                    </div>
                                    <div className="h-2 w-full bg-[#0D1B2A]/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#C1121F] rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "75%" }}
                                            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                                {/* Fake Flashcard */}
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5 text-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#F5ECD7] rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                    <span className="block text-4xl font-jp text-[#0D1B2A] mb-2">限界</span>
                                    <span className="block text-xs text-[#0D1B2A]/50 font-medium tracking-widest uppercase mb-4">genkai</span>
                                    <span className="block text-sm font-medium text-[#C1121F]">Giới hạn, ranh giới</span>
                                </div>
                                {/* Fake Graph */}
                                <div className="flex items-end gap-2 h-20 pt-4">
                                    {[40, 60, 45, 80, 30].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            className={`w-full ${i === 3 ? 'bg-[#D4AF37] relative' : i < 3 ? `bg-[#D4AF37]/${height}` : 'bg-[#0D1B2A]/10'} rounded-t-sm`}
                                            style={{ opacity: i < 3 ? height / 100 : 1 }}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            transition={{ duration: 0.8, delay: 1.2 + i * 0.1, ease: "easeOut" }}
                                        >
                                            {i === 3 && (
                                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0D1B2A] text-white text-[10px] px-2 py-1 rounded shadow-sm opacity-0 animate-[fadeUp_0.5s_ease-out_2s_forwards]">Hôm nay</div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
