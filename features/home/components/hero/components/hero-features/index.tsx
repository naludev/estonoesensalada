import { features } from "./constants";

/**
 * Hero features component
 * @returns {JSX.Element}
 */
export function HeroFeatures() {

  return (
    <div className="flex flex-wrap items-center gap-6 pt-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3 bg-card px-4 py-2 border-2 border-foreground">
          <feature.icon className={`h-5 w-5 ${feature.color} ${feature.fill ? 'fill-[#53f921]' : ''}`} />
          <span className="text-sm font-bold uppercase">{feature.text}</span>
        </div>
      ))}
    </div>
  )
}