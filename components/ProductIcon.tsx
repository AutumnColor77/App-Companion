import Image from "next/image";

const ICONS = {
  lmrm: { src: "/images/products/lmrm.png", alt: "Live MR Manager" },
  dock: { src: "/images/products/cheese-stick-dock.png", alt: "Cheese Stick Dock" },
  songbook: { src: "/images/products/songbook.png", alt: "Live MR Songbook" },
} as const;

type Props = {
  product: keyof typeof ICONS;
  size?: number;
};

export function ProductIcon({ product, size = 28 }: Props) {
  const icon = ICONS[product];
  return (
    <Image
      className="product-icon"
      src={icon.src}
      alt={icon.alt}
      width={size}
      height={size}
    />
  );
}
