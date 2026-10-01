import Image from "next/image";
import Link from "next/link";
import { ProductIcon } from "@/components/ProductIcon";
import { SiteHeader } from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo";
import { CopyUrlButton } from "@/components/CopyUrlButton";
import { DOCK_APP_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "치즈스틱 독 사용 방법 — OBS에 치지직 독 추가하기",
  description:
    "OBS 사용자 브라우저 독에 치즈스틱 독(Cheese Stick Dock)을 추가하고 치지직 계정을 연동해 시청자 통계와 방송 설정을 사용하는 방법.",
  path: "/cheese-stick/guide",
  product: "dock",
});

const IMG = "/images/cheese-stick-guide";

export default function CheeseStickGuidePage() {
  return (
    <>
      <SiteHeader currentPath="/cheese-stick/guide" />
      <main>
        <section className="hero">
          <span className="badge">사용 방법</span>
          <h1 className="title-with-icon">
            <ProductIcon product="dock" size={44} />
            OBS에 독 추가하기
          </h1>
          <p>
            Cheese Stick Dock은 OBS의 사용자 브라우저 독으로 넣어 사용합니다. 독을
            추가한 뒤 치지직 계정을 연동하면 방송 정보와 통계를 볼 수 있습니다.
          </p>
        </section>

        <section className="guide-section">
          <h2>1. 독 추가 방법</h2>

          <article className="guide-step">
            <div className="guide-step-text">
              <strong>1단계</strong>
              <p>
                OBS 상단 메뉴에서 <b>독</b> → <b>사용자 브라우저 독</b>을 선택합니다.
              </p>
            </div>
            <Image
              className="guide-shot"
              src={`${IMG}/obs-dock-menu.png`}
              alt="OBS 독 메뉴에서 사용자 브라우저 독 선택"
              width={366}
              height={253}
            />
          </article>

          <article className="guide-step">
            <div className="guide-step-text">
              <strong>2단계</strong>
              <p>
                독 이름에 <b>&ldquo;치지직 통계&rdquo;</b>(또는 원하는 이름)를 입력하고,
                URL에 아래 주소를 입력한 뒤 <b>적용</b>을 클릭합니다.
              </p>
              <CopyUrlButton url={`${DOCK_APP_URL}/`} />
            </div>
            <Image
              className="guide-shot"
              src={`${IMG}/obs-custom-dock.png`}
              alt="사용자 브라우저 독 창에 독 이름과 URL 입력"
              width={612}
              height={390}
            />
          </article>

          <article className="guide-step">
            <div className="guide-step-text">
              <strong>3단계</strong>
              <p>
                상단 메뉴 <b>독</b>에서 방금 만든 독 이름에 체크 표시가 되어 있는지
                확인합니다. 체크하면 독이 화면에 나타납니다.
              </p>
            </div>
            <Image
              className="guide-shot"
              src={`${IMG}/obs-dock-check.png`}
              alt="독 메뉴에서 만든 독 이름 체크"
              width={287}
              height={388}
            />
          </article>
        </section>

        <section className="guide-section">
          <h2>2. 독 사용 방법</h2>

          <article className="guide-step">
            <div className="guide-step-text">
              <strong>치지직 계정 연동</strong>
              <p>
                계정 연동을 위해 <b>치지직 계정 연동하기</b>를 눌러 네이버 로그인을
                진행합니다.
              </p>
              <p>
                정보 제공 동의 항목은 방송 정보를 가져오는 데 필요한 항목이라 전부
                동의하셔야 서비스 이용이 가능합니다.
              </p>
            </div>
            <div className="guide-shots">
              <Image
                className="guide-shot"
                src={`${IMG}/login.png`}
                alt="치지직 계정 연동하기 화면"
                width={502}
                height={388}
              />
              <Image
                className="guide-shot"
                src={`${IMG}/consent.png`}
                alt="정보 제공 동의 필수 항목 화면"
                width={465}
                height={394}
              />
            </div>
          </article>

          <article className="guide-step">
            <div className="guide-step-text">
              <strong>대시보드</strong>
              <ul>
                <li>현재 방송 제목 조회 및 변경</li>
                <li>현재 카테고리 조회 및 변경, 카테고리를 검색하여 적용</li>
                <li>현재 태그 조회 및 변경 (쉼표로 구분)</li>
                <li>동시 시청자, 최고 시청자, 평균 시청자, 팔로워 실시간 조회</li>
                <li>통계 숫자를 클릭하면 가림</li>
                <li>통계 새로고침으로 최신 수치 불러오기</li>
                <li>연동 해제 및 로그아웃</li>
              </ul>
            </div>
            <div className="guide-shots">
              <Image
                className="guide-shot"
                src={`${IMG}/dashboard.png`}
                alt="Cheese Stick Dock 대시보드 화면"
                width={502}
                height={773}
              />
              <Image
                className="guide-shot"
                src={`${IMG}/category-search.png`}
                alt="카테고리 검색 드롭다운"
                width={508}
                height={344}
              />
            </div>
          </article>
        </section>

        <section className="guide-section">
          <p className="support-note">
            로그인 정보나 숫자 가리기 등 더 궁금한 점은{" "}
            <Link href="/cheese-stick/faq">도움말</Link>을 확인하세요.
          </p>
        </section>
      </main>
    </>
  );
}
