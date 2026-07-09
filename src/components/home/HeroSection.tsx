'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-zinc-800/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-red-500 font-extrabold uppercase tracking-[0.25em] text-xs md:text-sm mb-4 border border-red-500/20 px-4 py-1.5 rounded-full bg-red-950/20 backdrop-blur-sm">
            Welcome to the Arena
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-none mb-8"
        >
          UNLEASH YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">
            LIMITLESS POWER
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-10"
        >
          Experience next-generation performance, premium equipment, and elite coaching designed to push your limits and sculpt your legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
            Get Started Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-extrabold uppercase tracking-wider rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
    </section>
  );
}
