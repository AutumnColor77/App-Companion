import { ProductIcon } from "@/components/ProductIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo";
import { FaqList } from "@/components/FaqList";
import { DOCK_FAQ_CATEGORIES, DOCK_FAQ_ITEMS } from "@/lib/dock-faq";

export const metadata = pageMetadata({
  title: "Cheese Stick Dock 도움말 (치즈스틱 독 FAQ)",
  description:
    "치즈스틱 독(Cheese Stick Dock) 치지직 로그인, 브라우저에 남는 정보, 시청자 통계 표시에 대한 자주 묻는 질문.",
  path: "/cheese-stick/faq",
  product: "dock",
});

export default function CheeseStickFaqPage() {
  return (
    <>
      <SiteHeader currentPath="/cheese-stick/faq" />
      <main>
        <section className="hero">
          <span className="badge">도움말</span>
          <h1 className="title-with-icon">
            <ProductIcon product="dock" size={44} />
            자주 묻는 질문
          </h1>
          <p>
            치지직 연동, 브라우저에 남는 정보, 통계 화면에서 자주 받는
            질문입니다.
          </p>
        </section>
        <FaqList
          items={DOCK_FAQ_ITEMS}
          categories={DOCK_FAQ_CATEGORIES}
          privacyHref="/cheese-stick/privacy"
          privacyItemId="token-storage"
        />
      </main>
    </>
  );
}
