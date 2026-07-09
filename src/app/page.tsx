import HeroSection from "@/components/home/HeroSection";
import WordMarquee from "@/components/home/WordMarquee";
import GymGallerySection from "@/components/home/GymGallerySection";
import CardSwapSection from "@/components/home/CardSwapSection";
import CircularGallerySection from "@/components/home/CircularGallerySection";

export default function Home() {
  return (
    <main className="bg-background-theme min-h-screen selection:bg-red-theme selection:text-white-theme">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Watermark Infinite Loop */}
      <WordMarquee />

      {/* 2. Gym Gallery Section (Horizontal scroll) */}
      <GymGallerySection />

      {/* 3. Stacked Card Swap Animation */}
      <CardSwapSection />

      {/* 4. Circular Gallery Section (WebGL interactive) */}
      <CircularGallerySection />
    </main>
  );
}