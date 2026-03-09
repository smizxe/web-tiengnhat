"use client";

import { motion, Variants } from "framer-motion";

export default function Pricing() {
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
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl tracking-tight font-jp font-semibold text-[#0D1B2A] mb-6">Gói Thành Viên Phù Hợp</h2>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-sm font-medium text-[#0D1B2A]/60">Hàng tháng</span>
                        <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-[#0D1B2A]/10 appearance-none cursor-pointer z-10 transition-all duration-300 left-0" />
                            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#0D1B2A]/10 cursor-pointer transition-colors duration-300"></label>
                        </div>
                        <span className="text-sm font-medium text-[#0D1B2A]">Hàng năm <span className="text-[10px] bg-[#C1121F]/10 text-[#C1121F] px-1.5 py-0.5 rounded ml-1 font-semibold">-20%</span></span>
                    </div>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Basic */}
                    <motion.div variants={item} className="p-8 rounded-2xl border border-black/5 bg-white">
                        <h3 className="text-lg font-jp font-semibold text-[#0D1B2A] mb-2">Cơ Bản</h3>
                        <p className="text-xs text-[#0D1B2A]/60 font-medium mb-6">Trải nghiệm nền tảng cơ bản.</p>
                        <div className="text-3xl font-semibold text-[#0D1B2A] mb-8 tracking-tight">Miễn phí</div>
                        <ul className="space-y-4 mb-8 text-sm text-[#0D1B2A]/80 font-medium">
                            <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#0D1B2A]/30 text-base"></iconify-icon> Flashcard N5-N4</li>
                            <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#0D1B2A]/30 text-base"></iconify-icon> 3 đề thi thử JLPT</li>
                            <li className="flex items-center gap-2 text-[#0D1B2A]/30 line-through"><iconify-icon icon="solar:close-circle-linear" className="text-base"></iconify-icon> Video bài giảng HD</li>
                            <li className="flex items-center gap-2 text-[#0D1B2A]/30 line-through"><iconify-icon icon="solar:close-circle-linear" className="text-base"></iconify-icon> Hỗ trợ từ giáo viên</li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-black/10 text-sm font-semibold text-[#0D1B2A] hover:bg-black/5 transition-colors">Bắt Đầu Miễn Phí</button>
                    </motion.div>

                    {/* Standard (Popular) */}
                    <motion.div variants={item} className="p-8 rounded-2xl bg-[#0D1B2A] text-[#F5ECD7] relative transform lg:-translate-y-4 shadow-2xl shadow-[#0D1B2A]/20 ring-2 ring-[#D4AF37]/50">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-[#0D1B2A] text-xs font-semibold px-4 py-1 rounded-full shadow-sm">PHỔ BIẾN NHẤT</div>
                        <h3 className="text-lg font-jp font-semibold mb-2">Tiêu Chuẩn</h3>
                        <p className="text-xs text-[#F5ECD7]/60 font-medium mb-6">Đầy đủ công cụ tự học.</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-3xl font-semibold tracking-tight">299.000đ</span>
                            <span className="text-xs text-[#F5ECD7]/50 font-medium">/tháng</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-[#F5ECD7]/80 font-medium">
                            <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#D4AF37] text-base"></iconify-icon> Full kho Flashcard N5-N1</li>
                            <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#D4AF37] text-base"></iconify-icon> 20 đề thi thử có giải chi tiết</li>
                            <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#D4AF37] text-base"></iconify-icon> Quyền truy cập Video bài giảng</li>
                            <li className="flex items-center gap-2 text-[#F5ECD7]/30 line-through"><iconify-icon icon="solar:close-circle-linear" className="text-base"></iconify-icon> 1-1 với giáo viên</li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-[#C1121F] text-white text-sm font-semibold hover:bg-[#a00f1a] transition-colors shadow-lg shadow-[#C1121F]/20">Đăng Ký Ngay</button>
                    </motion.div>

                    {/* Premium */}
                    <motion.div variants={item} className="p-8 rounded-2xl border border-black/5 bg-white">
                        <h3 className="text-lg font-jp font-semibold text-[#0D1B2A] mb-2">Cao Cấp</h3>
                        <p className="text-xs text-[#0D1B2A]/60 font-medium mb-6">Hỗ trợ tối đa để đỗ JLPT.</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-3xl font-semibold tracking-tight text-[#0D1B2A]">499.000đ</span>
                            <span className="text-xs text-[#0D1B2A]/50 font-medium">/tháng</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-[#0D1B2A]/80 font-medium">
                            <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#C1121F] text-base"></iconify-icon> Tất cả tính năng Tiêu Chuẩn</li>
                            <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#C1121F] text-base"></iconify-icon> Mock test không giới hạn</li>
                            <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-[#C1121F] text-base"></iconify-icon> Sửa bài Writing &amp; Speaking</li>
                            <li className="flex items-center gap-2 font-semibold text-[#0D1B2A]"><iconify-icon icon="solar:check-circle-linear" className="text-[#C1121F] text-base"></iconify-icon> Coaching 1-1 hàng tuần</li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-black/10 text-sm font-semibold text-[#0D1B2A] hover:bg-black/5 transition-colors">Liên Hệ Tư Vấn</button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
