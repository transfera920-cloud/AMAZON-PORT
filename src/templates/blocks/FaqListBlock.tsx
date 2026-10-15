import type { Block } from '../types.ts';

type FaqListBlockProps = Extract<Block, { type: 'faqList' }>;

export function FaqListBlock({ heading, items }: FaqListBlockProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="my-6">
      {heading && (
        <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
          {heading}
        </h2>
      )}
      <div className="space-y-3 max-w-prose">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="group border border-slate-200 rounded-lg bg-white overflow-hidden shadow-xs"
          >
            <summary className="flex items-center justify-between p-4 min-h-[44px] cursor-pointer text-base font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 select-none list-none [&::-webkit-details-marker]:hidden">
              <span className="flex-1 pr-4">{item.question}</span>
              <span
                className="w-5 h-5 flex items-center justify-center text-slate-500 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▼
              </span>
            </summary>
            <div className="px-4 pb-4 pt-1 text-sm leading-relaxed text-slate-700 border-t border-slate-100 whitespace-pre-line">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
