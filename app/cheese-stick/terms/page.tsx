import { ProductIcon } from "@/components/ProductIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/LegalDocument";
import {
  DOCK_TERMS_EFFECTIVE_DATE,
  DOCK_TERMS_SECTIONS,
} from "@/lib/legal/dock-terms";

export const metadata = pageMetadata({
  title: "Cheese Stick Dock 이용약관",
  description:
    "치즈스틱 독(Cheese Stick Dock) 이용약관. MIT 라이선스와 서비스 이용 조건을 구분합니다.",
  path: "/cheese-stick/terms",
  product: "dock",
});

export default function CheeseStickTermsPage() {
  return (
    <>
      <SiteHeader currentPath="/cheese-stick/terms" />
      <main>
        <section className="hero">
          <span className="badge">법적 고지</span>
          <h1 className="title-with-icon">
            <ProductIcon product="dock" size={44} />
            이용약관
          </h1>
          <p>
            Cheese Stick Dock과 이 안내 페이지의 이용 조건을 안내합니다.
            시행일: {DOCK_TERMS_EFFECTIVE_DATE}
          </p>
        </section>
        <LegalDocument sections={DOCK_TERMS_SECTIONS} />
      </main>
    </>
  );
}
