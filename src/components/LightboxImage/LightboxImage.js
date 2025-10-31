"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxImage({ photos }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalRef = useRef(null);

  const selected = selectedIndex !== null ? photos[selectedIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleClickOutside = (e) => {
    if (e.target === modalRef.current) setSelectedIndex(null);
  };

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={src}
                alt={`Akhisar Miraç Oto Tamir ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          ref={modalRef}
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-4xl w-full flex items-center justify-center">
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 text-white hover:text-red-400 transition"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <Image
              src={selected}
              alt="Selected photo"
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white transition"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
