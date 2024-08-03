import ProductCard from '@/components/product-card';
import type { Media } from '@/payload-types';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import type { Where } from 'payload';
import type { HTMLAttributes } from 'react';

export interface ProductGridProps extends HTMLAttributes<HTMLElement> {
  where: Where;
  limit?: number;
  sort?: string;
}

export default async function ProductGrid({ where, limit, sort }: ProductGridProps) {
  const cms = await getPayloadHMR({ config });
  const { docs } = await cms.find({
    collection: 'products',
    where,
    limit,
    sort,
  });

  return (
    // 16.625 are inferred from ProductCard
    <ul className="grid grid-cols-[repeat(auto-fit,16.625rem)] justify-center gap-4">
      {docs.map((el, i) => (
        <li key={el.id}>
          <ProductCard
            data={{
              id: String(el.id),
              title: el.title,
              img: (el.images![0]!.image as Media).url!,
            }}
            className="shrink-0 animate-in fade-in slide-in-from-bottom duration-700"
            style={{ animationDelay: `${i * 25}ms` }}
          />
        </li>
      ))}
    </ul>
  );
}