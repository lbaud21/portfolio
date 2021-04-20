import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = () => {
  const heroSectionRef = useRef();
  const aboutMeSectionRef = useRef();
  const projectsSectionRef = useRef();
  const contactSectionRef = useRef();

  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactMeVisible, setContactMeVisible] = useState(false);

  useEffect(() => {
    const currentRefs = [
      heroSectionRef.current,
      aboutMeSectionRef.current,
      projectsSectionRef.current,
      contactSectionRef.current,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target);
          entry.isIntersecting && entry.target.id === "home"
            ? setHeroVisible(true)
            : setHeroVisible(false);
          entry.isIntersecting && entry.target.id === "about-me"
            ? setAboutMeVisible(true)
            : setAboutMeVisible(false);
          entry.isIntersecting && entry.target.id === "projects"
            ? setProjectsVisible(true)
            : setProjectsVisible(false);
          entry.isIntersecting && entry.target.id === "contact"
            ? setContactMeVisible(true)
            : setContactMeVisible(false);
        });
      },
      { threshold: 0.25 }
    );

    currentRefs.forEach((ref) => {
      if (ref) {
        sectionObserver.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          sectionObserver.unobserve(ref);
        }
      });
    };
  }, []);

  return {
    heroSectionRef,
    aboutMeSectionRef,
    projectsSectionRef,
    contactSectionRef,
    heroVisible,
    aboutMeVisible,
    projectsVisible,
    contactMeVisible,
  };
};

export default useIntersectionObserver;
