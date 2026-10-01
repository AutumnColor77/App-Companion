export const GITHUB_REPO = "AutumnColor77/Live-MR-Manager";
export const GITHUB_RELEASES_URL = `https://github.com/${GITHUB_REPO}/releases`;
export const GITHUB_ISSUES_URL = `https://github.com/${GITHUB_REPO}/issues`;

export const SITE_NAME = "Live MR Manager";

export const SITE_LOGO = "/images/logo.png";
export const SITE_ICON = "/images/app-icon.png";

export const COMPANION_BASE =
  process.env.NEXT_PUBLIC_COMPANION_BASE?.trim() || "https://autumntools.vercel.app";

export const FAQ_URL = `${COMPANION_BASE}/faq`;
export const QA_URL = `${COMPANION_BASE}/qa`;

/** Discord 초대 링크 — Autumn Tools 커뮤니티(전 제품 공용) */
export const DISCORD_INVITE_URL =
  process.env.NEXT_PUBLIC_DISCORD_INVITE_URL?.trim() ||
  "https://discord.gg/qfJnk3VJyf";

export const GITHUB_ISSUES_BUG_URL = `${GITHUB_ISSUES_URL}/new?template=bug_report.yml`;
export const GITHUB_ISSUES_FEATURE_URL = `${GITHUB_ISSUES_URL}/new?template=feature_request.yml`;

export const SONGBOOK_URL = "https://www.livemrsongbook.com";

export const DOCK_APP_URL = "https://cheese-stick-dock.pages.dev";
export const DOCK_GITHUB_REPO = "AutumnColor77/Chzzk_statistics_Dock";
export const DOCK_GITHUB_URL = `https://github.com/${DOCK_GITHUB_REPO}`;
export const DOCK_GITHUB_ISSUES_URL = `${DOCK_GITHUB_URL}/issues`;
export const DOCK_LICENSE_URL = `${DOCK_GITHUB_URL}/blob/main/LICENSE`;
