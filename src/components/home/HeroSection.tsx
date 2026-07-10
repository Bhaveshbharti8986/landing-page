'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white-theme">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.webp"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {!videoLoaded && (
          <img
            src="/hero-poster.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Ribbon graphic — layered, tapered red/gold silk sweeping behind the wordmark */}
      <svg
        className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
        viewBox="0 0 1600 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="ribbonGoldFill" x1="0" y1="0" x2="1" y2="0.15">
            <stop offset="0%" stopColor="#7A5A12" stopOpacity="0" />
            <stop offset="18%" stopColor="#D4AF37" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#F5D061" stopOpacity="0.9" />
            <stop offset="82%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B71C1C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbonRedFill" x1="0" y1="0" x2="1" y2="-0.1">
            <stop offset="0%" stopColor="#B71C1C" stopOpacity="0" />
            <stop offset="20%" stopColor="#B71C1C" stopOpacity="0.55" />
            <stop offset="52%" stopColor="#E23E3E" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbonThread" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F5D061" stopOpacity="0" />
            <stop offset="50%" stopColor="#F5D061" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F5D061" stopOpacity="0" />
          </linearGradient>
          <filter id="ribbonGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Gold ribbon — filled taper shape, glow layer + crisp thread on top.
            The fill and thread continuously morph between two curve states,
            so the ribbon reads as flowing silk rather than a static line. */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              d: [
                'M-80,260 C220,70 420,40 610,150 C790,255 940,110 1140,60 C1330,15 1500,55 1680,150 L1680,168 C1500,80 1335,40 1148,84 C950,132 800,272 618,170 C425,58 224,86 -80,278 Z',
                'M-80,232 C220,110 430,20 610,178 C780,326 940,80 1140,96 C1320,110 1500,30 1680,120 L1680,138 C1500,58 1324,128 1148,116 C950,102 786,344 618,196 C432,38 226,128 -80,250 Z',
                'M-80,260 C220,70 420,40 610,150 C790,255 940,110 1140,60 C1330,15 1500,55 1680,150 L1680,168 C1500,80 1335,40 1148,84 C950,132 800,272 618,170 C425,58 224,86 -80,278 Z',
              ],
            }}
            transition={{
              pathLength: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
              d: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.8 },
            }}
            filter="url(#ribbonGlow)"
            fill="url(#ribbonGoldFill)"
          />
          <motion.path
            animate={{
              d: [
                'M-80,264 C220,78 420,50 610,158 C790,260 940,118 1140,68 C1330,24 1500,62 1680,156',
                'M-80,236 C220,118 430,28 610,186 C780,332 940,88 1140,104 C1320,118 1500,38 1680,126',
                'M-80,264 C220,78 420,50 610,158 C790,260 940,118 1140,68 C1330,24 1500,62 1680,156',
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
            stroke="url(#ribbonThread)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Red ribbon — mirrored, sits lower, crosses under the tagline, own morph cycle */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              d: [
                'M-80,470 C200,375 360,590 600,520 C840,450 980,555 1220,468 C1420,395 1540,430 1680,500 L1680,516 C1540,448 1424,412 1226,484 C986,570 842,466 604,536 C362,606 202,392 -80,486 Z',
                'M-80,498 C200,405 356,548 600,486 C840,424 984,596 1220,510 C1414,438 1546,466 1680,528 L1680,544 C1546,484 1420,450 1226,522 C990,610 838,510 604,570 C358,632 198,420 -80,514 Z',
                'M-80,470 C200,375 360,590 600,520 C840,450 980,555 1220,468 C1420,395 1540,430 1680,500 L1680,516 C1540,448 1424,412 1226,484 C986,570 842,466 604,536 C362,606 202,392 -80,486 Z',
              ],
            }}
            transition={{
              pathLength: { duration: 1.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              d: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.95 },
            }}
            filter="url(#ribbonGlow)"
            fill="url(#ribbonRedFill)"
          />
          <motion.path
            animate={{
              d: [
                'M-80,478 C200,382 360,598 600,528 C840,458 980,563 1220,476 C1420,403 1540,438 1680,508',
                'M-80,506 C200,412 356,556 600,494 C840,432 984,604 1220,518 C1414,446 1546,474 1680,536',
                'M-80,478 C200,382 360,598 600,528 C840,458 980,563 1220,476 C1420,403 1540,438 1680,508',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.95 }}
            stroke="url(#ribbonThread)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Thin gold filament — a lighter third pass for depth, close behind the wordmark,
            drifts on its own slower cycle so the three layers never sync up */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.7,
            d: [
              'M-80,340 C260,230 480,300 700,360 C920,420 1160,300 1400,260 C1500,244 1600,250 1680,270',
              'M-80,318 C260,264 480,264 700,330 C920,396 1160,336 1400,290 C1500,270 1600,282 1680,296',
              'M-80,340 C260,230 480,300 700,360 C920,420 1160,300 1400,260 C1500,244 1600,250 1680,270',
            ],
          }}
          transition={{
            pathLength: { duration: 1.6, delay: 0.3, ease: 'easeOut' },
            opacity: { duration: 1.6, delay: 0.3, ease: 'easeOut' },
            d: { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.6 },
          }}
          stroke="url(#ribbonThread)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Content — massive wordmark centered over the video */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-extrabold uppercase tracking-[0.2em] text-gold-theme sm:text-2xl"
        >
          We Are
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="-mt-2 font-[var(--font-display)] text-[clamp(4.5rem,18vw,11rem)] font-normal uppercase leading-[0.8] tracking-tight bg-gradient-to-r from-gold-theme via-gold-light to-red-theme bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(212,175,55,0.25)]"
        >
          brand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 max-w-xl font-[var(--font-body)] text-lg font-semibold leading-relaxed tracking-wide text-white-theme/90 sm:text-xl"
        >
          A fitness movement that is worth breaking a sweat for.
        </motion.p>

        {/* CTA — richer black/gold/red gradient treatment, sharper corner cuts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2 bg-gradient-to-r from-gold-theme via-gold-light to-gold-theme bg-[length:200%_100%] px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_12px_30px_-10px_rgba(212,175,55,0.6)] transition-[background-position,box-shadow] duration-500 [clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)] hover:bg-[length:100%_100%] hover:shadow-[0_14px_36px_-8px_rgba(212,175,55,0.75)]"
          >
            <span className="pointer-events-none absolute inset-0 [clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)]">
              <span className="absolute bottom-0 left-0 h-[3px] w-full bg-red-theme" />
            </span>
            Explore Membership
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden bg-black px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white-theme ring-1 ring-inset ring-red-theme/50 transition-shadow duration-500 [clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)] hover:shadow-[0_0_28px_-4px_rgba(183,28,28,0.65)] hover:ring-red-theme"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-theme/0 via-red-theme/25 to-red-theme/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative">Book a Free Trial</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom-right app note, matching reference layout */}
      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 border border-white/15 bg-black/50 px-4 py-2.5 backdrop-blur-sm md:flex [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
        <span className="text-[0.65rem] leading-tight text-gray-theme">
          For a better experience,
          <br />
          use the Arena app
        </span>
      </div>
    </section>
  );
}