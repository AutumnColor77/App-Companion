import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { GITHUB_RELEASES_URL } from "@/lib/site";

export const metadata = {
  title: "다운로드",
  description: "Live MR Manager Windows 앱 다운로드",
};

export default function DownloadPage() {
  return (
    <>
      <SiteHeader currentPath="/download" />
      <main>
        <section className="hero">
          <span className="badge">Windows</span>
          <h1>Live MR Manager 받기</h1>
          <p>
            PC에 설치한 뒤 MR 라이브러리를 만들고, 방송·연습에 맞게 곡을
            관리할 수 있습니다.
          </p>
        </section>
        <article className="card">
          <h2>최신 버전 설치</h2>
          <p>
            아래 버튼에서 설치 파일을 받을 수 있습니다. 설치 후 유튜브 검색·URL
            또는 로컬 음원을 추가하고, Live MR Songbook으로 채널 노래책을
            동기화해 보세요.
          </p>
          <a
            href={GITHUB_RELEASES_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            설치 파일 다운로드
          </a>
        </article>
        <article className="card" style={{ marginTop: "1rem" }}>
          <h2>설치 후</h2>
          <p>
            곡을 추가하고 AI MR 분리, 가사 동기화, OBS 오버레이, Songbook
            신청목록 등 앱 기능을 활용할 수 있습니다.
          </p>
          <Link href="/faq" className="btn btn-secondary">
            사용 방법 보기
          </Link>
        </article>
        <section style={{ marginTop: "2.5rem" }}>
          <h2 style={{ margin: "0 0 1rem", fontSize: "1.15rem" }}>
            이렇게 사용해 보세요
          </h2>
          <ol className="steps">
            <li>
              <strong>1. 앱 설치</strong>
              <span>이 페이지에서 최신 버전을 설치합니다.</span>
            </li>
            <li>
              <strong>2. 곡 라이브러리 만들기</strong>
              <span>
                유튜브 검색·URL 또는 로컬 파일로 곡을 추가하고, 필요하면 AI로
                MR을 분리해 둡니다. Songbook에 로그인하면 채널 노래책으로 보낼
                수 있습니다.
              </span>
            </li>
            <li>
              <strong>3. 곡 정보 정리</strong>
              <span>
                제목·가수·KEY/BPM·가사 등을 정리해 방송·연습에 맞게 관리합니다.
              </span>
            </li>
            <li>
              <strong>4. 방송·연습</strong>
              <span>앱에서 재생·피치 조절·OBS 오버레이를 사용합니다.</span>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
