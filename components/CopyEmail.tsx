"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-line-strong px-5 py-3 font-mono text-sm text-muted transition hover:border-ink hover:text-ink"
    >
      <span aria-live="polite">{copied ? "Copied ✓" : "Copy email"}</span>
    </button>
  );
}
