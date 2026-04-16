'use client'
import { useState } from 'react'
import { UseExpandableTextProps } from '../types'
/**
 * Use Expandable Text
 * @param initialExpanded - Initial expanded
 * @param maxLinesExpanded - Max lines expanded
 * @param maxLinesCollapsed - Max lines collapsed
 * @returns {object}
 * @property {boolean} isExpanded - Is expanded
 * @property {function} toggleExpand - Toggle expand
 * @property {function} getMaxLinesClass - Get max lines class
 * @property {function} getButtonText - Get button text
 * @property {function} getButtonColorClass - Get button color class
 */
export const useExpandableText = ({
    initialExpanded = false,
    maxLinesExpanded = 5,
    maxLinesCollapsed = 3
}: UseExpandableTextProps = {}) => {
    const [isExpanded, setIsExpanded] = useState(initialExpanded)

    const toggleExpand = () => setIsExpanded(!isExpanded)

    const getMaxLinesClass = () => {
        return isExpanded
            ? `line-clamp-${maxLinesExpanded}`
            : `line-clamp-${maxLinesCollapsed}`
    }

    const getButtonText = () => {
        return isExpanded ? "Ver menos" : "Leer mas"
    }

    const getButtonColorClass = () => {
        return isExpanded ? "text-[#53f921]" : "text-[#f633cc]"
    }

    return {
        isExpanded,
        toggleExpand,
        getMaxLinesClass,
        getButtonText,
        getButtonColorClass
    }
}