'use client';
import React from 'react';
import CardSwap, { Card } from './CardSwap';

const swapItems = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    category: '// HEAVY STACK',
    title: 'STRENGTH LAB'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    category: '// PERFORMANCE',
    title: 'CARDIO ZONE'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
    category: '// ENDURANCE',
    title: 'ATHLETIC LAB'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1571731956622-f1b860871a16?auto=format&fit=crop&q=80&w=600',
    category: '// COMBAT SPORTS',
    title: 'FIGHT CLUB'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600',
    category: '// LIMITLESS',
    title: 'BEAST MODE'
  }
];

export default function CardSwapSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background-theme overflow-hidden border-b border-card-theme/30">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-red-theme/10 blur-[130px] pointer-events-none" />

      {/* Row on desktop, column on mobile. Padded on left to match grid, unpadded on right (pr-0) */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0 pl-6 md:pl-20 lg:pl-32 pr-0 overflow-visible">
        
        {/* Left Column: Heading and Details */}
        <div className="w-full lg:w-[40%] flex flex-col text-left pr-6 lg:pr-0 relative z-20">
          <span className="text-red-theme font-extrabold uppercase tracking-widest text-xs md:text-sm mb-4 border border-red-theme/30 px-4 py-1.5 rounded-full bg-red-theme/5 self-start">
            // The Iron Legacy
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white-theme tracking-tight uppercase leading-none mb-6">
            Forge your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-theme via-gold-light to-gold-theme drop-shadow-[0_0_15px_rgba(212,175,55,0.35)]">
              limitless legacy
            </span>
          </h2>
          <p className="text-gray-theme text-base md:text-lg font-medium leading-relaxed max-w-xl">
            Step into the ultimate arena designed for elite performance. From heavy strength labs to state-of-the-art conditioning zones, we provide the raw machinery, expert coaching, and relentless environment you need to shatter boundaries.
          </p>
        </div>

        {/* Right Column: Card Swap Stack overflowing on the right */}
        <div className="w-full lg:w-[55%] flex justify-end overflow-visible pt-16 pb-4 lg:pt-24 lg:pb-8">
          {/* Container size represents the landscape card dimensions. Translate shifts them off the right edge */}
          <div className="w-[300px] h-[200px] md:w-[480px] md:h-[320px] lg:w-[630px] lg:h-[420px] translate-x-[5%] md:translate-x-[8%] relative z-10">
            <CardSwap 
              width="100%" 
              height="100%" 
              cardDistance={25} 
              verticalDistance={28} 
              delay={3800} 
              pauseOnHover={true}
              skewAmount={3}
              easing="elastic"
            >
              {swapItems.map((item) => (
                <Card key={item.id} className="relative overflow-hidden group select-none">
                  {/* Card Image */}
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Red/Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-theme via-transparent to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-90" />
                  
                  {/* Content details overlay */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-gold-theme/80 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold uppercase text-white-theme tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  {/* Corner Accent Glow */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-theme/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
