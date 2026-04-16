'use client'
import { useMemo } from 'react';
import { STATS, STEPS } from '../constants';
/**
 * Use How It Works
 * @returns {object}
 */
export function useHowItWorks() {
  const stepsWithMetadata = useMemo(() => {
    return STEPS.map((step, index) => ({
      ...step,
      isEven: index % 2 === 0,
      isLast: index === STEPS.length - 1
    }));
  }, []);

  const statsWithMetadata = useMemo(() => {
    return STATS.map((stat, index) => ({
      ...stat,
      isEven: index % 2 === 0
    }));
  }, []);

  return {
    steps: stepsWithMetadata,
    stats: statsWithMetadata,
    totalSteps: STEPS.length,
    totalStats: STATS.length
  };
}