import type { LegalSection } from "@/lib/legal/privacy-policy";
import { DOCK_APP_URL, DOCK_GITHUB_ISSUES_URL } from "@/lib/site";

export const DOCK_PRIVACY_EFFECTIVE_DATE = "2026년 10월 1일";

export const DOCK_PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "intro",
    title: "1. 총칙",
    paragraphs: [
      `Cheese Stick Dock(이하 「서비스」)는 치지직 방송 통계와 방송 설정 변경을 제공하는 웹 앱(${DOCK_APP_URL})과, 그 안내 페이지(lmrm.vercel.app/cheese-stick)로 이루어집니다.`,
      "본 개인정보 처리방침은 서비스 이용 과정에서 처리되는 정보의 범위, 목적, 보유 기간을 설명합니다.",
      "개인정보 처리자: 개인 개발자 AutumnColor77",
      `시행일: ${DOCK_PRIVACY_EFFECTIVE_DATE}`,
      `문의: GitHub Issues (${DOCK_GITHUB_ISSUES_URL}). 토큰·세션 쿠키·Client Secret은 올리지 마세요.`,
    ],
  },
  {
    id: "items",
    title: "2. 처리하는 개인정보 항목",
    paragraphs: [
      "안내 페이지에는 별도의 회원가입이 없습니다. 독 본체는 치지직 계정으로 로그인합니다.",
    ],
    list: [
      "치지직 OAuth: 채널 정보 조회와 방송 설정 변경에 필요한 권한. 액세스 토큰은 브라우저 localStorage·sessionStorage에 저장하지 않고 Cloudflare KV에 둡니다. 브라우저에는 HttpOnly, Secure, SameSite=Lax 세션 쿠키만 전달합니다.",
      "로그인 유지와 요청 검증을 위한 CSRF 쿠키, 로그인 시작 시 Path=/api/auth 로 제한된 OAuth state 쿠키",
      "브라우저 localStorage: 채널 식별자(chzzkChannelId), 약 2분의 통계 폴백 캐시(chzzk_live_status_cache), 최고 시청자 수(chzzk_peak_viewers), 값 가리기 상태(value-hidden-*)",
      "운영자 일일 지표: 로그인에 성공한 채널 ID의 SHA-256 해시. 지표 응답에는 개인을 알아볼 수 있는 값을 넣지 않으며, 운영자로 지정된 채널만 조회할 수 있습니다. 일자별 기록은 약 90일 후 KV에서 만료됩니다.",
      "요청 제한: 동일 IP의 호출 횟수. Cloudflare를 거치지 않은 요청은 차단합니다.",
      "안내 페이지 접속 시: IP 주소, User-Agent 등 Vercel 호스팅 접속 로그",
    ],
  },
  {
    id: "purpose",
    title: "3. 개인정보의 처리 목적",
    list: [
      "동시 시청자, 최고·평균 시청자, 팔로워 표시",
      "방송 제목, 카테고리, 태그 변경",
      "로그인 세션 유지와 요청 위조 방지",
      "운영자 일일 방문·신규 지표",
      "안내 페이지 제공과 과도한 호출 완화",
    ],
  },
  {
    id: "retention",
    title: "4. 보유 및 이용 기간",
    list: [
      "세션과 토큰: Cloudflare KV에 둡니다. 독의 연동 해제 및 로그아웃을 하면 이 서비스의 로컬 세션은 삭제됩니다. 치지직 쪽 폐기 호출이 실패해도 로컬 세션은 지우고, 그 사실을 응답으로 알립니다. 액세스 토큰이 만료되면 다시 로그인합니다.",
      "통계 응답 캐시: 같은 채널 결과를 짧은 시간 KV에 둔 뒤 갱신합니다.",
      "운영자 지표: 약 90일",
      "localStorage: 브라우저에서 사이트 데이터를 지울 때까지",
      "안내 페이지 접속 로그: Vercel 호스팅 정책. 별도의 회원 데이터베이스는 없습니다.",
    ],
  },
  {
    id: "third-party",
    title: "5. 제3자 제공 및 처리 위탁",
    table: {
      headers: ["수탁·연동 대상", "목적", "전송·처리 항목"],
      rows: [
        [
          "Cloudflare (Pages, KV)",
          "독 호스팅, 세션, 캐시, 지표, 요청 제한",
          "세션, 토큰, 채널 ID 해시, IP",
        ],
        [
          "치지직(네이버)",
          "로그인, 채널·방송 정보, 방송 설정 변경",
          "OAuth에 필요한 계정·채널 정보와 방송 설정",
        ],
        ["Vercel", "안내 페이지 호스팅", "접속 로그"],
        ["GitHub", "문의 접수", "이용자가 Issues에 직접 적은 내용"],
      ],
    },
  },
  {
    id: "overseas",
    title: "6. 개인정보의 국외 이전",
    paragraphs: [
      "Cloudflare, Vercel, GitHub 및 치지직 API는 해외에 서버를 둘 수 있습니다. 각 서비스의 정책에 따라 정보가 해당 국가에서 처리될 수 있습니다.",
    ],
  },
  {
    id: "rights",
    title: "7. 정보주체의 권리",
    paragraphs: [
      "개인정보 열람·정정·삭제·처리 정지를 GitHub Issues로 요청할 수 있습니다.",
      "독의 「연동 해제 및 로그아웃」으로 이 서비스에 남은 세션을 지울 수 있습니다.",
      "브라우저에서 이 사이트의 데이터를 삭제하면 localStorage에 남은 채널 식별자·통계 캐시·값 가리기 상태가 지워집니다.",
    ],
  },
  {
    id: "cookies",
    title: "8. 쿠키",
    paragraphs: [
      "독은 세션 쿠키(HttpOnly), CSRF 쿠키, 로그인 과정의 state 쿠키를 사용합니다. 마케팅·행동 분석용 쿠키는 사용하지 않습니다.",
      "안내 페이지는 마케팅·분석 쿠키와 로그인 세션 쿠키를 두지 않습니다.",
    ],
  },
  {
    id: "security",
    title: "9. 개인정보의 안전성 확보 조치",
    list: [
      "HTTPS와 HSTS",
      "액세스 토큰은 KV에 두고, 브라우저에는 HttpOnly 세션 쿠키만 전달",
      "상태 변경 요청에 CSRF와 Origin 검사",
      "채널 ID 형식 검사",
      "운영자 지표는 채널 ID 해시만 저장",
    ],
  },
  {
    id: "children",
    title: "10. 아동의 개인정보",
    paragraphs: [
      "서비스는 만 14세 미만 아동을 대상으로 하지 않습니다. 만 14세 미만 아동의 개인정보가 처리된 사실을 알게 된 경우 지체 없이 삭제 등 필요한 조치를 합니다.",
    ],
  },
  {
    id: "changes",
    title: "11. 개인정보 처리방침 변경",
    paragraphs: [
      "본 방침을 변경하는 경우 이 페이지에 게시하고 시행일을 명시합니다.",
      "서비스 이용 조건은 [이용약관](/cheese-stick/terms)을 참고해 주세요.",
    ],
  },
];
