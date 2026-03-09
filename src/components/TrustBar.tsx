export default function TrustBar() {
    return (
        <section className="bg-[#0a1520] py-6 border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex gap-8 md:gap-16 items-center justify-between overflow-x-auto hide-scrollbar snap-x">
                    <div className="flex items-center gap-3 shrink-0 snap-center">
                        <iconify-icon icon="solar:users-group-two-rounded-linear" className="text-[#D4AF37] text-xl" stroke-width="1.5"></iconify-icon>
                        <div>
                            <div className="text-[#F5ECD7] font-semibold text-lg tracking-tight">2,000+</div>
                            <div className="text-[#F5ECD7]/50 text-xs font-medium">Học Viên</div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-white/10"></div>
                    <div className="flex items-center gap-3 shrink-0 snap-center">
                        <iconify-icon icon="solar:user-speak-rounded-linear" className="text-[#D4AF37] text-xl" stroke-width="1.5"></iconify-icon>
                        <div>
                            <div className="text-[#F5ECD7] font-semibold text-lg tracking-tight">50+</div>
                            <div className="text-[#F5ECD7]/50 text-xs font-medium">Giáo Viên Bản Ngữ</div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-white/10"></div>
                    <div className="flex items-center gap-3 shrink-0 snap-center">
                        <iconify-icon icon="solar:medal-ribbons-star-linear" className="text-[#D4AF37] text-xl" stroke-width="1.5"></iconify-icon>
                        <div>
                            <div className="text-[#F5ECD7] font-semibold text-lg tracking-tight">95%</div>
                            <div className="text-[#F5ECD7]/50 text-xs font-medium">Đậu JLPT</div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-white/10"></div>
                    <div className="flex items-center gap-3 shrink-0 snap-center">
                        <iconify-icon icon="solar:sort-from-bottom-to-top-linear" className="text-[#D4AF37] text-xl" stroke-width="1.5"></iconify-icon>
                        <div>
                            <div className="text-[#F5ECD7] font-semibold text-lg tracking-tight">N5 → N1</div>
                            <div className="text-[#F5ECD7]/50 text-xs font-medium">Coverage</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
