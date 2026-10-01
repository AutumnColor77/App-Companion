import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProductIcon } from "@/components/ProductIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { lmrmJsonLd, pageMetadata } from "@/lib/seo";
import { GITHUB_RELEASES_URL, SONGBOOK_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Live MR Manager 다운로드 (라이브 MR 매니저)",
  description:
    "라이브 MR 매니저(Live MR Manager) Windows 무료 다운로드. AI MR 분리·보컬 제거, 가사 표시, 키 변경, OBS 오버레이, Live MR Songbook 신청곡 연동을 지원하는 방송·연습용 MR 관리 프로그램입니다.",
  path: "/download",
  product: "lmrm",
});

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={lmrmJsonLd(GITHUB_RELEASES_URL)} />
      <SiteHeader currentPath="/download" />
      <main>
        <section className="hero">
          <span className="badge">Windows</span>
          <h1 className="title-with-icon">
            <ProductIcon product="lmrm" size={44} />
            Live MR Manager 받기
          </h1>
          <p>
            Live MR Manager(라이브 MR 매니저)를 PC에 설치한 뒤 MR 라이브러리를
            만들고, 방송·연습에 맞게 곡을 관리할 수 있습니다.
          </p>
        </section>
        <section className="card-grid">
          <article className="card">
            <h2>최신 버전 설치</h2>
            <p>
              GitHub Releases에서 설치 파일(setup.exe)을 받아 실행합니다. 새
              버전이 나오면 앱이 알려 줍니다.
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
          <article className="card">
            <h2>시스템 요구사항</h2>
            <p>
              Windows 10/11 64비트. Visual C++ 재배포 패키지는 설치 중 자동으로
              설치됩니다. 그래픽카드는 선택 사항이며, NVIDIA + CUDA 환경이면 AI
              MR 분리가 훨씬 빨라집니다.
            </p>
            <Link href="/faq" className="btn btn-secondary">
              도움말 보기
            </Link>
          </article>
        </section>
        <section style={{ marginTop: "2.5rem" }}>
          <h2 style={{ margin: "0 0 1rem", fontSize: "1.15rem" }}>
            이렇게 사용해 보세요
          </h2>
          <ol className="steps">
            <li>
              <strong>1. 앱 설치</strong>
              <span>
                설치 후 설정 → 모델 다운로드에서 MR 분리 모델을 받아 둡니다.
              </span>
            </li>
            <li>
              <strong>2. 곡 라이브러리 만들기</strong>
              <span>
                유튜브 검색·URL 또는 로컬 파일로 곡을 추가하고, 제목·가수·KEY/BPM·
                가사를 정리합니다. 필요하면 AI로 MR을 분리해 둡니다.
              </span>
            </li>
            <li>
              <strong className="title-with-icon">
                <ProductIcon product="songbook" size={22} />
                3. Songbook 연결
              </strong>
              <span>
                앱에서 Google 또는 네이버로 로그인하고,{" "}
                <a href={`${SONGBOOK_URL}/me`} target="_blank" rel="noopener noreferrer">
                  Live MR Songbook
                </a>
                에서 채널을 만든 뒤 곡 목록을 보냅니다. 시청자는 노래책에서 곡을
                신청할 수 있습니다.
              </span>
            </li>
            <li>
              <strong>4. 방송·연습</strong>
              <span>
                재생·피치 조절, OBS 오버레이, 신청목록 대기열을 함께 사용합니다.
              </span>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
