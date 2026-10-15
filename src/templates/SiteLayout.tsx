import React from 'react';
import type { Breadcrumb, SiteSettings } from './types.ts';
import './tokens.css';

type SiteLayoutProps = {
  site: SiteSettings;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
};

export function SiteLayout({ site, breadcrumbs, children }: SiteLayoutProps) {
  const hasPhone = Boolean(site.phone);
  const hasLine = Boolean(site.lineUrl);
  const hasEmail = Boolean(site.email);
  const hasNav = site.nav && site.nav.length > 0;
  const hasBreadcrumbs = breadcrumbs && breadcrumbs.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* 頁首 */}
      <header className="sticky top-0 z-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* 品牌名稱 */}
          <a
            href="/"
            className="text-lg font-bold tracking-tight text-slate-900 flex items-center min-h-[44px] hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded"
          >
            {site.brandName}
          </a>

          {/* 電腦版導覽列 */}
          {hasNav && (
            <nav className="hidden md:flex items-center gap-1">
              {site.nav.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* 頁首行動區：費用試算 + 手機選單（純 HTML details，無 JS） */}
          <div className="flex items-center gap-2">
            <a
              href={site.calculatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-3.5 sm:px-4 py-2 text-sm font-semibold rounded-md bg-blue-900 text-white hover:bg-blue-950 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
            >
              費用試算
            </a>

            {/* 手機選單按鈕與下拉清單（純 HTML/CSS） */}
            {hasNav && (
              <details className="relative md:hidden group">
                <summary
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800"
                  aria-label="Navigation"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>
                <nav className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg border border-slate-200 flex flex-col z-30">
                  {site.nav.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 min-h-[44px] flex items-center"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </details>
            )}
          </div>
        </div>
      </header>

      {/* 麵包屑（若有傳入） */}
      {hasBreadcrumbs && (
        <div className="bg-slate-100 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-600">
                {breadcrumbs!.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs!.length - 1;
                  return (
                    <li key={idx} className="flex items-center gap-2">
                      {idx > 0 && (
                        <span className="text-slate-400 select-none" aria-hidden="true">
                          /
                        </span>
                      )}
                      {crumb.href && !isLast ? (
                        <a
                          href={crumb.href}
                          className="hover:underline text-slate-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-800 py-1"
                        >
                          {crumb.label}
                        </a>
                      ) : (
                        <span
                          className={isLast ? 'font-semibold text-slate-900' : 'text-slate-700'}
                          {...(isLast ? { 'aria-current': 'page' } : {})}
                        >
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      )}

      {/* 主內容區塊 */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>

      {/* 頁尾 */}
      <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="text-lg font-bold text-white tracking-tight">
                {site.brandName}
              </div>
              {site.footerNote && (
                <p className="mt-2 text-xs text-slate-400 max-w-sm leading-relaxed whitespace-pre-line">
                  {site.footerNote}
                </p>
              )}
            </div>

            {/* 頁尾聯絡與行動 */}
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={site.calculatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                費用試算
              </a>

              {hasLine && (
                <a
                  href={site.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-sm font-semibold rounded-md bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  LINE 聯絡
                </a>
              )}

              {hasPhone && (
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-sm font-semibold rounded-md bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  電話
                </a>
              )}

              {hasEmail && (
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-sm font-semibold rounded-md bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  Email
                </a>
              )}
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-400">
            {site.brandName}
          </div>
        </div>
      </footer>
    </div>
  );
}
