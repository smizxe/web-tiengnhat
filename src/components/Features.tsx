export default function Features() {
    return (
        <section id="features" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl tracking-tight font-jp font-semibold text-[#0D1B2A] mb-4">Hệ Sinh Thái Toàn Diện</h2>
                    <div className="h-px w-16 bg-[#C1121F] mx-auto mb-4"></div>
                    <p className="text-[#0D1B2A]/60 font-medium max-w-2xl mx-auto text-sm md:text-base">Mọi công cụ bạn cần để làm chủ tiếng Nhật, được tích hợp liền mạch trên một nền tảng duy nhất.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 border border-black/5 hover:border-[#C1121F]/20 hover:shadow-xl hover:shadow-[#C1121F]/5 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#F5ECD7] flex items-center justify-center mb-6 group-hover:bg-[#C1121F] transition-colors">
                            <iconify-icon icon="solar:play-circle-linear" className="text-xl text-[#C1121F] group-hover:text-white transition-colors" stroke-width="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-lg font-jp font-semibold text-[#0D1B2A] mb-3">Khóa Học Online</h3>
                        <p className="text-sm text-[#0D1B2A]/60 leading-relaxed font-medium">Lộ trình từ N5 đến N1, video bài giảng HD chất lượng cao, học mọi lúc mọi nơi theo nhịp độ của riêng bạn.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 border border-black/5 hover:border-[#C1121F]/20 hover:shadow-xl hover:shadow-[#C1121F]/5 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#F5ECD7] flex items-center justify-center mb-6 group-hover:bg-[#C1121F] transition-colors">
                            <iconify-icon icon="solar:document-text-linear" className="text-xl text-[#C1121F] group-hover:text-white transition-colors" stroke-width="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-lg font-jp font-semibold text-[#0D1B2A] mb-3">Đề Thi Thực Chiến</h3>
                        <p className="text-sm text-[#0D1B2A]/60 leading-relaxed font-medium">Mock test JLPT chuẩn format, phân tích điểm yếu tự động bằng AI, luyện đề chuyên sâu theo từng kỹ năng.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 border border-black/5 hover:border-[#C1121F]/20 hover:shadow-xl hover:shadow-[#C1121F]/5 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#F5ECD7] flex items-center justify-center mb-6 group-hover:bg-[#C1121F] transition-colors">
                            <iconify-icon icon="solar:cards-linear" className="text-xl text-[#C1121F] group-hover:text-white transition-colors" stroke-width="1.5"></iconify-icon>
                        </div>
                        <h3 className="text-lg font-jp font-semibold text-[#0D1B2A] mb-3">Flashcard Thông Minh</h3>
                        <p className="text-sm text-[#0D1B2A]/60 leading-relaxed font-medium">Hệ thống spaced repetition (lặp lại ngắt quãng), học Kanji, từ vựng, ngữ pháp hiệu quả gấp 3 lần.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
