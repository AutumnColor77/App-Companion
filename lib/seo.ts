import type { Metadata } from "next";
import { COMPANION_BASE } from "@/lib/site";

export const SITE_URL = COMPANION_BASE.replace(/\/+$/, "");

export const BRAND_NAMES = ["Autumn Tools", "어텀 툴즈", "어텀툴즈"];

export const LMRM_NAMES = [
  "Live MR Manager",
  "LMRM",
  "라이브 MR 매니저",
  "라이브엠알매니저",
  "라이브 엠알 매니저",
];

export const LMRM_KEYWORDS_KO = [
  "MR 관리 프로그램",
  "엠알 관리",
  "AI MR 분리",
  "보컬 제거",
  "반주 만들기",
  "노래방 MR",
  "가사 표시",
  "키 변경",
  "피치 조절",
  "노래 방송",
  "신청곡",
  "노래책",
  "라이브 MR 송북",
  "OBS 가사 오버레이",
];

export const LMRM_KEYWORDS_EN = [
  "MR manager",
  "instrumental",
  "vocal remover",
  "AI stem separation",
  "lyrics",
  "pitch shift",
  "song request",
  "streamer songbook",
  "Live MR Songbook",
  "OBS overlay",
];

export const DOCK_NAMES = ["Cheese Stick Dock", "치즈스틱 독", "치즈스틱독"];

export const DOCK_KEYWORDS_KO = [
  "치지직 독",
  "치지직 통계",
  "치지직 시청자 수",
  "치지직 방송 제목 변경",
  "치지직 카테고리 변경",
  "치지직 태그 변경",
  "OBS 독",
  "OBS 사용자 브라우저 독",
  "치지직 방송 도구",
];

export const DOCK_KEYWORDS_EN = [
  "Chzzk dock",
  "Chzzk statistics",
  "Chzzk viewer count",
  "OBS custom browser dock",
  "stream title category tags",
];

export type SeoProduct = "hub" | "lmrm" | "dock";

const PRODUCT_KEYWORDS: Record<SeoProduct, string[]> = {
  hub: [...BRAND_NAMES, ...LMRM_NAMES, ...DOCK_NAMES],
  lmrm: [...LMRM_NAMES, ...LMRM_KEYWORDS_KO, ...LMRM_KEYWORDS_EN, ...BRAND_NAMES],
  dock: [...DOCK_NAMES, ...DOCK_KEYWORDS_KO, ...DOCK_KEYWORDS_EN, ...BRAND_NAMES],
};

const PRODUCT_IMAGES: Record<SeoProduct, { url: string; width: number; height: number; alt: string }> = {
  hub: { url: "/images/products/lmrm.png", width: 142, height: 142, alt: "Autumn Tools" },
  lmrm: { url: "/images/products/lmrm.png", width: 142, height: 142, alt: "Live MR Manager" },
  dock: {
    url: "/images/products/cheese-stick-dock.png",
    width: 512,
    height: 512,
    alt: "Cheese Stick Dock",
  },
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Autumn Tools",
  alternateName: ["어텀 툴즈", "어텀툴즈"],
  url: SITE_URL,
  inLanguage: "ko-KR",
};

export function lmrmJsonLd(downloadUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Live MR Manager",
    alternateName: LMRM_NAMES.slice(1),
    description:
      "방송·연습용 MR 관리 데스크톱 앱. AI MR 분리, 가사 표시, 키 변경, OBS 오버레이, Live MR Songbook 신청곡 연동.",
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "MultimediaApplication",
    url: `${SITE_URL}/download`,
    downloadUrl,
    image: `${SITE_URL}/images/products/lmrm.png`,
    inLanguage: "ko-KR",
    keywords: [...LMRM_KEYWORDS_KO, ...LMRM_KEYWORDS_EN].join(", "),
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    publisher: { "@type": "Organization", name: "Autumn Tools" },
  };
}

export function dockJsonLd(appUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cheese Stick Dock",
    alternateName: DOCK_NAMES.slice(1),
    description:
      "치지직 시청자 수·팔로워 통계를 보고 방송 제목·카테고리·태그를 바꾸는 OBS 사용자 브라우저 독.",
    operatingSystem: "Any (OBS Studio 사용자 브라우저 독)",
    applicationCategory: "MultimediaApplication",
    browserRequirements: "OBS Studio 사용자 브라우저 독 또는 최신 브라우저",
    url: appUrl,
    image: `${SITE_URL}/images/products/cheese-stick-dock.png`,
    inLanguage: "ko-KR",
    keywords: [...DOCK_KEYWORDS_KO, ...DOCK_KEYWORDS_EN].join(", "),
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
    publisher: { "@type": "Organization", name: "Autumn Tools" },
  };
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  product: SeoProduct;
};

export function pageMetadata({ title, description, path, product }: PageMetadataInput): Metadata {
  const image = PRODUCT_IMAGES[product];
  return {
    title,
    description,
    keywords: PRODUCT_KEYWORDS[product],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Autumn Tools",
      locale: "ko_KR",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [image.url],
    },
  };
}
