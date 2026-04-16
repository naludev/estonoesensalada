'use client'
import { useState, useEffect, useRef } from "react";
import { useAboutSectionReturnProps } from "../types";
/**
 * Use about section hook
 * @param {() => void} onSectionVisible
 * @returns {useAboutSectionReturnProps}
 */
export const useAboutSection = (
  onSectionVisible?: () => void
): useAboutSectionReturnProps => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          onSectionVisible?.();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible, onSectionVisible]);

  return { isVisible, sectionRef } as useAboutSectionReturnProps;
};