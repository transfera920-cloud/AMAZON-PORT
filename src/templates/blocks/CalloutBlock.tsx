import type { Block } from '../types.ts';

type CalloutBlockProps = Extract<Block, { type: 'callout' }>;

export function CalloutBlock({ tone, title, body }: CalloutBlockProps) {
  if (!body) {
    return null;
  }

  const isWarning = tone === 'warning';
  const containerClasses = isWarning
    ? 'bg-amber-50 border-amber-300 text-amber-950'
    : 'bg-emerald-50 border-emerald-300 text-emerald-950';

  return (
    <aside
      className={`my-6 p-4 rounded-lg border text-sm leading-relaxed max-w-prose ${containerClasses}`}
      role="note"
    >
      {title && (
        <h3 className="font-semibold text-base mb-1">
          {title}
        </h3>
      )}
      <p className="whitespace-pre-line">{body}</p>
    </aside>
  );
}
