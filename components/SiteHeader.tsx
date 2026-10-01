import Link from "next/link";

const PRODUCTS = [
  { href: "/download", label: "Live MR Manager", section: "lmrm" },
  { href: "/cheese-stick", label: "Cheese Stick Dock", section: "dock" },
] as const;

const LMRM_LINKS = [
  { href: "/faq", label: "도움말" },
  { href: "/qa", label: "문의" },
  { href: "/download", label: "다운로드" },
];

const DOCK_LINKS = [
  { href: "/cheese-stick", label: "소개" },
  { href: "/cheese-stick/faq", label: "도움말" },
];

type Section = "hub" | "lmrm" | "dock";

type Props = {
  currentPath?: string;
};

function sectionOf(path: string): Section {
  if (path.startsWith("/cheese-stick")) return "dock";
  if (path === "/") return "hub";
  return "lmrm";
}

export function SiteHeader({ currentPath = "/" }: Props) {
  const section = sectionOf(currentPath);
  const pageLinks = section === "dock" ? DOCK_LINKS : section === "lmrm" ? LMRM_LINKS : [];

  return (
    <header className="site-header">
      <Link href="/" className="brand">
        Companion
      </Link>
      <div className="header-right">
        <nav className="nav" aria-label="제품">
          {PRODUCTS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={section === link.section ? "is-section" : undefined}
              aria-current={currentPath === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {pageLinks.length > 0 && (
          <nav className="nav" aria-label="현재 제품 메뉴">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={currentPath === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
