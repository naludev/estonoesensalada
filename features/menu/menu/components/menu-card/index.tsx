import { Card, CardContent } from "@/components/ui/card";
import { useMenuAnimation } from "../../hooks/use-menu-animation.hook";
import { MenuCardProps } from "./types";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import { CardBody, CardFooter, CardHeader } from "./components";
/**
 * Menu Card
 * @param item - Menu item
 * @param index - Menu item index
 */
export function MenuCard({ item, index }: MenuCardProps) {
  const { shadowClass } = useMenuAnimation(index);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      emoji: item.emoji || '🍽️',
      description: item.description
    });
    toast({
      title: "¡Agregado!",
      description: `${item.name} se sumó a tu bolsa.`,
    });
  };

  return (
    <Card
      className={`group border-3 border-foreground bg-card hover:translate-x-1 hover:translate-y-1 transition-all duration-200 overflow-hidden ${shadowClass} hover:shadow-none`}
    >
      <CardContent className="p-5 relative">
        {/* Halftone corner decoration */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#53f921] opacity-20 halftone-dots rounded-full" />

        <CardHeader item={item} />
        <CardBody item={item} />
        <CardFooter item={item} onAddToCart={handleAddToCart} />
      </CardContent>
    </Card>
  );
}

