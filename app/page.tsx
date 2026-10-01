import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { DISCORD_INVITE_URL, QA_URL } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader currentPath="/" />
      <main>
        <section className="hero">
          <span className="badge">Autumn Tools</span>
          <h1>쓰는 제품의 안내를 여기서 확인하세요</h1>
          <p>
            어텀 툴즈(Autumn Tools)의 Live MR Manager와 Cheese Stick Dock 사용
            방법, 자주 묻는 질문, 개인정보 처리방침과 이용약관을 모아 두었습니다.
          </p>
        </section>

        <section className="card-grid">
          <article className="card">
            <h2>Live MR Manager</h2>
            <p>
              Windows에서 MR·가사·재생을 관리하는 데스크톱 앱입니다. Live MR
              Songbook으로 시청자 신청을 받습니다.
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
              OBS 사용자 브라우저 독으로 추가해 사용합니다.
            </p>
            <div className="card-actions">
              <Link href="/cheese-stick/guide" className="btn btn-primary">
                사용 방법
              </Link>
              <Link href="/cheese-stick" className="btn btn-secondary">
                안내
              </Link>
            </div>
          </article>
        </section>

        <section className="card" style={{ marginTop: "1rem" }}>
          <h2>Autumn Tools Discord</h2>
          <p>
            모든 제품의 질문, 업데이트 소식, 기능 제안을 한곳에서 나눕니다.
            토큰·비밀번호는 올리지 마세요.
          </p>
          <a
            href={DISCORD_INVITE_URL || QA_URL}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord 참여
          </a>
        </section>
      </main>
    </>
  );
}
