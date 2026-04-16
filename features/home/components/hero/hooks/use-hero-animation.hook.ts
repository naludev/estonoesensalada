'use client'
import { useState, useEffect, useRef } from "react";
import { UseHeroAnimationReturnProps } from "../types";
/**
 * Use hero animation hook
 * @returns {UseHeroAnimationReturnProps} useHeroAnimationReturnProps
 * @property {boolean} isVisible
 * @property {React.RefObject<HTMLElement>} elementRef
 * @property {object} animatedElements
 * @property {boolean} animatedElements.badge
 * @property {boolean} animatedElements.title
 * @property {boolean} animatedElements.subtitle
 * @property {boolean} animatedElements.description
 * @property {boolean} animatedElements.buttons
 * @property {boolean} animatedElements.stats
 * @property {boolean} animatedElements.image
 */
const useHeroAnimation = (): UseHeroAnimationReturnProps => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  return {
    isVisible,
    elementRef,
    animatedElements: {
      badge: isVisible,
      title: isVisible,
      subtitle: isVisible,
      description: isVisible,
      buttons: isVisible,
      stats: isVisible,
      image: isVisible,
    },
  };
};

export default useHeroAnimation;