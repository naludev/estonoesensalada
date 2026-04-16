/**
 * Type for Menu component
 * @property {number} id - Menu item id
 * @property {string} name - Menu item name
 * @property {string} description - Menu item description
 * @property {number} price - Menu item price
 * @property {string} category - Menu item category
 * @property {number} rating - Menu item rating
 * @property {boolean} popular - Menu item popular
 * @property {string} emoji - Menu item emoji
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
