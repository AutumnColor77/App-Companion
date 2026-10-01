"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { FaqItem } from "@/lib/faq-data";

type Props = {
  items: FaqItem[];
  categories: string[];
  privacyHref?: string;
  privacyItemId?: string;
};

function FaqAnswer({
  id,
  answer,
  privacyHref,
  privacyItemId,
}: {
  id: string;
  answer: string;
  privacyHref: string;
  privacyItemId: string;
}) {
  if (id === privacyItemId) {
    return (
      <p>
        {answer}{" "}
        <Link href={privacyHref}>개인정보 처리방침</Link>을 참고해 주세요.
      </p>
    );
  }
  return <p>{answer}</p>;
}

export function FaqList({
  items,
  categories,
  privacyHref = "/privacy",
  privacyItemId = "privacy",
}: Props) {
  const [category, setCategory] = useState("전체");

  const visible = useMemo(() => {
    if (category === "전체") return items;
    return items.filter((item) => item.category === category);
  }, [category, items]);

  return (
    <>
      <div className="filter-row" role="tablist" aria-label="FAQ 카테고리">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`chip ${category === cat ? "chip-active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="faq-list">
        {visible.map((item) => (
          <article key={item.id} className="faq-item" id={item.id}>
            <div className="faq-meta">{item.category}</div>
            <h3>{item.question}</h3>
            <FaqAnswer
              id={item.id}
              answer={item.answer}
              privacyHref={privacyHref}
              privacyItemId={privacyItemId}
            />
          </article>
        ))}
      </div>
    </>
  );
}
