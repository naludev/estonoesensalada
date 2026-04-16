import { StatCardProps } from "../types";
/**
 * Stat Card
 * @param stat - Stat
 * @param index - Stat index
 */
export function StatCard({ stat, index }: StatCardProps) {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`text-center p-6 border-2 border-background/30 ${isEven ? 'bg-[#53f921]/10' : 'bg-[#f633cc]/10'
                }`}
        >
            <div className={`text-4xl sm:text-5xl font-black mb-2 ${isEven ? 'text-[#53f921]' : 'text-[#f633cc]'
                }`}>
                {stat.value}
            </div>
            <div className="text-background/60 text-sm font-bold uppercase">{stat.label}</div>
        </div>
    );
}