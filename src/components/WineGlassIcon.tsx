const WineGlassIcon = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg viewBox="0 0 64 96" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Glass bowl */}
    <path
      d="M12 8 C12 8 8 40 8 48 C8 60 20 68 32 68 C44 68 56 60 56 48 C56 40 52 8 52 8 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Wine level - animated */}
    {filled && (
      <path
        d="M14 38 C14 38 12 48 12 50 C12 60 20 66 32 66 C44 66 52 60 52 50 C52 48 50 38 50 38 Q32 42 14 38 Z"
        fill="hsl(348, 65%, 40%)"
        opacity="0.8"
        className="wine-level"
      />
    )}
    {/* Stem */}
    <line x1="32" y1="68" x2="32" y2="86" stroke="currentColor" strokeWidth="2" />
    {/* Base */}
    <ellipse cx="32" cy="88" rx="16" ry="4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export default WineGlassIcon;
