import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import Features from '@/components/Features';
import Workflow from '@/components/Workflow';
import CourseShowcase from '@/components/CourseShowcase';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <Features />
      <Workflow />
      <CourseShowcase />
      <Testimonials />
      <Pricing />
      {/* FINAL CTA */}
      <section className="py-24 bg-pattern-dark relative border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight font-jp font-semibold text-[#F5ECD7] mb-6">Bắt Đầu Hành Trình Tiếng Nhật Của Bạn Ngay Hôm Nay</h2>
          <p className="text-[#F5ECD7]/70 font-medium text-sm md:text-base mb-10 max-w-xl mx-auto">Tham gia cùng hơn 2,000 học viên đã chinh phục thành công chứng chỉ JLPT với phương pháp học tập hiện đại.</p>

          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Nhập email của bạn..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5ECD7] placeholder-[#F5ECD7]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm transition-all" />
            <button type="button" className="shrink-0 px-6 py-3 bg-[#C1121F] text-white rounded-xl text-sm font-semibold hover:bg-[#a00f1a] transition-colors shadow-lg shadow-[#C1121F]/20">
              Đăng Ký Miễn Phí
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
