import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { DOCK_APP_URL } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader currentPath="/" />
      <main>
        <section className="hero">
          <span className="badge">안내 사이트</span>
          <h1>쓰는 제품의 안내를 여기서 확인하세요</h1>
          <p>
            Live MR Manager와 Cheese Stick Dock의 사용 방법, 자주 묻는 질문,
            개인정보 처리방침과 이용약관을 모아 두었습니다.
          </p>
        </section>

        <section className="card-grid">
          <article className="card">
            <h2>Live MR Manager</h2>
            <p>
              Windows에서 MR·가사·재생을 관리하는 데스크톱 앱입니다. 음원은 내
              PC에서만 다룹니다.
            </p>
            <div className="card-actions">
              <Link href="/download" className="btn btn-primary">
                다운로드
              </Link>
              <Link href="/faq" className="btn btn-secondary">
                도움말
              </Link>
            </div>
          </article>
          <article className="card">
            <h2>Cheese Stick Dock</h2>
            <p>
              치지직 방송의 시청자 수와 제목·카테고리·태그를 보는 독입니다.
              설치 없이 브라우저에서 엽니다.
            </p>
            <div className="card-actions">
              <a
                href={DOCK_APP_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                서비스 열기
              </a>
              <Link href="/cheese-stick" className="btn btn-secondary">
                안내
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
