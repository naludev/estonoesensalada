import { useMemo } from 'react';
import { SHADOW_VARIANTS } from '../constants';

export function useMenuAnimation(index: number) {
  const shadowClass = useMemo(() => {
    const variantIndex = (index % 3) as keyof typeof SHADOW_VARIANTS;
    return SHADOW_VARIANTS[variantIndex];
  }, [index]);

  return { shadowClass };
}