import { SHADOW_VARIANTS } from '@/features/menu/components/menu-grid/components/menu-card/constants';
import { useMemo } from 'react';
/**
 * Hook to get the shadow class for a menu card
 * @param index - Index of the menu card
 * @returns {string} - Shadow class
 */
export function useMenuAnimation(index: number) {
  const shadowClass = useMemo(() => {
    const variantIndex = (index % 3) as keyof typeof SHADOW_VARIANTS;
    return SHADOW_VARIANTS[variantIndex];
  }, [index]);

  return { shadowClass };
}