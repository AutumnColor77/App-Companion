import { SiteHeader } from "@/components/SiteHeader";
import { FaqList } from "@/components/FaqList";
import { DOCK_FAQ_CATEGORIES, DOCK_FAQ_ITEMS } from "@/lib/dock-faq";

export const metadata = {
  title: "Cheese Stick Dock 도움말",
  description:
    "Cheese Stick Dock 로그인, 브라우저에 남는 정보, 통계 표시에 대한 자주 묻는 질문",
};

export default function CheeseStickFaqPage() {
  return (
    <>
      <SiteHeader currentPath="/cheese-stick/faq" />
      <main>
        <section className="hero">
          <span className="badge">도움말</span>
          <h1>자주 묻는 질문</h1>
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
