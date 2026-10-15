import type { Block } from '../types.ts';

type ImageBlockProps = Extract<Block, { type: 'image' }>;

export function ImageBlock({ image, caption }: ImageBlockProps) {
  if (!image || !image.src) {
    return null;
  }

  return (
    <figure className="my-6 max-w-2xl">
      <img
        src={image.src}
        alt={image.alt || ''}
        width={image.width}
        height={image.height}
        loading="lazy"
        className="w-full h-auto rounded-lg border border-slate-200 bg-slate-100 object-cover"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
