import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 | IT 개발·운영 포트폴리오',
  description: '한국콜마 IT운영 직무에 맞춘 유다현의 개발 포트폴리오',
  openGraph: { title: '유다현 | 한국콜마 IT 개발·운영 포트폴리오', description: '요구사항 한 줄부터 운영 결과의 마지막 숫자까지, 끝까지 추적하는 개발자', images: ['/assets/social-share.png'] },
  twitter: { card: 'summary_large_image', images: ['/assets/social-share.png'] },
  icons: {
    icon: '/assets/kolmar-logo.png',
    shortcut: '/assets/kolmar-logo.png',
    apple: '/assets/kolmar-logo.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
