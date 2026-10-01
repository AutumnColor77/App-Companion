"use client";

import { useState } from "react";

type Props = {
  url: string;
};

export function CopyUrlButton({ url }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="copy-field">
      <code>{url}</code>
      <button type="button" className="btn btn-secondary" onClick={handleCopy}>
        {copied ? "복사됨" : "복사"}
      </button>
    </div>
  );
}
