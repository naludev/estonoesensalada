import { StatCard } from "../stat-card";
import { StatsGridProps } from "./types";
/**
 * Stats Grid
 * @param stats - Stats
 */
export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t-2 border-background/20">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} />
      ))}
    </div>
  );
}