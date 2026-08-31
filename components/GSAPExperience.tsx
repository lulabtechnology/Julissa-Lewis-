"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function GSAPExperience() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;

    async function init() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reveals = gsap.utils.toArray("[data-gsap-reveal]") as HTMLElement[];
        reveals.forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true
              }
            }
          );
        });

        const staggers = gsap.utils.toArray("[data-gsap-stagger]") as HTMLElement[];
        staggers.forEach((container) => {
          const children = Array.from(container.children);
          if (!children.length) return;

          gsap.fromTo(
            children,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.68,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 86%",
                once: true
              }
            }
          );
        });

        const parallax = gsap.utils.toArray("[data-gsap-parallax]") as HTMLElement[];
        parallax.forEach((element) => {
          gsap.to(element, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: element.parentElement ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8
            }
          });
        });
      });

      cleanup = () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) => trigger.kill());
      };
    }

    init();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [pathname]);

  return null;
}
