/**
 * Expandable Text Props
 * @param text - Text
 * @param className - Class name
 * @param initialExpanded - Initial expanded
 * @param maxLines - Max lines
 */
export interface ExpandableTextProps {
    text: string
    className?: string
    initialExpanded?: boolean
    maxLines?: {
        expanded: number
        collapsed: number
    }
}
