import HeroSection from "@/components/home/HeroSection";
import WordMarquee from "@/components/home/WordMarquee";
import CircularGallerySection from "@/components/home/CircularGallerySection";
import GymGallerySection from "@/components/home/GymGallerySection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-red-600 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Watermark Infinite Loop */}
      <WordMarquee />

      {/* 2. Gym Gallery Section (Horizontal scroll) */}
      <GymGallerySection />

      {/* 3. Circular Gallery Section (WebGL interactive) */}
      <CircularGallerySection />
    </main>
  );
}