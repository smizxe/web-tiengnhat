"use client";

import { motion, Variants } from "framer-motion";

export default function Testimonials() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="py-24 bg-pattern-dark border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-2xl md:text-3xl tracking-tight font-jp font-semibold text-[#F5ECD7] text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    Câu Chuyện Thành Công
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Testimonial 1 */}
                    <motion.div variants={item} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                        <div className="flex gap-1 mb-4 text-[#D4AF37]">
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                        </div>
                        <p className="text-[#F5ECD7]/80 text-sm italic mb-6 leading-relaxed">"Giao diện học tập rất tập trung. Mình đặc biệt thích tính năng flashcard lặp lại ngắt quãng, giúp mình nhớ Kanji lâu hơn hẳn cách học truyền thống."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C1121F] to-[#D4AF37] flex items-center justify-center text-white font-jp text-sm">T</div>
                            <div>
                                <div className="text-sm font-semibold text-[#F5ECD7]">Tuấn Anh</div>
                                <div className="text-xs text-[#F5ECD7]/50 font-medium">Đạt N2 sau 8 tháng</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Testimonial 2 */}
                    <motion.div variants={item} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                        <div className="flex gap-1 mb-4 text-[#D4AF37]">
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                        </div>
                        <p className="text-[#F5ECD7]/80 text-sm italic mb-6 leading-relaxed">"Đề thi thử sát với đề thi thật đến 90%. Nhờ cày mock test trên nền tảng mà mình không bị bỡ ngỡ khi bước vào phòng thi."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0D1B2A] to-[#C1121F] flex items-center justify-center text-white font-jp text-sm">M</div>
                            <div>
                                <div className="text-sm font-semibold text-[#F5ECD7]">Minh Châu</div>
                                <div className="text-xs text-[#F5ECD7]/50 font-medium">Đạt N3 với 160/180</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Testimonial 3 */}
                    <motion.div variants={item} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                        <div className="flex gap-1 mb-4 text-[#D4AF37]">
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-bold" className="text-sm"></iconify-icon>
                            <iconify-icon icon="solar:star-half-bold" className="text-sm"></iconify-icon>
                        </div>
                        <p className="text-[#F5ECD7]/80 text-sm italic mb-6 leading-relaxed">"Video bài giảng chất lượng, giáo viên giải thích ngữ pháp rất dễ hiểu. Một khoản đầu tư vô cùng xứng đáng cho tương lai."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0D1B2A] font-jp text-sm">H</div>
                            <div>
                                <div className="text-sm font-semibold text-[#F5ECD7]">Hoàng Nam</div>
                                <div className="text-xs text-[#F5ECD7]/50 font-medium">Học viên lộ trình N1</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
