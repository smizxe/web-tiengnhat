"use client";

import { motion, Variants } from "framer-motion";

export default function CourseShowcase() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, x: 50 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <motion.div
                className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <div>
                    <h2 className="text-3xl tracking-tight font-jp font-semibold text-[#0D1B2A] mb-2">Lộ Trình Nổi Bật</h2>
                    <p className="text-sm text-[#0D1B2A]/60 font-medium">Chọn điểm xuất phát phù hợp với mục tiêu của bạn.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#0D1B2A] hover:bg-white transition-colors">
                        <iconify-icon icon="solar:arrow-left-linear" stroke-width="1.5"></iconify-icon>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#0D1B2A] hover:bg-white transition-colors">
                        <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5"></iconify-icon>
                    </button>
                </div>
            </motion.div>

            <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
                <motion.div
                    className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 pr-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Course N5 */}
                    <motion.div variants={item} className="shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl p-6 border border-black/5 snap-start hover:-translate-y-1 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300">
                        <div className="inline-block px-3 py-1 rounded-md bg-[#0D1B2A]/5 text-[#0D1B2A] text-xs font-semibold tracking-wider mb-4">MỚI BẮT ĐẦU</div>
                        <h3 className="text-xl font-jp font-semibold text-[#0D1B2A] mb-1">JLPT N5 Starter</h3>
                        <p className="text-xs text-[#0D1B2A]/50 font-medium mb-6">Xây dựng nền tảng vững chắc.</p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-2 text-sm text-[#0D1B2A]/70 font-medium">
                                <iconify-icon icon="solar:video-frame-linear" className="text-[#C1121F]"></iconify-icon> 80 bài giảng video
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#0D1B2A]/70 font-medium">
                                <iconify-icon icon="solar:clock-circle-linear" className="text-[#C1121F]"></iconify-icon> Thời lượng: 3 tháng
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="text-lg font-semibold text-[#0D1B2A]">1.200.000đ</div>
                            <button className="text-xs font-semibold text-[#C1121F] hover:text-[#0D1B2A] transition-colors flex items-center gap-1">
                                Xem Chi Tiết <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                            </button>
                        </div>
                    </motion.div>

                    {/* Course N4-N3 */}
                    <motion.div variants={item} className="shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-md snap-start hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[10px] font-semibold px-3 py-1 rounded-bl-lg">PHỔ BIẾN</div>
                        <div className="inline-block px-3 py-1 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold tracking-wider mb-4">TRUNG CẤP</div>
                        <h3 className="text-xl font-jp font-semibold text-[#0D1B2A] mb-1">JLPT N4-N3 Intermediate</h3>
                        <p className="text-xs text-[#0D1B2A]/50 font-medium mb-6">Bứt phá giao tiếp &amp; đọc hiểu.</p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-2 text-sm text-[#0D1B2A]/70 font-medium">
                                <iconify-icon icon="solar:video-frame-linear" className="text-[#D4AF37]"></iconify-icon> 150 bài giảng video
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#0D1B2A]/70 font-medium">
                                <iconify-icon icon="solar:clock-circle-linear" className="text-[#D4AF37]"></iconify-icon> Thời lượng: 6 tháng
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="text-lg font-semibold text-[#0D1B2A]">1.800.000đ</div>
                            <button className="text-xs font-semibold text-[#D4AF37] hover:text-[#0D1B2A] transition-colors flex items-center gap-1">
                                Xem Chi Tiết <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                            </button>
                        </div>
                    </motion.div>

                    {/* Course N2 */}
                    <motion.div variants={item} className="shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl p-6 border border-black/5 snap-start hover:-translate-y-1 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300">
                        <div className="inline-block px-3 py-1 rounded-md bg-[#C1121F]/10 text-[#C1121F] text-xs font-semibold tracking-wider mb-4">CAO CẤP</div>
                        <h3 className="text-xl font-jp font-semibold text-[#0D1B2A] mb-1">JLPT N2 Advanced</h3>
                        <p className="text-xs text-[#0D1B2A]/50 font-medium mb-6">Sử dụng tiếng Nhật lưu loát trong công việc.</p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-2 text-sm text-[#0D1B2A]/70 font-medium">
                                <iconify-icon icon="solar:video-frame-linear" className="text-[#C1121F]"></iconify-icon> 200 bài giảng chuyên sâu
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#0D1B2A]/70 font-medium">
                                <iconify-icon icon="solar:clock-circle-linear" className="text-[#C1121F]"></iconify-icon> Thời lượng: 8 tháng
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="text-lg font-semibold text-[#0D1B2A]">2.400.000đ</div>
                            <button className="text-xs font-semibold text-[#C1121F] hover:text-[#0D1B2A] transition-colors flex items-center gap-1">
                                Xem Chi Tiết <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                            </button>
                        </div>
                    </motion.div>

                    {/* Course N1 */}
                    <motion.div variants={item} className="shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl p-6 border border-black/5 snap-start hover:-translate-y-1 hover:border-[#0D1B2A]/30 hover:shadow-lg transition-all duration-300">
                        <div className="inline-block px-3 py-1 rounded-md bg-[#0D1B2A] text-[#F5ECD7] text-xs font-semibold tracking-wider mb-4">MASTER</div>
                        <h3 className="text-xl font-jp font-semibold text-[#0D1B2A] mb-1">JLPT N1 Master</h3>
                        <p className="text-xs text-[#0D1B2A]/50 font-medium mb-6">Đỉnh cao ngôn ngữ, đọc hiểu tài liệu phức tạp.</p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-2 text-sm text-[#0D1B2A]/70 font-medium">
                                <iconify-icon icon="solar:video-frame-linear" className="text-[#0D1B2A]"></iconify-icon> 180 bài giảng thượng cấp
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#0D1B2A]/70 font-medium">
                                <iconify-icon icon="solar:clock-circle-linear" className="text-[#0D1B2A]"></iconify-icon> Thời lượng: 10 tháng
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="text-lg font-semibold text-[#0D1B2A]">2.800.000đ</div>
                            <button className="text-xs font-semibold text-[#0D1B2A] hover:text-[#C1121F] transition-colors flex items-center gap-1">
                                Xem Chi Tiết <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
