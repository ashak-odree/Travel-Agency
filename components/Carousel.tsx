
'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

export default function Carousel({ items, autoplay=false }: { items: React.ReactNode[]; autoplay?: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((child, idx) => (
            <div className="min-w-0 flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-2" key={idx}>
              <div className="card h-full">{child}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollPrev} aria-label="Previous" className="btn absolute left-2 top-1/2 -translate-y-1/2 bg-white">◀</button>
      <button onClick={scrollNext} aria-label="Next" className="btn absolute right-2 top-1/2 -translate-y-1/2 bg-white">▶</button>
    </div>
  );
}
