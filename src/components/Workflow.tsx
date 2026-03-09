export default function Workflow() {
    return (
        <section id="workflow" className="py-24 bg-white border-y border-black/5">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl tracking-tight font-jp font-semibold text-[#0D1B2A] text-center mb-16">Phương Pháp Học Tối Ưu</h2>

                <div className="relative grid md:grid-cols-3 gap-12 text-center">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-[#0D1B2A]/10 to-transparent"></div>

                    {/* Step 1 */}
                    <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto bg-[#0D1B2A] text-[#F5ECD7] rounded-full flex items-center justify-center text-lg font-jp font-semibold mb-6 shadow-lg">1</div>
                        <h4 className="text-base font-semibold text-[#0D1B2A] mb-2">Đăng ký &amp; Kiểm tra</h4>
                        <p className="text-xs text-[#0D1B2A]/60 font-medium px-4">Đánh giá năng lực đầu vào chính xác để xếp lớp phù hợp.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto bg-[#C1121F] text-white rounded-full flex items-center justify-center text-lg font-jp font-semibold mb-6 shadow-lg shadow-[#C1121F]/30">2</div>
                        <h4 className="text-base font-semibold text-[#0D1B2A] mb-2">Học theo lộ trình</h4>
                        <p className="text-xs text-[#0D1B2A]/60 font-medium px-4">Tiếp thu kiến thức qua video và hệ thống bài tập cá nhân hóa.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto bg-[#D4AF37] text-[#0D1B2A] rounded-full flex items-center justify-center text-lg font-jp font-semibold mb-6 shadow-lg shadow-[#D4AF37]/30">3</div>
                        <h4 className="text-base font-semibold text-[#0D1B2A] mb-2">Luyện đề &amp; Đạt JLPT</h4>
                        <p className="text-xs text-[#0D1B2A]/60 font-medium px-4">Thực chiến với bộ đề thi thử sát với kỳ thi thật để lấy chứng chỉ.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
