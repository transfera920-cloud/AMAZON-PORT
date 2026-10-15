import type { Block, SiteSettings } from '../types.ts';

type CtaBlockProps = Extract<Block, { type: 'cta' }> & {
  site?: SiteSettings;
};

export function CtaBlock({ kind, label, site }: CtaBlockProps) {
  if (!label) {
    return null;
  }

  let href = '';
  let isExternal = true;

  if (kind === 'calculator') {
    href = site?.calculatorUrl || '#';
  } else if (kind === 'line') {
    href = site?.lineUrl || '';
  } else if (kind === 'phone') {
    href = site?.phone ? `tel:${site.phone}` : '';
    isExternal = false;
  } else if (kind === 'email') {
    href = site?.email ? `mailto:${site.email}` : '';
    isExternal = false;
  }

  if (!href) {
    return null;
  }

  const isPrimary = kind === 'calculator';
  const buttonClasses = isPrimary
    ? 'bg-blue-900 text-white hover:bg-blue-950 border-transparent shadow-xs'
    : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50';

  return (
    <div className="my-6">
      <a
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-base font-semibold rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 ${buttonClasses}`}
      >
        {label}
      </a>
    </div>
  );
}
