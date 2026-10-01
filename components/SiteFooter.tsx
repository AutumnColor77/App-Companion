"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DISCORD_INVITE_URL,
  DOCK_GITHUB_ISSUES_URL,
  DOCK_LICENSE_URL,
  QA_URL,
  SONGBOOK_URL,
} from "@/lib/site";

const LMRM_LICENSE_URL =
  "https://github.com/AutumnColor77/Live-MR-Manager/blob/main/LICENSE";
const LMRM_NOTICES_URL =
  "https://github.com/AutumnColor77/Live-MR-Manager/blob/main/THIRD_PARTY_NOTICES.md";

function productOf(path: string) {
  if (path.startsWith("/cheese-stick")) return "dock";
  if (path === "/") return "hub";
  return "lmrm";
}

export function SiteFooter() {
  const path = usePathname() || "/";
  const product = productOf(path);

  if (product === "dock") {
    return (
      <footer className="site-footer">
        <p>
          Cheese Stick Dock — 치지직 방송 통계와 설정을 보는 독입니다. 로그인
          토큰은 서버에 두고, 화면용 캐시만 이 브라우저에 남습니다. 앱 소스는
          MIT · 이 안내의 약관은 서비스 이용에 적용됩니다.
        </p>
        <p>
          <Link href="/cheese-stick/guide">사용 방법</Link>
          {" · "}
          <Link href="/cheese-stick/faq">도움말</Link>
          {" · "}
          <a href={DOCK_GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer">
            GitHub Issues
          </a>
          {" · "}
          <Link href="/cheese-stick/privacy">개인정보 처리방침</Link>
          {" · "}
          <Link href="/cheese-stick/terms">이용약관</Link>
          {" · "}
          <a href={DOCK_LICENSE_URL} target="_blank" rel="noopener noreferrer">
            MIT 라이선스
          </a>
        </p>
      </footer>
    );
  }

  if (product === "hub") {
    return (
      <footer className="site-footer">
        <p>
          어텀 툴즈(Autumn Tools)는 Live MR Manager와 Cheese Stick Dock의
          설치·사용 안내와 법적 문서를 모은 사이트입니다.
        </p>
        <p>
          <Link href="/download">Live MR Manager</Link>
          {" · "}
          <Link href="/cheese-stick">Cheese Stick Dock</Link>
          {" · "}
          <Link href="/privacy">Live MR Manager 개인정보 처리방침</Link>
          {" · "}
          <Link href="/cheese-stick/privacy">Cheese Stick Dock 개인정보 처리방침</Link>
        </p>
      </footer>
    );
  }

  const discordHref = DISCORD_INVITE_URL || QA_URL;

  return (
    <footer className="site-footer">
      <p>
        Live MR Manager — 방송·연습용 MR 관리 앱. 음원은 내 PC에서만 처리됩니다.
        앱 소스는 MIT · 본 사이트의 약관은 Autumn Tools 웹·Live MR Songbook·브랜드에
        적용됩니다.
      </p>
      <p>
        <Link href="/faq">도움말</Link>
        {" · "}
        <Link href="/qa">문의</Link>
        {" · "}
        <a href={discordHref} target="_blank" rel="noopener noreferrer">
          Discord
        </a>
        {" · "}
        <Link href="/download">다운로드</Link>
        {" · "}
        <a href={SONGBOOK_URL} target="_blank" rel="noopener noreferrer">
          Live MR Songbook
        </a>
        {" · "}
        <Link href="/privacy">개인정보 처리방침</Link>
        {" · "}
        <Link href="/terms">이용약관</Link>
        {" · "}
        <a href={LMRM_LICENSE_URL} target="_blank" rel="noopener noreferrer">
          MIT 라이선스
        </a>
        {" · "}
        <a href={LMRM_NOTICES_URL} target="_blank" rel="noopener noreferrer">
          제3자 고지
        </a>
      </p>
    </footer>
  );
}
