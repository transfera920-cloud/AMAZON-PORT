import type { Block } from '../types.ts';

type TextBlockProps = Extract<Block, { type: 'text' }>;

export function TextBlock({ heading, paragraphs }: TextBlockProps) {
  if (!paragraphs || paragraphs.length === 0) {
    return null;
  }

  return (
    <section className="my-6">
      {heading && (
        <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
          {heading}
        </h2>
      )}
      <div className="space-y-3 text-base leading-relaxed text-slate-700 max-w-prose">
        {paragraphs.map((para, idx) => (
          <p key={idx} className="whitespace-pre-line">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
