import type { Block } from '../types.ts';

type VehicleListBlockProps = Extract<Block, { type: 'vehicleList' }>;

export function VehicleListBlock({ heading, items }: VehicleListBlockProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="my-8">
      {heading && (
        <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((vehicle, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-slate-200 rounded-lg shadow-xs flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {vehicle.name}
              </h3>

              {vehicle.photos && vehicle.photos.length > 0 && (
                <div className="mb-4 grid grid-cols-2 gap-2">
                  {vehicle.photos.map((photo, pIdx) => (
                    <img
                      key={pIdx}
                      src={photo.src}
                      alt={photo.alt || ''}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      className="w-full h-32 rounded bg-slate-100 object-cover border border-slate-200"
                    />
                  ))}
                </div>
              )}

              <dl className="space-y-2 text-sm text-slate-700">
                <div className="flex items-baseline justify-between border-b border-slate-100 pb-1.5">
                  <dt className="text-slate-500 font-medium">座位</dt>
                  <dd className="font-semibold text-slate-900">{vehicle.seats}</dd>
                </div>

                {vehicle.recommendedPassengers && (
                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-1.5">
                    <dt className="text-slate-500 font-medium">建議人數</dt>
                    <dd className="font-semibold text-slate-900">{vehicle.recommendedPassengers}</dd>
                  </div>
                )}

                {vehicle.luggage && vehicle.luggage.length > 0 && (
                  <div className="pt-1 border-b border-slate-100 pb-1.5">
                    <dt className="text-slate-500 font-medium mb-1">行李</dt>
                    <dd className="space-y-1">
                      {vehicle.luggage.map((lug, lIdx) => (
                        <div key={lIdx} className="text-xs text-slate-700 flex flex-wrap gap-x-2">
                          <span className="font-medium text-slate-900">{lug.size}</span>
                          {lug.count && <span>{lug.count}</span>}
                          {lug.note && <span className="text-slate-500">{lug.note}</span>}
                        </div>
                      ))}
                    </dd>
                  </div>
                )}

                {vehicle.specialItemsNote && (
                  <div className="pt-1">
                    <dt className="text-slate-500 font-medium mb-1">特殊物品</dt>
                    <dd className="text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                      {vehicle.specialItemsNote}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
