/**
 * Menu Item
 * @param id - Item ID
 * @param name - Item name
 * @param description - Item description
 * @param price - Item price
 * @param category - Item category
 * @param rating - Item rating
 * @param popular - Item popular
 * @param emoji - Item emoji
 */
export interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  popular: boolean;
  emoji: string;
}
