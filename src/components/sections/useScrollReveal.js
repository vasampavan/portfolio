import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-animate");

    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          entry.target.classList.remove("section-hidden");
        } else {
          entry.target.classList.remove("section-visible");
          entry.target.classList.add("section-hidden");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
};

export default useScrollReveal;
