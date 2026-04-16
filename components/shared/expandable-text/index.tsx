"use client"
import { EXPANDABLE_TEXT } from "./constants"
import { useExpandableText } from "./hooks"
import { ExpandableTextProps } from "./types"
/**
 * Expandable Text
 * @param text - Text
 * @param className - Class name
 * @param initialExpanded - Initial expanded
 * @param maxLines - Max lines
 */
export function ExpandableText({
  text,
  className = "",
  initialExpanded = false,
  maxLines = {
    expanded: EXPANDABLE_TEXT.DEFAULT_MAX_LINES.EXPANDED,
    collapsed: EXPANDABLE_TEXT.DEFAULT_MAX_LINES.COLLAPSED
  }
}: ExpandableTextProps) {
  const {
    isExpanded,
    toggleExpand,
    getMaxLinesClass,
    getButtonText,
    getButtonColorClass
  } = useExpandableText({
    initialExpanded,
    maxLinesExpanded: maxLines.expanded,
    maxLinesCollapsed: maxLines.collapsed
  })

  return (
    <div className={className}>
      <p className={`text-muted-foreground text-sm leading-relaxed ${getMaxLinesClass()}`}>
        {text}
      </p>
      <button
        onClick={toggleExpand}
        className={`${getButtonColorClass()} hover:text-[#53f921] text-xs font-bold uppercase mt-1 transition-colors`}
      >
        {getButtonText()}
      </button>
    </div>
  )
}