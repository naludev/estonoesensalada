import { StepCardProps } from "../types";
/**
 * Step Card
 * @param step - Step
 * @param index - Step index
 * @param isLast - Is last step
 */
export function StepCard({ step, index, isLast }: StepCardProps) {
    const isEven = index % 2 === 0;

    return (
        <div className="relative">
            <div
                className={`inline-block px-4 py-2 mb-4 font-black text-4xl border-2 border-background ${isEven ? 'bg-[#53f921] text-foreground' : 'bg-[#f633cc] text-foreground'
                    }`}
            >
                {step.number}
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase">{step.title}</h3>
            <p className="text-background/70 leading-relaxed font-medium">{step.description}</p>

            {!isLast && (
                <div className="hidden md:block absolute top-6 left-[calc(100%+1rem)] w-8">
                    <div className="flex items-center">
                        <div className="w-6 h-0.5 bg-[#53f921]" />
                        <div className="w-2 h-2 bg-[#f633cc] rotate-45" />
                    </div>
                </div>
            )}
        </div>
    );
}