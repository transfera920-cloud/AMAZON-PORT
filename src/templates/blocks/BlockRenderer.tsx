import type { Block, SiteSettings } from '../types.ts';
import { TextBlock } from './TextBlock.tsx';
import { StepsBlock } from './StepsBlock.tsx';
import { ImageBlock } from './ImageBlock.tsx';
import { CalloutBlock } from './CalloutBlock.tsx';
import { TableBlock } from './TableBlock.tsx';
import { CtaBlock } from './CtaBlock.tsx';
import { FaqListBlock } from './FaqListBlock.tsx';
import { LinkListBlock } from './LinkListBlock.tsx';
import { VehicleListBlock } from './VehicleListBlock.tsx';

type BlockRendererProps = {
  block: Block;
  site?: SiteSettings;
};

export function BlockRenderer({ block, site }: BlockRendererProps) {
  switch (block.type) {
    case 'text':
      return <TextBlock {...block} />;
    case 'steps':
      return <StepsBlock {...block} />;
    case 'image':
      return <ImageBlock {...block} />;
    case 'callout':
      return <CalloutBlock {...block} />;
    case 'table':
      return <TableBlock {...block} />;
    case 'cta':
      return <CtaBlock {...block} site={site} />;
    case 'faqList':
      return <FaqListBlock {...block} />;
    case 'linkList':
      return <LinkListBlock {...block} />;
    case 'vehicleList':
      return <VehicleListBlock {...block} />;
    default:
      return null;
  }
}
