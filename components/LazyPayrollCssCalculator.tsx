"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/seo";

const PayrollCssCalculator = dynamic(
  () => import("@/components/PayrollCssCalculator").then((mod) => mod.PayrollCssCalculator),
  {
    loading: () => <div className="card min-h-48 p-6 text-sm text-brandGray">Cargando calculadora…</div>
  }
);

export function LazyPayrollCssCalculator({ lang }: { lang: Lang }) {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || ready) return;
    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  return <div ref={ref}>{ready ? <PayrollCssCalculator lang={lang} /> : <div className="min-h-48" aria-hidden="true" />}</div>;
}
