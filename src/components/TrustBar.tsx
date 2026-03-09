"use client";

import { motion, Variants } from "framer-motion";

export default function TrustBar() {
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
        hidden: { opacity: 0, scale: 0.9, y: 10 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    };

    return (
        <section className="bg-[#0a1520] py-6 border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="flex gap-8 md:gap-16 items-center justify-between overflow-x-auto hide-scrollbar snap-x"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div variants={item} className="flex items-center gap-3 shrink-0 snap-center">
                        <iconify-icon icon="solar:users-group-two-rounded-linear" className="text-[#D4AF37] text-xl" stroke-width="1.5"></iconify-icon>
                        <div>
                            <div className="text-[#F5ECD7] font-semibold text-lg tracking-tight">2,000+</div>
                            <div className="text-[#F5ECD7]/50 text-xs font-medium">Học Viên</div>
                        </div>
                    </motion.div>
                    <div className="hidden md:block w-px h-8 bg-white/10"></div>

                    <motion.div variants={item} className="flex items-center gap-3 shrink-0 snap-center">
                        <iconify-icon icon="solar:user-speak-rounded-linear" className="text-[#D4AF37] text-xl" stroke-width="1.5"></iconify-icon>
                        <div>
                            <div className="text-[#F5ECD7] font-semibold text-lg tracking-tight">50+</div>
                            <div className="text-[#F5ECD7]/50 text-xs font-medium">Giáo Viên Bản Ngữ</div>
                        </div>
                    </motion.div>
                    <div className="hidden md:block w-px h-8 bg-white/10"></div>

                    <motion.div variants={item} className="flex items-center gap-3 shrink-0 snap-center">
                        <iconify-icon icon="solar:medal-ribbons-star-linear" className="text-[#D4AF37] text-xl" stroke-width="1.5"></iconify-icon>
                        <div>
                            <div className="text-[#F5ECD7] font-semibold text-lg tracking-tight">95%</div>
                            <div className="text-[#F5ECD7]/50 text-xs font-medium">Đậu JLPT</div>
                        </div>
                    </motion.div>
                    <div className="hidden md:block w-px h-8 bg-white/10"></div>

                    <motion.div variants={item} className="flex items-center gap-3 shrink-0 snap-center">
                        <iconify-icon icon="solar:sort-from-bottom-to-top-linear" className="text-[#D4AF37] text-xl" stroke-width="1.5"></iconify-icon>
                        <div>
                            <div className="text-[#F5ECD7] font-semibold text-lg tracking-tight">N5 → N1</div>
                            <div className="text-[#F5ECD7]/50 text-xs font-medium">Coverage</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
