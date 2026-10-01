import { ProductIcon } from "@/components/ProductIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/LegalDocument";
import {
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_SECTIONS,
} from "@/lib/legal/privacy-policy";

export const metadata = pageMetadata({
  title: "Live MR Manager 개인정보 처리방침",
  description:
    "라이브 MR 매니저(Live MR Manager) 앱, Live MR Songbook, Autumn Tools 웹의 개인정보 처리 항목, 보유 기간, 제3자 연동, 쿠키 안내.",
  path: "/privacy",
  product: "lmrm",
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader currentPath="/privacy" />
      <main>
        <section className="hero">
          <span className="badge">법적 고지</span>
          <h1 className="title-with-icon">
            <ProductIcon product="lmrm" size={44} />
            개인정보 처리방침
          </h1>
          <p>
            Live MR Manager 데스크톱 앱, Live MR Songbook(livemrsongbook.com),
            Autumn Tools 웹(autumntools.vercel.app)에서 처리하는 정보의 범위와 목적을
            안내합니다. 시행일:{" "}
            {PRIVACY_EFFECTIVE_DATE}
          </p>
        </section>
        <LegalDocument sections={PRIVACY_SECTIONS} />
      </main>
    </>
  );
}
