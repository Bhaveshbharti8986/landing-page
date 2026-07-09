'use client';
import CircularGallery from '../CircularGallery';

const gymPhotos = [
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    text: "HEAVY LIFTING",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    text: "CARDIO ZONE",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    text: "STRENGTH",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571731956622-f1b860871a16?auto=format&fit=crop&q=80&w=800",
    text: "BOXING ARENA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800",
    text: "BEAST MODE",
  },
];

export default function CircularGallerySection() {
  return (
    <CircularGallery
      items={gymPhotos}
      bend={1}
      textColor="#dc2626" // Premium Red text color
      borderRadius={0.04}
      scrollSpeed={2.2}
      scrollEase={0.06}
    />
  );
}
