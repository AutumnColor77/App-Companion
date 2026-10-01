import { ProductIcon } from "@/components/ProductIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/LegalDocument";
import {
  TERMS_EFFECTIVE_DATE,
  TERMS_SECTIONS,
} from "@/lib/legal/terms-of-service";

export const metadata = pageMetadata({
  title: "Live MR Manager 이용약관",
  description:
    "라이브 MR 매니저(Live MR Manager), Live MR Songbook, Autumn Tools 웹 이용약관 — MIT와 서비스 약관 관계, Songbook 이용 수칙, 저작권·면책.",
  path: "/terms",
  product: "lmrm",
});

export default function TermsPage() {
  return (
    <>
      <SiteHeader currentPath="/terms" />
      <main>
        <section className="hero">
          <span className="badge">법적 고지</span>
          <h1 className="title-with-icon">
            <ProductIcon product="lmrm" size={44} />
            이용약관
          </h1>
          <p>
            Live MR Manager 데스크톱 앱, Live MR Songbook(livemrsongbook.com),
            Autumn Tools 웹(autumntools.vercel.app) 이용 조건을 안내합니다. 시행일: {TERMS_EFFECTIVE_DATE}
          </p>
        </section>
        <LegalDocument sections={TERMS_SECTIONS} />
      </main>
    </>
  );
}
