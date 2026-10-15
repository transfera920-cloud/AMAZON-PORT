import type { Block } from '../types.ts';

type TableBlockProps = Extract<Block, { type: 'table' }>;

export function TableBlock({ heading, columns, rows }: TableBlockProps) {
  if (!columns || columns.length === 0 || !rows || rows.length === 0) {
    return null;
  }

  return (
    <section className="my-6">
      {heading && (
        <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
          {heading}
        </h2>
      )}
      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-slate-100 border-b border-slate-200 text-slate-800">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-4 py-3 font-semibold whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-3 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
