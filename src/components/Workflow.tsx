"use client";

import { motion, Variants } from "framer-motion";

export default function Workflow() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <section id="workflow" className="py-24 bg-white border-y border-black/5">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-2xl md:text-3xl tracking-tight font-jp font-semibold text-[#0D1B2A] text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    Phương Pháp Học Tối Ưu
                </motion.h2>

                <motion.div
                    className="relative grid md:grid-cols-3 gap-12 text-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Connecting Line (Desktop) */}
                    <motion.div
                        className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-[#0D1B2A]/10 to-transparent origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    />

                    {/* Step 1 */}
                    <motion.div variants={item} className="relative z-10">
                        <div className="w-12 h-12 mx-auto bg-[#0D1B2A] text-[#F5ECD7] rounded-full flex items-center justify-center text-lg font-jp font-semibold mb-6 shadow-lg">1</div>
                        <h4 className="text-base font-semibold text-[#0D1B2A] mb-2">Đăng ký &amp; Kiểm tra</h4>
                        <p className="text-xs text-[#0D1B2A]/60 font-medium px-4">Đánh giá năng lực đầu vào chính xác để xếp lớp phù hợp.</p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div variants={item} className="relative z-10">
                        <div className="w-12 h-12 mx-auto bg-[#C1121F] text-white rounded-full flex items-center justify-center text-lg font-jp font-semibold mb-6 shadow-lg shadow-[#C1121F]/30">2</div>
                        <h4 className="text-base font-semibold text-[#0D1B2A] mb-2">Học theo lộ trình</h4>
                        <p className="text-xs text-[#0D1B2A]/60 font-medium px-4">Tiếp thu kiến thức qua video và hệ thống bài tập cá nhân hóa.</p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div variants={item} className="relative z-10">
                        <div className="w-12 h-12 mx-auto bg-[#D4AF37] text-[#0D1B2A] rounded-full flex items-center justify-center text-lg font-jp font-semibold mb-6 shadow-lg shadow-[#D4AF37]/30">3</div>
                        <h4 className="text-base font-semibold text-[#0D1B2A] mb-2">Luyện đề &amp; Đạt JLPT</h4>
                        <p className="text-xs text-[#0D1B2A]/60 font-medium px-4">Thực chiến với bộ đề thi thử sát với kỳ thi thật để lấy chứng chỉ.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
