'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const gymImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', title: 'Heavy Lifting' },
  { id: 2, url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600', title: 'Cardio Zone' },
  { id: 3, url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600', title: 'Strength Training' },
  { id: 4, url: 'https://images.unsplash.com/photo-1571731956622-f1b860871a16?auto=format&fit=crop&q=80&w=600', title: 'MMA & Boxing' },
  { id: 5, url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600', title: 'Hardcore Gym' },
];

export default function GymGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // 5 images ke hisab se -70% horizontal push ekदम smooth sliding dega
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Centered Heading Layout */}
        <div className="absolute left-1/2 -translate-x-1/2 top-12 z-10 text-center w-full px-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-wider uppercase">
            Our <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">Arena</span>
          </h2>
          <p className="text-zinc-500 mt-2 text-xs md:text-sm font-bold uppercase tracking-widest">

          </p>
        </div>

        {/* Moving Track */}
        <motion.div style={{ x }} className="flex gap-6 pt-32 pl-12">
          {gymImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-[420px] w-[300px] md:h-[480px] md:w-[380px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-red-600"
            >
              {/* Gym Image */}
              <img
                src={image.url}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              {/* Title */}
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">
                  // GO HARD
                </p>
                <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}