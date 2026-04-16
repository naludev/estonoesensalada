import { EmptyStateProps } from "./types";
import { EMPTY_STATE_DEFAULTS } from "./constants";
/**
 * EmptyState component
 * @param {EmptyStateProps} props
 * @property {string} title
 * @property {string} message
 * @property {string} emoji
 */
export function EmptyState({
  title = EMPTY_STATE_DEFAULTS.title,
  message = EMPTY_STATE_DEFAULTS.message,
  emoji = EMPTY_STATE_DEFAULTS.emoji,
}: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <p className="text-6xl mb-4">{emoji}</p>
      <h3 className="text-2xl font-black uppercase mb-2">{title}</h3>
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}