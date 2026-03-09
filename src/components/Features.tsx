"use client";

import { motion, Variants } from "framer-motion";

export default function Features() {
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
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="features" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl tracking-tight font-jp font-semibold text-[#0D1B2A] mb-4">Hệ Sinh Thái Toàn Diện</h2>
                    <div className="h-px w-16 bg-[#C1121F] mx-auto mb-4"></div>
                    <p className="text-[#0D1B2A]/60 font-medium max-w-2xl mx-auto text-sm md:text-base">Mọi công cụ bạn cần để làm chủ tiếng Nhật, được tích hợp liền mạch trên một nền tảng duy nhất.</p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Card 1 */}
                    <motion.div variants={item} className="bg-white rounded-2xl p-8 border border-black/5 hover:border-[#C1121F]/20 hover:shadow-xl hover:shadow-[#C1121F]/5 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#F5ECD7] flex items-center justify-center mb-6 group-hover:bg-[#C1121F] transition-colors">
                            <iconify-icon icon="solar:play-circle-linear" className="text-xl text-[#C1121F] group-hover:text-white transition-colors" stroke-width="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-lg font-jp font-semibold text-[#0D1B2A] mb-3">Khóa Học Online</h3>
                        <p className="text-sm text-[#0D1B2A]/60 leading-relaxed font-medium">Lộ trình từ N5 đến N1, video bài giảng HD chất lượng cao, học mọi lúc mọi nơi theo nhịp độ của riêng bạn.</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={item} className="bg-white rounded-2xl p-8 border border-black/5 hover:border-[#C1121F]/20 hover:shadow-xl hover:shadow-[#C1121F]/5 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#F5ECD7] flex items-center justify-center mb-6 group-hover:bg-[#C1121F] transition-colors">
                            <iconify-icon icon="solar:document-text-linear" className="text-xl text-[#C1121F] group-hover:text-white transition-colors" stroke-width="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-lg font-jp font-semibold text-[#0D1B2A] mb-3">Đề Thi Thực Chiến</h3>
                        <p className="text-sm text-[#0D1B2A]/60 leading-relaxed font-medium">Mock test JLPT chuẩn format, phân tích điểm yếu tự động bằng AI, luyện đề chuyên sâu theo từng kỹ năng.</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={item} className="bg-white rounded-2xl p-8 border border-black/5 hover:border-[#C1121F]/20 hover:shadow-xl hover:shadow-[#C1121F]/5 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#F5ECD7] flex items-center justify-center mb-6 group-hover:bg-[#C1121F] transition-colors">
                            <iconify-icon icon="solar:cards-linear" className="text-xl text-[#C1121F] group-hover:text-white transition-colors" stroke-width="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-lg font-jp font-semibold text-[#0D1B2A] mb-3">Flashcard Thông Minh</h3>
                        <p className="text-sm text-[#0D1B2A]/60 leading-relaxed font-medium">Hệ thống spaced repetition (lặp lại ngắt quãng), học Kanji, từ vựng, ngữ pháp hiệu quả gấp 3 lần.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
