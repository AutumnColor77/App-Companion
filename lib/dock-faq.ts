import type { FaqItem } from "@/lib/faq-data";

export const DOCK_FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-dock",
    category: "시작하기",
    question: "Cheese Stick Dock는 무엇인가요?",
    answer:
      "치지직 스트리머를 위한 방송 통계·설정 독입니다. 동시 시청자, 최고·평균 시청자, 팔로워를 보고, 방송 제목·카테고리·태그를 바꿀 수 있습니다. 설치 파일은 없고 브라우저에서 엽니다.",
  },
  {
    id: "what-is-page",
    category: "시작하기",
    question: "이 페이지와 독 본체는 어떻게 다른가요?",
    answer:
      "이 페이지는 사용 안내와 법적 문서입니다. 통계를 보고 설정을 바꾸는 화면은 https://cheese-stick-dock.pages.dev 입니다.",
  },
  {
    id: "how-to-start",
    category: "시작하기",
    question: "어떻게 시작하나요?",
    answer:
      "서비스 주소를 연 뒤 치지직으로 로그인합니다. 로그인이 끝나면 같은 탭에서 대시보드로 돌아옵니다.",
  },
  {
    id: "token-storage",
    category: "로그인·데이터",
    question: "로그인 토큰이 브라우저에 저장되나요?",
    answer:
      "아니요. 액세스 토큰은 브라우저 localStorage와 sessionStorage에 두지 않고 서버의 Cloudflare KV에 둡니다. 브라우저에는 HttpOnly 세션 쿠키만 전달됩니다. 자세한 내용은",
  },
  {
    id: "local-data",
    category: "로그인·데이터",
    question: "브라우저에 남는 정보는 무엇인가요?",
    answer:
      "채널 식별자, 약 2분 동안 쓰는 통계 폴백 캐시, 최고 시청자 수, 값을 가렸는지 여부입니다. 토큰은 여기에 포함되지 않습니다.",
  },
  {
    id: "hide-values",
    category: "화면",
    question: "숫자를 화면에서 가릴 수 있나요?",
    answer: "각 수치를 클릭하면 숨김과 표시가 바뀝니다.",
  },
  {
    id: "status-dot",
    category: "화면",
    question: "채널명 옆 점 색은 무엇을 뜻하나요?",
    answer:
      "초록은 서버에서 최신 통계를 받은 상태입니다. 주황은 연결이 불안정해 이 브라우저의 최근 캐시를 보여주는 상태입니다. 빨강은 서버와 로컬 캐시 모두에서 통계를 가져오지 못한 상태입니다.",
  },
  {
    id: "rate-limit",
    category: "화면",
    question: "요청이 막히면 어떻게 되나요?",
    answer:
      "같은 IP에서 분당 한도를 넘으면 429가 반환됩니다. 통계 조회는 최근 약 2분의 로컬 캐시로 대신 보일 수 있습니다.",
  },
  {
    id: "contact",
    category: "문의",
    question: "문의는 어디로 하나요?",
    answer:
      "GitHub Issues로 남겨 주세요. 토큰, 세션 쿠키, Client Secret, 전체 로그는 올리지 마세요.",
  },
];

export const DOCK_FAQ_CATEGORIES = [
  "전체",
  ...Array.from(new Set(DOCK_FAQ_ITEMS.map((item) => item.category))),
];
