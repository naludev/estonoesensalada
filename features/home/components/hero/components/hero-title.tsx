import { HERO_CONFIG } from "../constants/hero-config.constant"
/**
 * Hero title component
 * @returns {JSX.Element}
 */
export function HeroTitle() {
  const { title: { prefix, highlighted } } = HERO_CONFIG;
  return (
    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none uppercase tracking-tighter">
      <span className="relative inline-block">
        <span className="relative z-10">{prefix}</span>
      </span>
      <br />
      <span className="relative inline-block">
        <span className="relative z-10 bg-linear-to-r from-[#53f921] to-[#3dd615] bg-clip-text text-transparent">
          {highlighted}
        </span>
        <span className="absolute -bottom-2 left-0 w-full h-5 bg-[#f633cc] -skew-x-6 z-0" />
      </span>
    </h1>
  )
}