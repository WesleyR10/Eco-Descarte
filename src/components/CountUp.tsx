"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string; // e.g. "2M+", "3%", "500", "5º"
  duration?: number;
}

function parseValue(val: string): { num: number; prefix: string; suffix: string } {
  const match = val.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return {
    prefix: match[1],
    num: parseFloat(match[2]),
    suffix: match[3],
  };
}

export default function CountUp({ value, duration = 2000 }: CountUpProps) {
  const [display, setDisplay] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  function animate() {
    const { num, prefix, suffix } = parseValue(value);
    const startTime = performance.now();
    const isInteger = Number.isInteger(num);

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo for a nice deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * num;

      if (isInteger) {
        setDisplay(`${prefix}${Math.round(current)}${suffix}`);
      } else {
        setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    }

    requestAnimationFrame(tick);
  }

  return <span ref={ref}>{hasAnimated ? display : "0"}</span>;
}
