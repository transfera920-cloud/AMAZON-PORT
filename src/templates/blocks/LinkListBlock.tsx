import type { Block } from '../types.ts';

type LinkListBlockProps = Extract<Block, { type: 'linkList' }>;

export function LinkListBlock({ heading, items }: LinkListBlockProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="my-8 p-5 bg-stone-50 border border-stone-300 rounded-xl shadow-xs">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block px-2.5 py-0.5 text-xs font-bold text-stone-700 bg-stone-200 rounded tracking-wider">
          外部官方資訊
        </span>
      </div>
      {heading && (
        <h2 className="text-lg font-bold text-stone-900 mb-4 tracking-tight">
          {heading}
        </h2>
      )}
      <ul className="divide-y divide-stone-200">
        {items.map((link, idx) => (
          <li key={idx} className="py-3 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] text-base font-semibold text-stone-900 underline hover:text-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-600 rounded"
              >
                <span>{link.name}</span>
                <span className="ml-1 text-xs text-stone-500" aria-hidden="true">
                  ↗
                </span>
              </a>

              {link.lastCheckedAt && (
                <div className="text-xs text-stone-600 whitespace-nowrap">
                  最後查核 {link.lastCheckedAt}
                </div>
              )}
            </div>

            {link.category && (
              <div className="mt-0.5 text-xs font-medium text-stone-600">
                {link.category}
              </div>
            )}

            {link.note && (
              <p className="mt-1 text-sm text-stone-700 leading-relaxed">
                {link.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
