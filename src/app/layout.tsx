import type { Metadata } from 'next';
import { DM_Sans, Noto_Serif_JP } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const notoSerifJp = Noto_Serif_JP({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-noto-serif-jp' });

export const metadata: Metadata = {
  title: 'Nihongo Center - Nền tảng học tiếng Nhật cao cấp',
  description: 'Nền tảng học tiếng Nhật trực tuyến hàng đầu, mang đến giải pháp học tập toàn diện từ N5 đến N1 cho người Việt.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="beforeInteractive" />
      </head>
      <body className={`${dmSans.variable} ${notoSerifJp.variable} selection:bg-[#C1121F] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
