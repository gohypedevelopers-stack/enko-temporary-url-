"use client";

import { useEffect, useState, useRef } from 'react';

interface NumberShuffleProps {
  value: string;
  duration?: number;
  delay?: number;
}

export function NumberShuffle({ value, duration = 1000, delay = 0 }: NumberShuffleProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const chars = '0123456789';
    const target = value;
    const length = target.length;
    
    let start: number | null = null;
    let frameId: number;

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Eased progress using cubic ease-out for a smooth deceleration at the end
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const solvedCount = Math.floor(easedProgress * length);

      let current = '';
      for (let i = 0; i < length; i++) {
        if (i < solvedCount) {
          current += target[i];
        } else if (target[i] === ' ' || target[i] === '.' || target[i] === '+' || target[i] === '%') {
          current += target[i]; // Preserve formats
        } else if (target[i] >= 'A' && target[i] <= 'Z') {
          const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          current += letters[Math.floor(Math.random() * letters.length)];
        } else if (target[i] >= 'a' && target[i] <= 'z') {
          const letters = 'abcdefghijklmnopqrstuvwxyz';
          current += letters[Math.floor(Math.random() * letters.length)];
        } else if (target[i] >= '0' && target[i] <= '9') {
          current += chars[Math.floor(Math.random() * chars.length)];
        } else {
          current += target[i];
        }
      }

      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplayValue(target);
      }
    };

    const timeoutId = setTimeout(() => {
      frameId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [isVisible, value, duration, delay]);

  return <span ref={containerRef} className="tabular-nums">{displayValue}</span>;
}
