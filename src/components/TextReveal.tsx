'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  delay?: number;
  stagger?: number;
  duration?: number;
}

export default function TextReveal({
  children,
  className = '',
  as: Component = 'span',
  delay = 0,
  stagger = 0.045,
  duration = 0.55,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = children.trim().split(/\s+/);

  return (
    // @ts-expect-error dynamic tag ref
    <Component ref={ref} className={`${className} subpixel-antialiased`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transform: isVisible ? 'translateY(0px)' : 'translateY(14px)',
            opacity: isVisible ? 1 : 0,
            transitionProperty: 'transform, opacity',
            transitionDuration: `${duration}s`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: isVisible ? `${delay + i * stagger}s` : '0s',
            marginRight: i < words.length - 1 ? '0.28em' : '0',
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
}

export function RevealBlock({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  yOffset = 16,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} subpixel-antialiased`}
      style={{
        transform: isVisible ? 'translateY(0px)' : `translateY(${yOffset}px)`,
        opacity: isVisible ? 1 : 0,
        transitionProperty: 'transform, opacity',
        transitionDuration: `${duration}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: isVisible ? `${delay}s` : '0s',
      }}
    >
      {children}
    </div>
  );
}
