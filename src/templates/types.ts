export type Img = { src: string; alt: string; width?: number; height?: number };

export type NavItem = { label: string; href: string };

export type SiteSettings = {
  brandName: string;
  phone?: string;
  lineUrl?: string;
  email?: string;
  calculatorUrl: string;          // 外部費用試算網站
  nav: NavItem[];
  footerNote?: string;
};

export type Faq = { question: string; answer: string };

export type OfficialLink = {
  name: string;
  url: string;
  note?: string;
  category?: string;
  lastCheckedAt?: string;          // 例如 2026-10-15
};

export type Vehicle = {
  name: string;
  seats: number;
  recommendedPassengers?: string;
  luggage?: { size: string; count?: string; note?: string }[];
  specialItemsNote?: string;
  photos?: Img[];
};

export type Block =
  | { type: 'text'; heading?: string; paragraphs: string[] }
  | { type: 'steps'; heading?: string; steps: { title: string; description?: string }[] }
  | { type: 'image'; image: Img; caption?: string }
  | { type: 'callout'; tone: 'info' | 'warning'; title?: string; body: string }
  | { type: 'table'; heading?: string; columns: string[]; rows: string[][] }
  | { type: 'cta'; kind: 'calculator' | 'line' | 'phone' | 'email'; label: string }
  | { type: 'faqList'; heading?: string; items: Faq[] }
  | { type: 'linkList'; heading?: string; items: OfficialLink[] }
  | { type: 'vehicleList'; heading?: string; items: Vehicle[] };

export type Breadcrumb = { label: string; href?: string };

export type LocationCard = {
  type: 'airport' | 'port';
  name: string;
  region?: string;
  summary?: string;
  href: string;
  image?: Img;
};

export type MeetingPoint = {
  label: string;
  floor?: string;
  exit?: string;
  landmark?: string;
  note?: string;
  photo?: Img;
};

export type TravelTime = {
  destination: string;
  range: string;                   // 例如「約 X 至 Y 分鐘」，由後台填寫
  factors?: string;
};

export type HomePageProps = {
  site: SiteSettings;
  breadcrumbs?: Breadcrumb[];
  h1: string;
  intro?: string;
  airports: LocationCard[];
  ports: LocationCard[];
  blocks: Block[];
};

export type LocationPageProps = {
  site: SiteSettings;
  breadcrumbs: Breadcrumb[];
  type: 'airport' | 'port';
  h1: string;
  summary?: string;
  heroImage?: Img;
  meetingPoints?: MeetingPoint[];
  travelTimes?: TravelTime[];
  blocks: Block[];
  verifiedAt?: string;             // 資料核實日期
};
