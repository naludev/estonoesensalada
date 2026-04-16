import { CTADataProps, CTASectionProps } from "@/features/landing/components/cta/types";
/**
 * CTA Content Props
 * @param data - CTA data
 * @param onButtonClick - Button click handler
 */
export interface CTAContentProps {
    data: CTADataProps;
    onButtonClick?: CTASectionProps['onButtonClick'];
}
