import { useEffect, useRef } from 'react';
import { references } from './data';

type Reference = {
  name: string;
  description: string;
  affiliation: string;
};

export default function RefCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = window.innerWidth < 768 ? 0.2 : 0.5; // Slower scroll on mobile

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Check if scroll has reached near the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          // Reset the scroll position to halfway to create a seamless effect
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        }
      }

      // Continue the animation
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the scroll animation
    animationFrameId = requestAnimationFrame(scroll);

    // Cleanup the animation when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollSpeed]);

  // Duplicate references multiple times to ensure there's always content to scroll through
  const duplicatedReferences = [...references, ...references, ...references];

  return (
    <div className="cards-wrapper" ref={scrollRef}>
      <div className="cards">
        {duplicatedReferences.map((ref: Reference, index: number) => (
          <div className="card" key={index}>
            <div className="ref-desc">{ref.description}</div>
            <div className="ref-name">{ref.name}</div>
            <div className="ref-affil">{ref.affiliation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
