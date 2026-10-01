export const PRIVACY_EFFECTIVE_DATE = "2026년 10월 1일";

export const GITHUB_ISSUES_URL =
  "https://github.com/AutumnColor77/Live-MR-Manager/issues";

export const QA_URL = "https://lmrm.vercel.app/qa";

export type LegalTable = {
  headers: string[];
  rows: string[][];
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  table?: LegalTable;
  note?: string;
};

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "intro",
    title: "1. 총칙",
    paragraphs: [
      "Live MR Manager(이하 「서비스」)는 Windows 데스크톱 앱, 신청 노래책 웹 서비스 Live MR Songbook(www.livemrsongbook.com, 이하 「Songbook」), 제품 안내 웹사이트 어텀 툴즈(Autumn Tools, lmrm.vercel.app, 이하 「Autumn Tools 웹」)로 이루어집니다.",
      "본 개인정보 처리방침은 서비스 이용 과정에서 처리되는 정보의 범위, 목적, 보유 기간 등을 설명합니다.",
      "개인정보 처리자: 개인 개발자 AutumnColor77",
      `시행일: ${PRIVACY_EFFECTIVE_DATE}`,
      `일반 문의·커뮤니티: 문의 허브(${QA_URL}) 및 Discord(해당 페이지 안내). Discord 대화는 운영 목적으로 확인될 수 있으니 토큰·비밀번호 등 민감 정보는 올리지 마세요.`,
      `개인정보·공식 버그 신고: GitHub Issues (${GITHUB_ISSUES_URL})`,
    ],
  },
  {
    id: "items",
    title: "2. 처리하는 개인정보 항목",
    paragraphs: [
      "회원 기능은 Songbook에만 있습니다. 데스크톱 앱과 Autumn Tools 웹은 회원가입 없이 이용하며, 앱에서 Songbook 로그인은 선택 사항입니다.",
      "Live MR Manager는 MR 분리·재생에 사용하는 음원 파일과 AI 분리 결과를 서버에 업로드하지 않습니다.",
    ],
    list: [
      "Autumn Tools 웹 접속 시: IP 주소, User-Agent 등 접속 로그(Vercel 호스팅 기본 로그)",
      "데스크톱 앱 — 메타데이터 검색 시: 곡·아티스트 검색어(Last.fm API, 운영자 Cloudflare Workers 경유)",
      "데스크톱 앱 — 유튜브 검색·추가·재생 시: 검색어, 영상 URL·ID(yt-dlp를 통해 YouTube로 직접 요청)",
      "데스크톱 앱 — 업데이트 확인과 도구·모델 다운로드 시: 일반 다운로드 요청(GitHub Releases의 yt-dlp·FFmpeg·가사 정렬 모델, Hugging Face의 분리 모델). 개인 식별 정보는 보내지 않습니다.",
      "데스크톱 앱 — Songbook 연결 시: Songbook 세션 토큰을 이용자 PC의 로컬 DB에만 저장합니다.",
      "Songbook 계정: 로그인 제공자(Google·네이버)의 계정 식별자, 이메일, 이름, 프로필 사진 URL, 이용자가 직접 입력한 닉네임(최대 20자)과 아바타 이미지",
      "Songbook 채널: 채널명과 주소(slug), 곡 정보(제목, 아티스트, 장르, 카테고리, 태그, 키, BPM, 난이도, 후원금액, 썸네일). YouTube 곡은 영상 URL도 저장하며, 로컬 파일 경로나 음원 파일은 저장하지 않습니다.",
      "Songbook 신청: 신청자 닉네임(입력하지 않으면 「익명」), 코멘트, 신청한 곡. 치지직 채팅·후원으로 들어온 신청은 채팅·후원 닉네임, 후원 금액, 메시지 식별자가 함께 저장됩니다.",
      "Songbook 치지직 연결 시: 치지직 채널 ID, 채널명, 액세스·리프레시 토큰(암호화 저장)",
      "Songbook 남용 방지: 요청 제한을 위한 IP 주소(24시간 보관)",
      "로컬 전용(외부 미전송): 음원 파일, AI MR 분리 결과, 라이브러리 메타데이터, 가사, OBS 오버레이용 재생 정보(동일 PC·LAN 내)",
    ],
  },
  {
    id: "public",
    title: "3. 공개되는 정보",
    paragraphs: [
      "Songbook은 시청자가 볼 수 있는 공개 노래책 서비스입니다. 아래 정보는 누구나 볼 수 있으니 실명·연락처 등 개인정보를 넣지 마세요.",
    ],
    list: [
      "채널명, 채널 주소, 채널 소유자의 닉네임과 아바타",
      "공개로 설정된 곡 목록과 곡 정보",
      "대기열에 있는 신청의 닉네임과 코멘트",
    ],
  },
  {
    id: "purpose",
    title: "4. 개인정보의 처리 목적",
    list: [
      "Autumn Tools 웹 FAQ·다운로드·법적 문서 제공",
      "데스크톱 앱 업데이트 안내, 도구·모델 다운로드, 유튜브 검색·재생",
      "곡 메타데이터 검색 보조(Last.fm — 기능 사용 시에만)",
      "Songbook 로그인과 계정 관리, 노래책 게시, 신청 접수와 대기열 운영",
      "데스크톱 앱과 Songbook 사이의 곡 목록 동기화와 원격 재생",
      "치지직 채팅·후원 신청 연동(이용자가 연결한 경우)",
      "서비스 안정성·보안, 남용 방지(접속 로그, 요청 제한)",
    ],
  },
  {
    id: "retention",
    title: "5. 보유 및 이용 기간",
    paragraphs: [
      "Songbook 계정을 탈퇴하면 치지직 연결을 해제하고, 소유한 채널의 곡·신청·설정·썸네일과 계정 정보를 즉시 삭제합니다. 삭제된 정보는 복구할 수 없습니다.",
    ],
    table: {
      headers: ["항목", "보유 기간"],
      rows: [
        ["Songbook 로그인 세션", "로그인 후 30일(만료 시 삭제)"],
        ["Songbook 로그인 중간 값(OAuth state, 앱 연결 코드)", "수 분 이내 만료 후 삭제"],
        ["Songbook 완료·거절된 신청", "처리 후 60일"],
        ["Songbook 요청 제한 기록(IP)", "24시간"],
        ["Songbook 계정, 채널, 곡 정보", "탈퇴할 때까지"],
        ["데스크톱 앱 라이브러리·세션 토큰", "이용자가 삭제하거나 앱을 제거할 때까지(로컬)"],
        ["Autumn Tools 웹 접속 로그", "Vercel 호스팅 정책에 따름"],
      ],
    },
  },
  {
    id: "third-party",
    title: "6. 제3자 제공 및 처리 위탁",
    paragraphs: [
      "서비스는 이용자의 개인정보를 판매하거나 광고 목적으로 제공하지 않습니다. 기능 제공을 위해 아래 서비스를 이용합니다.",
    ],
    table: {
      headers: ["수탁·연동 대상", "목적", "전송·처리 항목"],
      rows: [
        ["Vercel", "Autumn Tools 웹 호스팅", "접속 로그"],
        [
          "Cloudflare(Workers, D1, KV, Durable Objects)",
          "Songbook 호스팅·저장, Last.fm API 중계",
          "Songbook 계정·채널·곡·신청 정보, IP(요청 제한), 곡·아티스트 검색어",
        ],
        ["Google, 네이버", "Songbook 로그인", "계정 식별자, 이메일, 이름, 프로필 사진"],
        ["치지직(NAVER)", "채팅·후원 신청 연동(연결 시)", "채널 정보, 채팅·후원 내역 조회"],
        ["Last.fm", "음악 메타 조회", "곡·아티스트 검색어(기능 사용 시)"],
        ["YouTube", "검색·재생, 썸네일 표시", "검색어, 영상 URL·ID"],
        ["GitHub", "업데이트 확인, 도구·모델 다운로드", "다운로드 요청"],
        ["Hugging Face", "AI 분리 모델 다운로드", "모델 파일 요청(개인 식별 정보 없음)"],
        ["jsDelivr", "Songbook 웹 폰트 제공", "폰트 파일 요청"],
      ],
    },
  },
  {
    id: "overseas",
    title: "7. 개인정보의 국외 이전",
    paragraphs: [
      "Vercel, Cloudflare, Google, GitHub, Hugging Face, Last.fm, YouTube, jsDelivr 등 해외에 서버를 둔 서비스를 이용합니다. 각 서비스의 정책에 따라 정보가 해당 국가에서 처리될 수 있습니다.",
    ],
  },
  {
    id: "rights",
    title: "8. 정보주체의 권리",
    paragraphs: [
      "개인정보 열람·정정·삭제·처리 정지 등을 요청하실 수 있습니다. GitHub Issues로 문의해 주세요.",
      "Songbook 프로필(닉네임·아바타)과 채널 정보는 Songbook의 「내 정보」(/me)에서 직접 고칠 수 있고, 같은 화면에서 계정을 탈퇴할 수 있습니다.",
      "앱에서 Songbook 연결을 끊으려면 계정 메뉴에서 로그아웃하세요. 로컬에 저장된 세션 토큰이 지워집니다.",
      "로컬 데이터 삭제: Windows에서 %LOCALAPPDATA%\\com.autumncolor77.live-mr-manager\\ 폴더를 삭제하면 앱 로컬 데이터(라이브러리·캐시 등)가 제거됩니다.",
    ],
  },
  {
    id: "cookies",
    title: "9. 쿠키 및 유사 기술",
    paragraphs: [
      "Autumn Tools 웹은 마케팅·행동 분석용 쿠키를 사용하지 않으며, 별도의 로그인·세션 쿠키를 운영하지 않습니다.",
      "Songbook은 로그인 유지를 위한 쿠키만 사용합니다. 분석·광고 쿠키는 사용하지 않습니다.",
    ],
    list: [
      "sb_session: 로그인 세션(30일, HttpOnly)",
      "sb_oauth_state: 로그인 위조 방지(10분, HttpOnly)",
      "Songbook 브라우저 localStorage: 테마, 보기 방식, 필터 펼침 상태, 신청 닉네임(다음 신청 때 미리 채우기)",
    ],
  },
  {
    id: "security",
    title: "10. 개인정보의 안전성 확보 조치",
    list: [
      "Autumn Tools 웹과 Songbook에 HTTPS 적용, Songbook에 CSP·HSTS 등 보안 헤더 적용",
      "Songbook 세션 토큰과 앱 연결 코드는 서버에 해시로만 저장",
      "치지직 토큰은 암호화하여 저장",
      "요청 제한으로 자동화 남용 차단",
      "음원·MR 분리 결과는 사용자 PC 로컬에서만 처리",
      "라이브러리 데이터는 데스크톱 앱 로컬 SQLite에 저장",
    ],
  },
  {
    id: "children",
    title: "11. 아동의 개인정보",
    paragraphs: [
      "서비스는 만 14세 미만 아동을 대상으로 하지 않습니다. 만 14세 미만 아동의 개인정보가 처리된 사실을 알게 된 경우, 지체 없이 삭제 등 필요한 조치를 하겠습니다.",
    ],
  },
  {
    id: "changes",
    title: "12. 개인정보 처리방침 변경",
    paragraphs: [
      "본 방침을 변경하는 경우 Autumn Tools 웹에 게시하고 시행일을 명시합니다. 중요한 변경은 페이지 상단 또는 공지를 통해 안내할 수 있습니다.",
      "서비스 이용 조건은 [이용약관](/terms)을 참고해 주세요.",
    ],
  },
];
