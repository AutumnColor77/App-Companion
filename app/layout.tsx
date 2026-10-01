import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ICON } from "@/lib/site";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const naverVerification = process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION?.trim();

const base = pageMetadata({
  title: "Autumn Tools",
  description:
    "어텀 툴즈(Autumn Tools) — 라이브 MR 매니저(Live MR Manager)와 치즈스틱 독(Cheese Stick Dock)의 설치·사용 안내, FAQ, 법적 문서.",
  path: "/",
  product: "hub",
});

export const metadata: Metadata = {
  ...base,
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Autumn Tools · 어텀 툴즈",
    template: "%s · Autumn Tools",
  },
  applicationName: "Autumn Tools",
  robots: { index: true, follow: true },
  icons: {
    icon: SITE_ICON,
    apple: SITE_ICON,
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(naverVerification
      ? { other: { "naver-site-verification": naverVerification } }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
