import { useEffect, useState } from "react";

const useIntersectionObserver = (ref) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!ref) return;

    const currentRef = ref.current;
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (currentRef) {
      sectionObserver.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        sectionObserver.unobserve(currentRef);
      }
    };
  }, [ref]);

  return visible;
};

export default useIntersectionObserver;
