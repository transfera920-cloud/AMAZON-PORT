import type { HomePageProps, LocationPageProps, SiteSettings } from './types.ts';

const placeholderSvg =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23e2e8f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2364748b" font-family="sans-serif" font-size="20">%E3%80%94%E7%AF%84%E4%BE%8B%E5%9C%96%E7%89%87%E4%BD%94%E4%BD%8D%E3%80%95</text></svg>';

export const sampleSiteFull: SiteSettings = {
  brandName: '亞馬遜機場接送',
  phone: '0900000000',
  lineUrl: 'https://line.me/example',
  email: 'service@example.com',
  calculatorUrl: 'https://example.com/calculator',
  nav: [
    { label: '首頁', href: '#' },
    { label: '〔範例地點一〕', href: '#airport' },
    { label: '〔範例地點二〕', href: '#port' },
  ],
  footerNote: '〔範例頁尾附註：此處由後台填寫，本站為純前端靜態樣板示範〕',
};

export const sampleSiteMinimal: SiteSettings = {
  brandName: '亞馬遜機場接送',
  calculatorUrl: 'https://example.com/calculator',
  nav: [],
};

// 首頁範例 1：欄位全填
export const sampleHomePageFull: HomePageProps = {
  site: sampleSiteFull,
  breadcrumbs: [
    { label: '首頁' },
  ],
  h1: '〔範例主標題：亞馬遜機場接送〕',
  intro: '〔範例導言：此處由後台填寫，提供接送資訊與導引服務說明〕',
  airports: [
    {
      type: 'airport',
      name: '〔範例機場 A〕',
      region: '〔範例區域〕',
      summary: '〔範例地點摘要：此處由後台填寫說明文字〕',
      href: '#airport-a',
      image: {
        src: placeholderSvg,
        alt: '〔範例圖片說明〕',
        width: 600,
        height: 400,
      },
    },
    {
      type: 'airport',
      name: '〔範例機場 B〕',
      region: '〔範例區域〕',
      summary: '〔範例地點摘要：此處由後台填寫說明文字〕',
      href: '#airport-b',
      image: {
        src: placeholderSvg,
        alt: '〔範例圖片說明〕',
        width: 600,
        height: 400,
      },
    },
  ],
  ports: [
    {
      type: 'port',
      name: '〔範例港口 A〕',
      region: '〔範例區域〕',
      summary: '〔範例地點摘要：此處由後台填寫說明文字〕',
      href: '#port-a',
      image: {
        src: placeholderSvg,
        alt: '〔範例圖片說明〕',
        width: 600,
        height: 400,
      },
    },
  ],
  blocks: [
    {
      type: 'text',
      heading: '〔範例區塊標題〕',
      paragraphs: [
        '〔範例段落：此處由後台填寫第一段文字〕',
        '〔範例段落：此處由後台填寫第二段文字〕',
      ],
    },
    {
      type: 'steps',
      heading: '〔範例步驟流程標題〕',
      steps: [
        {
          title: '〔範例步驟一標題〕',
          description: '〔範例步驟一說明：此處由後台填寫〕',
        },
        {
          title: '〔範例步驟二標題〕',
          description: '〔範例步驟二說明：此處由後台填寫〕',
        },
        {
          title: '〔範例步驟三標題〕',
        },
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      title: '〔範例提醒事項標題〕',
      body: '〔範例提示內文：此處由後台填寫說明事項〕',
    },
    {
      type: 'vehicleList',
      heading: '〔範例車輛清單標題〕',
      items: [
        {
          name: '〔範例車型 A〕',
          seats: 5,
          recommendedPassengers: 'X 至 Y 人',
          luggage: [
            { size: '28 吋', count: 'X 件', note: '〔範例行李備註〕' },
            { size: '20 吋', count: 'Y 件' },
          ],
          specialItemsNote: '〔範例特殊物品說明：此處由後台填寫〕',
          photos: [
            {
              src: placeholderSvg,
              alt: '〔範例車輛照片說明〕',
              width: 600,
              height: 400,
            },
          ],
        },
      ],
    },
    {
      type: 'table',
      heading: '〔範例表格標題〕',
      columns: ['〔範例欄位甲〕', '〔範例欄位乙〕', '〔範例欄位丙〕'],
      rows: [
        ['〔範例內容 A1〕', '〔範例內容 B1〕', '〔範例內容 C1〕'],
        ['〔範例內容 A2〕', '〔範例內容 B2〕', '〔範例內容 C2〕'],
      ],
    },
    {
      type: 'faqList',
      heading: '〔範例問答標題〕',
      items: [
        {
          question: '〔範例常見問題一〕',
          answer: '〔範例問題答覆：此處由後台填寫說明內容〕',
        },
        {
          question: '〔範例常見問題二〕',
          answer: '〔範例問題答覆：此處由後台填寫說明內容〕',
        },
      ],
    },
    {
      type: 'linkList',
      heading: '〔範例官方資訊標題〕',
      items: [
        {
          name: '〔範例官方連結名稱〕',
          url: 'https://example.com/official',
          category: '〔範例官方分類〕',
          note: '〔範例官方備註說明：此處由後台填寫〕',
          lastCheckedAt: '2026-10-15',
        },
      ],
    },
    {
      type: 'cta',
      kind: 'calculator',
      label: '費用試算',
    },
  ],
};

// 首頁範例 2：只填必要欄位、blocks 為空
export const sampleHomePageMinimal: HomePageProps = {
  site: sampleSiteMinimal,
  h1: '〔範例主標題：極簡版面〕',
  airports: [],
  ports: [],
  blocks: [],
};

// 地點頁範例 1：機場（欄位全填）
export const sampleLocationPageFull: LocationPageProps = {
  site: sampleSiteFull,
  breadcrumbs: [
    { label: '首頁', href: '/' },
    { label: '機場接送', href: '#' },
    { label: '〔範例機場〕' },
  ],
  type: 'airport',
  h1: '〔範例機場接送服務〕',
  summary: '〔範例地點介紹說明：此處由後台填寫，提供該機場之集合與接送概況〕',
  heroImage: {
    src: placeholderSvg,
    alt: '〔範例機場主圖說明〕',
    width: 800,
    height: 400,
  },
  meetingPoints: [
    {
      label: '〔範例集合點一〕',
      floor: '〔範例 X 樓〕',
      exit: '〔範例 Y 號出口〕',
      landmark: '〔範例柱號或地標〕',
      note: '〔範例集合說明：此處由後台填寫詳細位置提示〕',
      photo: {
        src: placeholderSvg,
        alt: '〔範例集合點照片說明〕',
        width: 600,
        height: 400,
      },
    },
    {
      label: '〔範例集合點二〕',
      floor: '〔範例 X 樓〕',
      exit: '〔範例 Z 號出口〕',
      note: '〔範例集合說明：此處由後台填寫詳細位置提示〕',
    },
  ],
  travelTimes: [
    {
      destination: '〔範例目的地甲〕',
      range: '約 X 至 Y 分鐘',
      factors: '〔範例影響因素：路況、天候等〕',
    },
    {
      destination: '〔範例目的地乙〕',
      range: '約 X 至 Y 分鐘',
    },
  ],
  blocks: [
    {
      type: 'callout',
      tone: 'warning',
      title: '〔範例重要注意事項〕',
      body: '〔範例提醒內文：此處由後台填寫注意事項〕',
    },
    {
      type: 'faqList',
      heading: '〔範例常見問題標題〕',
      items: [
        {
          question: '〔範例問題一〕',
          answer: '〔範例問題回答：此處由後台填寫說明〕',
        },
      ],
    },
    {
      type: 'linkList',
      heading: '〔範例官方資訊連結〕',
      items: [
        {
          name: '〔範例官方航班即時資訊〕',
          url: 'https://example.com/flights',
          category: '〔範例官方即時資訊〕',
          note: '〔範例備註：此處由後台填寫〕',
          lastCheckedAt: '2026-10-15',
        },
      ],
    },
  ],
  verifiedAt: '2026-10-15',
};

// 地點頁範例 2：港口（只填必要欄位、blocks 為空）
export const sampleLocationPageMinimal: LocationPageProps = {
  site: sampleSiteMinimal,
  breadcrumbs: [
    { label: '首頁', href: '/' },
    { label: '〔範例港口〕' },
  ],
  type: 'port',
  h1: '〔範例港口接送服務〕',
  blocks: [],
};
