import { StepProps } from "./step.type";
/**
 * Step Card Props
 * @param step - Step
 * @param index - Step index
 * @param isLast - Is last step
 */
export interface StepCardProps {
  step: StepProps;
  index: number;
  isLast: boolean;
}
