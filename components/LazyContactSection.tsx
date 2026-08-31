"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/seo";

const ContactSection = dynamic(
  () => import("@/components/ContactSection").then((mod) => mod.ContactSection),
  {
    loading: () => (
      <section id="contacto" className="min-h-[420px] bg-white" aria-label="Contact" />
    )
  }
);

export function LazyContactSection({ lang }: { lang: Lang }) {
  const [ready, setReady] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || ready) return;

    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  if (ready) return <ContactSection lang={lang} />;

  return (
    <div ref={sentinelRef}>
      <section id="contacto" className="min-h-[420px] bg-white" aria-label={lang === "es" ? "Contacto" : "Contact"} />
    </div>
  );
}
