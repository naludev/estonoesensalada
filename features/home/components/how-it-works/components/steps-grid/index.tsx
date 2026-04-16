import { StepCard } from "../step-card";
import { StepsGridProps } from "./types";
/**
 * Steps Grid
 * @param steps - Steps
 */
export function StepsGrid({ steps }: StepsGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {steps.map((step, index) => (
        <StepCard
          key={index}
          step={step}
          index={index}
          isLast={step.isLast}
        />
      ))}
    </div>
  );
}