import type { LegalSection } from "@/lib/legal/privacy-policy";
import {
  DOCK_APP_URL,
  DOCK_GITHUB_ISSUES_URL,
  DOCK_GITHUB_URL,
  DOCK_LICENSE_URL,
} from "@/lib/site";
import { DOCK_PRIVACY_EFFECTIVE_DATE } from "@/lib/legal/dock-privacy";

export const DOCK_TERMS_EFFECTIVE_DATE = DOCK_PRIVACY_EFFECTIVE_DATE;

export const DOCK_TERMS_SECTIONS: LegalSection[] = [
  {
    id: "intro",
    title: "1. 총칙",
    paragraphs: [
      `본 이용약관(이하 「약관」)은 Cheese Stick Dock 웹 앱(${DOCK_APP_URL})과 안내 페이지(autumntools.vercel.app/cheese-stick)의 이용 조건을 정합니다. 소스 코드의 소프트웨어 라이선스는 [MIT License](${DOCK_LICENSE_URL})가 적용됩니다.`,
      "기능과 화면은 운영상 필요에 따라 바뀔 수 있습니다.",
      "운영자: 개인 개발자 AutumnColor77",
      `시행일: ${DOCK_TERMS_EFFECTIVE_DATE}`,
      `문의: GitHub Issues (${DOCK_GITHUB_ISSUES_URL})`,
    ],
  },
  {
    id: "acceptance",
    title: "2. 약관의 동의 및 변경",
    paragraphs: [
      "이용자가 안내 페이지에 접속하거나 독에서 치지직 연동을 마치면, 본 약관과 [개인정보 처리방침](/cheese-stick/privacy)에 동의한 것으로 봅니다.",
      "소스 코드의 사용·복제·수정·재배포 권리는 MIT License를 따르며, 본 약관은 그 권리를 줄이지 않습니다.",
      "운영자는 약관을 바꿀 수 있습니다. 바꾼 약관은 이 페이지에 시행일과 함께 게시합니다. 시행 이후 서비스를 계속 이용하면 변경에 동의한 것으로 볼 수 있습니다.",
    ],
  },
  {
    id: "software-license",
    title: "3. 소프트웨어 라이선스 (MIT)와 본 약관의 관계",
    paragraphs: [
      `Cheese Stick Dock 소스 코드는 MIT License로 공개됩니다. 저장소는 ${DOCK_GITHUB_URL} 입니다.`,
      "본 약관은 공식 서비스 운영, 안내 페이지, Cheese Stick Dock이라는 이름과 공식 주소의 사용에 적용됩니다.",
    ],
  },
  {
    id: "service",
    title: "4. 서비스의 내용",
    list: [
      "치지직 OAuth 로그인",
      "동시 시청자, 최고·평균 시청자, 팔로워 표시",
      "방송 제목, 카테고리, 태그 변경",
      "수치 가리기",
      "운영자로 지정된 채널만 볼 수 있는 일일 지표",
      `설치 프로그램은 제공하지 않습니다. 독은 ${DOCK_APP_URL} 에서 엽니다.`,
      "안내 페이지는 사용 방법, FAQ, 개인정보 처리방침, 이용약관을 게시합니다.",
    ],
  },
  {
    id: "eligibility",
    title: "5. 이용 자격",
    paragraphs: [
      "이용자는 관련 법령을 지킬 수 있는 자여야 합니다.",
      "만 14세 미만은 법정대리인의 동의 없이 서비스를 이용해서는 안 됩니다.",
      "치지직 계정을 연동하는 경우 치지직 이용약관과 정책을 함께 지켜야 합니다.",
    ],
  },
  {
    id: "user-duties",
    title: "6. 이용자의 의무",
    list: [
      "본인의 치지직 계정으로만 연동할 것",
      "방송 설정 변경 권한을 다른 사람의 방송에 쓰지 않을 것",
      "요청 제한을 넘는 자동 호출로 서비스를 방해하지 않을 것",
      "토큰과 세션 쿠키를 다른 사람에게 넘기지 않을 것",
    ],
  },
  {
    id: "copyright",
    title: "7. 저작권 및 상표",
    paragraphs: [
      "소스 코드의 저작권은 기여자에게 있고, 이용·재배포 조건은 MIT License를 따릅니다. 안내 문장과 서비스 이름에 대한 권리는 운영자에게 있습니다.",
      "치지직과 네이버의 상표, 계정, 방송 데이터에 대한 권리는 각 권리자에게 있습니다.",
    ],
  },
  {
    id: "prohibited",
    title: "8. 금지 행위",
    list: [
      "공식 주소나 Cheese Stick Dock 이름을 사칭하는 행위",
      "취약점 악용, 무단 접근, 비정상적인 트래픽",
      "법령 또는 치지직 정책에 어긋나는 방식으로 방송 설정을 바꾸는 행위",
    ],
    note: "MIT License에 따른 소스의 복제·수정·재배포 자체는 금지되지 않습니다. 공식 서비스와 주소를 사칭하는 것은 그와 별개로 제한됩니다.",
  },
  {
    id: "disclaimer",
    title: "9. 보증과 변경·중단",
    paragraphs: [
      "서비스는 있는 그대로 제공됩니다. 운영자는 무오류·무중단이나 특정 목적에의 적합성을 보증하지 않습니다.",
      "시청자 수와 방송 설정 변경 결과는 치지직 API와 Cloudflare 상태에 따라 달라질 수 있습니다.",
      "운영자는 유지보수, 법령, 치지직 정책 변경, 운영상 필요에 따라 서비스의 전부 또는 일부를 바꾸거나 중단할 수 있습니다.",
    ],
  },
  {
    id: "liability",
    title: "10. 책임의 제한",
    paragraphs: [
      "운영자의 고의 또는 중대한 과실이 없는 한, 치지직·Cloudflare·Vercel의 장애나 이용자의 계정·설정 사용으로 생긴 간접 손해에 대해 책임을 지지 않습니다.",
    ],
  },
  {
    id: "privacy",
    title: "11. 개인정보",
    paragraphs: [
      "개인정보 처리에 관한 사항은 [개인정보 처리방침](/cheese-stick/privacy)에 따릅니다.",
    ],
  },
  {
    id: "law",
    title: "12. 준거법 및 분쟁 해결",
    paragraphs: [
      "본 약관은 대한민국 법령을 준거법으로 합니다.",
      "분쟁이 생기면 운영자와 이용자는 먼저 협의합니다. 협의가 되지 않으면 관련 법령과 관할 법원에 따릅니다.",
    ],
  },
  {
    id: "misc",
    title: "13. 기타",
    paragraphs: [
      "약관의 일부 조항이 무효가 되어도 나머지 조항은 유효합니다.",
      "운영자가 어떤 권리를 바로 행사하지 않아도 그 권리를 포기한 것은 아닙니다.",
    ],
  },
];
