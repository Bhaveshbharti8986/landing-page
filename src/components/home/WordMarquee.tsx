'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "w-full overflow-hidden bg-surface-theme/90 border-y border-card-theme/60 py-4 md:py-6 z-10 relative",
        className
      )} 
      {...props}
    >
      <div className="relative flex w-full overflow-hidden">
        <div 
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

export default function WordMarquee() {
  const gymWords = [
    "FOCUS", 
    "STRENGTH", 
    "FITNESS", 
    "BUILD", 
    "CONFIDENCE", 
    "DEDICATION", 
    "POWER", 
    "LIMITLESS", 
    "BEAST MODE",
    "GO HARD",
    "DISCIPLINE"
  ];

  return (
    <Marquee speed={25} pauseOnHover={false} direction="left" className="my-0">
      <div className="flex gap-16 items-center shrink-0 pr-16">
        {gymWords.map((word, index) => (
          <React.Fragment key={index}>
            <span 
              className="text-xl md:text-3xl font-mono font-black italic tracking-widest text-gray-theme/50 uppercase select-none hover:text-gold-theme transition-colors duration-300"
            >
              {word}
            </span>
            <span className="w-2 h-2 rotate-45 bg-red-theme/50 block shrink-0" />
          </React.Fragment>
        ))}
      </div>
    </Marquee>
  );
}
