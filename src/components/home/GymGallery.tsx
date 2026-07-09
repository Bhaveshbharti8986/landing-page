'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const gymImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', title: 'Heavy Lifting' },
  { id: 2, url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600', title: 'Cardio Zone' },
  { id: 3, url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600', title: 'Strength Training' },
  { id: 4, url: 'https://images.unsplash.com/photo-1571731956622-f1b860871a16?auto=format&fit=crop&q=80&w=600', title: 'MMA & Boxing' },
  { id: 5, url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600', title: 'Hardcore Gym' },
];

export default function GymGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Align scroll progress exactly to the sticky window context
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  const [maxScroll, setMaxScroll] = useState(0);

  const calculateScroll = () => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const overflow = trackWidth - viewportWidth;
      setMaxScroll(overflow > 0 ? overflow : 0);
    }
  };

  useEffect(() => {
    calculateScroll();
    
    // Safely check images that may have already been loaded/cached
    if (trackRef.current) {
      const images = trackRef.current.querySelectorAll('img');
      images.forEach(img => {
        if (img.complete) {
          calculateScroll();
        }
      });
    }

    const timer = setTimeout(calculateScroll, 150);
    window.addEventListener('resize', calculateScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateScroll);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background-theme">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Centered Heading Layout */}
        <div className="absolute left-1/2 -translate-x-1/2 top-12 z-10 text-center w-full px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white-theme tracking-wider uppercase">
            Our <span className="text-gold-theme drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">Arena</span>
          </h2>
          <p className="text-gray-theme/60 mt-2 text-xs md:text-sm font-bold uppercase tracking-widest">
            // Scroll down to explore
          </p>
        </div>

        {/* Moving Track */}
        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 pt-32 pl-12 pr-12">
          {gymImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-[420px] w-[300px] md:h-[480px] md:w-[380px] flex-shrink-0 overflow-hidden rounded-xl border border-card-theme bg-surface-theme transition-all duration-300 hover:border-gold-theme"
            >
              {/* Gym Image */}
              <img
                src={image.url}
                alt={image.title}
                onLoad={calculateScroll}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-theme via-transparent to-transparent opacity-95" />
              
              {/* Title */}
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-red-theme mb-1">
                  // GO HARD
                </p>
                <h3 className="text-2xl font-black uppercase text-white-theme tracking-wide">
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