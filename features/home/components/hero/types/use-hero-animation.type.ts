/**
 * Use hero animation hook
 * @type {object}
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
export interface UseHeroAnimationReturnProps {
  isVisible: boolean;
  elementRef: React.RefObject<HTMLElement>;
  animatedElements: {
    badge: boolean;
    title: boolean;
    subtitle: boolean;
    description: boolean;
    buttons: boolean;
    stats: boolean;
    image: boolean;
  };
}