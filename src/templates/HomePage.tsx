import type { HomePageProps, LocationCard } from './types.ts';
import { SiteLayout } from './SiteLayout.tsx';
import { BlockRenderer } from './blocks/BlockRenderer.tsx';

export function HomePage({
  site,
  breadcrumbs,
  h1,
  intro,
  airports,
  ports,
  blocks,
}: HomePageProps) {
  const hasAirports = airports && airports.length > 0;
  const hasPorts = ports && ports.length > 0;
  const hasBlocks = blocks && blocks.length > 0;

  const hasPhone = Boolean(site.phone);
  const hasLine = Boolean(site.lineUrl);
  const hasEmail = Boolean(site.email);

  const renderLocationCard = (card: LocationCard, idx: number) => (
    <a
      key={idx}
      href={card.href}
      className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:border-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
    >
      {card.image && card.image.src && (
        <div className="w-full h-40 bg-slate-100 overflow-hidden border-b border-slate-100">
          <img
            src={card.image.src}
            alt={card.image.alt || ''}
            width={card.image.width}
            height={card.image.height}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {card.region && (
            <div className="text-xs font-semibold text-slate-500 mb-1">
              {card.region}
            </div>
          )}
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
            {card.name}
          </h3>
          {card.summary && (
            <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {card.summary}
            </p>
          )}
        </div>
      </div>
    </a>
  );

  return (
    <SiteLayout site={site} breadcrumbs={breadcrumbs}>
      {/* 1. H1 與 intro */}
      <section className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {h1}
        </h1>
        {intro && (
          <p className="mt-2 text-base text-slate-600 max-w-prose leading-relaxed">
            {intro}
          </p>
        )}
      </section>

      {/* 2. 主要行動列 */}
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

      {/* 3. 機場地點卡片 */}
      {hasAirports && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
            機場接送
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {airports.map(renderLocationCard)}
          </div>
        </section>
      )}

      {/* 3. 港口地點卡片 */}
      {hasPorts && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
            港口接送
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ports.map(renderLocationCard)}
          </div>
        </section>
      )}

      {/* 4. blocks 內容 */}
      {hasBlocks && (
        <div className="my-8">
          {blocks.map((block, idx) => (
            <BlockRenderer key={idx} block={block} site={site} />
          ))}
        </div>
      )}

      {/* 5. 頁尾前的聯絡行動區 */}
      <section className="my-8 p-6 bg-slate-100 border border-slate-200 rounded-lg">
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
    </SiteLayout>
  );
}
