import { ProductIcon } from "@/components/ProductIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo";
import { FaqList } from "@/components/FaqList";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/lib/faq-data";

export const metadata = pageMetadata({
  title: "Live MR Manager 도움말 (라이브 MR 매니저 FAQ)",
  description:
    "라이브 MR 매니저(Live MR Manager) 설치, MR 분리, 가사·키 변경, OBS 오버레이, Live MR Songbook 노래책 연동에 대한 자주 묻는 질문.",
  path: "/faq",
  product: "lmrm",
});

export default function FaqPage() {
  return (
    <>
      <SiteHeader currentPath="/faq" />
      <main>
        <section className="hero">
          <span className="badge">도움말</span>
          <h1 className="title-with-icon">
            <ProductIcon product="lmrm" size={44} />
            자주 묻는 질문
          </h1>
          <p>
            앱 사용법과 멜로밍 노래책 연동에 대해 자주 받는 질문입니다.
          </p>
        </section>
        <FaqList items={FAQ_ITEMS} categories={FAQ_CATEGORIES} />
      </main>
    </>
  );
}
