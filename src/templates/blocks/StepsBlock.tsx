import type { Block } from '../types.ts';

type StepsBlockProps = Extract<Block, { type: 'steps' }>;

export function StepsBlock({ heading, steps }: StepsBlockProps) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section className="my-6">
      {heading && (
        <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
          {heading}
        </h2>
      )}
      <ol className="space-y-4 max-w-prose">
        {steps.map((step, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-xs"
          >
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-semibold flex items-center justify-center select-none"
              aria-hidden="true"
            >
              {idx + 1}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-slate-900 leading-snug">
                {step.title}
              </h3>
              {step.description && (
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
