import { Star } from "lucide-react";
/**
 * Rating Display
 * @param rating - Rating
 */
export function RatingDisplay({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-[#53f921] fill-[#53f921]" />
            <span>{rating}</span>
        </div>
    );
}