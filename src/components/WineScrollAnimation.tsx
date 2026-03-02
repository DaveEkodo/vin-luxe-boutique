import { useEffect, useState } from "react";

const WineScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wineLevel = scrollProgress * 100;
  const pourOpacity = scrollProgress > 0.01 && scrollProgress < 0.95 ? 0.7 : 0;
  const pourHeight = Math.min(scrollProgress * 120, 100);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-0 pointer-events-none">
      {/* Bottle */}
      <svg width="28" height="50" viewBox="0 0 28 50" fill="none" className="mb-[-2px]">
        {/* Bottle neck */}
        <rect x="10" y="0" width="8" height="14" rx="2" fill="hsl(220, 15%, 18%)" stroke="hsl(348, 75%, 45%)" strokeWidth="0.5" opacity="0.8" />
        {/* Bottle body */}
        <path
          d="M6 18 C6 14 10 14 10 14 L18 14 C18 14 22 14 22 18 L22 44 C22 47 19 49 14 49 C9 49 6 47 6 44 Z"
          fill="hsl(220, 15%, 12%)"
          stroke="hsl(348, 75%, 45%)"
          strokeWidth="0.5"
          opacity="0.8"
        />
        {/* Wine in bottle - decreases as scroll progresses */}
        <clipPath id="bottleClip">
          <path d="M7 18 C7 15 10 15 10 15 L18 15 C18 15 21 15 21 18 L21 44 C21 46.5 18.5 48 14 48 C9.5 48 7 46.5 7 44 Z" />
        </clipPath>
        <rect
          x="7"
          y={18 + (30 * scrollProgress)}
          width="14"
          height={30 - (30 * scrollProgress)}
          fill="hsl(348, 75%, 35%)"
          clipPath="url(#bottleClip)"
          opacity="0.9"
        />
        {/* Label */}
        <rect x="9" y="28" width="10" height="8" rx="1" fill="hsl(43, 85%, 55%)" opacity="0.15" />
      </svg>

      {/* Pour stream */}
      <div
        className="w-[2px] transition-all duration-300 ease-out"
        style={{
          height: `${pourHeight}px`,
          background: `linear-gradient(to bottom, hsl(348, 75%, 45%), hsl(348, 75%, 35%))`,
          opacity: pourOpacity,
          filter: 'blur(0.3px)',
        }}
      />

      {/* Wine glass */}
      <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="mt-[-2px]">
        {/* Glass bowl */}
        <path
          d="M6 4 C6 4 4 22 4 28 C4 36 10 42 20 42 C30 42 36 36 36 28 C36 22 34 4 34 4 Z"
          fill="hsl(220, 15%, 12%)"
          stroke="hsl(43, 85%, 55%)"
          strokeWidth="0.5"
          opacity="0.6"
        />
        {/* Wine level in glass - increases with scroll */}
        <clipPath id="glassClip">
          <path d="M6 4 C6 4 4 22 4 28 C4 36 10 42 20 42 C30 42 36 36 36 28 C36 22 34 4 34 4 Z" />
        </clipPath>
        <rect
          x="4"
          y={42 - (wineLevel * 0.38)}
          width="32"
          height={wineLevel * 0.38}
          fill="hsl(348, 75%, 35%)"
          clipPath="url(#glassClip)"
          opacity="0.85"
        >
          <animate attributeName="opacity" values="0.8;0.9;0.8" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Wine surface shimmer */}
        {wineLevel > 5 && (
          <ellipse
            cx="20"
            cy={42 - (wineLevel * 0.38)}
            rx={12 + wineLevel * 0.05}
            ry="2"
            fill="hsl(348, 60%, 50%)"
            opacity="0.4"
            clipPath="url(#glassClip)"
          />
        )}
        {/* Stem */}
        <line x1="20" y1="42" x2="20" y2="52" stroke="hsl(43, 85%, 55%)" strokeWidth="0.8" opacity="0.5" />
        {/* Base */}
        <ellipse cx="20" cy="54" rx="10" ry="3" stroke="hsl(43, 85%, 55%)" strokeWidth="0.5" fill="none" opacity="0.5" />
      </svg>

      {/* Scroll percentage */}
      <span className="mt-2 font-body text-[9px] tracking-widest uppercase text-muted-foreground">
        {Math.round(scrollProgress * 100)}%
      </span>
    </div>
  );
};

export default WineScrollAnimation;
