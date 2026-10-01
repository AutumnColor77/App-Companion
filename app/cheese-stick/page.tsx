import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { DOCK_APP_URL } from "@/lib/site";

export const metadata = {
  title: "Cheese Stick Dock",
  description:
    "치지직 방송 통계·설정 독 Cheese Stick Dock 안내. OBS 사용자 브라우저 독으로 추가해 사용합니다.",
};

export default function CheeseStickPage() {
  return (
    <>
      <SiteHeader currentPath="/cheese-stick" />
      <main>
        <section className="hero">
          <span className="badge">치지직 방송 독</span>
          <h1>Cheese Stick Dock</h1>
          <p>
            동시 시청자, 최고·평균 시청자, 팔로워를 보고 방송 제목·카테고리·태그를
            바꿉니다. OBS 사용자 브라우저 독으로 추가해 사용합니다.
          </p>
        </section>

        <section className="card-grid">
          <article className="card">
            <h2>OBS에 추가하기</h2>
            <p>OBS 사용자 브라우저 독으로 넣어 사용합니다.</p>
            <Link href="/cheese-stick/guide" className="btn btn-primary">
              사용 방법
            </Link>
          </article>
          <article className="card">
            <h2>사용 전에</h2>
            <p>로그인 토큰이 어디에 있는지, 숫자를 가리는 방법을 적어 두었습니다.</p>
            <Link href="/cheese-stick/faq" className="btn btn-secondary">
              도움말
            </Link>
          </article>
        </section>

        <section style={{ marginTop: "2.5rem" }}>
          <h2 style={{ margin: "0 0 1rem", fontSize: "1.15rem" }}>
            이렇게 사용해 보세요
          </h2>
          <ol className="steps">
            <li>
              <strong>1. OBS에 독 추가</strong>
              <span>
                OBS 상단 메뉴 독 → 사용자 브라우저 독에 {DOCK_APP_URL}/ 주소를
                추가합니다. 자세한 순서는{" "}
                <Link href="/cheese-stick/guide">사용 방법</Link>을 참고하세요.
              </span>
            </li>
            <li>
              <strong>2. 치지직 연동</strong>
              <span>
                로그인하면 같은 탭에서 대시보드로 돌아옵니다. 액세스 토큰은
                브라우저 저장소에 두지 않습니다.
              </span>
            </li>
            <li>
              <strong>3. 통계와 설정</strong>
              <span>
                시청자 수와 팔로워를 확인하고, 필요하면 제목·카테고리·태그를
                수정합니다.
              </span>
            </li>
            <li>
              <strong>4. 숫자 가리기</strong>
              <span>
                방송 화면에 숫자가 보이면 해당 수치를 눌러 숨길 수 있습니다.
              </span>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
