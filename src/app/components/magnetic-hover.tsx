"use client";

import { useEffect } from "react";

function attachMagnetic(element: HTMLElement) {
  const strength = Number(element.dataset.magneticStrength ?? 18);
  const rect = () => element.getBoundingClientRect();
  let raf = 0;

  const handleMove = (event: MouseEvent) => {
    if (raf) cancelAnimationFrame(raf);
    const { clientX, clientY } = event;
    const r = rect();
    const x = (clientX - (r.left + r.width / 2)) / r.width;
    const y = (clientY - (r.top + r.height / 2)) / r.height;
    raf = requestAnimationFrame(() => {
      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
  };

  const handleLeave = () => {
    if (raf) cancelAnimationFrame(raf);
    element.style.transform = "translate(0px, 0px)";
  };

  element.addEventListener("mousemove", handleMove);
  element.addEventListener("mouseleave", handleLeave);

  return () => {
    element.removeEventListener("mousemove", handleMove);
    element.removeEventListener("mouseleave", handleLeave);
  };
}

export default function MagneticHover() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-magnetic], .interactive-element, .hover-glow"
      )
    );

    const cleanups = elements.map((el) => attachMagnetic(el));

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
