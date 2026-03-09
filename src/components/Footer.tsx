export default function Footer() {
    return (
        <footer className="bg-[#0a1520] pt-16 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#F5ECD7] font-semibold tracking-widest text-lg font-jp">NIHONGO</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C1121F]"></div>
                        </div>
                        <p className="text-xs text-[#F5ECD7]/50 font-medium max-w-sm mb-6 leading-relaxed">Nền tảng học tiếng Nhật trực tuyến hàng đầu, mang đến giải pháp học tập toàn diện từ N5 đến N1 cho người Việt.</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#F5ECD7]/70 hover:bg-white/10 hover:text-[#F5ECD7] transition-colors">
                                <iconify-icon icon="solar:global-linear" className="text-sm"></iconify-icon>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#F5ECD7]/70 hover:bg-white/10 hover:text-[#F5ECD7] transition-colors">
                                <iconify-icon icon="solar:play-circle-linear" className="text-sm"></iconify-icon>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#F5ECD7]/70 hover:bg-white/10 hover:text-[#F5ECD7] transition-colors">
                                <iconify-icon icon="solar:smartphone-linear" className="text-sm"></iconify-icon>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#F5ECD7] font-semibold text-sm mb-4">Sản Phẩm</h4>
                        <ul className="space-y-3 text-xs text-[#F5ECD7]/60 font-medium">
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Khóa học JLPT</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Luyện đề thi thử</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Flashcard từ vựng</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Đánh giá năng lực</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#F5ECD7] font-semibold text-sm mb-4">Hỗ Trợ</h4>
                        <ul className="space-y-3 text-xs text-[#F5ECD7]/60 font-medium">
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Trung tâm trợ giúp</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Câu hỏi thường gặp</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Điều khoản sử dụng</a></li>
                            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Chính sách bảo mật</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] text-[#F5ECD7]/40 font-medium tracking-wide uppercase">© 2025 Nihongo Center. All rights reserved.</p>
                    <div className="flex gap-6 text-[10px] text-[#F5ECD7]/40 font-medium tracking-wide uppercase">
                        <span>Made with precision</span>
                        <span>Hanoi, Vietnam</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
