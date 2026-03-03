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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wineLevel = scrollProgress * 100;
  const pourOpacity = scrollProgress > 0.01 && scrollProgress < 0.95 ? 0.85 : 0;
  const pourHeight = Math.min(scrollProgress * 150, 120);
  const bottleWineHeight = 60 - (60 * scrollProgress);
  const bottleWineY = 20 + (60 * scrollProgress);

  // Wine drop particles
  const drops = Array.from({ length: 3 }, (_, i) => ({
    x: 22 + (i - 1) * 3,
    delay: i * 0.3,
    size: 1.5 - i * 0.3,
  }));

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-0 pointer-events-none select-none">
      {/* Bottle */}
      <svg width="44" height="90" viewBox="0 0 44 90" fill="none" className="drop-shadow-lg">
        {/* Bottle cap/cork */}
        <rect x="18" y="0" width="8" height="6" rx="1.5" fill="hsl(30, 25%, 35%)" />
        
        {/* Bottle neck */}
        <rect x="17" y="6" width="10" height="16" rx="2" fill="hsl(30, 15%, 15%)" stroke="hsl(43, 85%, 55%)" strokeWidth="0.6" opacity="0.9" />
        
        {/* Neck to body transition */}
        <path
          d="M17 22 C17 22 12 26 12 30 L12 30 L32 30 C32 26 27 22 27 22"
          fill="hsl(30, 15%, 15%)"
          stroke="hsl(43, 85%, 55%)"
          strokeWidth="0.6"
          opacity="0.9"
        />
        
        {/* Bottle body */}
        <rect x="12" y="30" width="20" height="50" rx="3" fill="hsl(30, 15%, 12%)" stroke="hsl(43, 85%, 55%)" strokeWidth="0.6" opacity="0.9" />
        
        {/* Bottle bottom */}
        <path d="M12 77 Q12 83 22 83 Q32 83 32 77" fill="hsl(30, 15%, 12%)" stroke="hsl(43, 85%, 55%)" strokeWidth="0.6" opacity="0.9" />
        
        {/* Label */}
        <rect x="15" y="45" width="14" height="18" rx="1.5" fill="hsl(40, 30%, 85%)" opacity="0.15" />
        <rect x="17" y="49" width="10" height="1" rx="0.5" fill="hsl(43, 85%, 55%)" opacity="0.2" />
        <rect x="18" y="52" width="8" height="1" rx="0.5" fill="hsl(43, 85%, 55%)" opacity="0.15" />
        <rect x="19" y="55" width="6" height="1" rx="0.5" fill="hsl(43, 85%, 55%)" opacity="0.1" />

        {/* Wine level in bottle - decreases as scroll */}
        <clipPath id="bottleWineClip">
          <rect x="13" y="31" width="18" height="48" rx="2" />
        </clipPath>
        <rect
          x="13"
          y={bottleWineY}
          width="18"
          height={Math.max(bottleWineHeight, 0)}
          fill="hsl(348, 65%, 35%)"
          clipPath="url(#bottleWineClip)"
          opacity="0.9"
        />
        {/* Wine surface in bottle */}
        {bottleWineHeight > 2 && (
          <ellipse
            cx="22"
            cy={bottleWineY}
            rx="8"
            ry="1.5"
            fill="hsl(348, 50%, 45%)"
            opacity="0.5"
            clipPath="url(#bottleWineClip)"
          />
        )}
        
        {/* Bottle shine */}
        <rect x="14" y="32" width="2" height="40" rx="1" fill="white" opacity="0.04" />
      </svg>

      {/* Pour stream - fluid animation */}
      <div className="relative flex flex-col items-center" style={{ height: `${pourHeight}px` }}>
        {/* Main stream */}
        <div
          className="w-[3px] rounded-full transition-all duration-200 ease-out"
          style={{
            height: `${pourHeight}px`,
            background: `linear-gradient(to bottom, hsl(348, 65%, 40%), hsl(348, 65%, 30%))`,
            opacity: pourOpacity,
            filter: 'blur(0.2px)',
          }}
        />
        {/* Drip droplets */}
        {pourOpacity > 0 && drops.map((drop, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${drop.size * 2}px`,
              height: `${drop.size * 2}px`,
              background: 'hsl(348, 65%, 40%)',
              left: `calc(50% - ${drop.size}px + ${(drop.x - 22)}px)`,
              bottom: `${4 + i * 8}px`,
              opacity: pourOpacity * 0.6,
              animation: `fall ${0.8 + drop.delay}s ease-in infinite`,
              animationDelay: `${drop.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Wine glass */}
      <svg width="56" height="80" viewBox="0 0 56 80" fill="none" className="mt-[-2px] drop-shadow-lg">
        {/* Glass bowl - more realistic shape */}
        <path
          d="M10 6 C10 6 7 24 7 32 C7 42 14 50 28 50 C42 50 49 42 49 32 C49 24 46 6 46 6 Z"
          fill="hsl(30, 10%, 18%)"
          fillOpacity="0.4"
          stroke="hsl(40, 30%, 70%)"
          strokeWidth="0.7"
          opacity="0.7"
        />
        
        {/* Glass rim highlight */}
        <path
          d="M10 6 C10 6 18 5 28 5 C38 5 46 6 46 6"
          stroke="hsl(40, 30%, 80%)"
          strokeWidth="0.5"
          opacity="0.5"
          fill="none"
        />

        {/* Wine level in glass - increases with scroll */}
        <clipPath id="glassClip">
          <path d="M10 6 C10 6 7 24 7 32 C7 42 14 50 28 50 C42 50 49 42 49 32 C49 24 46 6 46 6 Z" />
        </clipPath>
        
        {/* Wine body */}
        <rect
          x="7"
          y={50 - (wineLevel * 0.44)}
          width="42"
          height={wineLevel * 0.44}
          fill="hsl(348, 65%, 30%)"
          clipPath="url(#glassClip)"
          opacity="0.9"
        >
          <animate attributeName="opacity" values="0.85;0.95;0.85" dur="3s" repeatCount="indefinite" />
        </rect>
        
        {/* Wine surface - ellipse for realism */}
        {wineLevel > 3 && (
          <ellipse
            cx="28"
            cy={50 - (wineLevel * 0.44)}
            rx={Math.min(14 + wineLevel * 0.06, 19)}
            ry="2.5"
            fill="hsl(348, 50%, 40%)"
            opacity="0.5"
            clipPath="url(#glassClip)"
          >
            <animate attributeName="ry" values="2.5;3;2.5" dur="2s" repeatCount="indefinite" />
          </ellipse>
        )}
        
        {/* Glass light reflection */}
        <path
          d="M12 10 C12 10 11 20 11 28 C11 34 13 38 16 40"
          stroke="white"
          strokeWidth="0.7"
          opacity="0.08"
          fill="none"
        />

        {/* Stem */}
        <rect x="26.5" y="50" width="3" height="16" rx="1.5" fill="hsl(40, 30%, 70%)" opacity="0.5" />
        
        {/* Base */}
        <ellipse cx="28" cy="70" rx="14" ry="4" stroke="hsl(40, 30%, 70%)" strokeWidth="0.7" fill="hsl(30, 10%, 18%)" fillOpacity="0.3" opacity="0.6" />
        <ellipse cx="28" cy="70" rx="10" ry="2.5" stroke="hsl(40, 30%, 60%)" strokeWidth="0.3" fill="none" opacity="0.3" />
      </svg>

      {/* Scroll percentage */}
      <span className="mt-3 font-elegant text-[11px] tracking-[0.15em] uppercase text-muted-foreground/70">
        {Math.round(scrollProgress * 100)}%
      </span>
    </div>
  );
};

export default WineScrollAnimation;