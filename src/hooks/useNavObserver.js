import { useEffect, useState } from "react";

const useIntersectionObserver = (refs) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (refs.length < 1) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setActiveIndex(
              refs.indexOf(
                refs.find((ref) => ref.current.id === entry.target.id)
              )
            );
          }
        });
      },
      { threshold: 0.25 }
    );

    if (refs.length > 0) {
      refs.forEach((ref) => sectionObserver.observe(ref.current));
    }
    return () => {
      if (refs.length > 0) {
        refs.forEach((ref) => sectionObserver.unobserve(ref.current));
      }
    };
  }, []);

  return activeIndex;
};

export default useIntersectionObserver;
