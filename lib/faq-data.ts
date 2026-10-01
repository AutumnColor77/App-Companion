export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-app",
    category: "시작하기",
    question: "Live MR Manager는 어떤 앱인가요?",
    answer:
      "방송·연습용 MR을 관리하는 Windows 데스크톱 앱입니다. 유튜브 검색·URL·로컬 음원 재생, AI로 MR 분리, 가사 동기화, OBS 오버레이, Live MR Songbook 연동(로그인·보내기·신청목록) 등을 한곳에서 다룰 수 있습니다. 음원 파일은 내 PC에서만 처리됩니다.",
  },
  {
    id: "what-is-site",
    category: "시작하기",
    question: "이 웹페이지는 무엇인가요?",
    answer:
      "Live MR Manager 공식 안내 사이트입니다. 앱 다운로드, 자주 묻는 질문, 문의 허브, 개인정보 처리방침·이용약관을 제공합니다.",
  },
  {
    id: "requirements",
    category: "시작하기",
    question: "설치하려면 어떤 PC가 필요한가요?",
    answer:
      "Windows 10/11 64비트에서 동작합니다. 설치 프로그램이 필요한 경우 Visual C++ 재배포 패키지를 함께 설치합니다. 그래픽카드는 없어도 되지만, NVIDIA 그래픽카드에 CUDA·cuDNN을 설치하면 AI MR 분리가 훨씬 빨라집니다.",
  },
  {
    id: "downloads",
    category: "시작하기",
    question: "AI 모델이나 도구는 언제 받나요?",
    answer:
      "MR 분리 모델은 설정 → 모델 다운로드에서 받습니다. 유튜브용 yt-dlp와 FFmpeg는 처음 필요할 때 자동으로 받고, 가사 자동 정렬 모델(한국어 약 1.27GB, 영어 약 378MB)은 쓰고 싶을 때만 받습니다. 받은 파일은 모두 해시로 검증합니다.",
  },
  {
    id: "obs-overlay",
    category: "기능",
    question: "OBS 오버레이는 어떻게 넣나요?",
    answer:
      "OBS에 브라우저 소스를 추가하고 http://localhost:14202 아래 주소를 넣습니다. 곡 정보는 /overlay-info, 신청 대기열은 /queue, 가사는 /overlay-lyrics 입니다. 앱 설정에서 디자인을 바꿀 수 있고, 다른 PC의 OBS에서 보려면 LAN 접속 옵션을 켠 뒤 앱을 다시 시작합니다.",
  },
  {
    id: "songbook-what",
    category: "Songbook",
    question: "Live MR Songbook은 무엇인가요?",
    answer:
      "시청자가 스트리머의 노래책을 보고 곡을 신청하는 웹 서비스입니다(www.livemrsongbook.com). 앱의 곡 목록을 노래책으로 올리고, 들어온 신청을 앱과 웹에서 대기열로 관리할 수 있습니다.",
  },
  {
    id: "songbook-connect",
    category: "Songbook",
    question: "앱과 Songbook은 어떻게 연결하나요?",
    answer:
      "앱에서 Songbook 로그인을 누르고 Google 또는 네이버로 로그인합니다. 채널이 없다면 Songbook 웹의 「내 정보」(/me)에서 채널을 먼저 만듭니다. 그다음 앱에서 「보내기」로 곡 목록을 올리고, 「가져오기」로 웹의 곡 목록을 받아올 수 있습니다.",
  },
  {
    id: "songbook-upload",
    category: "Songbook",
    question: "Songbook에는 무엇이 올라가나요?",
    answer:
      "제목, 아티스트, 장르, 태그, 키, BPM, 난이도, 후원금액, 작게 줄인 썸네일이 올라갑니다. 유튜브 곡은 영상 주소도 함께 올라갑니다. 음원 파일, MR 분리 결과, 내 PC의 파일 경로는 올라가지 않습니다. 앱에서 지운 곡은 웹에서 숨김 처리됩니다.",
  },
  {
    id: "songbook-request",
    category: "Songbook",
    question: "시청자는 어떻게 신청하나요?",
    answer:
      "스트리머의 노래책 주소(www.livemrsongbook.com/c/채널주소)에서 곡을 고르고 닉네임과 코멘트를 적어 신청합니다. 로그인하지 않아도 됩니다. 스트리머는 신청 받기를 켜고 끌 수 있고, 중복 신청을 막을 수 있습니다.",
  },
  {
    id: "songbook-remote",
    category: "Songbook",
    question: "웹에서 「재생」을 누르면 앱에서도 재생되나요?",
    answer:
      "네. Songbook 운영 화면에서 신청곡을 재생하면 앱이 몇 초 안에 같은 곡을 재생합니다. 새 신청이 들어오면 앱에 알림과 배지가 표시됩니다.",
  },
  {
    id: "songbook-public",
    category: "Songbook",
    question: "노래책에서 누구나 볼 수 있는 정보는 무엇인가요?",
    answer:
      "채널명, 채널 소유자의 닉네임과 아바타, 공개된 곡 목록, 대기열에 있는 신청 닉네임과 코멘트입니다. 실명이나 연락처는 적지 마세요.",
  },
  {
    id: "songbook-delete",
    category: "Songbook",
    question: "Songbook 계정은 어떻게 탈퇴하나요?",
    answer:
      "Songbook 웹의 「내 정보」(/me)에서 탈퇴할 수 있습니다. 탈퇴하면 채널, 곡, 신청 기록, 치지직 연결이 즉시 삭제되며 복구할 수 없습니다. 앱에서 연결만 끊으려면 계정 메뉴에서 로그아웃하세요.",
  },
  {
    id: "contact",
    category: "문의",
    question: "문의는 어디로 하면 되나요?",
    answer:
      "설치·사용법 질문은 Autumn Tools Discord(https://discord.gg/qfJnk3VJyf) 또는 문의 허브(autumntools.vercel.app/qa)를 이용해 주세요. 재현 가능한 버그는 GitHub Issues 버그 신고 템플릿으로, 기능 제안은 기능 제안 템플릿으로 등록해 주세요. 토큰·비밀번호·전체 로그는 올리지 마세요.",
  },
  {
    id: "contact-privacy",
    category: "문의",
    question: "문의할 때 주의할 점은?",
    answer:
      "비밀번호, API Key, 개인 식별 정보, 전체 로그 파일은 공개 채널이나 Issues에 올리지 마세요. 버그 신고 시 앱 버전·Windows 버전·재현 단계만 적어도 충분한 경우가 많습니다.",
  },
  {
    id: "proficiency",
    category: "곡 정보",
    question: "숙련도와 난이도란?",
    answer:
      "1~5 단계입니다. 숙련도는 내가 그 곡을 얼마나 잘 부르는지, 난이도는 곡 자체가 얼마나 어려운지를 나타냅니다. 앱 곡 정보 편집에서 별을 클릭해 설정할 수 있습니다.",
  },
  {
    id: "key-bpm",
    category: "곡 정보",
    question: "KEY와 BPM은 어떻게 넣나요?",
    answer:
      "앱에서 곡 정보를 열고 KEY·BPM을 직접 입력하거나, 「KEY/BPM 분석」으로 자동 추정할 수 있습니다.",
  },
  {
    id: "privacy",
    category: "안전·개인정보",
    question: "내 음원이 인터넷으로 올라가나요?",
    answer:
      "아니요. MR 분리·재생에 쓰는 음원 파일은 PC 안에서만 처리됩니다. 앱이 외부로 보내는 것은 사용자가 쓰는 기능(업데이트 확인, 유튜브 검색·재생, 메타데이터 조회, Songbook 곡 정보 보내기 등)에 필요한 요청뿐입니다. 자세한 내용은",
  },
];

export const FAQ_CATEGORIES = [
  "전체",
  ...Array.from(new Set(FAQ_ITEMS.map((item) => item.category))),
];
