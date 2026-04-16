/**
 * CTA Section Props
 * @param discountCode - Discount code
 * @param discountValue - Discount value
 * @param buttonText - Button text
 * @param onButtonClick - Button click handler
 */
export interface CTASectionProps {
    discountCode?: string;
    discountValue?: number;
    buttonText?: string;
    onButtonClick?: () => void;
}
