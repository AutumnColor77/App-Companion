import { ProductIcon } from "@/components/ProductIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo";
import { LegalDocument } from "@/components/LegalDocument";
import {
  DOCK_PRIVACY_EFFECTIVE_DATE,
  DOCK_PRIVACY_SECTIONS,
} from "@/lib/legal/dock-privacy";

export const metadata = pageMetadata({
  title: "Cheese Stick Dock 개인정보 처리방침",
  description:
    "치즈스틱 독(Cheese Stick Dock)의 치지직 로그인, 세션, 브라우저 저장 항목 안내.",
  path: "/cheese-stick/privacy",
  product: "dock",
});

export default function CheeseStickPrivacyPage() {
  return (
    <>
      <SiteHeader currentPath="/cheese-stick/privacy" />
      <main>
        <section className="hero">
          <span className="badge">법적 고지</span>
          <h1 className="title-with-icon">
            <ProductIcon product="dock" size={44} />
            개인정보 처리방침
          </h1>
          <p>
            Cheese Stick Dock과 이 안내 페이지에서 처리하는 정보의 범위와
            목적을 안내합니다. 시행일: {DOCK_PRIVACY_EFFECTIVE_DATE}
          </p>
        </section>
        <LegalDocument sections={DOCK_PRIVACY_SECTIONS} />
      </main>
    </>
  );
}
