import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_ICON } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Autumn Tools",
    template: "%s · Autumn Tools",
  },
  description:
    "어텀 툴즈(Autumn Tools) — Live MR Manager와 Cheese Stick Dock의 설치·사용 안내, FAQ, 법적 문서.",
  icons: {
    icon: SITE_ICON,
    apple: SITE_ICON,
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
