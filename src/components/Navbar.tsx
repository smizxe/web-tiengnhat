export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-[#0D1B2A]/90 backdrop-blur-md border-b border-white/5 transition-all">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-[#F5ECD7] font-semibold tracking-widest text-lg font-jp">NIHONGO</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C1121F]"></div>
                </div>
                <div className="hidden md:flex items-center gap-8 text-[#F5ECD7]/80 text-sm font-medium">
                    <a href="#features" className="hover:text-white transition-colors">Khóa học</a>
                    <a href="#workflow" className="hover:text-white transition-colors">Lộ trình</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Bảng giá</a>
                </div>
                <button className="text-sm font-medium text-[#0D1B2A] bg-[#F5ECD7] px-4 py-2 rounded-full hover:bg-white transition-colors shadow-sm">
                    Đăng Nhập
                </button>
            </div>
        </nav>
    );
}
