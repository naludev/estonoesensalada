'use client'
import { useState, useCallback } from 'react';
import { TESTIMONIALS } from '@/features/home/components/testimonials/constants';
import { TestimonialProps } from '@/features/home/components/testimonials/types';
/**
 * Hook for testimonials
 * @returns {object} testimonials, activeIndex, getVariant, setHoveredCard
 * @property {TestimonialProps[]} testimonials
 * @property {number | null} activeIndex
 * @property {(index: number) => 'green' | 'pink'} getVariant
 * @property {(index: number | null) => void} setHoveredCard
 * @property {void} setHoveredCard
 */
export const useTestimonials = () => {
    const [testimonials] = useState<TestimonialProps[]>(TESTIMONIALS);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const getVariant = useCallback((index: number): 'green' | 'pink' => {
        return index % 2 === 0 ? 'green' : 'pink';
    }, []);

    const setHoveredCard = useCallback((index: number | null) => {
        setActiveIndex(index);
    }, []);

    return {
        testimonials,
        activeIndex,
        getVariant,
        setHoveredCard,
    };
};