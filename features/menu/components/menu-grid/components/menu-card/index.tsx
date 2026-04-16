import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Star, Leaf, Plus } from "lucide-react";
import { ExpandableText } from "@/components/shared/expandable-text";
import { BADGE_TEXTS } from "./constants";
import { MenuCardProps } from "./types";
import { useMenuAnimation } from "./hooks/use-menu.hook";

export function MenuCard({ item, index }: MenuCardProps) {
  const { shadowClass } = useMenuAnimation(index);

  return (
    <Card
      className={`group border-3 border-foreground bg-card hover:translate-x-1 hover:translate-y-1 transition-all duration-200 overflow-hidden ${shadowClass} hover:shadow-none`}
    >
      <CardContent className="p-5 relative">
        {/* Halftone corner decoration */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#53f921] opacity-20 halftone-dots rounded-full" />

        <CardHeader item={item} />
        <CardBody item={item} />
        <CardFooter item={item} />
      </CardContent>
    </Card>
  );
}

function CardHeader({ item }: { item: MenuCardProps['item'] }) {
  return (
    <div className="flex justify-between items-start mb-3">
      <div className="text-5xl">{item.emoji}</div>
      <div className="flex flex-col gap-1 items-end">
        {item.popular && <PopularBadge />}
      </div>
    </div>
  );
}

function PopularBadge() {
  return (
    <Badge className="bg-[#f633cc] text-white font-bold uppercase border-2 border-foreground text-xs">
      <Flame className="h-3 w-3 mr-1" />
      {BADGE_TEXTS.popular}
    </Badge>
  );
}

function CardBody({ item }: { item: MenuCardProps['item'] }) {
  return (
    <>
      <h3 className="text-lg font-black mb-2 uppercase leading-tight">
        {item.name}
      </h3>
      <ExpandableText text={item.description} />

      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
        <RatingDisplay rating={item.rating} />
        <VeganBadge />
      </div>
    </>
  );
}

function RatingDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="h-3 w-3 text-[#53f921] fill-[#53f921]" />
      <span>{rating}</span>
    </div>
  );
}

function VeganBadge() {
  return (
    <div className="flex items-center gap-1">
      <Leaf className="h-3 w-3 text-[#53f921]" />
      <span>{BADGE_TEXTS.vegan}</span>
    </div>
  );
}

function CardFooter({ item }: { item: MenuCardProps['item'] }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-2xl font-black text-[#53f921]">
        ${item.price.toLocaleString()}
      </p>
      <Button
        size="icon"
        className="h-10 w-10 bg-[#53f921] hover:bg-[#f633cc] text-foreground border-2 border-foreground group-hover:scale-110 transition-transform"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  );
}