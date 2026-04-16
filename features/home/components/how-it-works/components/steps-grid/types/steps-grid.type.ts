/**
 * Steps Grid Props
 * @param steps - Steps
 * @param number - Step number
 * @param title - Step title
 * @param description - Step description
 * @param isEven - Is even step
 * @param isLast - Is last step
 */
export interface StepsGridProps {
    steps: Array<{
        number: string;
        title: string;
        description: string;
        isEven: boolean;
        isLast: boolean;
    }>;
}