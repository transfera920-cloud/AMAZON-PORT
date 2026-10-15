import { HomePage } from './HomePage.tsx';
import { LocationPage } from './LocationPage.tsx';
import {
  sampleHomePageFull,
  sampleHomePageMinimal,
  sampleLocationPageFull,
  sampleLocationPageMinimal,
} from './sampleData.ts';

/**
 * Preview 預覽元件
 * 純函式元件，無 hooks、無路由套件
 * 依序陳列四種測試情境，支援直接捲動或錨點導覽檢視
 */
export function Preview() {
  return (
    <div className="bg-slate-200">
      {/* 預覽導覽頂列 */}
      <nav
        className="sticky top-0 z-30 bg-slate-900 text-white text-xs px-4 py-2 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700"
        aria-label="Preview Nav"
      >
        <span className="font-bold text-slate-200">樣板預覽</span>
        <div className="flex flex-wrap gap-2">
          <a
            href="#preview-home-full"
            className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 min-h-[32px] flex items-center"
          >
            首頁（全填）
          </a>
          <a
            href="#preview-home-minimal"
            className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 min-h-[32px] flex items-center"
          >
            首頁（極簡）
          </a>
          <a
            href="#preview-location-full"
            className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 min-h-[32px] flex items-center"
          >
            地點頁：機場（全填）
          </a>
          <a
            href="#preview-location-minimal"
            className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 min-h-[32px] flex items-center"
          >
            地點頁：港口（極簡）
          </a>
        </div>
      </nav>

      {/* 範例 1：首頁（欄位全填） */}
      <section id="preview-home-full" className="border-b-8 border-slate-400">
        <header className="bg-blue-900 text-white px-4 py-2 text-xs font-semibold">
          預覽情境 1：首頁（欄位全填）
        </header>
        <HomePage {...sampleHomePageFull} />
      </section>

      {/* 範例 2：首頁（只填必要欄位、blocks 為空） */}
      <section id="preview-home-minimal" className="border-b-8 border-slate-400">
        <header className="bg-blue-900 text-white px-4 py-2 text-xs font-semibold">
          預覽情境 2：首頁（只填必要欄位、無區塊）
        </header>
        <HomePage {...sampleHomePageMinimal} />
      </section>

      {/* 範例 3：地點頁 - 機場（欄位全填） */}
      <section id="preview-location-full" className="border-b-8 border-slate-400">
        <header className="bg-blue-900 text-white px-4 py-2 text-xs font-semibold">
          預覽情境 3：地點頁 - 機場（欄位全填、含集合點與交通時間）
        </header>
        <LocationPage {...sampleLocationPageFull} />
      </section>

      {/* 範例 4：地點頁 - 港口（只填必要欄位、blocks 為空） */}
      <section id="preview-location-minimal" className="pb-16">
        <header className="bg-blue-900 text-white px-4 py-2 text-xs font-semibold">
          預覽情境 4：地點頁 - 港口（只填必要欄位、無集合點、無區塊）
        </header>
        <LocationPage {...sampleLocationPageMinimal} />
      </section>
    </div>
  );
}
export default Preview;
