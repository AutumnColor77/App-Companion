# Autumn Tools (어텀 툴즈)

AutumnColor77 제품군의 통합 브랜드 Autumn Tools 안내 사이트입니다. Live MR Manager와 Cheese Stick Dock의 사용자 안내 사이트입니다. Next.js로 동작하며 프로덕션 주소는 `https://autumntools.vercel.app` 입니다.

## 페이지

| 경로 | 용도 |
|------|------|
| `/` | 두 제품 허브 |
| `/faq`, `/qa`, `/download`, `/privacy`, `/terms` | Live MR Manager. 데스크톱 앱이 이 주소를 그대로 엽니다 |
| `/privacy`, `/terms` | Live MR Songbook(https://www.livemrsongbook.com)에도 적용됩니다. Songbook 웹이 이 주소로 링크합니다 |
| `/cheese-stick` | Cheese Stick Dock 소개. 본체는 https://cheese-stick-dock.pages.dev |
| `/cheese-stick/guide` | 독을 OBS에 추가하는 방법 |
| `/cheese-stick/faq` | 독 FAQ |
| `/cheese-stick/privacy`, `/cheese-stick/terms` | 독 개인정보 처리방침·이용약관 |

## 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:3000

## 환경 변수

`.env.local` (Git 커밋 금지):

```env
NEXT_PUBLIC_DISCORD_INVITE_URL=https://discord.gg/qfJnk3VJyf
```

Autumn Tools 전 제품이 함께 쓰는 Discord 초대 링크입니다. 홈, 각 제품 푸터, 문의 페이지에 표시됩니다. 버그 신고는 제품별 GitHub Issues로 받습니다.

## 라이선스

이 저장소의 웹 코드는 **MIT**입니다. 각 제품의 이용약관은 해당 서비스 조건이며, MIT 재배포 권리를 축소하지 않습니다.

- Live MR Manager: [AutumnColor77/Live-MR-Manager](https://github.com/AutumnColor77/Live-MR-Manager)
- Cheese Stick Dock: [AutumnColor77/Chzzk_statistics_Dock](https://github.com/AutumnColor77/Chzzk_statistics_Dock)

## Vercel

1. 이 저장소 루트를 import 합니다. Root Directory는 비웁니다.
2. 도메인 `autumntools.vercel.app` 을 대표 도메인으로 연결하고, 예전 주소 `lmrm.vercel.app` 은 `autumntools.vercel.app` 으로 리다이렉트합니다.
3. `NEXT_PUBLIC_DISCORD_INVITE_URL` 을 Production 환경 변수로 넣습니다. 검색엔진 소유 확인 코드는 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` 에 넣습니다.

`lmrm.vercel.app` 리다이렉트를 빼면 이전 버전 Live MR Manager 앱의 약관·도움말 링크가 끊깁니다.
