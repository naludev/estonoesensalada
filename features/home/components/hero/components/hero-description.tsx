import { HERO_CONFIG } from "../constants/hero-config.constant"
/**
 * Hero description component
 * @returns {JSX.Element}
 */
export function HeroDescription() {
  const { subtitle, description } = HERO_CONFIG;

  return (
    <>
      <p className="text-2xl sm:text-3xl font-bold text-muted-foreground uppercase tracking-wide">
        {subtitle}
      </p>

      <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-medium">
        {description[0]}
        <br />
        <br />
        {description[1]}
      </p>
    </>
  )
}