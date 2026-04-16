/**
 * Stats Grid Props
 * @param stats - Stats
 * @param value - Stat value
 * @param label - Stat label
 * @param isEven - Is even stat
 */
export interface StatsGridProps {
    stats: Array<{
        value: string;
        label: string;
        isEven: boolean;
    }>;
}
