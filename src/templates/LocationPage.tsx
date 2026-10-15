import type { LocationPageProps } from './types.ts';
import { SiteLayout } from './SiteLayout.tsx';
import { BlockRenderer } from './blocks/BlockRenderer.tsx';

export function LocationPage({
  site,
  breadcrumbs,
  type: _type,
  h1,
  summary,
  heroImage,
  meetingPoints,
  travelTimes,
  blocks,
  verifiedAt,
}: LocationPageProps) {
  const hasMeetingPoints = meetingPoints && meetingPoints.length > 0;
  const hasTravelTimes = travelTimes && travelTimes.length > 0;
  const hasBlocks = blocks && blocks.length > 0;

  const hasPhone = Boolean(site.phone);
  const hasLine = Boolean(site.lineUrl);
  const hasEmail = Boolean(site.email);

  return (
    <SiteLayout site={site} breadcrumbs={breadcrumbs}>
      {/* 1. H1, summary, heroImage */}
      <section className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {h1}
        </h1>
        {summary && (
          <p className="mt-2 text-base text-slate-600 max-w-prose leading-relaxed">
            {summary}
          </p>
        )}
        {heroImage && heroImage.src && (
          <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
            <img
              src={heroImage.src}
              alt={heroImage.alt || ''}
              width={heroImage.width}
              height={heroImage.height}
              className="w-full h-auto max-h-[380px] object-cover"
            />
          </div>
        )}
      </section>

      {/* 2. 行動列：費用試算、聯絡方式 */}
      <section className="mb-8 p-4 sm:p-5 bg-white border border-slate-200 rounded-lg shadow-xs">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.calculatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-base font-semibold rounded-md bg-blue-900 text-white hover:bg-blue-950 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
          >
            費用試算
          </a>

          {hasLine && (
            <a
              href={site.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-base font-semibold rounded-md bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
            >
              LINE 聯絡
            </a>
          )}

          {hasPhone && (
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-base font-semibold rounded-md bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
            >
              電話
            </a>
          )}

          {hasEmail && (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-base font-semibold rounded-md bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
            >
              Email
            </a>
          )}
        </div>
      </section>

      {/* 3. 集合位置 */}
      {hasMeetingPoints && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
            集合位置
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meetingPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-slate-200 rounded-lg shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {point.label}
                  </h3>

                  {point.photo && point.photo.src && (
                    <div className="mb-4">
                      <img
                        src={point.photo.src}
                        alt={point.photo.alt || ''}
                        width={point.photo.width}
                        height={point.photo.height}
                        loading="lazy"
                        className="w-full h-44 rounded bg-slate-100 object-cover border border-slate-200"
                      />
                    </div>
                  )}

                  <dl className="space-y-2 text-sm text-slate-700">
                    {point.floor && (
                      <div className="flex items-baseline justify-between border-b border-slate-100 pb-1.5">
                        <dt className="text-slate-500 font-medium">樓層</dt>
                        <dd className="font-semibold text-slate-900">{point.floor}</dd>
                      </div>
                    )}
                    {point.exit && (
                      <div className="flex items-baseline justify-between border-b border-slate-100 pb-1.5">
                        <dt className="text-slate-500 font-medium">出口</dt>
                        <dd className="font-semibold text-slate-900">{point.exit}</dd>
                      </div>
                    )}
                    {point.landmark && (
                      <div className="flex items-baseline justify-between border-b border-slate-100 pb-1.5">
                        <dt className="text-slate-500 font-medium">地標</dt>
                        <dd className="font-semibold text-slate-900">{point.landmark}</dd>
                      </div>
                    )}
                  </dl>

                  {point.note && (
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                      {point.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. 交通時間 */}
      {hasTravelTimes && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
            交通時間
          </h2>

          {/* 手機版：卡片 */}
          <div className="space-y-3 sm:hidden">
            {travelTimes.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs"
              >
                <h3 className="font-bold text-slate-900 mb-2">
                  {item.destination}
                </h3>
                <dl className="space-y-1.5 text-sm">
                  <div className="flex items-baseline justify-between">
                    <dt className="text-slate-500">參考範圍</dt>
                    <dd className="font-semibold text-slate-900">{item.range}</dd>
                  </div>
                  {item.factors && (
                    <div className="pt-1 text-xs text-slate-600">
                      <span className="text-slate-500 mr-1">影響因素</span>
                      {item.factors}
                    </div>
                  )}
                </dl>
              </div>
            ))}
          </div>

          {/* 桌面版：表格 */}
          <div className="hidden sm:block overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-800">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    {/* 目的地欄位直接放置資料目的地 */}
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                    參考範圍
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    影響因素
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                {travelTimes.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900 align-top">
                      {item.destination}
                    </td>
                    <td className="px-4 py-3 align-top whitespace-nowrap font-medium text-slate-800">
                      {item.range}
                    </td>
                    <td className="px-4 py-3 align-top text-slate-600 text-xs leading-relaxed">
                      {item.factors || ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 5. blocks */}
      {hasBlocks && (
        <div className="my-8">
          {blocks.map((block, idx) => (
            <BlockRenderer key={idx} block={block} site={site} />
          ))}
        </div>
      )}

      {/* 6. verifiedAt */}
      {verifiedAt && (
        <aside className="my-8 pt-4 border-t border-slate-200 text-xs text-slate-500">
          <span>資料核實日期</span> {verifiedAt}
        </aside>
      )}
    </SiteLayout>
  );
}
